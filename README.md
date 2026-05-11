# TEST DAW

Aplicación web para ensayar exámenes tipo test del ciclo DAW. Cada módulo funciona por separado, las preguntas aparecen en orden distinto cada vez, y se guarda un historial local de resultados.

## Para qué sirve

- Elegir un módulo desde la pantalla principal y practicar solo sus preguntas.
- Ver la nota al instante en formato visual.
- Llevar un registro de los intentos anteriores y revisar el progreso.

## Cómo funciona

- La pantalla de inicio muestra una cuadrícula con los módulos disponibles. Cada uno tiene un icono y su nombre.
- Al pulsar uno, se accede al test de ese módulo.
- Dentro del test: se responde pregunta a pregunta, se puede saltar entre ellas, y al final se corrigen.
- Los resultados se guardan solos en el navegador.

## Lo que incluye

- Dos pasos para llegar al test: inicio con tarjetas -> test del módulo.
- Cada módulo tiene su propio banco de preguntas.
- Algunos módulos incluyen simulacros de examen (banco general + simulacro).
- Las preguntas y sus opciones se muestran en orden aleatorio.
- Barra de progreso que se llena a medida que respondes.
- Animación al cambiar de pregunta.
- Tarjeta de resultado con porcentaje y desglose.
- El test se corrige aunque falten preguntas por responder.
- La nota se calcula sobre lo respondido.
- Revisión pregunta por pregunta: ver cuáles acertaste y cuáles no.
- Opción de marcar preguntas para revisar después.
- Historial guardado en el navegador (`localStorage`), con filtro por módulo.
- Posibilidad de borrar el historial entero, por módulo, o un intento concreto.

## Módulos

| Icono | Módulo |
|-------|--------|
| 🚀 | Despliegue de aplicaciones web |
| ⚙️ | Desarrollo web en entorno servidor |
| 🎨 | Desarrollo web entorno cliente |
| 💡 | Digitalización aplicada a los sectores productivos |
| 🖌️ | Diseño de interfaces web |
| 💼 | Empleabilidad II |
| 🐍 | Módulo optativo de Python |
| 🌱 | Sostenibilidad aplicada a los sectores productivos |
| 🌐 | Inglés profesional |

## Archivos del proyecto

- `src/App.vue` — lógica general: inicio, test, corrección, historial.
- `src/style.css` — colores y estilos (azul marino + salmón).
- `src/modules.js` — registro de módulos, iconos y configuración.
- `src/mockExamQuestions*.js` — preguntas de simulacro separadas por módulo.
- `src/questions*.js` — bancos de preguntas generales de cada módulo.

## Requisitos

- Node.js 18 o superior
- npm

## Poner en marcha

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
```

Los archivos finales se quedan en `dist/`.

## Docker

```bash
docker build -t daw-tests .
docker run --rm -p 8080:80 daw-tests
```

O con Compose:

```bash
docker compose up --build
```

## Cómo se usa

1. En la pantalla principal, haz clic en la tarjeta del módulo que quieras practicar.
2. Si hay simulacro disponible, escoge entre **Banco general** o **Simulacro de examen**.
3. Contesta las preguntas de una en una. Los botones numerados permiten saltar entre ellas.
4. Pulsa **Corregir test** para obtener la nota y el detalle.
5. Con **Ver historial** accedes a los intentos anteriores.

## Añadir simulacros

Las preguntas de simulacro se definen en `src/mockExamQuestions.js` (o en un archivo aparte por módulo). Ejemplo:

```js
export const mockExamQuestionsByModule = {
  despliegue: [
    {
      id: "sim-despliegue-1",
      text: "Texto de la pregunta",
      options: ["Opción A", "Opción B", "Opción C"],
      correct: "Opción B"
    }
  ]
};
```

Si un simulacro supera las 20 preguntas, se parte solo en bloques:
- `Simulacro 1 (1-20)`
- `Simulacro 2 (21-40)`

## Dónde se guardan los datos

- El historial se almacena en `localStorage` con la clave `quiz_scores_v1`.
- Los datos se quedan en el navegador hasta que se borren a mano.

## Comandos

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Desarrollo |
| `npm run dev:mobile` | Acceso desde el móvil en la misma red |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar build |
| `docker build -t daw-tests .` | Construir imagen Docker |
| `docker run --rm -p 8080:80 daw-tests` | Ejecutar contenedor |

## Notas

- No hay backend ni base de datos externa.
- Proyecto pensado para uso local y educativo.
