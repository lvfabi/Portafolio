// Un objeto por proyecto. Ejemplo: featured: false lo muestra entre los proyectos académicos.
// cover y gallery permiten indicar rutas alternativas. artwork es la portada conceptual de respaldo.
// links.figma recibe el enlace directo. links.figmaEmbed recibe el atributo src del iframe de Figma.
import type { Project } from "../types/content";

// EDITA AQUÍ
export const projects: readonly Project[] = [
  {
    slug: "imprenta-fuentes",
    artwork: {
      src: "images/illustrations/imprenta-fuentes.webp",
      alt: "Ilustración conceptual de hojas de impresión junto a una lista de comprobación.",
    },
    title: "Sistema de Gestión Imprenta Fuentes · QA Lead",
    period: "2026",
    featured: true,
    summary: "Estrategia de QA y pruebas funcionales de dos implementaciones.",
    role: "Lideré el equipo de QA, decidí qué probar primero y comuniqué los defectos y riesgos que podían bloquear una entrega.",
    description: [
      "Organicé la estrategia de aseguramiento de calidad durante cinco sprints. Coordiné el seguimiento de defectos y la revisión de las correcciones.",
      "El equipo evaluó dos implementaciones del sistema según sus criterios de aceptación.",
    ],
    stack: ["Scrum", "Jira", "Excel", "GitHub", "Pruebas funcionales"],
    tools: [
      {
        name: "Scrum",
        application:
          "Al inicio de cada sprint definí el alcance de las pruebas, prioricé las funcionalidades entregadas y distribuí el trabajo. Al cierre consolidé los hallazgos y escalé los defectos que impedían continuar.",
      },
      {
        name: "Jira",
        application:
          "El equipo siguió las tareas de desarrollo y revisó qué funcionalidades estaban disponibles para probar en cada sprint.",
      },
      {
        name: "Microsoft Excel",
        application:
          "Registramos el identificador de cada defecto, módulo, responsable, evidencia y recomendación. Usamos la planilla para seguir los hallazgos y comprobar su estado después de una corrección.",
      },
      {
        name: "GitHub",
        application:
          "Versionamos estrategias, casos de prueba, matrices e informes de QA para poder asociar la documentación con cada entrega.",
      },
      {
        name: "Pruebas funcionales de caja negra",
        application:
          "Comprobamos el comportamiento de las dos implementaciones según sus criterios de aceptación, desde la perspectiva de quien usa el sistema.",
      },
    ],
    evaluatedStack: ["Flutter", "Firebase Authentication", "Cloud Firestore"],
    // TODO: agregar portada y evidencia de QA autorizada.
  },
  {
    slug: "emocionalidad",
    artwork: {
      src: "images/illustrations/emocionalidad.webp",
      alt: "Ilustración conceptual de un diario de bienestar y un teléfono con símbolos de estado de ánimo.",
    },
    title: "Sistema de gestión de emocionalidad · Municipalidad de Providencia",
    period: "Ago. – nov. 2025",
    featured: true,
    summary: "Sistema de seguimiento del bienestar de apoderados.",
    role: "Diseñé el prototipo móvil, implementé flujos en Flutter y contribuí a las pruebas y al manual de usuario.",
    description: [
      "Trabajé con un equipo de Informática y Psicología en un sistema para el seguimiento del bienestar de apoderados.",
      "Mi trabajo abarcó la navegación y los módulos móviles de bitácora y analítica, además de interfaces para el frontend web.",
    ],
    stack: [
      "Figma",
      "Flutter",
      "Desarrollo móvil y web",
      "Pruebas funcionales",
    ],
    tools: [
      {
        name: "Figma",
        application:
          "Diseñé el prototipo móvil y definí la navegación entre las pantallas. El diseño sirvió como referencia para implementar el menú y las vistas.",
      },
      {
        name: "Flutter",
        application:
          "Implementé la navegación móvil, la bitácora y el módulo de analítica asociado. También desarrollé interfaces del frontend web.",
      },
      {
        name: "Pruebas funcionales",
        application:
          "Comprobé los flujos de bitácora y analítica, el inicio de sesión y la recuperación de contraseña.",
      },
      {
        name: "Documentación de usuario",
        application:
          "Redacté el manual de bitácora, analítica y notificaciones como parte de la entrega del equipo interdisciplinario.",
      },
    ],
    links: {
      figma:
        "https://www.figma.com/proto/fJfCcENh8aZRvPBOaPgOVK/App_encuestas?node-id=27-4662&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=225%3A1838",
      figmaEmbed:
        "https://embed.figma.com/proto/fJfCcENh8aZRvPBOaPgOVK/App_encuestas?node-id=27-4662&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=225%3A1838&embed-host=share",
    },
    // TODO: agregar la captura de la bitácora en Figma y, si se autoriza, su equivalente en Flutter sin datos reales.
  },
  {
    slug: "control-termico",
    artwork: {
      src: "images/illustrations/control-termico.webp",
      alt: "Ilustración conceptual de una maqueta con ventilador, termómetro y flujo de aire.",
    },
    title: "Control térmico de un centro de datos a escala",
    period: "2026",
    featured: true,
    summary:
      "Maqueta con control de ventilación y monitoreo web de temperatura.",
    role: "Modelé la carcasa, diseñé la simulación del circuito y desarrollé la interfaz web de monitoreo.",
    description: [
      "Construimos a escala un sistema de control térmico con Arduino. La maqueta combinó una carcasa modular, electrónica de control y una interfaz web.",
      "El proyecto recibió el reconocimiento de Especialidad III.",
    ],
    stack: [
      "Arduino",
      "C++",
      "Tinkercad",
      "Flask",
      "OpenSCAD",
      "Autodesk Fusion",
    ],
    tools: [
      {
        name: "OpenSCAD y Autodesk Fusion",
        application:
          "Modelé una carcasa ajustada a las dimensiones del ventilador, la pantalla y la electrónica, con un ducto lateral, una ventana frontal y un cajón inferior.",
      },
      {
        name: "Tinkercad y C++",
        application:
          "Diseñé la simulación del circuito y su lógica de control para representar la respuesta a cambios de temperatura.",
      },
      {
        name: "Arduino y electrónica",
        application:
          "El equipo integró un sensor LM35DZ, un semáforo LED, una pantalla LCD y un ventilador controlado por MOSFET. La lógica usaba histéresis para evitar encendidos y apagados repetidos cerca del umbral.",
      },
      {
        name: "Python y Flask",
        application:
          "Desarrollé una interfaz web que mostraba la temperatura en tiempo real, el estado del ventilador, un gráfico de mediciones y el historial de alertas y registros sobre 32 °C.",
      },
    ],
    gallery: [
      {
        src: "images/projects/control-termico/gallery-1.webp",
        caption: "Maqueta y monitoreo web",
        alt: "Maqueta ensamblada junto a un portátil que muestra el monitor web de temperatura.",
        width: 780,
        height: 1040,
      },
      {
        src: "images/projects/control-termico/gallery-2.webp",
        caption: "Póster técnico",
        alt: "Póster del proyecto con la metodología, el circuito y los resultados de la simulación.",
        width: 914,
        height: 1280,
      },
      {
        src: "images/projects/control-termico/gallery-3.webp",
        caption: "Presentación de la maqueta",
        alt: "Presentación del proyecto con la maqueta, el póster y el monitor web en el campus.",
        width: 780,
        height: 1040,
      },
    ],
  },
  {
    slug: "cleany",
    artwork: {
      src: "images/illustrations/cleany.webp",
      alt: "Ilustración conceptual de un mapa con ubicaciones marcadas y un teléfono.",
    },
    title: "Cleany · Aplicación móvil de asistencia por GPS",
    period: "2025",
    featured: true,
    summary:
      "Registro de asistencia del personal de aseo y seguimiento de residencias asignadas.",
    role: "Diseñé e implementé las pantallas del flujo de asistencia, probé los endpoints y documenté casos de prueba en dupla.",
    description: [
      "Definimos en dupla los requerimientos de una aplicación para consultar las residencias asignadas y registrar la asistencia del personal de aseo.",
      "Comprobamos el flujo en un dispositivo físico. Documentamos seis pruebas aprobadas con su resultado y evidencia.",
    ],
    stack: ["Flutter", "Dart", "Figma", "Postman", "Google Maps", "GPS"],
    tools: [
      {
        name: "Figma",
        application:
          "Diseñé las pantallas para consultar residencias y registrar la asistencia según los requerimientos acordados en dupla.",
      },
      {
        name: "Flutter y Dart",
        application:
          "Implementé las interfaces móviles del flujo de asistencia para consultar la asignación del día y visualizar el estado de cada residencia.",
      },
      {
        name: "Google Maps y GPS",
        application:
          "La aplicación usó google_maps_flutter para mostrar las residencias y la geolocalización para comprobar la cercanía de la persona antes de registrar su ingreso.",
      },
      {
        name: "Postman",
        application:
          "Probé los endpoints que conectaban la aplicación con el backend desarrollado en Django. El equipo usó Postman Web para la carga inicial de datos.",
      },
      {
        name: "Excel y dispositivo físico",
        application:
          "Registramos la acción, el resultado esperado, el observado y la evidencia. Pasaron seis pruebas, entre ellas impedir una salida sin ingreso previo y actualizar el mapa al finalizar una residencia.",
      },
      {
        name: "Firebase Authentication",
        application:
          "Integré autenticación durante el desarrollo. Para el MVP, el informe de cierre registra que se simplificó el acceso.",
      },
    ],
    links: {
      figma:
        "https://www.figma.com/proto/ruloGZQSNj4c6UlWRHGPXI/App_limpieza?node-id=51-69&starting-point-node-id=51%3A39",
      figmaEmbed:
        "https://embed.figma.com/proto/ruloGZQSNj4c6UlWRHGPXI/App_limpieza?node-id=51-69&starting-point-node-id=51%3A39&embed-host=share",
    },
    // TODO: agregar portada y capturas de la aplicación.
  },
  {
    slug: "cifar-10",
    artwork: {
      src: "images/illustrations/cifar-10.webp",
      alt: "Ilustración conceptual de una cuadrícula de imágenes que se conecta a nodos de clasificación.",
    },
    title: "Clasificación de imágenes con CNN · CIFAR-10",
    // TODO: confirmar período y revisar si el notebook menciona Keras.
    featured: true,
    summary:
      "Comparación de cuatro configuraciones de una red neuronal convolucional.",
    role: "Entrené y comparé modelos en un equipo de cuatro personas. Analicé las curvas de aprendizaje para identificar sobreajuste.",
    description: [
      "Comparamos cuatro configuraciones sobre la misma tarea de clasificación multiclase: asignar cada imagen a una de diez categorías.",
      "Con dropout de 0,5 se alcanzó 74,33 % de exactitud de validación tras ocho épocas, frente a 70,37 % del modelo base. La diferencia fue de 3,96 puntos porcentuales.",
    ],
    stack: [
      "TensorFlow",
      "Redes neuronales convolucionales",
      "CIFAR-10",
      "Dropout",
    ],
    tools: [
      {
        name: "TensorFlow",
        application:
          "Entrené y comparé cuatro configuraciones de una red neuronal convolucional junto con mi equipo.",
      },
      {
        name: "CIFAR-10",
        application:
          "Usamos el mismo conjunto de imágenes para evaluar todas las configuraciones sobre una tarea de diez categorías.",
      },
      {
        name: "Curvas de entrenamiento y validación",
        application:
          "Comparamos el comportamiento del modelo a lo largo de las épocas e identificamos sobreajuste al aumentar la complejidad de la red.",
      },
      {
        name: "Dropout y exactitud de validación",
        application:
          "Evaluamos una configuración con dropout de 0,5 y comparamos su exactitud de validación con la del modelo base.",
      },
    ],
    // TODO: agregar portada y curvas del notebook.
  },
  {
    slug: "trabajo-de-titulo",
    artwork: {
      src: "images/illustrations/trabajo-de-titulo.webp",
      alt: "Ilustración conceptual de un expediente protegido con documentos ordenados en el tiempo.",
    },
    title: "Trabajo de título · Trazabilidad de antecedentes digitales",
    period: "Anteproyecto en curso desde 2026",
    featured: true,
    summary:
      "Diseño de un MVP para gestionar antecedentes digitales y reconstruir su historial.",
    role: "Diseño el expediente, la arquitectura y el plan de evaluación del MVP.",
    description: [
      "Planteo un MVP web para la trazabilidad de antecedentes digitales en incidentes de violencia de género facilitada por tecnologías en educación superior.",
      "El anteproyecto contempla un expediente con historial, almacenamiento privado y un clasificador de apoyo sujeto a revisión humana.",
    ],
    stack: [
      "Design Thinking",
      "Django",
      "PostgreSQL",
      "TF-IDF",
      "Regresión logística",
    ],
    toolsHeading: "Metodología y tecnologías previstas",
    tools: [
      {
        name: "Design Thinking",
        application:
          "Uso este enfoque para comprender las necesidades de quienes reciben y revisan antecedentes digitales e identificar dificultades que orienten el diseño del expediente y su historial.",
      },
      {
        name: "Django",
        application:
          "El diseño contempla un MVP web para recibir antecedentes, gestionar expedientes y registrar actuaciones según el rol de cada persona.",
      },
      {
        name: "PostgreSQL y almacenamiento privado",
        application:
          "PostgreSQL almacenaría las relaciones entre actuaciones, responsables, fechas, metadatos y versiones. Un almacenamiento privado separado alojaría los archivos adjuntos.",
      },
      {
        name: "Metadatos, versiones y hash",
        application:
          "El expediente registraría qué versión se usó en cada actuación y un hash permitiría verificar la integridad del archivo.",
      },
      {
        name: "TF-IDF y regresión logística",
        application:
          "El componente previsto representaría los relatos con TF-IDF y propondría una clasificación para que una persona autorizada la revise.",
      },
      {
        name: "Evaluación",
        application:
          "Evaluaría el clasificador con precisión, recall, F1 y análisis de errores. Para la trazabilidad, comprobaría si se puede reconstruir qué archivo se revisó, cuándo y por quién.",
      },
    ],
    // TODO: agregar solo gráficos de concepto o arquitectura sin datos personales.
  },
  {
    slug: "mochila",
    artwork: {
      src: "images/illustrations/mochila.webp",
      alt: "Ilustración conceptual de una mochila junto a objetos de distintos pesos.",
    },
    title: "Optimización combinatoria · Mochila 0/1",
    // TODO: confirmar período y lenguaje.
    featured: false,
    summary: "Comparación de una heurística voraz y un algoritmo genético.",
    role: "Comparé los dos enfoques en dupla y analicé el valor obtenido y el tiempo de ejecución.",
    description: [
      "Para una capacidad de 65 unidades de peso, el algoritmo genético alcanzó 390 unidades de valor frente a 350 de la heurística, con mayor tiempo de ejecución.",
    ],
    tools: [
      {
        name: "Heurística voraz",
        application: "Priorizamos los objetos por su relación valor/peso.",
      },
      {
        name: "Algoritmo genético",
        application:
          "Probamos el algoritmo con la misma capacidad y comparamos el valor obtenido y el tiempo de ejecución.",
      },
    ],
    stack: ["Heurística voraz", "Algoritmo genético"],
  },
  {
    slug: "simulacion-hidraulica",
    artwork: {
      src: "images/illustrations/simulacion-hidraulica.webp",
      alt: "Ilustración conceptual de dos tanques de agua conectados por tuberías.",
    },
    title: "Simulación de sistemas hidráulicos",
    period: "2025",
    featured: false,
    summary: "Análisis de sensores y simulación del bombeo y la refrigeración.",
    role: "Analicé mediciones de sensores con Python en un equipo de tres personas.",
    description: [
      "La temperatura final mínima en la simulación se obtuvo con refrigeración máxima y bombeo nulo.",
    ],
    tools: [
      {
        name: "pandas y NumPy",
        application: "Procesamos las mediciones de los sensores.",
      },
      {
        name: "Matplotlib y Seaborn",
        application:
          "Exploramos el comportamiento de las mediciones con visualizaciones.",
      },
      {
        name: "Análisis de componentes principales (PCA)",
        application: "Reducimos la dimensionalidad de los datos.",
      },
      {
        name: "SciPy",
        application:
          "Con scipy.optimize.minimize evaluamos cómo variaba la temperatura final simulada al ajustar el bombeo y la refrigeración.",
      },
    ],
    stack: [
      "Python",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "PCA",
      "SciPy",
    ],
  },
  {
    slug: "satisfaccion-de-pasajeros",
    artwork: {
      src: "images/illustrations/satisfaccion-de-pasajeros.webp",
      alt: "Ilustración conceptual de una ventanilla de avión y un gráfico de satisfacción.",
    },
    title: "Clasificación de satisfacción de pasajeros",
    // TODO: confirmar período.
    featured: false,
    summary:
      "Comparación de tres modelos de clasificación con 103.904 registros.",
    role: "Participé en la preparación de los datos y en la comparación de los modelos.",
    description: [
      "Exploramos 103.904 registros para comparar tres modelos de clasificación de satisfacción.",
    ],
    tools: [
      {
        name: "CRISP-DM y pandas",
        application:
          "Organizamos la exploración y preparación de los datos con este enfoque.",
      },
      {
        name: "SimpleImputer, StandardScaler y train_test_split",
        application:
          "Tratamos valores faltantes, escalamos variables numéricas y separamos los datos de entrenamiento y prueba.",
      },
      {
        name: "Regresión logística, Random Forest y Gradient Boosting",
        application:
          "Comparamos los modelos con matrices de confusión y AUC, y analizamos qué variables aportaban más a la clasificación.",
      },
    ],
    stack: [
      "CRISP-DM",
      "pandas",
      "SimpleImputer",
      "StandardScaler",
      "train_test_split",
      "Regresión logística",
      "Random Forest",
      "Gradient Boosting",
    ],
  },
  {
    slug: "precios-de-vivienda-california",
    artwork: {
      src: "images/illustrations/precios-de-vivienda-california.webp",
      alt: "Ilustración conceptual de viviendas y puntos de un gráfico de precios.",
    },
    title: "Estimación de precios de vivienda en California",
    // TODO: confirmar período.
    featured: false,
    summary: "Comparación de tres modelos de regresión con 20.640 registros.",
    role: "Participé en la exploración de datos y la evaluación de modelos de regresión.",
    description: [
      "Comparamos tres modelos de regresión. Random Forest Regressor obtuvo el mejor desempeño en la evaluación del equipo.",
    ],
    tools: [
      {
        name: "CRISP-DM, pandas y NumPy",
        application:
          "Exploramos 20.640 registros dentro de un flujo de trabajo basado en CRISP-DM.",
      },
      {
        name: "Matplotlib",
        application:
          "Visualizamos las distribuciones y correlaciones de las variables.",
      },
      {
        name: "Pipeline y StandardScaler",
        application:
          "Organizamos el preprocesamiento para comparar los modelos de regresión.",
      },
    ],
    stack: [
      "CRISP-DM",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Pipeline",
      "StandardScaler",
      "Random Forest Regressor",
    ],
  },
  {
    slug: "desarrollo-web-django",
    artwork: {
      src: "images/illustrations/desarrollo-web-django.webp",
      alt: "Ilustración conceptual de una ventana de navegador y las capas de una página web.",
    },
    title: "Desarrollo web con Django",
    period: "2024",
    featured: false,
    summary: "Proyectos de la asignatura de Desarrollo Web.",
    role: "Desarrollé proyectos web con Python y Django durante la asignatura.",
    description: [],
    tools: [
      {
        name: "Python y Django",
        application:
          "Desarrollé proyectos web en la asignatura de Desarrollo Web en 2024.",
      },
    ],
    stack: ["Python", "Django"],
    // TODO: confirmar la aplicación, las acciones disponibles para el usuario y la funcionalidad implementada.
  },
];
