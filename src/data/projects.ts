// Un objeto por proyecto. Ejemplo: featured: false lo muestra entre los proyectos académicos.
// La carpeta de imágenes usa el slug. cover y gallery permiten indicar rutas alternativas.
import type { Project } from "../types/content";

// EDITA AQUÍ
export const projects: readonly Project[] = [
  {
    slug: "emocionalidad",
    title: "Sistema de gestión de emocionalidad",
    period: "Ago. – nov. 2025",
    featured: true,
    summary: "Sistema de seguimiento del bienestar de apoderados.",
    role: "Diseño del prototipo móvil, desarrollo de interfaces y pruebas funcionales.",
    description: [
      "Diseñé el prototipo móvil en Figma, implementé la bitácora y su analítica, y desarrollé interfaces web con Flutter.",
      "Realicé pruebas funcionales y redacté el manual. Con el equipo de Informática y Psicología entregamos el sistema de seguimiento del bienestar de apoderados para la Municipalidad de Providencia.",
    ],
    stack: ["Flutter", "Figma", "Pruebas funcionales"],
    // TODO: confirmar el alcance público con la municipalidad. Solo agregar capturas autorizadas del prototipo.
  },
  {
    slug: "cleany",
    title: "Cleany",
    period: "2025",
    featured: true,
    summary: "Aplicación móvil de control de asistencia por GPS.",
    role: "Diseño de pantallas e implementación de interfaces móviles.",
    description: [
      "Desarrollé con un compañero una aplicación de asistencia por GPS para el personal de aseo. Definimos los requerimientos y documentamos seis pruebas aprobadas en un dispositivo físico.",
      "Diseñé las pantallas en Figma e implementé las interfaces en Flutter y Dart.",
    ],
    stack: ["Flutter", "Dart", "Figma"],
    // TODO: agregar portadas y capturas.
  },
  {
    slug: "cifar-10",
    title: "Clasificación de imágenes con CNN",
    // TODO: confirmar período y framework del notebook.
    featured: true,
    summary: "Comparación de configuraciones de una red neuronal en CIFAR-10.",
    role: "Comparación de configuraciones y análisis del sobreajuste en equipo.",
    description: [
      "En un equipo de cuatro, comparamos cuatro configuraciones de una red neuronal convolucional y detectamos sobreajuste.",
      "Con dropout de 0,5 alcanzamos 74,33 % de exactitud de validación frente al 70,37 % del modelo base, tras 8 épocas.",
    ],
    stack: ["Python", "Redes neuronales convolucionales"],
    // TODO: agregar portada y capturas.
  },
  {
    slug: "trabajo-de-titulo",
    title: "Trabajo de título",
    period: "En curso desde 2026",
    featured: true,
    summary: "Anteproyecto web para la trazabilidad de evidencia digital.",
    role: "Diseño del MVP y de la evaluación prevista.",
    description: [
      "Diseño un MVP web para la trazabilidad de evidencia digital en incidentes de violencia de género facilitada por tecnologías en educación superior.",
      "El diseño contempla clasificación de relatos con TF-IDF y regresión logística, revisión humana y una evaluación con precisión, recall, F1 y análisis de errores.",
    ],
    stack: ["TF-IDF", "Regresión logística"],
    // TODO: confirmar el stack web y el alcance público. Solo agregar gráficos de concepto o arquitectura.
  },
  {
    slug: "mochila",
    title: "Optimización combinatoria · Mochila 0/1",
    // TODO: confirmar período y tecnologías.
    featured: false,
    summary: "Comparación de una heurística voraz y un algoritmo genético.",
    role: "Comparación de los dos enfoques en dupla.",
    description: [
      "Comparamos una heurística voraz basada en la relación valor/peso y un algoritmo genético, con una capacidad máxima de 65 unidades de peso.",
      "En la instancia evaluada, el algoritmo genético alcanzó un valor de 390 frente a 350 de la heurística, con mayor tiempo de ejecución.",
    ],
    stack: [],
  },
  {
    slug: "simulacion-hidraulica",
    title: "Simulación hidráulica",
    period: "2025",
    featured: false,
    summary: "Análisis de sensores y condiciones de refrigeración y bombeo.",
    role: "Análisis de datos de sensores en Python.",
    description: [
      "Analicé datos de sensores con Python en un equipo de tres.",
      "En la simulación, la temperatura mínima final se obtuvo con refrigeración máxima y bombeo nulo.",
    ],
    stack: ["Python", "pandas", "NumPy", "SciPy", "Jupyter"],
  },
];
