# Panel de repaso DAW (Vue + Vite)

Aplicacion web personal para practicar tests de modulos de DAW de forma independiente.
Permite hacer preguntas una a una, separar simulacros por bloques, marcar dudas y consultar historial filtrado por modulo.

## Objetivo del proyecto

- Practicar examenes tipo test por modulo sin mezclar preguntas entre modulos.
- Ver resultado inmediato con detalle por pregunta.
- Guardar historico local de intentos y analizar progreso por modulo.

## Caracteristicas principales

- Modulos separados con banco de preguntas independiente.
- Banco general y, opcionalmente, simulacros de examen por modulo.
- 3 opciones por pregunta.
- Orden aleatorio de opciones en cada intento.
- Correccion aunque no respondas todo el test.
- Nota calculada sobre preguntas respondidas.
- Revision por pregunta:
  - respuesta correcta (siempre visible)
  - respuesta incorrecta elegida (si aplica)
  - preguntas sin responder
- Test pregunta a pregunta con navegacion anterior/siguiente.
- Marcado de preguntas para repasar.
- Historial local en `localStorage` (clave: `quiz_scores_v1`).
- Filtro de historial por modulo.
- Resumen de historial filtrado:
  - intentos
  - media
  - mejor nota
- Borrado de historial:
  - global
  - por modulo filtrado
  - por intento individual
- Entrada principal fija en la app con descripcion y guia de uso.

## Modulos disponibles

- Despliegue de aplicaciones web
- Desarrollo web en entorno servidor
- Desarrollo web entorno cliente
- Digitalizacion aplicada a los sectores productivos
- Diseno de interfaces web
- Empleabilidad II
- Modulo optativo de Python
- Sostenibilidad aplicada a los sectores productivos
- Ingles profesional

## Estructura del proyecto

- `src/App.vue`: logica principal del test, correccion, historial y portada.
- `src/style.css`: estilos de interfaz.
- `src/modules.js`: registro de modulos.
- `src/mockExamQuestions.js`: preguntas de simulacro de examen por modulo.
- `src/questions.js`: preguntas modulo Despliegue.
- `src/questionsServidor.js`: preguntas modulo Entorno servidor.
- `src/questionsCliente.js`: preguntas modulo Entorno cliente.
- `src/questionsDigitalizacion.js`: preguntas modulo Digitalizacion.
- `src/questionsDisenoInterfaces.js`: preguntas modulo Diseno de interfaces.
- `src/questionsEmpleabilidad2.js`: preguntas modulo Empleabilidad II.
- `src/questionsPythonOptativo.js`: preguntas modulo Python optativo.
- `src/questionsSostenibilidad.js`: preguntas modulo Sostenibilidad.
- `src/questionsInglesProfesional.js`: preguntas modulo Ingles profesional.

## Requisitos

- Node.js 18 o superior
- npm

## Arranque en local (desarrollo)

1. Instala dependencias:

```bash
npm install
```

2. Inicia servidor de desarrollo:

```bash
npm run dev
```

3. Abre la URL mostrada en consola (normalmente `http://localhost:5173`).

## Build de produccion

```bash
npm run build
```

El resultado se genera en `dist/`.

## Previsualizar build local

```bash
npm run preview
```

## Uso con Docker

1. Construye la imagen:

```bash
docker build -t test-modulos-web .
```

2. Ejecuta el contenedor:

```bash
docker run --rm -p 8080:80 test-modulos-web
```

3. Abre en navegador:

- `http://localhost:8080`

## Uso con Docker Compose

```bash
docker compose up --build
```

La app quedara disponible en `http://localhost:8080`.

## Uso funcional de la app

1. Selecciona un modulo en la parte superior.
2. Si el modulo tiene simulacro de examen, elige entre **Banco general** o **Simulacro de examen**.
3. Responde preguntas (no necesitas completar todas).
4. Pulsa **Corregir test** para ver:
   - aciertos
   - respondidas
   - porcentaje sobre respondidas
   - detalle por pregunta
5. Consulta el historial local y filtra por modulo para comparar intentos.

## Anadir simulacros de examen

Las preguntas de simulacro se anaden en `src/mockExamQuestions.js`, dentro del array del modulo correspondiente.

Ejemplo:

```js
export const mockExamQuestionsByModule = {
  despliegue: [
    {
      id: "sim-despliegue-1",
      text: "Texto de la pregunta",
      options: ["Opcion A", "Opcion B", "Opcion C"],
      correct: "Opcion B"
    }
  ],
  servidor: [],
  cliente: []
};
```

Cuando un modulo tenga al menos una pregunta en su array, la app mostrara automaticamente el selector **Simulacro de examen** para ese modulo.
Si el simulacro tiene mas de 20 preguntas, se divide automaticamente en bloques:

- `Simulacro 1 (1-20)`
- `Simulacro 2 (21-40)`
- y asi sucesivamente.

## Persistencia de datos

- El historial se guarda solo en el navegador del usuario con la clave:
  - `quiz_scores_v1`
- Si borras datos del navegador o pulsas los botones de borrado de historial, los intentos se eliminan.

## Comandos utiles

- `npm run dev`: modo desarrollo
- `npm run dev:mobile`: modo desarrollo accesible desde movil en la misma red Wi-Fi
- `npm run build`: build de produccion
- `npm run preview`: previsualiza el build
- `docker build -t test-modulos-web .`: construye imagen Docker
- `docker run --rm -p 8080:80 test-modulos-web`: ejecuta contenedor
- `docker compose up --build`: levanta con Compose

## Usar desde el movil

1. Conecta el ordenador y el movil a la misma red Wi-Fi.
2. Arranca la app con:

```bash
npm run dev:mobile
```

3. En la salida de Vite, usa la URL de red local, normalmente parecida a:

```text
http://192.168.x.x:5173
```

4. Abre esa URL en el navegador del movil.

## Publicacion en GitHub (repo publico)

Repositorio objetivo: `test-modulos-web`

```bash
git init
git add .
git commit -m "chore: add docker setup and deployment docs"
git branch -M main
gh repo create test-modulos-web --public --source=. --remote=origin --push
```

Si no tienes sesion iniciada en GitHub CLI:

```bash
gh auth login
```

## Notas

- No hay backend ni base de datos remota.
- Proyecto orientado a practica local y uso educativo.
