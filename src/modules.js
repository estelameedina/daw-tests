import { questions } from "./questions";
import { questionsServidor } from "./questionsServidor";
import { questionsCliente } from "./questionsCliente";
import { questionsDigitalizacion } from "./questionsDigitalizacion";
import { questionsDisenoInterfaces } from "./questionsDisenoInterfaces";
import { questionsEmpleabilidad2 } from "./questionsEmpleabilidad2";
import { questionsPythonOptativo } from "./questionsPythonOptativo";
import { questionsSostenibilidad } from "./questionsSostenibilidad";
import { questionsInglesProfesional } from "./questionsInglesProfesional";
import { mockExamQuestionsByModule } from "./mockExamQuestions";

const MOCK_EXAM_CHUNK_SIZE = 20;

function buildMockExamSets(mockQuestions) {
  if (!mockQuestions.length) return [];
  if (mockQuestions.length <= MOCK_EXAM_CHUNK_SIZE) {
    return [
      {
        id: "simulacro",
        title: "Simulacro de examen",
        questions: mockQuestions
      }
    ];
  }

  const sets = [];
  for (let start = 0; start < mockQuestions.length; start += MOCK_EXAM_CHUNK_SIZE) {
    const chunk = mockQuestions.slice(start, start + MOCK_EXAM_CHUNK_SIZE);
    const end = start + chunk.length;
    sets.push({
      id: `simulacro-${sets.length + 1}`,
      title: `Simulacro ${sets.length + 1} (${start + 1}-${end})`,
      questions: chunk
    });
  }
  return sets;
}

function buildQuestionSets(moduleId, baseQuestions) {
  const mockQuestions = mockExamQuestionsByModule[moduleId] || [];
  return [
    {
      id: "general",
      title: "Banco general",
      questions: baseQuestions
    },
    ...buildMockExamSets(mockQuestions)
  ];
}

export const modules = [
  {
    id: "despliegue",
    title: "Despliegue de aplicaciones web",
    icon: "🚀",
    questions,
    questionSets: buildQuestionSets("despliegue", questions)
  },
  {
    id: "servidor",
    title: "Desarrollo web en entorno servidor",
    icon: "⚙️",
    questions: questionsServidor,
    questionSets: buildQuestionSets("servidor", questionsServidor)
  },
  {
    id: "cliente",
    title: "Desarrollo web entorno cliente",
    icon: "🎨",
    questions: questionsCliente,
    questionSets: buildQuestionSets("cliente", questionsCliente)
  },
  {
    id: "digitalizacion",
    title: "Digitalización aplicada a los sectores productivos",
    icon: "💡",
    questions: questionsDigitalizacion,
    questionSets: buildQuestionSets("digitalizacion", questionsDigitalizacion)
  },
  {
    id: "diseno-interfaces",
    title: "Diseño de interfaces web",
    icon: "🖌️",
    questions: questionsDisenoInterfaces,
    questionSets: buildQuestionSets("diseno-interfaces", questionsDisenoInterfaces)
  },
  {
    id: "empleabilidad-ii",
    title: "Empleabilidad II",
    icon: "💼",
    questions: questionsEmpleabilidad2,
    questionSets: buildQuestionSets("empleabilidad-ii", questionsEmpleabilidad2)
  },
  {
    id: "python-optativo",
    title: "Módulo optativo de Python",
    icon: "🐍",
    questions: questionsPythonOptativo,
    questionSets: buildQuestionSets("python-optativo", questionsPythonOptativo)
  },
  {
    id: "sostenibilidad",
    title: "Sostenibilidad aplicada a los sectores productivos",
    icon: "🌱",
    questions: questionsSostenibilidad,
    questionSets: buildQuestionSets("sostenibilidad", questionsSostenibilidad)
  },
  {
    id: "ingles-profesional",
    title: "Inglés profesional",
    icon: "🌐",
    questions: questionsInglesProfesional,
    questionSets: buildQuestionSets("ingles-profesional", questionsInglesProfesional)
  }
];
