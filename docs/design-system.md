# Sistema de diseño y reglas de código: portafolio de Fabiola Level

## Dirección de arte: femenina y profesional

Concepto: "editorial suave". Layout limpio y tipografía editorial, con una paleta rosa pastel cálida, detalles florales dibujados a mano y esquinas muy redondeadas. El color se usa en acentos y fondos suaves. El texto siempre va en ciruela oscuro. Nada de brillos, degradados fuertes ni rosa saturado. Máximo 2 colores de acento visibles por pantalla.

### Colores (variables CSS)

- --bg: #FFF7F5 (fondo general)
- --surface: #FFFFFF (modal y superficies elevadas)
- --ink: #2A1726 (texto principal y botón primario)
- --ink-soft: #6B5663 (texto secundario)
- --line: #EBD9DE (bordes finos de 1px)
- --pink-100: #FDE4EC (fondo de tarjetas y píldoras)
- --pink-200: #FBD3E0 (fondo del texto resaltado)
- --pink-400: #F29BB7 (decorativo, hover del botón, flor del logo, barra de progreso)
- --rose-700: #A12356 (texto sobre el resaltado, enlaces, foco)
- --lavender-100: #EDE7FB (tarjetas y píldoras alternas)
- --lavender-300: #C9B8F2 (destellos y flor decorativa)
- --peach-100: #FFE9DC (tarjetas y píldoras alternas)
- --butter-300: #FFE08A (centro de la flor del logo)

Contraste: --rose-700 sobre --pink-200 da 5.3:1. --ink sobre --bg supera 14:1. --pink-400 nunca se usa como color de texto. Los degradados solo se permiten como fondo de imágenes placeholder, entre --pink-100 y --lavender-100 a 135°.

### Tipografía

- Titulares: Instrument Serif (regular y cursiva real, sin cursiva sintética), con @fontsource/instrument-serif. Respaldo: Georgia, 'Times New Roman', serif.
- Cuerpo e interfaz: DM Sans variable (pesos 400, 500, 600), con @fontsource-variable/dm-sans. Respaldo: system-ui, sans-serif.
- H1: clamp(2.5rem, 1.5rem + 4.5vw, 4.5rem), interlineado 1.08, tracking -0.02em, ancho máximo 22ch.
- H2: clamp(2rem, 1.4rem + 2.6vw, 3rem), interlineado 1.1.
- Cuerpo: 1rem con interlineado 1.65 (1.125rem desde 1024px), color --ink-soft, ancho máximo 56ch.
- Píldoras y etiquetas: 0.875rem, peso 500.

### Formas y espaciado

- Radios: tarjetas 28px, imágenes dentro de tarjetas 24px, modal 32px, píldoras y botones 999px.
- Contenedor: ancho máximo 1080px; padding horizontal de 24px en móvil y 40px desde 768px.
- Espacio entre secciones: clamp(88px, 10vw, 144px).
- Sombra de tarjeta: 0 24px 48px -24px rgba(242,155,183,.55). Nunca sombras grises ni negras.
- Bordes: 1px solid var(--line).

### Logo e íconos

- Logo (componente Logo, 48px): flor dibujada a mano de 8 pétalos algo irregulares, en --pink-400, con centro --butter-300 y una carita sonriente simple en --ink. El contorno debe verse ligeramente ondulado, como trazo de lápiz. Hover: gira 20° y guiña. Se reutiliza como favicon.
- Íconos decorativos en SVG propios, con aspecto dibujado a mano: destello de cuatro puntas, flor de cinco pétalos y corazón pequeño. No usar emojis.
- Íconos de marcas (LinkedIn, GitHub) como SVG propios en src/components/icons. Íconos funcionales (flecha, cerrar, descargar) pueden venir de lucide-react.

## Stack técnico

- Vite, React y TypeScript en modo estricto.
- Tailwind CSS con los tokens de arriba definidos en @theme.
- motion (import { motion } from 'motion/react') para todas las animaciones.
- lenis para scroll suave.
- Sin librerías de componentes (no MUI, Chakra, etc.).
- Fuentes autoalojadas con fontsource.
- ESLint y Prettier.
- Despliegue estático: Vercel, Netlify o GitHub Pages. Si es GitHub Pages, configurar base en vite.config.ts.
- Contenido en archivos de datos tipados (src/data/*.ts). Agregar un proyecto o una habilidad no debe requerir tocar componentes.

### Principios de código limpio y atomizado

- Componentes atómicos: components/ui (átomos: Button, Pill, Tag, Logo), components/motion (envoltorios de animación: Reveal, MagneticButton, Marquee) y components/sections (secciones armadas con esos átomos). Un componente, una responsabilidad.
- Archivos pequeños: un componente por archivo y ninguno de más de unas 120 líneas. Si crece, se divide.
- Datos, lógica y presentación separados: textos y enlaces solo en src/data, lógica reutilizable en hooks (src/hooks) y funciones de src/lib. Los componentes solo muestran.
- Sin valores sueltos: duraciones, easings, springs y puntos de quiebre viven en src/lib/motion.ts y src/lib/constants.ts. Colores y espacios salen siempre de los tokens.
- TypeScript estricto: sin any, props tipadas y tipos de contenido en src/types/content.ts.
- Nombres claros: identificadores en inglés y textos visibles en español, estos últimos solo en src/data.
- Sin duplicación ni código muerto: a la tercera repetición se extrae un componente o una función. No dejar código comentado.
- Comentarios solo para el porqué. El nombre de la función debe explicar el qué.
- Los scripts lint, typecheck y build deben pasar sin errores al terminar cada tarea.

## Animaciones

Deben sentirse suaves y cuidadas, no recargadas.

### Principios

- Animar solo transform y opacity. Excepciones: clip-path (tarjetas) y background-size (resaltado).
- Duraciones entre 300 y 900ms. Sin rebotes exagerados.
- Las entradas ocurren una sola vez. Los loops decorativos son lentos y sutiles, máximo 2 visibles a la vez.
- will-change solo mientras dura la animación.
- Meta de 60 fps en un celular de gama media.

### Tokens de movimiento

- --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1)
- --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
- Spring suave: { type: 'spring', stiffness: 260, damping: 28, mass: 0.8 }

### Especificación

A1. Entrada del hero (≈ 1.6 s en total)
- t=0: el logo hace opacity 0→1, scale .6→1 y rotate -12°→0 con spring, 600ms.
- t=150ms: el h1 entra palabra por palabra. Cada palabra sube dentro de una máscara (overflow: hidden): translateY(105%)→0, 900ms ease-out-expo, con 55ms entre palabras.
- Hacia t=1.0s: el resaltado se dibuja de izquierda a derecha con background-size 0%→100% en 700ms ease-in-out.
- 100ms después de su palabra, cada ícono inline entra con scale 0→1 y rotate -90°→0, spring de 500ms.
- Desde t=700ms: párrafo, píldora de disponibilidad y botones suben con opacity 0→1 y translateY 16px→0, 700ms, con 100ms entre elementos.
- El botón del header aparece hacia t=900ms.

A2. Elementos decorativos en movimiento
- Destello inline: rotación 0→360° en 14s lineal infinita, con pulso de escala 1→1.15→1 cada 3s.
- Flor inline: rotación 360° en 18s lineal infinita.
- Hover sobre cualquiera de los dos: una vuelta rápida en 600ms.
- Fondo del hero: 3 a 5 destellos y corazones pequeños con deriva de ±10px en ciclos de 6 a 9s (ease-in-out, alternado). Con puntero fino, parallax con el mouse de hasta 12px.

A3. Aparición al hacer scroll
Componente Reveal: opacity 0→1 y translateY 28px→0, 800ms ease-out-expo, solo una vez, margen de viewport -10% 0px. Los hijos de grillas y listas entran con 90ms de retraso entre sí.

A4. Etiquetas de sección (píldoras)
scale .9→1 y opacity 0→1, 500ms, al entrar en pantalla.

A5. Tarjetas de proyecto
- Entrada: clip-path inset(12% 6% 12% 6% round 28px)→inset(0 round 28px) junto con opacity, 900ms ease-out-expo.
- La imagen interior tiene parallax vertical de ±16px ligado al scroll (useScroll y useTransform).
- Hover (puntero fino): la tarjeta sube 6px con sombra de tarjeta y la imagen escala a 1.04.

A6. Cursor personalizado "Ver"
Solo con (hover: hover) and (pointer: fine). Un círculo de 72px en --pink-400 con la palabra "Ver" en --ink sigue al puntero con spring (stiffness: 500, damping: 40) y aparece con scale 0→1 en 200ms sobre las tarjetas. No se oculta el cursor nativo.

A7. Línea de tiempo
La línea vertical se dibuja ligada al scroll (scaleY o pathLength con scrollYProgress del contenedor). Cada hito entra desde la derecha con translateX 24px→0 y opacity.

A8. Botones
- Efecto magnético en las píldoras primarias, solo con puntero fino: se mueven hasta 8px hacia el puntero dentro de un radio de 80px y vuelven con spring.
- Hover: el fondo pasa a --pink-400 con texto --ink en 250ms, y la flecha interior se desplaza 4px.
- Presionado: scale .97.

A9. Franja de habilidades
Desplazamiento lineal continuo a 32 px/s. La duración se calcula a partir del ancho de la lista. Se pausa al pasar el puntero o al recibir el foco.

A10. Modal de proyecto
- Layout compartido de 450ms con spring (stiffness: 300, damping: 32).
- Fondo oscuro --ink al 40% con blur(4px), 250ms.
- El contenido interno entra con 60ms de retraso entre elementos, a partir de 200ms.

A11. Barra de progreso de lectura
Línea de 3px en el borde superior, color --pink-400, con scaleX ligado al scroll de la página y transform-origin: left.

A12. Scroll suave
Lenis con duration: 1.1 y easing exponencial. Los enlaces ancla usan lenis.scrollTo con desfase de -80px por el header.

### Movimiento reducido

CUANDO el sistema tenga prefers-reduced-motion: reduce, ENTONCES el sitio DEBERÁ desactivar Lenis, los loops, el parallax, el cursor personalizado, el efecto magnético y la franja en movimiento (que pasa a ser una lista que salta de línea). Las entradas se reducen a un fundido de 200ms, sin desplazamiento.