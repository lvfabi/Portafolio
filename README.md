# Portafolio web de Fabiola Level

## Qué es el proyecto

Portafolio estático de una sola página para postular a prácticas profesionales. Presenta proyectos de desarrollo, diseño de interfaces, aseguramiento de calidad y aprendizaje automático. Está construido con React, Vite, TypeScript, Tailwind CSS, Motion y Lenis.

## Cómo ejecutarlo

Usa Node.js 22.13 o superior dentro de la serie 22, o Node.js 24 o superior.

```bash
npm ci
npm run dev
```

Abre en el navegador la dirección que muestra Vite. Si ejecutas el proyecto en una máquina remota, abre la dirección desde el navegador de esa máquina o mediante la vista previa del entorno.

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

La compilación se guarda en `dist/`. `npm run preview` sirve esa compilación para revisarla antes de publicar.

## Dónde cambiar cada cosa

| Qué quiero cambiar                   | Dónde                                        | Detalle                                                                                                                                                               |
| ------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foto de perfil                       | `public/images/profile/fabiola.webp`         | Reemplaza el archivo con el mismo nombre. WebP de 800×1000 px y menos de 150 KB.                                                                                      |
| Portada y capturas de un proyecto    | `public/images/projects/<slug>/`             | Usa `cover.webp` para la portada y `gallery-1.webp`, `gallery-2.webp`, etc., para las capturas.                                                                       |
| CV en PDF                            | `public/CV_Fabiola_Level.pdf`                | Guarda el PDF con ese nombre para activar los enlaces de descarga.                                                                                                    |
| Correo, LinkedIn y GitHub            | `src/data/profile.ts`                        | Campos `email`, `linkedin` y `github`. Un enlace vacío oculta el botón.                                                                                               |
| Titular del inicio                   | `src/data/profile.ts`                        | Lista `heroTitle`, con segmentos de texto, resaltado, cursiva o ícono.                                                                                                |
| Párrafo y disponibilidad             | `src/data/profile.ts`                        | Campos `heroSubtitle` y `availability`.                                                                                                                               |
| Sobre mí y datos rápidos             | `src/data/profile.ts`                        | Campos `about` y `facts`.                                                                                                                                             |
| Proyectos, tecnologías y enlaces     | `src/data/projects.ts`                       | `stack` muestra las etiquetas y `tools` explica el uso de cada herramienta. `evaluatedStack` separa las tecnologías del sistema evaluado.                             |
| Prototipo interactivo de Figma       | `src/data/projects.ts`                       | Copia la dirección `src` del código de incrustación de Figma en `figmaEmbed`. Prueba el prototipo en una pestaña privada para comprobar el acceso sin iniciar sesión. |
| Habilidades                          | `src/data/skills.ts`                         | Un grupo por categoría.                                                                                                                                               |
| Trayectoria y liderazgo              | `src/data/timeline.ts`                       | Un objeto por hito.                                                                                                                                                   |
| Etiquetas y botones                  | `src/data/site.ts`                           | Textos de las secciones, controles y avisos.                                                                                                                          |
| Colores y tipografías                | `src/styles/index.css`                       | Variables dentro de `@theme`.                                                                                                                                         |
| Favicon e imagen al compartir        | `public/favicon.svg` y `public/og-image.png` | Actualiza también `public/favicon-32.png` y `public/apple-touch-icon.png` si cambia el logo. La imagen social mide 1200×630 px.                                       |
| Título y descripción para buscadores | `index.html` y `src/data/seo.ts`             | Cambia `<title>` en el HTML y `description` en los datos.                                                                                                             |

Los archivos de datos contienen ejemplos y marcas `// EDITA AQUÍ`. Reinicia Vite si agregas o retiras archivos de `public/`, para actualizar la lista de recursos disponibles.

## Cómo agregar un proyecto

1. Elige un identificador corto en minúsculas, separado con guiones si tiene varias palabras.
2. Crea `public/images/projects/<slug>/` y copia allí la portada y las capturas disponibles.
3. Agrega un objeto a `src/data/projects.ts` con ese mismo `slug`, título, resumen, rol, descripción y tecnologías confirmadas. Indica `featured: true` para una tarjeta destacada o `featured: false` para una fila académica.
4. Guarda y abre la sección Proyectos. Pulsa el proyecto y comprueba que la dirección termina en `#<slug>` y que la galería abre.

Las imágenes con los nombres de la tabla se detectan al arrancar o compilar. Una portada ausente se sustituye por una ilustración. Si falta un dato, deja un comentario `TODO` junto al campo y omite el valor.

## Especificaciones de las imágenes

- Retrato. WebP de 800×1000 px y menos de 150 KB.
- Portadas. WebP de 1600×1000 px. Conserva el contenido principal cerca del centro para la vista 4:3 de las tarjetas chicas.
- Capturas. WebP de 1280 px de ancho. Numéralas en el orden en que deben aparecer.
- Imagen al compartir. PNG de 1200×630 px.
- Proyecto municipal. Usa únicamente capturas autorizadas del prototipo. Para el trabajo de título, usa material de concepto o arquitectura sin datos personales.

## Cómo publicarlo

1. Ejecuta `npm run check:content` y revisa los pendientes antes de publicar. Confirma qué puedes mostrar del proyecto municipal y del trabajo de título.
2. En Vercel o Netlify, conecta el repositorio, selecciona Vite y configura `npm run build` como comando y `dist` como carpeta de salida.
3. Define `SITE_URL` con la URL pública HTTPS definitiva e incluye la subruta si corresponde. La compilación se encarga del canonical, de la imagen social absoluta y de generar `sitemap.xml` y su entrada en `robots.txt`.
4. Revisa la URL, un enlace directo a un proyecto y la previsualización al compartir. Para actualizar el sitio, sube los cambios a la rama de despliegue y verifica el resultado de la nueva compilación.
