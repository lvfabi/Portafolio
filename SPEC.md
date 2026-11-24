1. Objetivo y público
Sitio web de una sola página, estático, que sirva como portafolio para postular a prácticas profesionales en desarrollo móvil o frontend, diseño de interfaces, aseguramiento de calidad (QA) y aprendizaje automático.
El visitante principal es un reclutador o líder técnico que dedica menos de un minuto. En 10 segundos debe entender quién es Fabiola, qué hace, cuándo está disponible y cómo contactarla.
Objetivos concretos:
• Mostrar la disponibilidad (diciembre 2026 a fines de abril 2027, 315 horas) sin hacer scroll.
• Presentar 4 proyectos destacados y 2 secundarios, cada uno con su rol, tecnologías y capturas.
• Mantener siempre visible el botón de contacto.
• Cargar rápido en celular y funcionar sin errores en los navegadores principales.
2. Referencia visual
La captura adjunta es una referencia de composición y de ritmo, no para copiar textos ni marca. Elementos a replicar:
• Fondo claro, mucho espacio en blanco y contenido en una columna centrada.
• Header minimalista: logo ilustrado a mano a la izquierda y botón píldora oscuro a la derecha.
• Titular grande en tipografía serif que mezcla estilos: texto normal, una frase con fondo resaltado como marcador, palabras en cursiva e íconos pequeños insertados dentro de la frase.
• Párrafo corto en sans-serif de tamaño pequeño, con ancho de línea limitado.
• Etiqueta de sección tipo píldora con borde fino (en la referencia dice “Digital contributions”).
• Tarjetas de proyecto con imágenes de esquinas muy redondeadas, en una grilla de dos columnas de distinto ancho.
Qué cambia respecto de la referencia: la paleta (azul y amarillo pasan a rosa, lila y durazno), el logo, los íconos y todos los textos.
3. Dirección de arte: femenina y profesional
Concepto: “editorial suave”. Layout limpio y tipografía editorial como en la referencia, con una paleta rosa pastel cálida, detalles florales dibujados a mano y esquinas muy redondeadas. El color se usa en acentos y fondos suaves. El texto siempre va en ciruela oscuro. Nada de brillos, degradados fuertes ni rosa saturado. Regla: máximo 2 colores de acento visibles por pantalla.
Colores (variables CSS)
• --bg: #FFF7F5 (fondo general, blanco rosado cálido)
• --surface: #FFFFFF (modal y superficies elevadas)
• --ink: #2A1726 (texto principal y botón primario)
• --ink-soft: #6B5663 (texto secundario)
• --line: #EBD9DE (bordes finos de 1px)
• --pink-100: #FDE4EC (fondo de tarjetas y píldoras)
• --pink-200: #FBD3E0 (fondo del texto resaltado)
• --pink-400: #F29BB7 (decorativo, hover del botón, flor del logo, barra de progreso)
• --rose-700: #A12356 (texto sobre el resaltado, enlaces, foco)
• --lavender-100: #EDE7FB (tarjetas y píldoras alternas)
• --lavender-300: #C9B8F2 (destellos y flor decorativa)
• --peach-100: #FFE9DC (tarjetas y píldoras alternas)
• --butter-300: #FFE08A (centro de la flor del logo)
Reglas de contraste: --rose-700 sobre --pink-200 da 5.3:1. --ink sobre --bg supera 14:1. --pink-400 nunca se usa como color de texto. Los degradados solo se permiten como fondo de imágenes placeholder, entre --pink-100 y --lavender-100 a 135°.
Tipografía
• Inter variable para títulos, controles y párrafos, instalada con @fontsource-variable/inter. Respaldo: system-ui, sans-serif.
• H1: clamp(2.5rem, 1.5rem + 4.5vw, 4.5rem), interlineado 1.08, tracking -0.02em, ancho máximo 22ch.
• H2: clamp(2rem, 1.4rem + 2.6vw, 3rem), interlineado 1.1.
• Cuerpo: 1rem con interlineado 1.65 (1.125rem desde 1024px), color --ink-soft, ancho máximo 56ch.
• Píldoras y etiquetas: 0.875rem, peso 500.
Formas y espaciado
• Radios: tarjetas 28px, imágenes dentro de tarjetas 24px, modal 32px, píldoras y botones 999px.
• Contenedor: ancho máximo 1080px; padding horizontal de 24px en móvil y 40px desde 768px.
• Espacio entre secciones: clamp(88px, 10vw, 144px).
• Sombra de tarjeta: 0 24px 48px -24px rgba(242,155,183,.55). No usar sombras grises ni negras.
• Bordes: 1px solid var(--line).
Logo e íconos
• Logo (componente Logo, 48px): flor dibujada a mano de 8 pétalos algo irregulares, en --pink-400, con centro --butter-300 y una carita sonriente simple en --ink (dos puntos y una curva). El contorno debe verse ligeramente ondulado, como trazo de lápiz. Hover: gira 20° y guiña (un ojo se cierra). Se reutiliza como favicon.
• Íconos decorativos en SVG propios, con aspecto dibujado a mano: destello de cuatro puntas, flor de cinco pétalos y corazón pequeño. No usar emojis.
• Íconos de marcas (LinkedIn, GitHub) como SVG propios en src/components/icons. Íconos funcionales (flecha, cerrar, descargar) pueden venir de lucide-react.
4. Stack técnico
• Vite, React y TypeScript en modo estricto.
• Tailwind CSS con los tokens de la sección 3 definidos en @theme.
• motion (import { motion } from 'motion/react') para todas las animaciones.
• lenis para scroll suave.
• Sin librerías de componentes (no MUI, Chakra, etc.).
• Fuentes autoalojadas con fontsource.
• ESLint y Prettier.
• Despliegue estático: Vercel, Netlify o GitHub Pages. Si es GitHub Pages, configurar base en vite.config.ts.
• Contenido en archivos de datos tipados (src/data/*.ts). Agregar un proyecto o una habilidad no debe requerir tocar componentes.
Principios de código limpio y atomizado
• Componentes atómicos. components/ui (átomos: Button, Pill, Tag, Logo), components/motion (envoltorios de animación: Reveal, MagneticButton, Marquee) y components/sections (secciones armadas con esos átomos). Un componente, una responsabilidad.
• Archivos pequeños. Un componente por archivo y ninguno de más de unas 120 líneas. Si crece, se divide.
• Datos, lógica y presentación separados. Textos y enlaces solo en src/data, lógica reutilizable en hooks (src/hooks) y funciones de src/lib. Los componentes solo muestran.
• Sin valores sueltos. Duraciones, easings, springs y puntos de quiebre viven en src/lib/motion.ts y src/lib/constants.ts. Colores y espacios salen siempre de los tokens de la sección 3.
• TypeScript estricto. Sin any, props tipadas y tipos de contenido en src/types/content.ts.
• Nombres claros. Identificadores en inglés y textos visibles en español, estos últimos solo en src/data.
• Sin duplicación ni código muerto. A la tercera repetición se extrae un componente o una función. No dejar código comentado.
• Comentarios solo para el porqué. El nombre de la función debe explicar el qué.
• Calidad automática. Los scripts lint, typecheck y build deben pasar sin errores al terminar cada tarea.
5. Requisitos funcionales
Requisito 1: Header
Historia de usuario: Como reclutadora quiero ver quién es Fabiola y poder contactarla desde cualquier punto de la página.
Criterios de aceptación:
1.  El header contiene el logo a la izquierda y el botón “Contáctame” (píldora --ink, texto --bg) a la derecha, y permanece fijo arriba.
2.  CUANDO el usuario baja más de 24px, ENTONCES el header DEBERÁ tener fondo --bg al 80% de opacidad, backdrop-filter: blur(12px) y borde inferior de 1px --line, con transición de 250ms.
3.  CUANDO se pulsa “Contáctame”, ENTONCES la página DEBERÁ desplazarse suavemente a la sección de contacto.
4.  DESDE 768px, el header PUEDE mostrar enlaces de texto (Proyectos, Sobre mí, Contacto) con subrayado animado en hover. En móvil solo se ven logo y botón.
5.  CUANDO se pulsa el logo, ENTONCES la página DEBERÁ volver al inicio.
Requisito 2: Hero
Historia de usuario: Como reclutador quiero entender en 10 segundos quién es, qué hace y cuándo está disponible.
Criterios de aceptación:
1.  El h1 se construye desde una lista de segmentos en src/data/profile.ts (campo heroTitle), para poder cambiar el texto sin tocar el componente. Texto inicial: “Hola, soy Fabiola. Escribo [código limpio] y diseño interfaces que ayudan {destello} a las personas y se sienten naturales {flor}”. Los corchetes [ ] marcan la frase resaltada, las llaves { } marcan íconos SVG decorativos y las palabras en cursiva usan la cursiva de Inter. En desktop el titular ocupa 4 líneas como máximo (ajustar max-width si hace falta).
2.  La frase resaltada “código limpio” tiene fondo --pink-200, color --rose-700, padding 0 .15em, radio 6px y box-decoration-break: clone para que se vea bien si salta de línea.
3.  Los íconos inline miden 0.6em de alto, van alineados a la línea base y tienen aria-hidden. El destello va en --pink-400 y la flor en --lavender-300.
4.  Bajo el titular va el párrafo (campo heroSubtitle): “Estudiante de quinto año de Ingeniería Civil en Informática. Me gusta aprender, innovar y ayudar: trabajo desde los requerimientos y el diseño en Figma hasta Flutter, pruebas y modelos de IA.”
5.  Un panel de disponibilidad con borde fino y sombra desplazada muestra “Disponible para práctica profesional” en una barra rosa con un indicador cuadrado --pink-400 que pulsa. Debajo se leen las fechas y las horas. Los textos viven en availability.label y availability.details de src/data/profile.ts.
6.  Dos llamadas a la acción: botón primario “Ver proyectos” y enlace secundario “Descargar CV” con flecha.
7.  El hero NO ocupa toda la pantalla. En 1366×768 deben verse el hero completo y el borde superior de las primeras tarjetas, para invitar a hacer scroll, como en la referencia.
Requisito 3: Proyectos
Historia de usuario: Como reclutador quiero ver rápidamente los proyectos con su rol y tecnologías.
Criterios de aceptación:
1.  Una etiqueta píldora “Proyectos” (borde 1px --line, padding 8px 18px) abre la sección.
2.  En desktop, la grilla es de 12 columnas con filas alternadas 5/7 y 7/5. Si queda un proyecto solo en la última fila, ocupa 12 columnas. En tablet son 2 columnas iguales y en móvil 1 columna.
3.  Cada tarjeta tiene portada con fondo de color rotando entre --pink-100, --lavender-100 y --peach-100, con la imagen o mockup centrado. Proporción 4:3 en tarjetas pequeñas y 16:10 en grandes. Debajo van título (serif, 1.75rem), una línea de descripción, etiquetas de tecnologías en píldoras pequeñas y el período.
4.  CUANDO el puntero está sobre una tarjeta (dispositivo con hover), ENTONCES la tarjeta DEBERÁ subir 6px con sombra de tarjeta, la imagen escalar a 1.04 y aparecer el cursor personalizado “Ver” (ver animación A6).
5.  Cada tarjeta es un elemento enfocable (botón) que abre el detalle del Requisito 4.
6.  Los proyectos viven en src/data/projects.ts.
Proyectos secundarios y sin imagen: los proyectos con featured: false (hoy, la mochila y la simulación hidráulica) no llevan tarjeta grande. Se muestran bajo el subtítulo “Otros proyectos académicos” como filas compactas con título, resumen de una línea y etiquetas, y abren el mismo detalle del Requisito 4. Si un proyecto no tiene cover, la tarjeta muestra una ilustración de relleno (degradado entre --pink-100 y --lavender-100 con una flor dibujada), nunca una imagen rota.
Requisito 4: Detalle de proyecto (modal)
Historia de usuario: Como reclutador quiero ver más detalle de un proyecto sin salir de la página.
Criterios de aceptación:
1.  CUANDO se abre una tarjeta, ENTONCES el detalle DEBERÁ expandirse desde ella con transición de layout compartido (layoutId). En móvil se muestra como panel inferior (bottom sheet) a pantalla casi completa.
2.  El detalle muestra portada, título, período, “Mi rol”, descripción de 2 o 3 párrafos, tecnologías, galería de imágenes (carrusel con scroll-snap) y enlaces opcionales a GitHub, Figma o demo. Los enlaces que no tengan URL en los datos no se muestran.
3.  Se cierra con un botón de 44×44px, con Esc o al hacer clic en el fondo.
4.  El modal tiene role="dialog", aria-modal="true" y aria-labelledby, atrapa el foco, bloquea el scroll del fondo y devuelve el foco a la tarjeta al cerrar.
5.  DEBERÍA existir un enlace directo con hash (por ejemplo #cleany) que abra el proyecto al cargar la página.
6.  El componente del modal se carga de forma diferida (React.lazy).
Requisito 5: Sobre mí
Criterios de aceptación:
1.  En desktop son dos columnas: foto a la izquierda y texto a la derecha. La foto tiene forma de arco (border-radius: 999px 999px 28px 28px) con un marco desplazado de --pink-200 detrás. Si no hay foto, se muestra una ilustración placeholder.
2.  El texto son 2 párrafos cortos basados en el CV (sección 11).
3.  Una lista de datos rápidos incluye: formación, egreso estimado julio 2027, inglés básico (A2) y ubicación (Santiago, Chile).
4.  La foto tiene alt descriptivo.
Requisito 6: Habilidades
Criterios de aceptación:
1.  Tres grupos de píldoras: “Desarrollo y diseño” (Flutter, Dart, Figma), “Programación y datos” (Python, Java, pandas, NumPy, SciPy, Jupyter) y “Bases de datos” (PostgreSQL, MongoDB). El fondo de las píldoras rota entre --pink-100, --lavender-100 y --peach-100.
2.  Debajo hay una franja con las mismas habilidades en movimiento continuo (ver animación A9). La copia duplicada de la franja lleva aria-hidden.
3.  Los datos viven en src/data/skills.ts.
Requisito 7: Trayectoria y liderazgo
Criterios de aceptación:
1.  Línea de tiempo vertical con estos hitos, del más reciente al más antiguo:
    ◦ Presidenta de Mujeres en la Ingeniería · Universidad Autónoma de Chile · 2026 – actualidad
    ◦ Líder de aseguramiento de calidad (QA Lead) · Sistema de Gestión Imprenta Fuentes · 2026
    ◦ Vendedora · Óptica WillBloom, Santiago · 2023 – actualidad
2.  Se incluye la formación: Ingeniería Civil en Informática, Universidad Autónoma de Chile, egreso estimado julio 2027.
3.  Los nodos de la línea son destellos o flores pequeñas en --pink-400.
Requisito 8: Contacto y footer
Criterios de aceptación:
1.  Un titular serif grande “Conversemos” cierra la página, con una palabra resaltada o en cursiva.
2.  Botones: Correo, LinkedIn y Descargar CV (PDF en /public). El botón de GitHub no se muestra en esta versión: existe en el código, pero solo aparece si el campo github de src/data/profile.ts tiene una URL.
3.  CUANDO se pulsa Correo, ENTONCES se DEBERÁ copiar levelfabiola@gmail.com al portapapeles, mostrar un aviso “Correo copiado” de 2 segundos y abrir mailto:.
4.  No se muestra el teléfono en el sitio. No hay formulario de contacto en esta versión.
5.  Footer: “© 2026 Fabiola Level · Hecho con cariño en Santiago” y un botón de volver arriba.
Requisito 9: README de mantenimiento
Historia de usuario: Como dueña del sitio quiero saber exactamente qué archivo cambiar para actualizar fotos, enlaces y textos sin tocar el código de los componentes.
Criterios de aceptación:
1.  El proyecto incluye un README.md en la raíz, escrito en español, con estas secciones en orden: qué es el proyecto, cómo ejecutarlo, dónde cambiar cada cosa, cómo agregar un proyecto, especificaciones de las imágenes y cómo publicarlo.
2.  La sección “dónde cambiar cada cosa” es una tabla con la ruta exacta de cada archivo editable, como la tabla de abajo.
3.  El README explica paso a paso cómo agregar un proyecto: copiar las imágenes a public/images/projects/<slug>/, agregar un objeto en src/data/projects.ts y guardar. El proyecto aparece sin modificar ningún componente.
4.  Cada archivo de src/data empieza con un comentario que explica los campos editables y trae un ejemplo. Los puntos editables se marcan con // EDITA AQUÍ.
5.  Si falta una imagen, el sitio muestra una ilustración de relleno y no una imagen rota. El script npm run check:content lista todos los TODO pendientes en src/data y public, y el README indica ejecutarlo antes de publicar.
6.  El README indica cómo publicar el sitio y cómo actualizarlo después.
Tabla mínima que debe incluir el README:
Qué quiero cambiar
Dónde
Detalle
Foto de perfil
public/images/profile/fabiola.webp
Reemplazar el archivo con el mismo nombre. 800×1000 px, WebP, menos de 150 KB
Portada y capturas de un proyecto
public/images/projects/<slug>/
cover.webp (1600×1000 px) y gallery-1.webp, gallery-2.webp, etc. (1280 px de ancho)
CV en PDF
public/CV_Fabiola_Level.pdf
Reemplazar el archivo con el mismo nombre
Correo, LinkedIn y GitHub
src/data/profile.ts
Campos email, linkedin y github. Un campo vacío oculta su botón
Titular del inicio
src/data/profile.ts
Lista heroTitle, por segmentos de texto, resaltado, cursiva e ícono
Párrafo y disponibilidad del inicio
src/data/profile.ts
Campos heroSubtitle y availability
Sobre mí
src/data/profile.ts
Campo about
Proyectos: textos, tecnologías y enlaces
src/data/projects.ts
Un objeto por proyecto. Las rutas de imágenes apuntan a public/images/projects/<slug>/
Habilidades
src/data/skills.ts
Un grupo por categoría
Trayectoria y liderazgo
src/data/timeline.ts
Un objeto por hito
Colores y tipografías
src/styles/index.css
Variables dentro de @theme
Favicon e imagen al compartir el enlace
public/favicon.svg y public/og-image.png
La imagen al compartir mide 1200×630 px
Título y descripción para buscadores
index.html
Etiquetas title y meta description
6. Animaciones
Las animaciones son una parte central de este proyecto y deben sentirse suaves y cuidadas, no recargadas.
Principios
• Animar solo transform y opacity. Excepciones permitidas: clip-path (tarjetas) y background-size (resaltado).
• Duraciones entre 300 y 900ms. Sin rebotes exagerados.
• Las entradas ocurren una sola vez. Los loops decorativos son lentos y sutiles, con un máximo de 2 visibles a la vez.
• will-change solo mientras dura la animación.
• Meta de 60 fps en un celular de gama media.
Tokens de movimiento
• --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1)
• --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
• Spring suave: { type: 'spring', stiffness: 260, damping: 28, mass: 0.8 }
Especificación
A1. Secuencia de entrada del hero (≈ 1.6 s en total)
• t=0: el logo hace opacity 0→1, scale .6→1 y rotate -12°→0 con spring, 600ms.
• t=150ms: el h1 entra palabra por palabra. Cada palabra sube dentro de una máscara (overflow: hidden): translateY(105%)→0, 900ms ease-out-expo, con retraso de 55ms entre palabras.
• Hacia t=1.0s: el resaltado se dibuja de izquierda a derecha con background-size 0%→100% en 700ms ease-in-out.
• 100ms después de su palabra, cada ícono inline entra con scale 0→1 y rotate -90°→0, spring de 500ms.
• Desde t=700ms: párrafo, panel de disponibilidad y botones suben con opacity 0→1 y translateY 16px→0, 700ms, con 100ms entre elementos.
• El botón del header aparece hacia t=900ms.
A2. Elementos decorativos en movimiento
• Destello inline: rotación 0→360° en 14s lineal infinita, con pulso de escala 1→1.15→1 cada 3s.
• Flor inline: rotación 360° en 18s lineal infinita.
• Hover sobre cualquiera de los dos: una vuelta rápida en 600ms.
• Fondo del hero: 3 a 5 destellos y corazones pequeños en posiciones fijas, con deriva de ±10px en ciclos de 6 a 9s (ease-in-out, alternado). En dispositivos con puntero fino, parallax con el mouse de hasta 12px.
A3. Aparición al hacer scroll
Componente Reveal: opacity 0→1 y translateY 28px→0, 800ms ease-out-expo, solo una vez, con margen de viewport -10% 0px. Los hijos de grillas y listas entran con retraso de 90ms entre sí.
A4. Etiquetas de sección (píldoras)
scale .9→1 y opacity 0→1, 500ms, al entrar en pantalla.
A5. Tarjetas de proyecto
• Entrada: clip-path: inset(12% 6% 12% 6% round 28px)→inset(0 round 28px) junto con opacity, 900ms ease-out-expo.
• La imagen interior tiene parallax vertical de ±16px ligado al scroll (useScroll y useTransform).
• Hover: ver Requisito 3, criterio 4.
A6. Cursor personalizado “Ver”
Solo con (hover: hover) and (pointer: fine). Un círculo de 72px en --pink-400 con la palabra “Ver” en --ink sigue al puntero con spring (stiffness: 500, damping: 40) y aparece con scale 0→1 en 200ms sobre las tarjetas. NO se oculta el cursor nativo.
A7. Línea de tiempo
La línea vertical se dibuja ligada al scroll (scaleY o pathLength con scrollYProgress del contenedor). Cada hito entra desde la derecha con translateX 24px→0 y opacity.
A8. Botones
• Efecto magnético en las píldoras primarias, solo con puntero fino: se mueven hasta 8px hacia el puntero dentro de un radio de 80px y vuelven con spring.
• Hover: el fondo pasa a --pink-400 con texto --ink en 250ms, y la flecha interior se desplaza 4px.
• Presionado: scale .97.
A9. Franja de habilidades
Desplazamiento lineal continuo a 32 px/s. La duración se calcula a partir del ancho de la lista. Se pausa al pasar el puntero o al recibir el foco.
A10. Modal de proyecto
• Layout compartido de 450ms con spring (stiffness: 300, damping: 32).
• Fondo oscuro --ink al 40% con blur(4px), 250ms.
• El contenido interno entra con 60ms de retraso entre elementos, a partir de 200ms.
A11. Barra de progreso de lectura
Línea de 3px en el borde superior, color --pink-400, con scaleX ligado al scroll de la página y transform-origin: left.
A12. Scroll suave
Lenis con duration: 1.1 y easing exponencial. Los enlaces ancla usan lenis.scrollTo con desfase de -80px por el header.
Movimiento reducido
CUANDO el sistema tenga prefers-reduced-motion: reduce, ENTONCES el sitio DEBERÁ desactivar Lenis, los loops, el parallax, el cursor personalizado, el efecto magnético y la franja en movimiento (que pasa a ser una lista que salta de línea). Las entradas se reducen a un fundido de 200ms, sin desplazamiento.
7. Responsive
• Puntos de quiebre: 360px (mínimo soportado), 768px, 1024px y 1440px.
• Móvil: header con logo y botón compacto (44px de alto), grilla de 1 columna, modal como bottom sheet, sin cursor personalizado, sin efecto magnético y sin parallax de mouse.
• Tablet: grilla de 2 columnas iguales.
• Desktop (desde 1024px): grilla 5/7 y contenedor de 1080px centrado, también en pantallas de 1440px o más.
• Usar unidades svh y dvh en vez de vh.
• No debe haber scroll horizontal desde 320px de ancho. La franja de habilidades va con overflow: hidden.
• Probar en 360×800, 390×844, 768×1024, 1366×768 y 1920×1080.
8. Accesibilidad (WCAG 2.2 AA)
• Contraste mínimo AA en todos los textos.
• HTML semántico: header, nav, main, section con aria-labelledby y footer. Un solo h1.
• Enlace “Saltar al contenido” como primer elemento enfocable.
• Foco visible en todos los elementos interactivos: outline: 2px solid var(--rose-700) con outline-offset: 3px.
• Áreas táctiles de al menos 44×44px.
• Toda la navegación y el modal funcionan solo con teclado.
• Imágenes con alt descriptivo. Las decorativas llevan aria-hidden. Los íconos del h1 son decorativos para que se lea como texto corrido.
• lang="es" en el html.
9. Rendimiento y SEO
• Lighthouse en móvil: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
• LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
• Imágenes en WebP o AVIF con width y height, srcset, y loading="lazy" bajo el pliegue. El hero no lleva imágenes pesadas.
• Fuentes: cargar solo los pesos usados, con preload de Inter regular e itálica y font-display: swap.
• JavaScript inicial menor a 180 KB comprimido (gzip), con el modal cargado de forma diferida.
• title: “Fabiola Level | Práctica en desarrollo de software, diseño de interfaces, QA e IA”. Agregar meta description, Open Graph y Twitter Card (imagen de 1200×630 con la estética de la página), favicon (SVG de la flor y PNG de 32 y 180px), robots.txt y sitemap.xml.
10. Estructura de carpetas sugerida
README.md
index.html
src/
  components/
    ui/          Button, Pill, Tag, SectionLabel, Logo, HighlightText, InlineIcon
    motion/      Reveal, MagneticButton, Marquee, CustomCursor, ScrollProgress
    sections/    Header, Hero, Projects, ProjectCard, ProjectModal,
                 About, Skills, Timeline, Contact, Footer
    icons/       SparkleIcon, FlowerIcon, HeartIcon, LinkedInIcon,
                 MailIcon, ArrowIcon
  data/          profile.ts, projects.ts, skills.ts, timeline.ts
  hooks/         useMediaQuery.ts, useFinePointer.ts,
                 useScrollLock.ts, useCopyToClipboard.ts
  lib/           motion.ts (easings, springs, duraciones),
                 constants.ts, scroll.ts
  types/         content.ts
  styles/        index.css (tokens @theme, fuentes, base)
public/
  images/profile/fabiola.webp
  images/projects/<slug>/cover.webp, gallery-1.webp, gallery-2.webp
  CV_Fabiola_Level.pdf, favicon.svg, og-image.png,
  robots.txt, sitemap.xml
scripts/
  check-content.mjs   (lista los TODO pendientes)
11. Contenido inicial
Todo sale del CV. Si falta un dato, usar TODO y no inventarlo.
Modelo de datos de un proyecto:
type HeroSegment = {
  kind: 'text' | 'highlight' | 'italic' | 'icon';
  value: string; // para 'icon': 'sparkle' | 'flower' | 'heart'
};

type Profile = {
  name: string;
  email: string;
  linkedin: string;
  github?: string;          // vacío: el botón no se muestra
  availability: { label: string; details: string };
  heroTitle: HeroSegment[];
  heroSubtitle: string;
  about: string[];          // párrafos de 'Sobre mí'
};

type Project = {
  slug: string;             // identificador y nombre de la carpeta de imágenes
  title: string;
  period: string;           // por ejemplo 'ago. – nov. 2025'
  featured: boolean;        // true: tarjeta grande; false: 'Otros proyectos académicos'
  summary: string;          // una línea, para la tarjeta
  role: string;             // 'Mi rol'
  description: string[];    // 2 o 3 párrafos
  stack: string[];
  cover?: string;           // ruta en /public; si falta, ilustración de relleno
  gallery?: string[];
  links?: { figma?: string; demo?: string; repo?: string };
};
Proyecto 1 (destacado): Sistema de gestión de emocionalidad · Municipalidad de Providencia · ago. – nov. 2025
• Descripción: diseñé el prototipo móvil en Figma, implementé la bitácora y su analítica, y desarrollé interfaces web con Flutter. Realicé pruebas funcionales y redacté el manual. Con el equipo de Informática y Psicología entregamos el sistema de seguimiento del bienestar de apoderados.
• Tecnologías: Flutter, Figma, pruebas funcionales.
• Nota: proyecto con cliente real. No publicar código ni datos sin autorización. Mostrar solo capturas del prototipo.
Proyecto 2 (destacado): Cleany · Aplicación móvil de control de asistencia · 2025
• Descripción: desarrollé con un compañero una aplicación de asistencia por GPS para el personal de aseo. Definimos los requerimientos y documentamos seis pruebas aprobadas en un dispositivo físico. Diseñé las pantallas en Figma e implementé las interfaces en Flutter y Dart.
• Tecnologías: Flutter, Dart, Figma.
Proyecto 3 (destacado): Clasificación de imágenes con redes neuronales convolucionales (CNN) · CIFAR-10 · TODO período
• Descripción: en un equipo de cuatro, comparamos cuatro configuraciones de una CNN y detectamos sobreajuste. Con dropout de 0,5 alcanzamos 74,33 % de exactitud de validación frente al 70,37 % del modelo base, tras 8 épocas.
• Tecnologías: Python y redes neuronales convolucionales. TODO: confirmar el framework (Keras, TensorFlow u otro) en los import del notebook. No escribirlo hasta confirmarlo.
Proyecto 4 (destacado): Trabajo de título · Anteproyecto en curso desde 2026
• Descripción: diseño un MVP web para la trazabilidad de evidencia digital en incidentes de violencia de género facilitada por tecnologías en educación superior. El diseño contempla clasificación de relatos con TF-IDF y regresión logística, revisión humana y evaluación con precisión, recall, F1 y análisis de errores.
• Tecnologías: TF-IDF y regresión logística. TODO: agregar el stack web del MVP cuando esté definido.
• Nota: tema sensible. Mostrar solo el concepto, la arquitectura y tu rol, sin casos, datos reales ni capturas con información de personas. No atribuir resultados: es un anteproyecto.
Proyecto 5 (secundario): Optimización combinatoria · Problema de la mochila 0/1 · TODO período
• Descripción: comparamos, en dupla, una heurística voraz basada en la relación valor/peso y un algoritmo genético, con una capacidad máxima de 65 unidades de peso. En la instancia evaluada, el algoritmo genético alcanzó un valor de 390 frente a 350 de la heurística, con mayor tiempo de ejecución.
• Tecnologías: TODO.
Proyecto 6 (secundario): Simulación hidráulica · 2025
• Descripción: analicé datos de sensores con Python en un equipo de tres. En la simulación, la temperatura mínima final se obtuvo con refrigeración máxima y bombeo nulo.
• Tecnologías: Python, pandas, NumPy, SciPy, Jupyter.
Sobre mí (borrador): soy estudiante de quinto año de Ingeniería Civil en Informática en la Universidad Autónoma de Chile. Soy una persona enfocada: me gusta aprender, innovar y ayudar, y trabajo con código limpio y bien organizado. Tengo experiencia en desarrollo móvil con Flutter, diseño de interfaces en Figma, aseguramiento de calidad y aprendizaje automático. Fui QA Lead en el Sistema de Gestión Imprenta Fuentes y presido Mujeres en la Ingeniería.
Hoy preparo mi trabajo de título, un MVP web para la trazabilidad de evidencia digital en incidentes de violencia de género facilitada por tecnologías, y busco una práctica profesional para aprender junto a un equipo y aportar con lo que sé.
Contacto: levelfabiola@gmail.com · LinkedIn: linkedin.com/in/fabiola-level-84842426a (TODO: personalizar la URL) · GitHub: sin URL por ahora, el botón no se muestra.
12. Fuera de alcance (versión 1)
• Formulario de contacto con backend.
• Blog o CMS.
• Modo oscuro.
• Versión en inglés (puede agregarse después).
• Analítica de visitas.
13. Definición de terminado
[ ] Todas las secciones de los Requisitos 1 a 9 implementadas con contenido real. Los TODO pueden quedar solo en los archivos de datos y nunca visibles en el sitio publicado.
[ ] Las animaciones A1 a A12 funcionan con los tiempos de la sección 6.
[ ] Con movimiento reducido activado, el sitio no tiene movimiento ni loops.
[ ] Sin scroll horizontal en 360px, 768px y 1366px.
[ ] Lighthouse cumple las metas de la sección 9.
[ ] Navegación completa con teclado y modal accesible.
[ ] Revisado en Chrome, Safari y Firefox (últimas dos versiones) y en un celular real.
[ ] Publicado con URL pública y revisión de la vista previa al compartir el enlace.
[ ] README.md completo: tabla de dónde cambiar cada cosa, cómo agregar un proyecto y cómo publicar (Requisito 9).
[ ] Código atomizado según los principios de la sección 4: sin componentes de más de unas 120 líneas y sin textos ni enlaces dentro de los componentes.
14. Lo que debe aportar Fabiola
• Foto de perfil, en public/images/profile/fabiola.webp.
• Portadas y capturas de las interfaces (Figma y la app corriendo) de cada proyecto, en public/images/projects/<slug>/. Del proyecto municipal, solo capturas del prototipo.
• PDF actualizado del CV, en public/CV_Fabiola_Level.pdf.
• URL personalizada de LinkedIn en src/data/profile.ts. GitHub queda vacío y su botón no aparece.
• Confirmación de si el proyecto municipal puede mostrarse públicamente y con qué detalle, y definir cuánto del trabajo de título se muestra.
• Datos pendientes de los proyectos: período de la CNN y de la mochila, framework de la CNN y stack del MVP del trabajo de título.
• Revisión final de los textos, para que todo refleje exactamente lo que hiciste.
• Decidir el dominio (por ejemplo, fabiolalevel.dev o la URL gratuita de Vercel).