// Perfil y enlaces. Ejemplo: { kind: "italic", value: "interfaces" } agrega cursiva al titular.
import type { HeroSegment } from "../types/content";

// EDITA AQUÍ
export const profile = {
  name: "Fabiola Level",
  email: "levelfabiola@gmail.com",
  linkedin: "https://www.linkedin.com/in/fabiola-level-84842426a",
  // TODO: actualizar LinkedIn cuando esté disponible la URL personalizada.
  github: "",
  // TODO: agregar el PDF actualizado a public.
  cv: "CV_Fabiola_Level.pdf",
  portrait: {
    src: "images/profile/fabiola.webp",
    alt: "Retrato de Fabiola con suéter negro a rayas",
    width: 750,
    height: 1000,
  },
  availability:
    "Disponible para práctica profesional · dic 2026 – abr 2027 · 315 h",
  heroArtwork: "images/retro-computer.webp",
  heroTitle: [
    { kind: "text", value: "Hola, soy Fabiola." },
    { kind: "break" },
    { kind: "text", value: "Me mueve " },
    { kind: "highlight", value: "innovar" },
    { kind: "text", value: " y " },
    { kind: "italic", value: "ayudar" },
    { kind: "text", value: " " },
    { kind: "icon", value: "sparkle" },
    { kind: "text", value: " de la idea al diseño, el código y las pruebas " },
    { kind: "icon", value: "flower" },
  ] satisfies HeroSegment[],
  heroSubtitle:
    "Estudiante de quinto año de Ingeniería Civil en Informática. Me gusta aprender, innovar y ayudar: trabajo desde los requerimientos y el diseño en Figma hasta Flutter, pruebas y modelos de IA.",
  about: [
    "Soy estudiante de quinto año de Ingeniería Civil en Informática en la Universidad Autónoma de Chile. Trabajo con Flutter, Figma, aseguramiento de calidad y aprendizaje automático. Fui QA Lead en el Sistema de Gestión Imprenta Fuentes.",
    "Desde 2026 presido Mujeres en la Ingeniería en la Universidad Autónoma de Chile. El grupo es un espacio desde el que quiero aportar a la comunidad universitaria, conectar con otras estudiantes y dar más visibilidad a la participación de las mujeres en ingeniería.",
    // TODO: incorporar actividades concretas del grupo cuando estén confirmadas.
    "Hoy preparo mi trabajo de título sobre trazabilidad de evidencia digital y busco una práctica profesional para aprender junto a un equipo y aportar con lo que sé.",
  ],
  facts: [
    ["Formación", "Ingeniería Civil en Informática"],
    ["Egreso estimado", "Julio de 2027"],
    ["Inglés", "Básico (A2)"],
    ["Ubicación", "Santiago, Chile"],
  ],
};
