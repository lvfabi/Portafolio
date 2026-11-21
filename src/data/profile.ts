// Perfil y enlaces. Ejemplo: { kind: "italic", value: "interfaces" } agrega cursiva al titular.
import type { HeroSegment } from "../types/content";

// EDITA AQUÍ
export const profile = {
  name: "Fabiola Level",
  email: "fabiola.level@cloud.uautonoma.cl",
  linkedin: "https://www.linkedin.com/in/fabiola-level-84842426a",
  // TODO: actualizar LinkedIn cuando esté disponible la URL personalizada.
  github: "",
  // TODO: agregar el PDF actualizado a public.
  cv: "CV_Fabiola_Level.pdf",
  // TODO: reemplazar el retrato de relleno con la foto de perfil.
  portrait: "images/profile/fabiola.webp",
  portraitAlt: "Retrato de Fabiola Level",
  availability:
    "Disponible para práctica profesional · dic 2026 – abr 2027 · 315 h",
  heroTitle: [
    { kind: "text", value: "Hola, soy Fabiola. Escribo " },
    { kind: "highlight", value: "código limpio" },
    { kind: "text", value: " y diseño " },
    { kind: "italic", value: "interfaces" },
    { kind: "text", value: " que ayudan " },
    { kind: "icon", value: "sparkle" },
    { kind: "text", value: " a las personas y se sienten " },
    { kind: "italic", value: "naturales" },
    { kind: "text", value: " " },
    { kind: "icon", value: "flower" },
  ] satisfies HeroSegment[],
  heroSubtitle:
    "Estudiante de quinto año de Ingeniería Civil en Informática. Me gusta aprender, innovar y ayudar: trabajo desde los requerimientos y el diseño en Figma hasta Flutter, pruebas y modelos de IA.",
  about: [
    "Soy estudiante de quinto año de Ingeniería Civil en Informática en la Universidad Autónoma de Chile. Trabajo con Flutter, Figma, aseguramiento de calidad y aprendizaje automático. Fui QA Lead en el Sistema de Gestión Imprenta Fuentes y presido Mujeres en la Ingeniería.",
    "Hoy preparo mi trabajo de título sobre trazabilidad de evidencia digital y busco una práctica profesional para aprender junto a un equipo y aportar con lo que sé.",
  ],
  facts: [
    ["Formación", "Ingeniería Civil en Informática"],
    ["Egreso estimado", "Julio de 2027"],
    ["Inglés", "Básico (A2)"],
    ["Ubicación", "Santiago, Chile"],
  ],
};
