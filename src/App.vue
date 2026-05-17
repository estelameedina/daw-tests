<script setup>
import { computed, ref } from "vue";
import { modules } from "./modules";

const STORAGE_KEY = "quiz_scores_v1";
const FLAG_KEY = "quiz_flagged_v1";

function readFlagged() {
  try {
    const raw = localStorage.getItem(FLAG_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildExam(sourceQuestions) {
  const questions = shuffle(sourceQuestions);
  return questions.map((q) => {
    const options = shuffle(q.options).map((option, idx) => ({
      key: String.fromCharCode(65 + idx),
      value: option
    }));
    const correct = options.find((option) => option.value === q.correct)?.key;
    return { ...q, options, correct };
  });
}

function readHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const activeModuleId = ref(modules[0].id);
const activeModule = computed(() => modules.find((module) => module.id === activeModuleId.value) || modules[0]);
const activeQuestionSetId = ref("general");
const activeQuestionSet = computed(() => {
  const sets = activeModule.value.questionSets || [
    {
      id: "general",
      title: "Banco general",
      questions: activeModule.value.questions
    }
  ];
  return sets.find((set) => set.id === activeQuestionSetId.value) || sets[0];
});

const currentView = ref("home");

function selectModule(moduleId) {
  activeModuleId.value = moduleId;
  activeQuestionSetId.value = modules.find((m) => m.id === moduleId).questionSets?.[0]?.id || "general";
  currentView.value = "test";
  resetQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  currentView.value = "home";
  repasoMode.value = false;
  fallosMode.value = false;
}

const exam = ref(buildExam(activeQuestionSet.value.questions));
const repasoMode = ref(false);
const fallosMode = ref(false);
const currentQuestionIndex = ref(0);
const answers = ref({});
const flaggedQuestions = ref(readFlagged());
const startTime = ref(Date.now());
const finished = ref(false);
const history = ref(readHistory());
const showHistory = ref(false);
const historyModuleFilter = ref("all");

const answeredCount = computed(() => Object.keys(answers.value).length);
const total = computed(() => exam.value.length);
const canSubmit = computed(() => answeredCount.value > 0);
const flaggedCount = computed(() => Object.values(flaggedQuestions.value).filter(Boolean).length);
const flaggedInModule = computed(() => {
  const allQs = (activeModule.value.questionSets || []).flatMap((s) => s.questions);
  const unique = [...new Map(allQs.map((q) => [q.id, q])).values()];
  return unique.filter((q) => flaggedQuestions.value[q.id]).length;
});
const isRepaso = computed(() => repasoMode.value || activeQuestionSetId.value === "__repaso__");
const isFallos = computed(() => fallosMode.value);
const failedIds = computed(() => {
  const moduleHistory = history.value.filter((h) => h.moduleId === activeModule.value.id);
  const ids = new Set();
  moduleHistory.forEach((h) => {
    (h.respuestas || []).forEach((r) => {
      if (r.respuestaUsuario && !r.esCorrecta) ids.add(r.preguntaId);
    });
  });
  return ids;
});
const failedCountInSet = computed(() => activeQuestionSet.value.questions.filter((q) => failedIds.value.has(q.id)).length);
const currentQuestion = computed(() => exam.value[currentQuestionIndex.value] || null);
const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);
const isFirstQuestion = computed(() => currentQuestionIndex.value === 0);
const isLastQuestion = computed(() => currentQuestionIndex.value === total.value - 1);
const historyModuleOptions = computed(() => {
  const opts = [{ id: "all", title: "Todos los modulos" }];
  const ids = new Set(history.value.map((item) => item.moduleId).filter(Boolean));
  modules.forEach((module) => {
    if (ids.has(module.id)) {
      opts.push({ id: module.id, title: module.title });
    }
  });
  if (ids.has("sin-modulo")) {
    opts.push({ id: "sin-modulo", title: "Sin modulo" });
  }
  return opts;
});

const filteredHistory = computed(() => {
  if (historyModuleFilter.value === "all") return history.value;
  return history.value.filter((item) => (item.moduleId || "sin-modulo") === historyModuleFilter.value);
});

const filteredHistoryStats = computed(() => {
  const items = filteredHistory.value;
  if (!items.length) return null;
  const attempts = items.length;
  const avg = Math.round(items.reduce((acc, item) => acc + (item.porcentaje || 0), 0) / attempts);
  const best = items.reduce((bestItem, item) => ((item.porcentaje || 0) > (bestItem.porcentaje || 0) ? item : bestItem), items[0]);
  return {
    attempts,
    avg,
    best
  };
});

const totalAttempts = computed(() => history.value.length);
const globalBestAttempt = computed(() => {
  if (!history.value.length) return null;
  return history.value.reduce((bestItem, item) => ((item.porcentaje || 0) > (bestItem.porcentaje || 0) ? item : bestItem), history.value[0]);
});

const result = computed(() => {
  const details = exam.value.map((q) => {
    const chosen = answers.value[q.id] || null;
    const isCorrect = chosen === q.correct;
    const optionMap = Object.fromEntries(q.options.map((o) => [o.key, o.value]));
    return {
      preguntaId: q.id,
      preguntaTexto: q.text,
      opciones: optionMap,
      respuestaUsuario: chosen,
      textoRespuestaUsuario: chosen ? optionMap[chosen] : null,
      respuestaCorrecta: q.correct,
      textoRespuestaCorrecta: q.correct ? optionMap[q.correct] : null,
      esCorrecta: isCorrect,
      marcadaParaRepasar: Boolean(flaggedQuestions.value[q.id])
    };
  });

  const respondidas = details.filter((d) => d.respuestaUsuario).length;
  const aciertos = details.filter((d) => d.respuestaUsuario && d.esCorrecta).length;
  const porcentaje = respondidas > 0 ? Math.round((aciertos / respondidas) * 100) : 0;
  return { aciertos, respondidas, porcentaje, details };
});

function saveAttempt() {
  const duration = Math.round((Date.now() - startTime.value) / 1000);
  const attempt = {
    id: `intento_${Date.now()}`,
    fechaISO: new Date().toISOString(),
    moduleId: activeModule.value.id,
    moduleTitle: activeModule.value.title,
    questionSetId: activeQuestionSet.value.id,
    questionSetTitle: activeQuestionSet.value.title,
    aciertos: result.value.aciertos,
    respondidas: result.value.respondidas,
    total: total.value,
    porcentaje: result.value.porcentaje,
    duracionSeg: duration,
    marcadasParaRepasar: result.value.details.filter((item) => item.marcadaParaRepasar).map((item) => item.preguntaId),
    respuestas: result.value.details
  };
  history.value = [attempt, ...history.value].slice(0, 50);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.value));
}

function submit() {
  if (!canSubmit.value) return;
  finished.value = true;
  saveAttempt();
}

function resetQuiz() {
  if (repasoMode.value) {
    const allQs = (activeModule.value.questionSets || []).flatMap((s) => s.questions);
    const unique = [...new Map(allQs.filter((q) => flaggedQuestions.value[q.id]).map((q) => [q.id, q])).values()];
    exam.value = buildExam(unique);
  } else if (fallosMode.value) {
    const unique = [...new Map(activeQuestionSet.value.questions.filter((q) => failedIds.value.has(q.id)).map((q) => [q.id, q])).values()];
    exam.value = buildExam(unique);
  } else {
    exam.value = buildExam(activeQuestionSet.value.questions);
  }
  currentQuestionIndex.value = 0;
  answers.value = {};
  startTime.value = Date.now();
  finished.value = false;
}

function startRepaso() {
  const allQs = (activeModule.value.questionSets || []).flatMap((s) => s.questions);
  const unique = [...new Map(allQs.filter((q) => flaggedQuestions.value[q.id]).map((q) => [q.id, q])).values()];
  if (!unique.length) return;
  repasoMode.value = true;
  fallosMode.value = false;
  currentView.value = "test";
  exam.value = buildExam(unique);
  currentQuestionIndex.value = 0;
  answers.value = {};
  startTime.value = Date.now();
  finished.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startFallos() {
  const unique = [...new Map(activeQuestionSet.value.questions.filter((q) => failedIds.value.has(q.id)).map((q) => [q.id, q])).values()];
  if (!unique.length) return;
  fallosMode.value = true;
  repasoMode.value = false;
  currentView.value = "test";
  exam.value = buildExam(failed);
  currentQuestionIndex.value = 0;
  answers.value = {};
  startTime.value = Date.now();
  finished.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value -= 1;
  }
}

function nextQuestion() {
  if (currentQuestionIndex.value < total.value - 1) {
    currentQuestionIndex.value += 1;
  }
}

function goToQuestion(index) {
  if (index >= 0 && index < total.value) {
    currentQuestionIndex.value = index;
  }
}

function toggleFlag(questionId) {
  flaggedQuestions.value = {
    ...flaggedQuestions.value,
    [questionId]: !flaggedQuestions.value[questionId]
  };
  localStorage.setItem(FLAG_KEY, JSON.stringify(flaggedQuestions.value));
}

function switchModule(moduleId) {
  if (moduleId === activeModuleId.value) return;
  activeModuleId.value = moduleId;
  activeQuestionSetId.value = activeModule.value.questionSets?.[0]?.id || "general";
  repasoMode.value = false;
  fallosMode.value = false;
  resetQuiz();
}

function switchQuestionSet(questionSetId) {
  if (questionSetId === activeQuestionSetId.value) return;
  activeQuestionSetId.value = questionSetId;
  repasoMode.value = false;
  fallosMode.value = false;
  resetQuiz();
}

function handleModuleSelect(event) {
  switchModule(event.target.value);
}

function handleQuestionSetSelect(event) {
  switchQuestionSet(event.target.value);
}

function clearHistory() {
  history.value = [];
  historyModuleFilter.value = "all";
  localStorage.removeItem(STORAGE_KEY);
}

function persistHistory(nextHistory) {
  history.value = nextHistory;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory));
}

function deleteAttempt(attemptId) {
  const nextHistory = history.value.filter((item) => item.id !== attemptId);
  persistHistory(nextHistory);
  const existsInFilter = nextHistory.some((item) => (item.moduleId || "sin-modulo") === historyModuleFilter.value);
  if (historyModuleFilter.value !== "all" && !existsInFilter) {
    historyModuleFilter.value = "all";
  }
}

function clearFilteredHistory() {
  if (historyModuleFilter.value === "all") return;
  const target = historyModuleFilter.value;
  const nextHistory = history.value.filter((item) => (item.moduleId || "sin-modulo") !== target);
  persistHistory(nextHistory);
  historyModuleFilter.value = "all";
}

function formatDate(dateISO) {
  return new Date(dateISO).toLocaleString("es-ES");
}

function scrollToTest() {
  document.getElementById("test-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleHistory() {
  showHistory.value = !showHistory.value;
}
</script>

<template>
  <main class="page">
    <template v-if="currentView === 'home'">
      <section class="home-hero">
        <p class="eyebrow">TIPO TEST</p>
        <h1>TEST DAW</h1>
        <p class="muted">Selecciona un módulo para empezar a practicar</p>
        <div class="module-grid">
          <button
            v-for="module in modules"
            :key="module.id"
            class="module-card"
            @click="selectModule(module.id)"
          >
            <span class="module-card-icon">{{ module.icon }}</span>
            <span class="module-card-title">{{ module.title }}</span>
            <span class="module-card-count">{{ module.questions.length }} preguntas</span>
          </button>
        </div>
      </section>
      <div class="home-actions">
        <button type="button" class="secondary" @click="toggleHistory">
          {{ showHistory ? 'Cerrar historial' : 'Ver historial' }}
        </button>
      </div>
    </template>

    <template v-else>
      <section class="study-hero">
        <button type="button" class="back-button" @click="goHome">&larr; Volver</button>
        <div v-if="activeModule.questionSets?.length > 1" class="question-set-switcher" aria-label="Tipo de test">
          <button
            v-for="set in activeModule.questionSets"
            :key="set.id"
            type="button"
            class="question-set-button"
            :class="set.id === activeQuestionSetId ? 'active' : ''"
            @click="switchQuestionSet(set.id)"
          >
            {{ set.title }}
          </button>
        </div>
        <div class="hero-info">
          <span class="hero-icon">{{ activeModule.icon }}</span>
          <strong>{{ activeModule.title }}</strong>
          <span class="muted">{{ isRepaso ? 'Repaso' : isFallos ? 'Solo fallos' : activeQuestionSet.title }}</span>
          <span class="hero-stats">{{ totalAttempts }} intentos &middot; {{ globalBestAttempt ? globalBestAttempt.porcentaje + '% mejor nota' : 'Sin notas' }}</span>
          <button v-if="flaggedInModule && !isRepaso && !isFallos" type="button" class="repaso-btn" @click="startRepaso">Repaso ({{ flaggedInModule }})</button>
          <button v-if="failedCountInSet && !isFallos && !isRepaso" type="button" class="fallos-btn" @click="startFallos">Solo fallos ({{ failedCountInSet }})</button>
          <button type="button" class="secondary hero-history-btn" @click="toggleHistory">
            {{ showHistory ? 'Cerrar historial' : 'Historial' }}
          </button>
        </div>
      </section>

      <section id="test-section" class="card">
      <div class="mobile-selectors">
        <label v-if="activeModule.questionSets?.length > 1">
          Bloque
          <select :value="activeQuestionSetId" @change="handleQuestionSetSelect">
            <option v-for="set in activeModule.questionSets" :key="set.id" :value="set.id">{{ set.title }}</option>
          </select>
        </label>
      </div>
      <p class="muted">Responde las {{ total }} preguntas. Las opciones aparecen en orden aleatorio.</p>

      <div v-if="!finished" class="quiz-status">
        <div class="quiz-status-top">
          <span class="answered-pill">Contestadas: {{ answeredCount }} / {{ total }}</span>
          <span class="answered-pill">Repasar: {{ flaggedCount }}</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" :style="{ width: (answeredCount / total * 100) + '%' }"></div>
        </div>
        <div class="question-jump" aria-label="Ir a pregunta">
          <button
            v-for="(q, index) in exam"
            :key="q.id"
            type="button"
            class="question-jump-button"
            :class="{
              active: index === currentQuestionIndex,
              answered: answers[q.id],
              flagged: flaggedQuestions[q.id]
            }"
            @click="goToQuestion(index)"
          >
            {{ index + 1 }}
          </button>
        </div>
      </div>

      <form v-if="!finished" @submit.prevent="submit">
        <transition name="fade-slide" mode="out-in">
          <article v-if="currentQuestion" :key="currentQuestion.id" class="question current-question">
            <p class="question-kicker">Pregunta {{ currentQuestionNumber }} de {{ total }}</p>
            <div class="question-head">
              <h2>{{ currentQuestion.text }}</h2>
              <button type="button" class="flag-button" :class="{ flagged: flaggedQuestions[currentQuestion.id] }" @click="toggleFlag(currentQuestion.id)" :title="flaggedQuestions[currentQuestion.id] ? 'Quitar de repaso' : 'Marcar para repasar'">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
              </button>
            </div>
            <label v-for="option in currentQuestion.options" :key="option.key" class="option">
              <input v-model="answers[currentQuestion.id]" type="radio" :name="currentQuestion.id" :value="option.key" />
              <span><strong>{{ option.key }}.</strong> {{ option.value }}</span>
            </label>
          </article>
        </transition>
        <div class="quiz-actions">
          <button type="button" class="secondary" :disabled="isFirstQuestion" @click="previousQuestion">Anterior</button>
          <button type="button" :disabled="isLastQuestion" @click="nextQuestion">Siguiente</button>
          <button type="submit" class="submit-button" :disabled="!canSubmit">Corregir test</button>
        </div>
      </form>

      <section v-else>
        <div class="result-card">
          <div class="result-score" :class="result.porcentaje >= 50 ? 'pass' : 'fail'">
            <span class="result-percent">{{ result.porcentaje }}%</span>
            <span class="result-label">Nota final</span>
          </div>
          <div class="result-stats">
            <div class="result-stat">
              <span class="stat-value">{{ result.aciertos }}</span>
              <span class="stat-label">Aciertos</span>
            </div>
            <div class="result-stat">
              <span class="stat-value">{{ result.respondidas }}</span>
              <span class="stat-label">Respondidas</span>
            </div>
            <div class="result-stat">
              <span class="stat-value">{{ total }}</span>
              <span class="stat-label">Total preguntas</span>
            </div>
          </div>
        </div>
        <button type="button" class="retry-button" @click="resetQuiz">Repetir test</button>

        <h3>Detalle por pregunta</h3>
        <article
          v-for="(item, index) in result.details"
          :key="item.preguntaId"
          class="review"
          :class="item.esCorrecta ? 'ok' : 'ko'"
        >
          <p><strong>{{ index + 1 }}.</strong> {{ item.preguntaTexto }}</p>
          <button type="button" class="flag-button" :class="{ flagged: flaggedQuestions[item.preguntaId] }" @click="toggleFlag(item.preguntaId)" :title="flaggedQuestions[item.preguntaId] ? 'Quitar de repaso' : 'Marcar para repasar'">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </button>
          <p class="correct-answer">
            Respuesta correcta:
            <strong>{{ item.respuestaCorrecta }} - {{ item.textoRespuestaCorrecta }}</strong>
          </p>
          <template v-if="!item.respuestaUsuario">
            <p class="muted"><strong>Sin respuesta.</strong></p>
          </template>
          <template v-else-if="!item.esCorrecta">
            <p class="wrong-answer">
              Tu respuesta (incorrecta):
              <strong>{{ item.respuestaUsuario || '-' }} - {{ item.textoRespuestaUsuario || 'Sin respuesta' }}</strong>
            </p>
          </template>
          <p v-else class="correct-state"><strong>Correcta.</strong></p>
          <p v-if="flaggedQuestions[item.preguntaId]" class="flagged-note">Marcada para repasar</p>
        </article>
      </section>
    </section>
    </template>

    <transition name="slide">
      <section v-if="showHistory" class="card history-card">
        <div class="history-head">
          <h2>Historial local</h2>
          <button type="button" class="close-history" @click="toggleHistory">&times;</button>
        <div class="history-actions">
          <button
            type="button"
            class="danger-alt"
            :disabled="historyModuleFilter === 'all' || !filteredHistory.length"
            @click="clearFilteredHistory"
          >
            Borrar historial de este modulo
          </button>
          <button type="button" class="danger" @click="clearHistory">Borrar historial</button>
        </div>
      </div>
      <p class="muted">Guardado en localStorage con la clave <code>quiz_scores_v1</code>.</p>
      <div class="history-filter-row" v-if="history.length">
        <label for="history-filter">Ver resultados de:</label>
        <select id="history-filter" v-model="historyModuleFilter">
          <option v-for="opt in historyModuleOptions" :key="opt.id" :value="opt.id">{{ opt.title }}</option>
        </select>
      </div>
      <div v-if="filteredHistoryStats" class="history-stats">
        <span><strong>Intentos:</strong> {{ filteredHistoryStats.attempts }}</span>
        <span><strong>Media:</strong> {{ filteredHistoryStats.avg }}%</span>
        <span><strong>Mejor:</strong> {{ filteredHistoryStats.best.porcentaje }}%</span>
      </div>
      <ul v-if="filteredHistory.length" class="history-list">
        <li v-for="item in filteredHistory" :key="item.id">
          <span>{{ formatDate(item.fechaISO) }}</span>
          <span>{{ item.moduleTitle || 'Sin modulo' }}</span>
          <span>{{ item.questionSetTitle || 'Banco general' }}</span>
          <span>{{ item.aciertos }}/{{ item.respondidas || item.total }} ({{ item.porcentaje }}%)</span>
          <span>{{ item.duracionSeg }}s</span>
          <button type="button" class="danger-mini" @click="deleteAttempt(item.id)">Eliminar</button>
        </li>
      </ul>
      <p v-else-if="history.length">No hay intentos para este modulo.</p>
      <p v-else>No hay intentos guardados todavía.</p>
      </section>
    </transition>
  </main>
</template>
