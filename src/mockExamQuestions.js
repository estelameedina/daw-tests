import { mockExamQuestionsCliente } from "./mockExamQuestionsCliente";
import { mockExamQuestionsInglesProfesional } from "./mockExamQuestionsInglesProfesional";
import { mockExamQuestionsPythonOptativo } from "./mockExamQuestionsPythonOptativo";

// Anade aqui las preguntas de simulacro que os hayan dado los profes.
// Solo aparecera el boton "Simulacro de examen" en los modulos que tengan
// al menos una pregunta en su array.
//
// Formato de cada pregunta:
// {
//   id: "sim-despliegue-1",
//   text: "Texto de la pregunta",
//   options: ["Opcion A", "Opcion B", "Opcion C"],
//   correct: "Opcion B"
// }
//
// Importante:
// - El id debe ser unico dentro del modulo.
// - La respuesta correcta debe coincidir exactamente con una de las opciones.
// - Puedes poner mas de 3 opciones si el simulacro original las tiene.

export const mockExamQuestionsByModule = {
  despliegue: [
    {
      id: "sim-despliegue-1",
      text: "¿Cuál es la función principal de un servidor web?",
      options: ["Almacenar bases de datos", "Ejecutar aplicaciones móviles", "Servir contenido web a los usuarios", "Diseñar páginas web"],
      correct: "Servir contenido web a los usuarios"
    },
    {
      id: "sim-despliegue-2",
      text: "¿Qué protocolo se utiliza para transferir páginas web de forma segura?",
      options: ["FTP", "HTTP", "HTTPS", "SMTP"],
      correct: "HTTPS"
    },
    {
      id: "sim-despliegue-3",
      text: "¿Cuál de los siguientes servidores web es conocido por su eficiencia con alto tráfico?",
      options: ["Apache", "Nginx", "IIS", "Tomcat"],
      correct: "Nginx"
    },
    {
      id: "sim-despliegue-4",
      text: "¿Qué archivo se utiliza para configurar Apache?",
      options: ["web.config", "httpd.conf", "nginx.ini", "server.cfg"],
      correct: "httpd.conf"
    },
    {
      id: "sim-despliegue-5",
      text: "¿Qué directiva en Apache mejora la velocidad de conexiones recurrentes?",
      options: ["KeepAlive", "Listen", "Master", "ServerPath"],
      correct: "KeepAlive"
    },
    {
      id: "sim-despliegue-6",
      text: "¿Dónde se configura Nginx?",
      options: ["web.xml", "nginx.conf", "hosts", "proconfig"],
      correct: "nginx.conf"
    },
    {
      id: "sim-despliegue-7",
      text: "¿Qué herramienta permite mejorar la velocidad mediante caché?",
      options: ["Docker", "Git", "Varnish", "Jenkins"],
      correct: "Varnish"
    },
    {
      id: "sim-despliegue-8",
      text: "¿Qué es un host virtual?",
      options: ["Un servidor físico", "Un dominio en la nube", "Una técnica para alojar varios sitios en un servidor", "Un tipo de firewall"],
      correct: "Una técnica para alojar varios sitios en un servidor"
    },
    {
      id: "sim-despliegue-9",
      text: "¿Qué comando se usa para activar un sitio en Apache?",
      options: ["a2ensite", "enablehost", "startsite", "apache-on"],
      correct: "a2ensite"
    },
    {
      id: "sim-despliegue-10",
      text: "¿Cuál es la función de \"DocumentRoot\"?",
      options: ["Definir el dominio", "Establecer el directorio raíz del sitio web", "Activar SSL", "Gestionar usuarios"],
      correct: "Establecer el directorio raíz del sitio web"
    },
    {
      id: "sim-despliegue-11",
      text: "¿Qué significa SSL/TLS?",
      options: ["Protocolos de almacenamiento", "Protocolos de seguridad para comunicación", "Sistemas de caché", "Tipos de servidores"],
      correct: "Protocolos de seguridad para comunicación"
    },
    {
      id: "sim-despliegue-12",
      text: "¿Qué herramienta se usa para monitorizar servidores?",
      options: ["Wireshark", "Nagios", "Eclipse", "WordPress"],
      correct: "Nagios"
    },
    {
      id: "sim-despliegue-13",
      text: "¿Qué es la autenticación?",
      options: ["Asignar permisos", "Verificar la identidad de un usuario", "Filtrar datos", "Crear usuarios"],
      correct: "Verificar la identidad de un usuario"
    },
    {
      id: "sim-despliegue-14",
      text: "¿Cuál es el método de autenticación más común?",
      options: ["Biométrico", "Token", "Contraseña", "Certificado"],
      correct: "Contraseña"
    },
    {
      id: "sim-despliegue-15",
      text: "¿Qué añade la autenticación de dos factores (2FA)?",
      options: ["Mayor velocidad", "Menos seguridad", "Una capa extra de seguridad", "Más capacidad"],
      correct: "Una capa extra de seguridad"
    },
    {
      id: "sim-despliegue-16",
      text: "¿Qué es el control de acceso?",
      options: ["Verificar identidad", "Gestionar permisos de usuarios", "Crear servidores", "Comprimir datos"],
      correct: "Gestionar permisos de usuarios"
    },
    {
      id: "sim-despliegue-17",
      text: "¿Qué modelo asigna permisos según el rol del usuario?",
      options: ["DAC", "MAC", "RBAC", "ACL"],
      correct: "RBAC"
    },
    {
      id: "sim-despliegue-18",
      text: "¿Qué modelo permite al propietario decidir quién accede?",
      options: ["MAC", "RBAC", "DAC", "LDAP"],
      correct: "DAC"
    },
    {
      id: "sim-despliegue-19",
      text: "¿Qué mejora el rendimiento reduciendo el tamaño de los datos?",
      options: ["Firewall", "Compresión", "Backup", "Autenticación"],
      correct: "Compresión"
    },
    {
      id: "sim-despliegue-20",
      text: "¿Qué estrategia implica añadir más servidores para soportar tráfico?",
      options: ["Escalado vertical", "Escalado horizontal", "Balanceo simple", "Compresión"],
      correct: "Escalado horizontal"
    },
    {
      id: "sim-despliegue-21",
      text: "¿Qué es un balanceador de carga?",
      options: ["Un sistema de almacenamiento", "Un dispositivo que distribuye el tráfico entre varios servidores", "Un firewall avanzado", "Un gestor de bases de datos"],
      correct: "Un dispositivo que distribuye el tráfico entre varios servidores"
    },
    {
      id: "sim-despliegue-22",
      text: "¿Cuál es el objetivo principal del balanceo de carga?",
      options: ["Reducir el tamaño de los archivos", "Mejorar la seguridad del sistema", "Optimizar el uso de recursos y evitar sobrecargas", "Crear copias de seguridad"],
      correct: "Optimizar el uso de recursos y evitar sobrecargas"
    },
    {
      id: "sim-despliegue-23",
      text: "¿Qué algoritmo de balanceo envía las peticiones de forma secuencial?",
      options: ["Least Connections", "Round Robin", "Hashing", "Random"],
      correct: "Round Robin"
    },
    {
      id: "sim-despliegue-24",
      text: "¿Qué algoritmo dirige el tráfico al servidor con menos conexiones activas?",
      options: ["Round Robin", "FIFO", "Least Connections", "Balance dinámico"],
      correct: "Least Connections"
    },
    {
      id: "sim-despliegue-25",
      text: "¿Qué es la alta disponibilidad (HA)?",
      options: ["Uso de servidores antiguos", "Garantizar que el sistema esté siempre operativo", "Reducir costes de hardware", "Eliminar redundancia"],
      correct: "Garantizar que el sistema esté siempre operativo"
    },
    {
      id: "sim-despliegue-26",
      text: "¿Qué elemento permite detectar fallos en servidores dentro de un clúster?",
      options: ["Firewall", "Monitor de salud (health check)", "DNS", "Proxy"],
      correct: "Monitor de salud (health check)"
    },
    {
      id: "sim-despliegue-27",
      text: "¿Qué es un clúster de servidores?",
      options: ["Un único servidor potente", "Un conjunto de servidores que trabajan como uno solo", "Un tipo de red doméstica", "Un software de desarrollo"],
      correct: "Un conjunto de servidores que trabajan como uno solo"
    },
    {
      id: "sim-despliegue-28",
      text: "¿Qué técnica permite repartir tráfico geográficamente?",
      options: ["DNS Round Robin", "NAT", "VLAN", "RAID"],
      correct: "DNS Round Robin"
    },
    {
      id: "sim-despliegue-29",
      text: "¿Qué ocurre si falla un servidor en un sistema con alta disponibilidad?",
      options: ["El sistema se detiene", "Se pierden todos los datos", "Otro servidor asume la carga", "Se reinicia la red"],
      correct: "Otro servidor asume la carga"
    },
    {
      id: "sim-despliegue-30",
      text: "¿Qué componente suele actuar como intermediario entre cliente y servidor?",
      options: ["Switch", "Proxy", "Router", "Hub"],
      correct: "Proxy"
    }
  ],
  servidor: [],
  cliente: mockExamQuestionsCliente,
  digitalizacion: [
    {
      id: "sim-digitalizacion-1",
      text: "¿Qué ventaja aporta el uso de blockchain en entornos productivos?",
      options: [
        "Mejora la velocidad de producción manual",
        "Aumenta la trazabilidad y la seguridad de la información",
        "Reduce la necesidad de sensores"
      ],
      correct: "Aumenta la trazabilidad y la seguridad de la información"
    },
    {
      id: "sim-digitalizacion-2",
      text: "Una empresa industrial detecta que presenta ineficiencias en sus procesos productivos, una baja integración entre sistemas y una cultura organizacional poco orientada al cambio. Antes de invertir en nuevas tecnologías, decide analizar su situación. ¿Qué fase está desarrollando y por qué resulta crítica para el éxito del proceso?",
      options: [
        "Implementación tecnológica, porque permite aplicar soluciones inmediatas",
        "Evaluación continua, porque mide resultados desde el inicio",
        "Diagnóstico inicial, porque permite identificar necesidades reales y punto de partida"
      ],
      correct: "Diagnóstico inicial, porque permite identificar necesidades reales y punto de partida"
    },
    {
      id: "sim-digitalizacion-3",
      text: "Durante el diseño de un plan de transformación digital, la dirección insiste en que todas las decisiones deben estar alineadas con la misión y visión de la empresa. ¿Qué elemento estratégico están priorizando para garantizar coherencia en el proceso?",
      options: [
        "La definición de una estrategia digital alineada con los objetivos corporativos",
        "La adquisición de herramientas tecnológicas innovadoras",
        "La reducción de costes operativos a corto plazo"
      ],
      correct: "La definición de una estrategia digital alineada con los objetivos corporativos"
    },
    {
      id: "sim-digitalizacion-4",
      text: "En una empresa en proceso de digitalización, parte del personal muestra rechazo a los nuevos sistemas debido a la incertidumbre y falta de información. ¿Qué enfoque sería más adecuado para gestionar esta resistencia de forma eficaz?",
      options: [
        "Sustituir progresivamente al personal que no se adapta",
        "Establecer comunicación bidireccional y fomentar la participación activa",
        "Imponer el uso obligatorio de las nuevas herramientas sin formación previa"
      ],
      correct: "Establecer comunicación bidireccional y fomentar la participación activa"
    },
    {
      id: "sim-digitalizacion-5",
      text: "Tras implementar un sistema digital, una empresa observa que los resultados no cumplen los objetivos previstos y no dispone de datos claros para analizar la situación. ¿Qué elemento clave ha fallado en el proceso?",
      options: [
        "La definición de indicadores clave de rendimiento (KPIs)",
        "La inversión inicial en tecnología",
        "La automatización de procesos"
      ],
      correct: "La definición de indicadores clave de rendimiento (KPIs)"
    },
    {
      id: "sim-digitalizacion-6",
      text: "En el ámbito de la seguridad de la información, una empresa quiere garantizar que los datos almacenados no sean modificados de forma accidental o malintencionada. ¿Qué principio de la seguridad de los datos está aplicando?",
      options: [
        "Integridad, al asegurar la exactitud y consistencia de la información",
        "Disponibilidad, al permitir el acceso continuo a los datos",
        "Confidencialidad, al restringir el acceso a usuarios autorizados"
      ],
      correct: "Integridad, al asegurar la exactitud y consistencia de la información"
    },
    {
      id: "sim-digitalizacion-7",
      text: "Una organización sufre un ataque informático en el que los ciberdelincuentes bloquean el acceso a sus sistemas y exigen un pago económico para restaurar los datos. ¿Qué tipo de amenaza está enfrentando?",
      options: ["Ataque de denegación de servicio", "Ransomware", "Phishing"],
      correct: "Ransomware"
    },
    {
      id: "sim-digitalizacion-8",
      text: "En el diseño de un sistema de ciberseguridad, una empresa decide realizar auditorías periódicas, actualizar sistemas y formar a su personal en buenas prácticas digitales. ¿Qué tipo de estrategia está aplicando?",
      options: [
        "Reactiva, centrada en responder a incidentes",
        "Correctiva, basada en reparar errores tras ataques",
        "Proactiva, orientada a prevenir riesgos antes de que ocurran"
      ],
      correct: "Proactiva, orientada a prevenir riesgos antes de que ocurran"
    },
    {
      id: "sim-digitalizacion-9",
      text: "Una empresa tecnológica necesita procesar datos generados por sensores en tiempo real para optimizar su producción. ¿Qué característica del big data está utilizando principalmente?",
      options: [
        "Velocidad, al procesar datos de forma inmediata",
        "Variedad, al manejar diferentes tipos de datos",
        "Veracidad, al asegurar la calidad de la información"
      ],
      correct: "Velocidad, al procesar datos de forma inmediata"
    },
    {
      id: "sim-digitalizacion-10",
      text: "Una compañía analiza grandes volúmenes de datos para anticipar tendencias de consumo y mejorar su posicionamiento en el mercado. ¿Qué aspecto clave del big data está aprovechando?",
      options: [
        "El volumen de datos almacenados",
        "El valor generado a partir del análisis de datos",
        "La velocidad de transmisión de la información"
      ],
      correct: "El valor generado a partir del análisis de datos"
    },
    {
      id: "sim-digitalizacion-11",
      text: "En un entorno industrial digitalizado, una empresa adopta soluciones en la nube para gestionar su información. ¿Cuál es la principal ventaja de esta tecnología?",
      options: [
        "Sustituir completamente los sistemas físicos",
        "Permitir almacenamiento y procesamiento escalable y accesible",
        "Reducir la necesidad de análisis de datos"
      ],
      correct: "Permitir almacenamiento y procesamiento escalable y accesible"
    },
    {
      id: "sim-digitalizacion-12",
      text: "En una planta automatizada, se requiere procesar datos directamente en los dispositivos para reducir la latencia y actuar de forma inmediata. ¿Qué tecnología resulta más adecuada?",
      options: ["Fog Computing", "Computación en la nube", "Edge Computing"],
      correct: "Edge Computing"
    },
    {
      id: "sim-digitalizacion-13",
      text: "Una organización necesita integrar datos de múltiples dispositivos antes de enviarlos a sistemas centrales, optimizando la coordinación entre distintas áreas. ¿Qué arquitectura sería la más adecuada?",
      options: ["Edge Computing", "Fog Computing", "Mist Computing"],
      correct: "Fog Computing"
    },
    {
      id: "sim-digitalizacion-14",
      text: "Según la normativa de protección de datos, una empresa sufre una brecha de seguridad que afecta a información personal. ¿Cuál es su obligación legal principal?",
      options: [
        "Eliminar todos los sistemas afectados",
        "Notificar el incidente a autoridades y personas afectadas",
        "Suspender temporalmente su actividad"
      ],
      correct: "Notificar el incidente a autoridades y personas afectadas"
    },
    {
      id: "sim-digitalizacion-15",
      text: "En la evaluación de un proyecto de transformación digital, se busca medir la relación entre la inversión realizada y los beneficios obtenidos. ¿Qué indicador se utiliza para este fin?",
      options: ["KPI de adopción tecnológica", "ROI (retorno sobre la inversión)", "Índice de satisfacción del cliente"],
      correct: "ROI (retorno sobre la inversión)"
    },
    {
      id: "sim-digitalizacion-16",
      text: "Una empresa compara su rendimiento con el de otras organizaciones del sector para identificar oportunidades de mejora y establecer objetivos más realistas. ¿Qué método está aplicando?",
      options: ["Benchmarking", "Machine learning", "Análisis predictivo"],
      correct: "Benchmarking"
    },
    {
      id: "sim-digitalizacion-17",
      text: "Tras implementar nuevas herramientas digitales, una empresa quiere analizar hasta qué punto su personal las utiliza de forma efectiva en el día a día. ¿Qué indicador debería emplear?",
      options: ["Nivel de inversión tecnológica", "Adopción de nuevas tecnologías", "Reducción de costes operativos"],
      correct: "Adopción de nuevas tecnologías"
    },
    {
      id: "sim-digitalizacion-18",
      text: "Durante la fase final de un proyecto digital, la empresa revisa resultados, detecta desviaciones y realiza ajustes para mejorar su rendimiento. ¿Qué fase está desarrollando?",
      options: ["Implementación tecnológica", "Evaluación y mejora continua", "Diagnóstico inicial"],
      correct: "Evaluación y mejora continua"
    },
    {
      id: "sim-digitalizacion-19",
      text: "Una organización quiere mejorar la experiencia del cliente ofreciendo servicios personalizados basados en sus preferencias y comportamientos. ¿Qué enfoque tecnológico es más adecuado?",
      options: [
        "Reducción de procesos digitales",
        "Automatización sin análisis de datos",
        "Uso de análisis de datos y tecnologías predictivas"
      ],
      correct: "Uso de análisis de datos y tecnologías predictivas"
    },
    {
      id: "sim-digitalizacion-20",
      text: "Una empresa inicia su transformación digital sin contar con una infraestructura tecnológica adecuada, lo que genera problemas de integración y fallos en los sistemas. ¿Qué consecuencia refleja esta situación?",
      options: [
        "Incremento de la eficiencia operativa",
        "Mejora de la competitividad",
        "Dificultades en la integración de tecnologías"
      ],
      correct: "Dificultades en la integración de tecnologías"
    },
    {
      id: "sim-digitalizacion-21",
      text: "En el contexto de la transformación digital, una empresa invierte en formación continua para su personal en competencias digitales y adaptabilidad. ¿Cuál es el objetivo principal de esta medida?",
      options: [
        "Reducir el uso de tecnología",
        "Garantizar la adopción efectiva de nuevas herramientas",
        "Disminuir la inversión en innovación"
      ],
      correct: "Garantizar la adopción efectiva de nuevas herramientas"
    },
    {
      id: "sim-digitalizacion-22",
      text: "Dentro de las Tecnologías Habilitadoras Digitales, ¿qué función principal tiene el Internet de las Cosas en la industria?",
      options: [
        "Sustituir los sistemas de gestión empresarial",
        "Conectar dispositivos para recopilar y compartir datos",
        "Crear contenidos digitales de marketing"
      ],
      correct: "Conectar dispositivos para recopilar y compartir datos"
    },
    {
      id: "sim-digitalizacion-23",
      text: "¿Qué factor impulsa la adopción de la digitalización en los sectores productivos?",
      options: [
        "La reducción del número de clientes",
        "La necesidad de mantener la competitividad",
        "La eliminación de la automatización"
      ],
      correct: "La necesidad de mantener la competitividad"
    },
    {
      id: "sim-digitalizacion-24",
      text: "¿Qué característica distingue principalmente a los sistemas OT frente a los sistemas IT?",
      options: [
        "Están orientados a la gestión administrativa",
        "Controlan procesos físicos en tiempo real",
        "Funcionan únicamente en la nube"
      ],
      correct: "Controlan procesos físicos en tiempo real"
    }
  ],
  "diseno-interfaces": [
    {
      id: "sim-diseno-interfaces-1",
      text: "En el diseño de una interfaz web, ¿cuál de las siguientes decisiones contribuye mejor a reducir la carga cognitiva del usuario?",
      options: [
        "Utilizar muchos colores distintos para diferenciar cada sección.",
        "Mantener una jerarquía visual clara, coherencia en los componentes y una navegación previsible.",
        "Sustituir todos los textos por iconos para ahorrar espacio.",
        "Usar animaciones constantes para dirigir la atención del usuario."
      ],
      correct: "Mantener una jerarquía visual clara, coherencia en los componentes y una navegación previsible."
    },
    {
      id: "sim-diseno-interfaces-2",
      text: "Una empresa quiere rediseñar su sitio web antes de programarlo definitivamente. Necesita validar la estructura, el recorrido del usuario y la posición de los elementos principales. ¿Qué recurso resulta más adecuado en esta fase?",
      options: [
        "Un mapa de navegación y un prototipo interactivo.",
        "Una hoja de estilos CSS externa completamente terminada.",
        "Una auditoría legal de licencias multimedia.",
        "Un test de compatibilidad entre navegadores."
      ],
      correct: "Un mapa de navegación y un prototipo interactivo."
    },
    {
      id: "sim-diseno-interfaces-3",
      text: "En CSS, si un párrafo tiene un estilo aplicado mediante selector de etiqueta, otro mediante clase, otro mediante identificador y además un estilo inline, ¿cuál tendrá normalmente mayor precedencia?",
      options: [
        "El selector de etiqueta, porque afecta directamente al elemento HTML.",
        "El selector de clase, porque puede reutilizarse en varios elementos.",
        "El selector de identificador, siempre por encima de cualquier otro estilo.",
        "El estilo inline, porque se aplica directamente en el atributo style del elemento."
      ],
      correct: "El estilo inline, porque se aplica directamente en el atributo style del elemento."
    },
    {
      id: "sim-diseno-interfaces-4",
      text: "¿Cuál de las siguientes afirmaciones describe mejor una ventaja real de usar una hoja de estilos externa?",
      options: [
        "Permite mezclar estructura, contenido y presentación en un único archivo para simplificar el proyecto.",
        "Evita por completo los conflictos de especificidad entre selectores.",
        "Facilita la separación entre contenido y diseño, y permite mantener una apariencia consistente en varias páginas.",
        "Hace innecesario el uso de clases e identificadores en HTML."
      ],
      correct: "Facilita la separación entre contenido y diseño, y permite mantener una apariencia consistente en varias páginas."
    },
    {
      id: "sim-diseno-interfaces-5",
      text: "Un sitio web necesita mostrar un logotipo que debe verse perfectamente tanto en pantallas pequeñas como en pantallas de alta resolución, sin perder calidad al escalarlo. ¿Qué tipo de imagen sería más adecuada?",
      options: [
        "Una imagen de mapa de bits en JPEG de baja resolución.",
        "Una imagen vectorial, como SVG.",
        "Una captura de pantalla en PNG sin optimizar.",
        "Un GIF animado comprimido."
      ],
      correct: "Una imagen vectorial, como SVG."
    },
    {
      id: "sim-diseno-interfaces-6",
      text: "¿Cuál de las siguientes prácticas combina mejor optimización, accesibilidad y uso responsable del contenido multimedia en una página web?",
      options: [
        "Usar imágenes pesadas en máxima resolución para asegurar siempre la mejor calidad visual.",
        "Utilizar imágenes optimizadas, texto alternativo descriptivo y recursos con licencia adecuada.",
        "Descargar imágenes de cualquier web siempre que no tengan marca de agua visible.",
        "Insertar vídeos sin controles para evitar que el usuario modifique la reproducción."
      ],
      correct: "Utilizar imágenes optimizadas, texto alternativo descriptivo y recursos con licencia adecuada."
    },
    {
      id: "sim-diseno-interfaces-7",
      text: "En una página web, un formulario valida la contraseña mientras el usuario escribe y muestra un mensaje si es débil. Desde el punto de vista de la interactividad, ¿qué relación se está produciendo?",
      options: [
        "Un evento desencadena una acción programada que proporciona retroalimentación inmediata.",
        "Una hoja de estilos externa sustituye la lógica de JavaScript.",
        "Una imagen vectorial se convierte en un elemento interactivo avanzado.",
        "Un mapa de navegación modifica automáticamente la estructura del formulario."
      ],
      correct: "Un evento desencadena una acción programada que proporciona retroalimentación inmediata."
    },
    {
      id: "sim-diseno-interfaces-8",
      text: "En el contexto de accesibilidad web, ¿cuál de las siguientes opciones representa mejor una aplicación correcta de las WCAG?",
      options: [
        "Diseñar solo para usuarios con discapacidad visual, ya que son el grupo principal de la accesibilidad.",
        "Usar etiquetas semánticas, buen contraste, navegación por teclado, textos alternativos y formularios correctamente etiquetados.",
        "Añadir ARIA a todos los elementos HTML, aunque ya sean semánticamente correctos.",
        "Priorizar únicamente la estética visual si el sitio funciona correctamente en Chrome."
      ],
      correct: "Usar etiquetas semánticas, buen contraste, navegación por teclado, textos alternativos y formularios correctamente etiquetados."
    },
    {
      id: "sim-diseno-interfaces-9",
      text: "Una web cumple requisitos básicos imprescindibles, pero todavía no alcanza un nivel avanzado de accesibilidad. Según los niveles de adecuación de las WCAG, ¿qué interpretación es más correcta?",
      options: [
        "Puede estar en un nivel A si cumple los requisitos esenciales mínimos.",
        "Solo puede considerarse accesible si alcanza siempre el nivel AAA.",
        "El nivel AA es inferior al nivel A y se usa para páginas no públicas.",
        "Los niveles de adecuación no sirven para priorizar mejoras de accesibilidad."
      ],
      correct: "Puede estar en un nivel A si cumple los requisitos esenciales mínimos."
    },
    {
      id: "sim-diseno-interfaces-10",
      text: "Un usuario entra en una tienda online desde el móvil, con conexión lenta y quiere encontrar rápidamente un producto. ¿Qué combinación de decisiones mejora más la usabilidad en este caso?",
      options: [
        "Añadir vídeos automáticos, banners animados y menús complejos para enriquecer la experiencia.",
        "Reducir el número de clics, optimizar imágenes, aplicar diseño responsive y mostrar la información esencial de forma clara.",
        "Usar navegación redescubierta en cada sección para que el usuario explore más tiempo.",
        "Ocultar filtros y categorías para simplificar visualmente la interfaz."
      ],
      correct: "Reducir el número de clics, optimizar imágenes, aplicar diseño responsive y mostrar la información esencial de forma clara."
    },
    {
      id: "sim-diseno-interfaces-11",
      text: "En una interfaz web, ¿cuál sería el principal problema de utilizar iconos sin texto ni explicación en funciones importantes?",
      options: [
        "Que los iconos siempre aumentan el peso de la página.",
        "Que pueden dificultar la comprensión si el usuario no interpreta correctamente su significado.",
        "Que impiden aplicar estilos CSS externos.",
        "Que no pueden formar parte de una guía de estilo."
      ],
      correct: "Que pueden dificultar la comprensión si el usuario no interpreta correctamente su significado."
    },
    {
      id: "sim-diseno-interfaces-12",
      text: "En CSS, ¿qué selector sería más adecuado si se quiere aplicar el mismo estilo a varios elementos de una página sin que dicho estilo sea único?",
      options: [
        "Un selector de etiqueta obligatoriamente.",
        "Un selector de clase.",
        "Un selector de identificador.",
        "Un estilo inline en cada elemento."
      ],
      correct: "Un selector de clase."
    },
    {
      id: "sim-diseno-interfaces-13",
      text: "Una página tiene varias imágenes grandes que ralentizan mucho la carga, especialmente en móviles. ¿Cuál sería una medida adecuada de optimización?",
      options: [
        "Mantener siempre la imagen original para no perder calidad.",
        "Reducir peso y dimensiones, elegir un formato adecuado y comprimir sin pérdida excesiva de calidad.",
        "Eliminar el atributo alt para reducir código HTML.",
        "Convertir todas las imágenes a GIF animado."
      ],
      correct: "Reducir peso y dimensiones, elegir un formato adecuado y comprimir sin pérdida excesiva de calidad."
    },
    {
      id: "sim-diseno-interfaces-14",
      text: "En una prueba de usabilidad, se pide a varios usuarios que realicen tareas concretas mientras se observa si encuentran dificultades. ¿Qué técnica se está aplicando principalmente?",
      options: [
        "Test de usabilidad.",
        "Minificación de CSS.",
        "Conversión de formatos multimedia.",
        "Validación de licencias."
      ],
      correct: "Test de usabilidad."
    },
    {
      id: "sim-diseno-interfaces-15",
      text: "¿Cuál de las siguientes situaciones refleja mejor la diferencia entre navegación recordada y navegación redescubierta?",
      options: [
        "La navegación fácilmente recordada permite que el usuario vuelva a encontrar una opción por memoria y familiaridad; la redescubierta obliga a explorar de nuevo para localizarla.",
        "La navegación fácilmente recordada solo se usa en páginas sin imágenes; la redescubierta solo en tiendas online.",
        "La navegación redescubierta es siempre mejor porque hace que el usuario pase más tiempo en la web.",
        "Ambas significan lo mismo, pero se aplican en navegadores diferentes."
      ],
      correct: "La navegación fácilmente recordada permite que el usuario vuelva a encontrar una opción por memoria y familiaridad; la redescubierta obliga a explorar de nuevo para localizarla."
    },
    {
      id: "sim-diseno-interfaces-16",
      text: "¿Qué propiedad de CSS se utiliza habitualmente para distribuir elementos en una sola dimensión y alinear su contenido con facilidad?",
      options: ["grid-template-columns", "justify-items", "display: flex", "position: absolute"],
      correct: "display: flex"
    },
    {
      id: "sim-diseno-interfaces-17",
      text: "¿Cuál es uno de los objetivos principales del diseño de interfaces gráficas?",
      options: [
        "Crear páginas con la mayor cantidad posible de efectos visuales.",
        "Facilitar la interacción del usuario con la aplicación o sitio web.",
        "Sustituir completamente el contenido por imágenes.",
        "Evitar el uso de guías de estilo."
      ],
      correct: "Facilitar la interacción del usuario con la aplicación o sitio web."
    },
    {
      id: "sim-diseno-interfaces-18",
      text: "¿Qué elemento del diseño ayuda especialmente a establecer jerarquía visual y mejorar la legibilidad?",
      options: ["La tipografía.", "El servidor web.", "El formato de vídeo.", "El código JavaScript externo."],
      correct: "La tipografía."
    },
    {
      id: "sim-diseno-interfaces-19",
      text: "¿Cuál es una ventaja principal de utilizar CSS en una página web?",
      options: [
        "Permite eliminar completamente el HTML.",
        "Sirve únicamente para programar bases de datos.",
        "Permite separar el contenido de la presentación visual.",
        "Impide que la página sea responsive."
      ],
      correct: "Permite separar el contenido de la presentación visual."
    },
    {
      id: "sim-diseno-interfaces-20",
      text: "¿Qué selector CSS se utiliza para aplicar estilos a varios elementos que comparten una misma clase?",
      options: ["#nombre", ".nombre", "@nombre", "/nombre"],
      correct: ".nombre"
    },
    {
      id: "sim-diseno-interfaces-21",
      text: "¿Por qué es importante optimizar las imágenes para la web?",
      options: [
        "Porque aumenta siempre el tamaño del archivo.",
        "Porque mejora la velocidad de carga y la experiencia del usuario.",
        "Porque elimina la necesidad de usar texto alternativo.",
        "Porque convierte automáticamente una web en accesible."
      ],
      correct: "Porque mejora la velocidad de carga y la experiencia del usuario."
    },
    {
      id: "sim-diseno-interfaces-22",
      text: "¿Qué protege principalmente el derecho de autor en el contexto multimedia?",
      options: [
        "Únicamente los nombres de dominio.",
        "Las obras literarias, artísticas, científicas, musicales, imágenes, vídeos o software.",
        "Solo los colores utilizados en una página web.",
        "Exclusivamente los archivos CSS."
      ],
      correct: "Las obras literarias, artísticas, científicas, musicales, imágenes, vídeos o software."
    },
    {
      id: "sim-diseno-interfaces-23",
      text: "¿Qué función tienen los elementos interactivos en una página web?",
      options: [
        "Hacer que la web solo muestre contenido estático.",
        "Permitir que el usuario realice acciones y reciba respuestas de la interfaz.",
        "Sustituir todos los enlaces por imágenes.",
        "Evitar el uso de formularios y botones."
      ],
      correct: "Permitir que el usuario realice acciones y reciba respuestas de la interfaz."
    },
    {
      id: "sim-diseno-interfaces-24",
      text: "¿Qué es un evento en el contexto de la interactividad web?",
      options: [
        "Una imagen decorativa sin función.",
        "Una acción o situación que puede desencadenar una respuesta, como un clic o el envío de un formulario.",
        "Un tipo de licencia de uso de imágenes.",
        "Una regla de prioridad de CSS."
      ],
      correct: "Una acción o situación que puede desencadenar una respuesta, como un clic o el envío de un formulario."
    },
    {
      id: "sim-diseno-interfaces-25",
      text: "¿Cuál de los siguientes organismos está relacionado con la creación y promoción de estándares web abiertos y accesibles?",
      options: ["W3C.", "FTP.", "HTTP.", "CSS Validator únicamente."],
      correct: "W3C."
    },
    {
      id: "sim-diseno-interfaces-26",
      text: "¿Qué técnica se utiliza para analizar la usabilidad observando dónde hacen clic o se desplazan más los usuarios?",
      options: ["Mapa de navegación.", "Mapa de calor.", "Hoja de estilos externa.", "Formato vectorial."],
      correct: "Mapa de calor."
    }
  ],
  "python-optativo": mockExamQuestionsPythonOptativo,
  "empleabilidad-ii": [
    {
      id: "sim-empleabilidad-1",
      text: "En el contexto actual del emprendimiento, ¿qué papel desempeñan los valores éticos en el desarrollo de un proyecto empresarial?",
      options: [
        "Son elementos secundarios que solo influyen en la imagen externa de la empresa sin afectar a su funcionamiento real.",
        "Constituyen principios que guían la toma de decisiones y afectan directamente a la confianza, reputación y éxito del negocio.",
        "Solo se aplican en grandes empresas y no tienen relevancia en pequeñas iniciativas emprendedoras."
      ],
      correct: "Constituyen principios que guían la toma de decisiones y afectan directamente a la confianza, reputación y éxito del negocio."
    },
    {
      id: "sim-empleabilidad-2",
      text: "¿Cuál es uno de los beneficios principales de incorporar la sostenibilidad en un modelo de negocio?",
      options: [
        "Aumenta siempre los costes sin generar beneficios económicos.",
        "Reduce el impacto ambiental y puede generar ahorro y ventaja competitiva.",
        "Solo mejora la imagen de marca sin afectar a la rentabilidad."
      ],
      correct: "Reduce el impacto ambiental y puede generar ahorro y ventaja competitiva."
    },
    {
      id: "sim-empleabilidad-3",
      text: "Cuando una empresa adapta sus productos para personas con discapacidad o recursos limitados, está aplicando:",
      options: [
        "Exclusión de mercado.",
        "Estrategias de segmentación limitada.",
        "Principios de inclusión social y ampliación del mercado potencial."
      ],
      correct: "Principios de inclusión social y ampliación del mercado potencial."
    },
    {
      id: "sim-empleabilidad-4",
      text: "¿Qué función cumple la digitalización en un proyecto emprendedor moderno?",
      options: [
        "Sustituye completamente la necesidad de personal humano.",
        "Mejora la eficiencia, automatiza procesos y facilita la toma de decisiones.",
        "Solo sirve para mejorar la estética de los productos."
      ],
      correct: "Mejora la eficiencia, automatiza procesos y facilita la toma de decisiones."
    },
    {
      id: "sim-empleabilidad-5",
      text: "¿Cuál de los siguientes Objetivos de Desarrollo Sostenible se relaciona con la creación de empleo digno?",
      options: ["ODS 5", "ODS 8", "ODS 13"],
      correct: "ODS 8"
    },
    {
      id: "sim-empleabilidad-6",
      text: "El proyecto emprendedor se define principalmente como:",
      options: [
        "Un documento informal sin utilidad práctica.",
        "Una herramienta estratégica que transforma una idea en un plan viable.",
        "Un documento exclusivo para cumplir requisitos legales."
      ],
      correct: "Una herramienta estratégica que transforma una idea en un plan viable."
    },
    {
      id: "sim-empleabilidad-7",
      text: "¿Cuál es la principal función del resumen ejecutivo dentro de un proyecto emprendedor?",
      options: [
        "Detallar todos los aspectos técnicos sin síntesis.",
        "Ofrecer una visión clara, breve y atractiva del proyecto.",
        "Sustituir completamente al plan de empresa."
      ],
      correct: "Ofrecer una visión clara, breve y atractiva del proyecto."
    },
    {
      id: "sim-empleabilidad-8",
      text: "En un resumen ejecutivo, la descripción del problema debe:",
      options: [
        "Ser general y poco concreta.",
        "Basarse en datos cuantitativos que justifiquen la oportunidad.",
        "Evitar cualquier referencia al mercado."
      ],
      correct: "Basarse en datos cuantitativos que justifiquen la oportunidad."
    },
    {
      id: "sim-empleabilidad-9",
      text: "¿Qué característica debe tener un equipo emprendedor eficaz?",
      options: [
        "Estar formado por personas con el mismo perfil profesional.",
        "Combinar competencias técnicas y habilidades empresariales.",
        "No necesitar experiencia previa."
      ],
      correct: "Combinar competencias técnicas y habilidades empresariales."
    },
    {
      id: "sim-empleabilidad-10",
      text: "La cultura organizacional de una empresa:",
      options: [
        "Solo influye en la decoración del espacio de trabajo.",
        "Define valores y comportamientos dentro de la organización.",
        "No afecta a los resultados empresariales."
      ],
      correct: "Define valores y comportamientos dentro de la organización."
    },
    {
      id: "sim-empleabilidad-11",
      text: "La gestión operativa de un proyecto se centra en:",
      options: ["Únicamente la estrategia comercial.", "La organización de recursos y procesos diarios.", "Exclusivamente en la financiación."],
      correct: "La organización de recursos y procesos diarios."
    },
    {
      id: "sim-empleabilidad-12",
      text: "En el contexto de la planificación financiera de un proyecto emprendedor, los activos pueden clasificarse según su naturaleza. ¿Cuál de las siguientes opciones describe correctamente un activo intangible dentro de una empresa?",
      options: [
        "Bien físico como maquinaria, mobiliario o equipos informáticos utilizados en la actividad.",
        "Elemento no físico con valor económico, como software, licencias o marca comercial.",
        "Gasto corriente relacionado con el funcionamiento diario del negocio."
      ],
      correct: "Elemento no físico con valor económico, como software, licencias o marca comercial."
    },
    {
      id: "sim-empleabilidad-13",
      text: "Dentro de las fuentes de financiación empresarial, la financiación propia es fundamental en las primeras etapas del negocio. ¿Cuál de las siguientes afirmaciones describe correctamente sus características?",
      options: [
        "Procede exclusivamente de entidades externas como bancos o inversores.",
        "Incluye aportaciones de los socios, ahorros personales y beneficios reinvertidos.",
        "Siempre implica el pago de intereses y la devolución del capital."
      ],
      correct: "Incluye aportaciones de los socios, ahorros personales y beneficios reinvertidos."
    },
    {
      id: "sim-empleabilidad-14",
      text: "La financiación ajena permite a las empresas acceder a recursos externos, pero también implica ciertas obligaciones. ¿Cuál es una de sus principales desventajas?",
      options: [
        "No permite acceder a grandes cantidades de dinero para crecer.",
        "Puede implicar el pago de intereses o la pérdida parcial de control del negocio.",
        "No requiere cumplir ningún tipo de condiciones por parte del emprendedor."
      ],
      correct: "Puede implicar el pago de intereses o la pérdida parcial de control del negocio."
    },
    {
      id: "sim-empleabilidad-15",
      text: "Los business angels constituyen una figura relevante en el ecosistema emprendedor, especialmente en fases iniciales. ¿Cuál de las siguientes opciones describe mejor su papel?",
      options: [
        "Son organismos públicos que conceden ayudas a fondo perdido sin contraprestación.",
        "Son inversores privados que aportan capital, experiencia y contactos a cambio de participación.",
        "Son entidades financieras que conceden préstamos con intereses elevados."
      ],
      correct: "Son inversores privados que aportan capital, experiencia y contactos a cambio de participación."
    },
    {
      id: "sim-empleabilidad-16",
      text: "Las subvenciones públicas representan una fuente de financiación interesante para proyectos emprendedores. ¿Qué característica principal las diferencia de otras formas de financiación?",
      options: [
        "Deben devolverse en todos los casos con intereses.",
        "No requieren devolución si se cumplen las condiciones establecidas.",
        "Solo están disponibles para empresas multinacionales."
      ],
      correct: "No requieren devolución si se cumplen las condiciones establecidas."
    },
    {
      id: "sim-empleabilidad-17",
      text: "El crowdfunding se ha consolidado como una alternativa de financiación en el entorno digital. ¿Cuál es su principal característica?",
      options: [
        "Permite obtener financiación exclusivamente a través de entidades bancarias.",
        "Consiste en la aportación de pequeñas cantidades de dinero por parte de muchas personas a través de plataformas online.",
        "Sustituye completamente la necesidad de realizar campañas de marketing."
      ],
      correct: "Consiste en la aportación de pequeñas cantidades de dinero por parte de muchas personas a través de plataformas online."
    },
    {
      id: "sim-empleabilidad-18",
      text: "En la gestión de recursos humanos dentro de una empresa, los costes laborales van más allá del salario base. ¿Qué elementos deben incluirse en estos costes?",
      options: [
        "Únicamente el salario directo del trabajador.",
        "Salario, cotizaciones sociales y otros gastos asociados como formación o beneficios sociales.",
        "Solo los incentivos variables vinculados a la productividad."
      ],
      correct: "Salario, cotizaciones sociales y otros gastos asociados como formación o beneficios sociales."
    },
    {
      id: "sim-empleabilidad-19",
      text: "En el ámbito de la prevención de riesgos laborales, especialmente en sectores tecnológicos, los riesgos ergonómicos tienen un papel relevante. ¿A qué se refieren principalmente?",
      options: [
        "A riesgos financieros derivados de inversiones inadecuadas.",
        "A problemas físicos derivados de posturas incorrectas o uso prolongado de equipos.",
        "A accidentes graves relacionados con maquinaria industrial pesada."
      ],
      correct: "A problemas físicos derivados de posturas incorrectas o uso prolongado de equipos."
    },
    {
      id: "sim-empleabilidad-20",
      text: "Antes de iniciar una actividad empresarial, es necesario elegir una forma jurídica adecuada. ¿Qué aspectos se ven directamente afectados por esta decisión?",
      options: [
        "Únicamente el nombre comercial de la empresa.",
        "La responsabilidad frente a deudas, la fiscalidad y la estructura legal del negocio.",
        "Exclusivamente el tipo de producto o servicio ofrecido."
      ],
      correct: "La responsabilidad frente a deudas, la fiscalidad y la estructura legal del negocio."
    },
    {
      id: "sim-empleabilidad-21",
      text: "El trabajador autónomo es una de las formas jurídicas más habituales en el inicio de un negocio. ¿Cuál de las siguientes características lo define correctamente?",
      options: [
        "Tiene personalidad jurídica independiente de la persona física.",
        "Responde con su patrimonio personal ante las deudas del negocio.",
        "No puede contratar trabajadores en ningún caso."
      ],
      correct: "Responde con su patrimonio personal ante las deudas del negocio."
    },
    {
      id: "sim-empleabilidad-22",
      text: "A pesar de sus limitaciones, la figura del autónomo presenta ciertas ventajas para emprender. ¿Cuál de las siguientes destaca especialmente?",
      options: [
        "Requiere un elevado capital mínimo para iniciar la actividad.",
        "Permite iniciar la actividad con trámites sencillos y rápidos.",
        "Limita completamente la responsabilidad económica del emprendedor."
      ],
      correct: "Permite iniciar la actividad con trámites sencillos y rápidos."
    },
    {
      id: "sim-empleabilidad-23",
      text: "El emprendedor de responsabilidad limitada (ERL) introduce ciertas mejoras respecto al autónomo tradicional. ¿Cuál es su principal ventaja?",
      options: [
        "Elimina completamente cualquier tipo de deuda empresarial.",
        "Permite proteger la vivienda habitual frente a deudas bajo determinadas condiciones.",
        "Solo puede ser utilizado por grandes empresas."
      ],
      correct: "Permite proteger la vivienda habitual frente a deudas bajo determinadas condiciones."
    },
    {
      id: "sim-empleabilidad-24",
      text: "Las sociedades mercantiles permiten separar el patrimonio personal del empresarial. ¿Qué característica define a una sociedad limitada (SL)?",
      options: [
        "Los socios responden con todo su patrimonio personal.",
        "La responsabilidad se limita al capital aportado por los socios.",
        "No tiene personalidad jurídica propia."
      ],
      correct: "La responsabilidad se limita al capital aportado por los socios."
    },
    {
      id: "sim-empleabilidad-25",
      text: "Durante el proceso de constitución de una empresa, es necesario verificar que el nombre elegido no esté ya registrado. ¿Qué trámite permite realizar esta comprobación?",
      options: [
        "Alta en la Seguridad Social.",
        "Solicitud de certificación negativa en el Registro Mercantil.",
        "Inscripción en el Impuesto sobre Actividades Económicas."
      ],
      correct: "Solicitud de certificación negativa en el Registro Mercantil."
    },
    {
      id: "sim-empleabilidad-26",
      text: "El alta en Hacienda es uno de los primeros pasos administrativos al iniciar una actividad económica. ¿Qué implica este trámite?",
      options: [
        "Obtener licencias municipales de actividad.",
        "Declarar el inicio de actividad y obtener el NIF correspondiente.",
        "Inscribir automáticamente a los trabajadores en la Seguridad Social."
      ],
      correct: "Declarar el inicio de actividad y obtener el NIF correspondiente."
    },
    {
      id: "sim-empleabilidad-27",
      text: "Con el objetivo de simplificar los trámites de creación de empresas, se ha desarrollado el Documento Único Electrónico (DUE). ¿Cuál es su función principal?",
      options: [
        "Sustituir completamente al Registro Mercantil.",
        "Permitir realizar varios trámites administrativos de forma integrada y telemática.",
        "Eliminar la necesidad de cumplir con obligaciones fiscales."
      ],
      correct: "Permitir realizar varios trámites administrativos de forma integrada y telemática."
    },
    {
      id: "sim-empleabilidad-28",
      text: "Los Puntos de Atención al Emprendedor (PAE) desempeñan un papel relevante en el apoyo a nuevos proyectos. ¿Qué servicios ofrecen principalmente?",
      options: [
        "Financiación directa para empresas de nueva creación.",
        "Asesoramiento y ayuda en la tramitación para crear empresas.",
        "Gestión exclusiva de impuestos empresariales."
      ],
      correct: "Asesoramiento y ayuda en la tramitación para crear empresas."
    },
    {
      id: "sim-empleabilidad-29",
      text: "El análisis de costes es una herramienta clave en la viabilidad de un proyecto. ¿Cuál es su principal objetivo?",
      options: [
        "Calcular únicamente los ingresos futuros del negocio.",
        "Identificar, clasificar y controlar los diferentes gastos de la empresa.",
        "Eliminar completamente los costes operativos."
      ],
      correct: "Identificar, clasificar y controlar los diferentes gastos de la empresa."
    },
    {
      id: "sim-empleabilidad-30",
      text: "Dentro de la estructura de costes de una empresa, los costes fijos presentan características específicas. ¿Cuál de las siguientes los define correctamente?",
      options: [
        "Varían en función del nivel de ventas.",
        "Permanecen constantes independientemente del volumen de actividad.",
        "Solo existen en empresas grandes."
      ],
      correct: "Permanecen constantes independientemente del volumen de actividad."
    },
    {
      id: "sim-empleabilidad-31",
      text: "Los costes variables son fundamentales para entender la rentabilidad de un negocio. ¿Qué característica los distingue?",
      options: [
        "No dependen del volumen de producción o ventas.",
        "Se modifican en función de la actividad económica de la empresa.",
        "Son siempre indirectos y difíciles de calcular."
      ],
      correct: "Se modifican en función de la actividad económica de la empresa."
    },
    {
      id: "sim-empleabilidad-32",
      text: "El cálculo del precio de venta es una decisión estratégica dentro del proyecto emprendedor. ¿Qué factores deben tenerse en cuenta?",
      options: [
        "Solo los costes de producción sin considerar el mercado.",
        "Costes, margen de beneficio, competencia y percepción del cliente.",
        "Únicamente el precio de los competidores."
      ],
      correct: "Costes, margen de beneficio, competencia y percepción del cliente."
    },
    {
      id: "sim-empleabilidad-33",
      text: "La estimación de ingresos es esencial para evaluar la viabilidad del negocio. ¿En qué se basa principalmente este cálculo?",
      options: [
        "En el número de empleados de la empresa.",
        "En el precio de venta y el volumen estimado de ventas.",
        "Exclusivamente en los costes fijos."
      ],
      correct: "En el precio de venta y el volumen estimado de ventas."
    },
    {
      id: "sim-empleabilidad-34",
      text: "El punto muerto o umbral de rentabilidad es un indicador clave en la planificación financiera. ¿Qué información proporciona?",
      options: [
        "El momento en que la empresa deja de operar.",
        "El nivel de ventas a partir del cual se empiezan a obtener beneficios.",
        "El total de inversión inicial necesaria."
      ],
      correct: "El nivel de ventas a partir del cual se empiezan a obtener beneficios."
    },
    {
      id: "sim-empleabilidad-35",
      text: "El balance de situación es uno de los documentos contables básicos. ¿Qué información ofrece?",
      options: [
        "Únicamente los ingresos anuales de la empresa.",
        "La situación patrimonial en un momento determinado, incluyendo activos y pasivos.",
        "Solo las deudas a corto plazo."
      ],
      correct: "La situación patrimonial en un momento determinado, incluyendo activos y pasivos."
    },
    {
      id: "sim-empleabilidad-36",
      text: "La cuenta de pérdidas y ganancias permite analizar el resultado económico de la empresa. ¿Qué elementos incluye?",
      options: [
        "Solo los activos de la empresa.",
        "Ingresos, gastos y el resultado final del ejercicio.",
        "Exclusivamente las inversiones realizadas."
      ],
      correct: "Ingresos, gastos y el resultado final del ejercicio."
    },
    {
      id: "sim-empleabilidad-37",
      text: "El fondo de maniobra es un indicador financiero relevante para analizar la liquidez. ¿Cómo se calcula?",
      options: [
        "Restando ingresos a gastos.",
        "Restando el pasivo corriente al activo corriente.",
        "Sumando beneficios e inversiones."
      ],
      correct: "Restando el pasivo corriente al activo corriente."
    },
    {
      id: "sim-empleabilidad-38",
      text: "Los ratios financieros permiten interpretar la información contable de la empresa. ¿Cuál es su finalidad principal?",
      options: [
        "Sustituir los documentos contables.",
        "Analizar la situación económica y financiera para facilitar la toma de decisiones.",
        "Calcular exclusivamente los impuestos."
      ],
      correct: "Analizar la situación económica y financiera para facilitar la toma de decisiones."
    },
    {
      id: "sim-empleabilidad-39",
      text: "El Impuesto sobre el Valor Añadido (IVA) es uno de los principales tributos en la actividad empresarial. ¿Cuál es su característica básica?",
      options: [
        "Solo afecta a los beneficios empresariales.",
        "Grava el consumo de bienes y servicios en cada fase de la actividad económica.",
        "Sustituye al Impuesto de Sociedades."
      ],
      correct: "Grava el consumo de bienes y servicios en cada fase de la actividad económica."
    },
    {
      id: "sim-empleabilidad-40",
      text: "El Impuesto de Sociedades es un tributo relevante para determinadas formas jurídicas. ¿A quién afecta principalmente?",
      options: [
        "A trabajadores por cuenta ajena.",
        "A sociedades mercantiles como SL o SA.",
        "A todos los autónomos sin excepción."
      ],
      correct: "A sociedades mercantiles como SL o SA."
    },
    {
      id: "sim-empleabilidad-41",
      text: "El calendario fiscal es una herramienta imprescindible para la gestión empresarial. ¿Cuál es su utilidad principal?",
      options: [
        "Evitar el pago de impuestos.",
        "Informar sobre los plazos de presentación de obligaciones fiscales.",
        "Reducir automáticamente la carga tributaria."
      ],
      correct: "Informar sobre los plazos de presentación de obligaciones fiscales."
    },
    {
      id: "sim-empleabilidad-42",
      text: "La capitalización del desempleo es una medida de apoyo al emprendimiento. ¿En qué consiste?",
      options: [
        "En solicitar un préstamo bancario para iniciar la actividad.",
        "En recibir la prestación por desempleo en un solo pago para emprender.",
        "En reducir las cotizaciones sociales de forma permanente."
      ],
      correct: "En recibir la prestación por desempleo en un solo pago para emprender."
    },
    {
      id: "sim-empleabilidad-43",
      text: "La tarifa plana para autónomos es una medida habitual de apoyo al inicio de actividad. ¿Qué efecto tiene?",
      options: [
        "Aumenta la cuota de la Seguridad Social en los primeros meses.",
        "Reduce la cotización durante el inicio de la actividad.",
        "Elimina completamente la obligación de cotizar."
      ],
      correct: "Reduce la cotización durante el inicio de la actividad."
    },
    {
      id: "sim-empleabilidad-44",
      text: "El estudio de mercado es una fase fundamental en la creación de un negocio. ¿Cuál es su objetivo principal?",
      options: [
        "Eliminar a la competencia existente.",
        "Analizar el entorno, los clientes y la viabilidad del producto o servicio.",
        "Reducir los costes de producción."
      ],
      correct: "Analizar el entorno, los clientes y la viabilidad del producto o servicio."
    },
    {
      id: "sim-empleabilidad-45",
      text: "Dentro del estudio de mercado, las encuestas y entrevistas son herramientas habituales. ¿Qué tipo de información permiten obtener?",
      options: [
        "Información indirecta basada en suposiciones.",
        "Información directa sobre necesidades, opiniones y comportamientos de los clientes.",
        "Datos exclusivamente financieros."
      ],
      correct: "Información directa sobre necesidades, opiniones y comportamientos de los clientes."
    },
    {
      id: "sim-empleabilidad-46",
      text: "La segmentación del mercado es clave para dirigir correctamente la estrategia comercial. ¿En qué consiste?",
      options: [
        "Ofrecer el mismo producto a todos los consumidores sin distinción.",
        "Dividir el mercado en grupos homogéneos con características similares.",
        "Eliminar los segmentos menos rentables."
      ],
      correct: "Dividir el mercado en grupos homogéneos con características similares."
    },
    {
      id: "sim-empleabilidad-47",
      text: "El concepto de buyer persona es ampliamente utilizado en marketing. ¿Qué representa?",
      options: [
        "Un cliente real obligatorio para la empresa.",
        "Un perfil ficticio basado en datos que representa al cliente ideal.",
        "Un proveedor estratégico del negocio."
      ],
      correct: "Un perfil ficticio basado en datos que representa al cliente ideal."
    },
    {
      id: "sim-empleabilidad-48",
      text: "El mapa de empatía es una herramienta útil para comprender al cliente. ¿Cuál es su finalidad principal?",
      options: [
        "Calcular la rentabilidad del negocio.",
        "Analizar pensamientos, emociones y comportamientos del cliente.",
        "Determinar el precio de venta."
      ],
      correct: "Analizar pensamientos, emociones y comportamientos del cliente."
    },
    {
      id: "sim-empleabilidad-49",
      text: "El análisis DAFO es una herramienta estratégica en la planificación empresarial. ¿Qué permite identificar?",
      options: [
        "Únicamente los costes del negocio.",
        "Debilidades, amenazas, fortalezas y oportunidades del proyecto.",
        "Los impuestos que debe pagar la empresa."
      ],
      correct: "Debilidades, amenazas, fortalezas y oportunidades del proyecto."
    },
    {
      id: "sim-empleabilidad-50",
      text: "El marketing desempeña un papel fundamental en el éxito de un proyecto emprendedor. ¿Cuál es su función principal?",
      options: [
        "Limitarse a la publicidad del producto.",
        "Validar la idea de negocio, promocionar y facilitar la comercialización.",
        "Sustituir el estudio de mercado y la planificación estratégica."
      ],
      correct: "Validar la idea de negocio, promocionar y facilitar la comercialización."
    }
  ],
  sostenibilidad: [
    {
      id: "sim-sostenibilidad-1",
      text: "Laura quiere invertir en empresas que son reconocidas por sus prácticas de sostenibilidad a nivel global. ¿Qué índice debería consultar para encontrar estas empresas?",
      options: ["FTSE4Good Index Series.", "MSCI ESG Indexes.", "Dow Jones Sustainability Index (DJSI)"],
      correct: "Dow Jones Sustainability Index (DJSI)"
    },
    {
      id: "sim-sostenibilidad-2",
      text: "Una compañía busca reducir su impacto ambiental en el consumo energético de sus sistemas digitales. ¿Qué medida sería más adecuada para lograrlo de forma eficiente?",
      options: [
        "Incrementar la capacidad de los servidores sin control",
        "Implementar sistemas de eficiencia energética y optimización de cargas",
        "Mantener todos los equipos encendidos de forma permanente"
      ],
      correct: "Implementar sistemas de eficiencia energética y optimización de cargas"
    },
    {
      id: "sim-sostenibilidad-3",
      text: "Una organización decide evaluar su impacto ambiental en toda la cadena de valor, incluyendo proveedores y distribución. ¿Qué enfoque está aplicando?",
      options: ["Economía circular", "Análisis de ciclo de vida", "Marketing sostenible"],
      correct: "Análisis de ciclo de vida"
    },
    {
      id: "sim-sostenibilidad-4",
      text: "Una empresa quiere reducir la generación de residuos tecnológicos y mejorar el uso de sus recursos. ¿Qué práctica sería más coherente con este objetivo?",
      options: [
        "Renovar equipos constantemente sin reutilización",
        "Fomentar la reutilización, reciclaje y alargamiento de la vida útil de dispositivos",
        "Incrementar el consumo de dispositivos electrónicos"
      ],
      correct: "Fomentar la reutilización, reciclaje y alargamiento de la vida útil de dispositivos"
    },
    {
      id: "sim-sostenibilidad-5",
      text: "En el ámbito de la sostenibilidad digital, ¿qué objetivo persigue la optimización del software?",
      options: ["Aumentar el consumo energético", "Reducir la eficiencia de los sistemas", "Disminuir el uso de recursos computacionales"],
      correct: "Disminuir el uso de recursos computacionales"
    },
    {
      id: "sim-sostenibilidad-6",
      text: "Una empresa desea asegurar que sus proveedores cumplen criterios éticos y medioambientales. ¿Qué acción debería implementar?",
      options: [
        "Seleccionar proveedores únicamente por precio",
        "Establecer políticas de compras responsables",
        "Eliminar controles en la cadena de suministro"
      ],
      correct: "Establecer políticas de compras responsables"
    },
    {
      id: "sim-sostenibilidad-7",
      text: "Una organización incorpora indicadores para medir su impacto ambiental y social de forma periódica. ¿Qué está desarrollando?",
      options: [
        "Un sistema de evaluación basado en KPIs de sostenibilidad",
        "Una estrategia de marketing digital",
        "Un sistema de automatización industrial"
      ],
      correct: "Un sistema de evaluación basado en KPIs de sostenibilidad"
    },
    {
      id: "sim-sostenibilidad-8",
      text: "En el contexto de la economía circular, ¿qué objetivo principal persiguen las empresas?",
      options: [
        "Incrementar el consumo de recursos",
        "Reducir la reutilización de materiales",
        "Minimizar residuos y maximizar el aprovechamiento de recursos"
      ],
      correct: "Minimizar residuos y maximizar el aprovechamiento de recursos"
    },
    {
      id: "sim-sostenibilidad-9",
      text: "Una empresa tecnológica quiere reducir las emisiones asociadas a sus centros de datos. ¿Qué solución sería más adecuada?",
      options: [
        "Incrementar el uso de servidores tradicionales",
        "Utilizar energías renovables y mejorar la eficiencia energética",
        "Aumentar la redundancia sin control"
      ],
      correct: "Utilizar energías renovables y mejorar la eficiencia energética"
    },
    {
      id: "sim-sostenibilidad-10",
      text: "¿Qué papel desempeña la gobernanza dentro del enfoque ESG?",
      options: [
        "Gestionar únicamente aspectos financieros",
        "Garantizar transparencia, ética y cumplimiento normativo",
        "Reducir la inversión en sostenibilidad"
      ],
      correct: "Garantizar transparencia, ética y cumplimiento normativo"
    },
    {
      id: "sim-sostenibilidad-11",
      text: "Una empresa decide implementar políticas de igualdad, diversidad e inclusión en su plantilla. ¿Qué dimensión está reforzando?",
      options: ["Ambiental", "Social", "Tecnológica"],
      correct: "Social"
    },
    {
      id: "sim-sostenibilidad-12",
      text: "En el marco de la sostenibilidad, ¿por qué es importante la trazabilidad en los procesos productivos?",
      options: [
        "Porque reduce la transparencia",
        "Porque permite conocer el origen y el impacto de los productos",
        "Porque elimina la necesidad de control"
      ],
      correct: "Porque permite conocer el origen y el impacto de los productos"
    },
    {
      id: "sim-sostenibilidad-13",
      text: "Una organización quiere reducir su huella de carbono asociada al transporte. ¿Qué medida sería más eficaz?",
      options: [
        "Incrementar el uso de transporte convencional",
        "Optimizar rutas y utilizar medios de transporte sostenibles",
        "Aumentar la frecuencia de envíos innecesarios"
      ],
      correct: "Optimizar rutas y utilizar medios de transporte sostenibles"
    },
    {
      id: "sim-sostenibilidad-14",
      text: "¿Qué ventaja aporta la digitalización en la gestión de la sostenibilidad empresarial?",
      options: [
        "Aumentar el consumo de recursos",
        "Facilitar el análisis de datos y la toma de decisiones sostenibles",
        "Reducir la necesidad de información"
      ],
      correct: "Facilitar el análisis de datos y la toma de decisiones sostenibles"
    },
    {
      id: "sim-sostenibilidad-15",
      text: "Una empresa adopta políticas para garantizar la transparencia en su información financiera y no financiera. ¿Qué objetivo persigue principalmente?",
      options: ["Reducir el control externo", "Generar confianza entre los grupos de interés", "Evitar la rendición de cuentas"],
      correct: "Generar confianza entre los grupos de interés"
    },
    {
      id: "sim-sostenibilidad-16",
      text: "¿Qué relación existe entre innovación y sostenibilidad en el entorno empresarial actual?",
      options: ["Son conceptos independientes", "La sostenibilidad limita la innovación", "La innovación impulsa soluciones más sostenibles"],
      correct: "La innovación impulsa soluciones más sostenibles"
    },
    {
      id: "sim-sostenibilidad-17",
      text: "Una organización implementa sistemas de monitorización para medir su consumo energético en tiempo real. ¿Qué ventaja obtiene?",
      options: [
        "Mayor desconocimiento del consumo",
        "Capacidad de optimizar recursos y reducir impactos",
        "Incremento del gasto energético"
      ],
      correct: "Capacidad de optimizar recursos y reducir impactos"
    },
    {
      id: "sim-sostenibilidad-18",
      text: "En el contexto de la sostenibilidad digital, ¿qué riesgo implica una mala gestión de los datos?",
      options: [
        "Reducción del consumo energético",
        "Incremento innecesario del uso de recursos y almacenamiento",
        "Mejora de la eficiencia operativa"
      ],
      correct: "Incremento innecesario del uso de recursos y almacenamiento"
    },
    {
      id: "sim-sostenibilidad-19",
      text: "Una empresa decide integrar la sostenibilidad en su cultura organizacional. ¿Qué elemento es clave para lograrlo?",
      options: ["Formación y sensibilización del personal", "Eliminación de procesos digitales", "Reducción de la comunicación interna"],
      correct: "Formación y sensibilización del personal"
    },
    {
      id: "sim-sostenibilidad-20",
      text: "¿Qué característica define a una empresa sostenible en el contexto actual?",
      options: [
        "Priorizar únicamente beneficios económicos",
        "Ignorar el impacto social",
        "Equilibrar resultados económicos, sociales y ambientales"
      ],
      correct: "Equilibrar resultados económicos, sociales y ambientales"
    },
    {
      id: "sim-sostenibilidad-21",
      text: "Como responsable de sistemas en una empresa tecnológica, buscas reducir el impacto ambiental de la infraestructura IT sin perder capacidad de procesamiento. ¿Qué medida sería la más sostenible?",
      options: [
        "Aumentar el número de servidores físicos en local.",
        "Migrar parte de la infraestructura a servicios cloud con uso eficiente de recursos.",
        "Mantener los servidores funcionando a máxima capacidad de forma permanente."
      ],
      correct: "Migrar parte de la infraestructura a servicios cloud con uso eficiente de recursos."
    },
    {
      id: "sim-sostenibilidad-22",
      text: "Trabajas en una empresa de desarrollo de software que quiere disminuir su huella de carbono asociada al uso de datos. ¿Qué práctica contribuye directamente a una mayor sostenibilidad digital?",
      options: [
        "Incrementar el almacenamiento de datos sin criterios de uso",
        "Optimizar el consumo de recursos y eliminar datos innecesarios.",
        "Duplicar todos los sistemas de respaldo sin control."
      ],
      correct: "Optimizar el consumo de recursos y eliminar datos innecesarios."
    },
    {
      id: "sim-sostenibilidad-23",
      text: "Eres responsable de la digitalización de procesos en una organización y deseas que la transformación digital sea sostenible a largo plazo. ¿Qué acción es clave para lograrlo?",
      options: [
        "Implantar tecnología sin formación del personal.",
        "Diseñar soluciones digitales eficientes y formar a las personas usuarias.",
        "Sustituir todos los procesos manuales de forma inmediata."
      ],
      correct: "Diseñar soluciones digitales eficientes y formar a las personas usuarias."
    },
    {
      id: "sim-sostenibilidad-24",
      text: "Una empresa decide publicar de forma transparente su impacto ambiental, social y de gobernanza. ¿Qué beneficio principal obtiene al hacerlo?",
      options: [
        "Mejorar la confianza de clientes, inversores y otros grupos de interés.",
        "Aumentar sus costes operativos sin retorno.",
        "Reducir la necesidad de cumplir la normativa vigente."
      ],
      correct: "Mejorar la confianza de clientes, inversores y otros grupos de interés."
    },
    {
      id: "sim-sostenibilidad-25",
      text: "En un mercado cada vez más competitivo, ¿por qué la sostenibilidad se considera una ventaja estratégica para las empresas?",
      options: [
        "Porque reduce la necesidad de innovación.",
        "Porque elimina la necesidad de cumplir normativas.",
        "Porque mejora la reputación, fideliza clientes y atrae inversión responsable."
      ],
      correct: "Porque mejora la reputación, fideliza clientes y atrae inversión responsable."
    },
    {
      id: "sim-sostenibilidad-26",
      text: "¿Por qué los informes de sostenibilidad basados en estándares como GRI o SASB son importantes para las empresas?",
      options: [
        "Porque sustituyen a los estados financieros.",
        "Porque permiten medir, comunicar y mejorar el desempeño ASG.",
        "Porque solo interesan a organismos públicos."
      ],
      correct: "Porque permiten medir, comunicar y mejorar el desempeño ASG."
    },
    {
      id: "sim-sostenibilidad-27",
      text: "En un mercado cada vez más competitivo, ¿por qué la sostenibilidad se considera una ventaja estratégica para las empresas?",
      options: [
        "Porque reduce la necesidad de innovación.",
        "Porque elimina la necesidad de cumplir normativas",
        "Porque mejora la reputación, fideliza clientes y atrae inversión responsable."
      ],
      correct: "Porque mejora la reputación, fideliza clientes y atrae inversión responsable."
    },
    {
      id: "sim-sostenibilidad-28",
      text: "Una empresa industrial quiere integrar criterios ambientales, sociales y de gobernanza en su estrategia global, asegurando que todas sus decisiones estén alineadas con estos principios. ¿Qué enfoque está adoptando?",
      options: ["Digitalización operativa", "Integración ESG en la gestión empresarial", "Reducción de costes estructurales"],
      correct: "Integración ESG en la gestión empresarial"
    }
  ],
  "ingles-profesional": mockExamQuestionsInglesProfesional
};
