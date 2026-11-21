# Portafolio web de Fabiola Level

## Qué es
Sitio web estático de portafolio. La especificación completa está en `SPEC.md`: léela antes de empezar cualquier tarea. Ignora la sección 0 de ese archivo, que es para otra herramienta.

## Reglas permanentes
- Diseño, colores, tipografía y animaciones: sigue `docs/design-system.md` al pie de la letra. No cambies colores, fuentes ni tiempos de animación.
- Stack: Vite, React, TypeScript estricto, Tailwind CSS, motion y lenis. No agregues librerías de componentes.
- Código limpio y atomizado: un componente por archivo, máximo unas 120 líneas. Componentes organizados en `ui`, `motion` y `sections`. Textos y enlaces solo en `src/data`.
- No inventes métricas, tecnologías, clientes ni enlaces. Si falta un dato, escribe `TODO` en los archivos de `src/data`. No incluyas botón de GitHub (no hay URL por ahora).
- Idioma: textos del sitio en español, identificadores de código en inglés.
- Al terminar cada tarea, ejecuta `npm run lint`, `npm run typecheck` y `npm run build`, y corrige los errores antes de avanzar.
- Mantén `README.md` actualizado con dónde cambiar fotos, enlaces y textos (Requisito 9 de `SPEC.md`).
