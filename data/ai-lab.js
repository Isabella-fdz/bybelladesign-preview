/* ==========================================================================
   AI LAB — experimentos y proyectos donde la IA forma parte del proceso.
   Guía de campos en README.md (sección "AI Lab").

   Reglas de contenido:
   - tipo "experimento": documentado desde el inicio (versiones, registro, decisiones reales).
   - tipo "profesional": entregables reales de un proyecto ya terminado. Sin prompts ni
     versiones reconstruidas: solo lo que existe.
   - estado "en-preparacion": se muestra como próximo experimento, sin enlace ni resultados.
   - Nada de métricas, prompts o imágenes inventadas. Lo que falte se anota en "pendientes"
     (solo visible con ?review=1).
   ========================================================================== */

window.AILAB = {
  // false: el AI Lab no aparece en el sitio (producción). publicar-preview.sh lo activa en la vista previa.
  publico: true,

  categorias: [
    {
      id: "product",
      num: "01",
      color: "#8b7bff",
      nombre: "Product & UX Thinking",
      desc: { es: "Definir el problema antes que la pantalla.", en: "Defining the problem before the screen." },
      temas: {
        es: ["Definición de problemas", "Conceptos de producto", "User flows y escenarios", "Investigación y síntesis"],
        en: ["Problem definition", "Product concepts", "User flows and scenarios", "Research and synthesis"],
      },
    },
    {
      id: "ui",
      num: "02",
      color: "#6f9bff",
      nombre: "UI & Experience Generation",
      desc: { es: "Explorar direcciones y quedarme con la que funciona.", en: "Exploring directions and keeping the one that works." },
      temas: {
        es: ["Direcciones visuales", "Layouts e interfaces", "Construcción de sitios web", "Refinamiento y consistencia"],
        en: ["Visual directions", "Layouts and interfaces", "Building websites", "Refinement and consistency"],
      },
    },
    {
      id: "prototype",
      num: "03",
      color: "#3ee0cf",
      nombre: "Prototyping & Development",
      desc: { es: "Del requisito a algo que se puede usar.", en: "From requirement to something you can use." },
      temas: {
        es: ["Prototipos interactivos", "Experimentos funcionales", "Requisitos convertidos en funcionalidades", "Iteración entre diseño, código y pruebas"],
        en: ["Interactive prototypes", "Functional experiments", "Requirements turned into features", "Iterating across design, code and tests"],
      },
    },
    {
      id: "data",
      num: "04",
      color: "#c77dff",
      nombre: "Data, Insights & Creative Content",
      desc: { es: "Convertir datos en decisiones de diseño.", en: "Turning data into design decisions." },
      temas: {
        es: ["Análisis de datos", "Análisis de pruebas de usabilidad", "Visualización de información", "Recursos visuales y audiovisuales"],
        en: ["Data analysis", "Usability test analysis", "Information visualization", "Visual and audiovisual assets"],
      },
    },
  ],

  /* tipo de resultado: concepto · analisis · diseno · prototipo · funcional */
  experimentos: [
    /* ============================================================ WHEN · ANIMACIONES
       Proyecto profesional (Katapult para WHEN Justice). Fuentes: los historiales de las sesiones de
       Claude Code en ~/Documents/WHEN (prompts literales, solo con la ortografía corregida), los DECISIONS
       de .design-workflow/model-case-pillars y home-impact-globe, el benchmark de 03-delivery/perf, gh
       (#743, #744, #737) y git (commits b4e1ef4b y fac591b8 de Isabella). Videos grabados de
       whenjustice.org el 21-11-2026; propuestas capturadas de los enlaces de Vercel de cada ronda. */
    {
      slug: "when-animaciones",
      tipo: "profesional",
      estado: "publicado",
      destacado: true,
      demo: false,
      nombre: "Case Pillars & Earthlings",
      etiqueta: { es: "WHEN Justice · animaciones interactivas", en: "WHEN Justice · interactive animations" },
      subtitulo: {
        es: "Dos animaciones para la web de WHEN Justice, diseñadas con prompts y prototipos en código, de la primera ronda al pull request.",
        en: "Two animations for the WHEN Justice website, designed with prompts and coded prototypes, from the first round to the pull request.",
      },
      contribucionCorta: {
        es: "Brief, criterio en cada ronda, QA, rendimiento y entrega en código y en Figma.",
        en: "Brief, judgment in every round, QA, performance, and delivery in code and Figma.",
      },
      categorias: ["ui", "prototype"],
      resultado: "funcional",
      color: "#E0461A",
      fecha: { es: "Noviembre 2026", en: "November 2026" },
      preview: "assets/ai-lab/when/case-pillars-poster.jpg",
      previewAlt: { es: "Case Pillars en whenjustice.org con un pilar abierto", en: "Case Pillars on whenjustice.org with one pillar open" },

      overview: {
        problema: {
          es: "La sección Case Pillars de la página del modelo necesitaba un rediseño con interacción, y el globo de donantes solo aparecía al terminar de donar. WHEN quería llevarlo también a la home.",
          en: "The Case Pillars section on the model page needed an interactive redesign, and the donor globe only appeared after giving. WHEN wanted it on the home page too.",
        },
        objetivo: {
          es: "Animaciones que inviten a explorar, sobre el design system Forma, en 4 breakpoints, sin pasar de un viewport y sin volver lenta la web en el celular.",
          en: "Animations that invite people to explore, on the Forma design system, across 4 breakpoints, never taller than the viewport and without slowing the site on phones.",
        },
      },

      secciones: [
        {
          tipo: "texto",
          id: "reto",
          num: "01",
          titulo: { es: "El reto", en: "The challenge" },
          texto: {
            es: [
              "Dos pedidos de la misma semana. En la página del modelo, rediseñar los siete pilares de los casos (lo que bebemos, respiramos, comemos…) con la misma información, pero con una interacción que invite a explorarlos. En la home, traer el globo que aparece en el agradecimiento de la donación, para que la home y la donación hablen el mismo idioma.",
              "Las dos piezas debían respetar el design system Forma y los 4 breakpoints de WHEN, caber en un viewport y no afectar el rendimiento en móvil.",
            ],
            en: [
              "Two requests in the same week. On the model page, redesign the seven case pillars (what we drink, breathe, eat…) with the same information, but with an interaction that invites people to explore them. On the home page, bring in the globe from the donation thank-you, so the home page and the donation speak the same language.",
              "Both pieces had to follow the Forma design system and WHEN’s 4 breakpoints, fit in one viewport, and not hurt performance on mobile.",
            ],
          },
        },
        {
          tipo: "texto",
          id: "workflow",
          num: "02",
          titulo: { es: "Cómo trabajé con IA", en: "How I worked with AI" },
          texto: {
            es: [
              "Trabajé con Claude Code dentro del repositorio de WHEN. Yo escribía el brief y las restricciones; el agente revisaba la web, el design system y los referentes, y construía cada propuesta como prototipo en código sobre los componentes reales. Cada ronda quedaba en un enlace de Vercel para revisarla en el navegador y compartirla con el equipo.",
              "Mi trabajo estaba en las rondas: mirar cada propuesta en vivo, decir qué no funcionaba y por qué, elegir qué seguía y detectar los cambios que nadie había pedido.",
            ],
            en: [
              "I worked with Claude Code inside WHEN’s repository. I wrote the brief and the constraints; the agent reviewed the site, the design system and the references, and built each proposal as a coded prototype on the real components. Each round lived on a Vercel link so I could review it in the browser and share it with the team.",
              "My work was in the rounds: looking at each proposal live, saying what didn’t work and why, choosing what came next, and catching changes nobody had asked for.",
            ],
          },
          puntos: {
            es: [
              "Delegado a la IA: investigación de la web y del design system, código de las propuestas y variaciones, benchmark de rendimiento, pull request y el componente en Figma.",
              "A mi cargo: brief y restricciones, criterio en cada ronda, elección final, QA, exigencia de usar siempre las variables del design system y la decisión de publicar.",
            ],
            en: [
              "Delegated to AI: researching the site and the design system, coding the proposals and variations, the performance benchmark, the pull request, and the Figma component.",
              "My responsibility: brief and constraints, judgment in every round, the final choice, QA, insisting on design system variables every time, and the call to ship.",
            ],
          },
        },

        /* ---------------- CASE PILLARS ---------------- */
        {
          tipo: "video",
          id: "case-pillars",
          num: "03",
          titulo: { es: "Case Pillars", en: "Case Pillars" },
          bajada: { es: "Cinco propuestas, seis variaciones y una publicada", en: "Five proposals, six variations, and one shipped" },
          embed: "assets/ai-lab/when/case-pillars/index.html",
          clase: "pillars",
          alt: { es: "Case Pillars en vivo: al pasar el cursor o tocar un pilar, su franja se abre y la foto aparece en una onda que sale del logo", en: "Case Pillars live: hovering or tapping a pillar opens its strip and the photo appears in a ripple that starts at the logo" },
          pie: { es: "El componente en vivo, con el código, los colores y las fotos de whenjustice.org/model (PR #743) y una tipografía sustituta de PP Telegraf. Pasa el cursor o toca un pilar: el logo cae en su sitio y la foto aparece en una onda. Mientras no interactúes, recorre los pilares solo.", en: "The component live, with the code, colours, and photos from whenjustice.org/model (PR #743) and a stand-in for the PP Telegraf typeface. Hover or tap a pillar: the logo drops in place and the photo appears in a ripple. Until you interact, it cycles through the pillars on its own." },
        },
        {
          tipo: "prompts",
          titulo: { es: "Del brief al pull request", en: "From brief to pull request" },
          nota: { es: "Una selección de mis prompts reales, copiados del historial de las sesiones. Solo corregí la ortografía; «[…]» marca lo que recorté.", en: "A selection of my real prompts, copied from the session history, in their original Spanish. I only fixed spelling; «[…]» marks cuts." },
          items: [
            {
              fecha: { es: "17 nov · el brief", en: "Nov 17 · the brief" },
              prompts: ["¿Ves la sección que dice Case Pillars en esta web? Necesito rediseñarla. Para ello es importante que tengas en cuenta los 4 breakpoints que usamos en WHEN y el design system, así como el estilo visual de los demás componentes de la web. […] Busca animaciones con las que se pueda interactuar para tener inspiración, y luego arma 5 opciones para reemplazar esa sección, con la misma información."],
              traduccion: { en: "Do you see the Case Pillars section on this site? I need to redesign it, taking into account WHEN’s 4 breakpoints, the design system and the visual style of the site’s other components. […] Look for interactive animations for inspiration, then build 5 options to replace that section, with the same information." },
              resultado: { es: "Cinco opciones en código, dentro de la página real y en los 4 breakpoints: Orbit, Strips, Sentence, Sequence y Grid.", en: "Five options in code, inside the real page and across the 4 breakpoints: Orbit, Strips, Sentence, Sequence, and Grid." },
              imagenes: [
                { src: "assets/ai-lab/when/pillars-r1-1.jpg", titulo: "1 · Orbit", alt: { es: "Opción Orbit: un dial con los siete iconos alrededor de la foto", en: "Orbit option: a dial with the seven icons around the photo" } },
                { src: "assets/ai-lab/when/pillars-r1-2.jpg", titulo: "2 · Strips", alt: { es: "Opción Strips: siete franjas de color, una abierta con su foto", en: "Strips option: seven colour strips, one open with its photo" } },
                { src: "assets/ai-lab/when/pillars-r1-3.jpg", titulo: "3 · Sentence", alt: { es: "Opción Sentence: una frase que cambia su final según el pilar", en: "Sentence option: a sentence whose ending changes with the pillar" } },
                { src: "assets/ai-lab/when/pillars-r1-4.jpg", titulo: "4 · Sequence", alt: { es: "Opción Sequence: un contador 04/07 con la foto a la derecha", en: "Sequence option: a 04/07 counter with the photo on the right" } },
                { src: "assets/ai-lab/when/pillars-r1-5.jpg", titulo: "5 · Grid", alt: { es: "Opción Grid: una retícula con los nombres de los pilares", en: "Grid option: a grid with the pillar names" } },
              ],
            },
            {
              fecha: { es: "17 nov · primera revisión", en: "Nov 17 · first review" },
              prompts: [
                "Cambia la 1 […], no cabe dentro del viewport. La 2 me gusta la animación, pero no que los nombres queden de lado.",
              ],
              traduccion: { en: "Change option 1 […], it doesn’t fit the viewport. I like option 2’s animation, but not the sideways names." },
              resultado: { es: "La 1 pasó de una lista tipográfica a Orbit, un diseño nuevo. En la 2, los nombres quedaron horizontales.", en: "Option 1 went from a type list to Orbit, a new design. In option 2, the names became horizontal." },
            },
            {
              fecha: { es: "17 nov · segunda ronda", en: "Nov 17 · second round" },
              prompts: ["Busca en el repo de WHEN en GitHub la carpeta public y luego legacy animation; deberás encontrar una animación que es como una flor con los Case Pillars. Usa esa animación para la propuesta 1. La propuesta 1 y 2 fueron las elegidas […] creamos 2 variaciones más de esa misma propuesta […] y hacemos dos variaciones más de la 2."],
              traduccion: { en: "Look in WHEN’s GitHub repo for public, then legacy animation; there’s a flower-like animation with the Case Pillars. Use it for proposal 1. Proposals 1 and 2 were chosen […] let’s create 2 more variations of that proposal […] and two more variations of proposal 2." },
              resultado: { es: "Seis variaciones en un enlace nuevo, sin perder el original: la flor reconstruida en código (1A, 1B y 1C) y tres versiones de las franjas (2A, 2B y 2C).", en: "Six variations on a new link, keeping the original: the flower rebuilt in code (1A, 1B, and 1C) and three versions of the strips (2A, 2B, and 2C)." },
              imagenes: [
                { src: "assets/ai-lab/when/pillars-r2-1a.jpg", titulo: "1A · Flower", alt: { es: "Variación 1A: la flor de pétalos de color girando", en: "Variation 1A: the colour-petal flower turning" } },
                { src: "assets/ai-lab/when/pillars-r2-1b.jpg", titulo: "1B · Bloom", alt: { es: "Variación 1B: la flor quieta con etiquetas y la foto al centro", en: "Variation 1B: the still flower with labels and the photo in the centre" } },
                { src: "assets/ai-lab/when/pillars-r2-1c.jpg", titulo: "1C · Night", alt: { es: "Variación 1C: la flor sobre fondo oscuro con la lista a la izquierda", en: "Variation 1C: the flower on a dark background with the list on the left" } },
                { src: "assets/ai-lab/when/pillars-r2-2a.jpg", titulo: "2A · Strips", alt: { es: "Variación 2A: franjas de color con un pilar abierto", en: "Variation 2A: colour strips with one pillar open" } },
                { src: "assets/ai-lab/when/pillars-r2-2b.jpg", titulo: "2B · Gallery", alt: { es: "Variación 2B: franjas con las fotos siempre visibles", en: "Variation 2B: strips with the photos always visible" } },
              ],
            },
            {
              fecha: { es: "17 nov · la animación de la 2C", en: "Nov 17 · the 2C animation" },
              prompts: [
                "La idea es dejar igual los stripes, solo que la animación o algo sea diferente a la 2A.",
                "Siento que es demasiado ese efecto de la 2C, busquemos algo más sutil pero notorio a la vez.",
                "Bien, pero un poco más rápido, y que el logo se desintegre con la imagen […].",
              ],
              traduccion: { en: "Keep the strips; only the animation should differ from 2A. / That effect is too much; let’s find something subtle but noticeable. / Good, but faster, and the logo should dissolve into the image." },
              resultado: { es: "Cinco intentos en una tarde: puntos de semitono, cortina, logo que viaja al centro, logo que se disuelve y, por último, la onda que sale del logo sin moverlo. Esa fue la elegida.", en: "Five attempts in one afternoon: halftone dots, a curtain, the logo travelling to the centre, the logo dissolving, and finally the ripple that starts at the logo without moving it. That was the one chosen." },
            },
            {
              fecha: { es: "18 nov · ajustes con el design system", en: "Nov 18 · design system tweaks" },
              prompts: [
                "Reduce el tamaño de los textos de What We Drink […], porque What We Neighbor no cabe bien, pero recuerda siempre usar estilos y variables del design system.",
                "Dejemos solo la versión original de la 2C y pongámosle al círculo del icono, cuando esté sobre los colores, un borde negro del mismo grosor que las líneas de los iconos.",
              ],
              traduccion: { en: "Reduce the size of the What We Drink texts, because What We Neighbor doesn’t fit, but always use design system styles and variables. / Keep only the original 2C and give the icon circle, when it sits on colour, a black border as thin as the icon strokes." },
              resultado: { es: "Probé cuatro fondos para el logo y los descarté porque parecían deshabilitados. Quedó el fondo arena original con un borde negro del grosor del icono, y los nombres con estilos del design system.", en: "I tried four backgrounds for the logo and dropped them because they looked disabled. The original sand background stayed, with a black border as thin as the icon, and the names use design system styles." },
            },
            {
              fecha: { es: "18 nov · a producción", en: "Nov 18 · to production" },
              prompts: ["Pon el componente en la página correcta […]. Borra esa URL del código y corre benchmarks de performance para que todo funcione rápido, incluso en mobile."],
              traduccion: { en: "Put the component on the right page […]. Remove that URL from the code and run performance benchmarks so everything runs fast, even on mobile." },
              resultado: { es: "El benchmark comparó la sección vieja con la nueva en el build de producción, y abrí el pull request #743, que ingeniería aprobó dos veces y mergeó.", en: "The benchmark compared the old and new sections on the production build, and I opened pull request #743, which engineering approved twice and merged." },
            },
            {
              fecha: { es: "18 nov · QA", en: "Nov 18 · QA" },
              prompts: ["Las cards en algún momento las modificaste sin que yo te lo pidiera […] Todos los títulos deben quedar a una sola línea. Lo único que te pedí antes fue cambiar el tamaño de los textos de los párrafos dentro de cada card, no los demás textos."],
              traduccion: { en: "At some point you changed the cards without me asking […] All titles must stay on one line. The only thing I asked for was changing the paragraph size inside each card, not the other texts." },
              resultado: { es: "El #743 se había mergeado con cambios en los títulos que yo no pedí. Lo detecté en la revisión y abrí el #744 para devolverlos a como estaban.", en: "#743 had been merged with title changes I didn’t ask for. I caught it in review and opened #744 to restore them." },
            },
            {
              fecha: { es: "19 nov · Figma", en: "Nov 19 · Figma" },
              prompts: [
                "En este link de Figma está el diseño de la web de Our Model. Necesito que sustituyas en todos los breakpoints el nuevo componente de Case Pillars, teniendo en cuenta cada breakpoint, sus variables, que estén bien configuradas.",
              ],
              traduccion: { en: "This Figma link has the Our Model page design. Replace the Case Pillars component in every breakpoint, with each breakpoint’s variables set up correctly." },
              resultado: { es: "El componente quedó en el archivo WHEN 2.0 con sus 4 variantes sobre las variables de Forma. En la revisión vi que el margen de tablet en código no seguía el design system (40 en vez de 24) y lo corregí.", en: "The component now lives in the WHEN 2.0 file with its 4 variants on Forma’s variables. In review I saw the tablet margin in code didn’t follow the design system (40 instead of 24) and fixed it." },
            },
          ],
        },
        {
          tipo: "cifras",
          titulo: { es: "Rendimiento: la sección vieja frente a la nueva", en: "Performance: old section vs. new" },
          items: [
            { valor: "0", texto: { es: "frames largos (más de 50 ms) en móvil al abrir los 7 pilares.", en: "long frames (over 50 ms) on mobile when opening all 7 pillars." }, medicion: { es: "igual que la sección vieja. Con la CPU 6 veces más lenta, también 0.", en: "same as the old section. With a 6× slower CPU, still 0." } },
            { desde: { es: "3.348 ms", en: "3,348 ms" }, valor: { es: "3.324 ms", en: "3,324 ms" }, texto: { es: "de LCP en móvil: la carga no cambió.", en: "mobile LCP: loading didn’t change." }, medicion: { es: "móvil 390 × 844, CPU 4 veces más lenta, 4G lenta, 3 corridas, medianas.", en: "390 × 844 mobile, 4× CPU slowdown, slow 4G, 3 runs, medians." } },
            { desde: "469 ms", valor: { es: "1.785 ms", en: "1,785 ms" }, texto: { es: "de trabajo del hilo principal durante las interacciones: el costo de animar.", en: "of main-thread work during interactions: the cost of animating." }, medicion: { es: "viene de animar el ancho de las franjas y el recorte circular. Sigue dentro del presupuesto: el frame p95 se mantuvo en 17 ms.", en: "it comes from animating strip width and the circular clip. It stays within budget: the p95 frame held at 17 ms." } },
          ],
        },

        /* ---------------- EARTHLINGS ---------------- */
        {
          tipo: "video",
          id: "earthlings",
          num: "04",
          titulo: { es: "El globo de Earthlings", en: "The Earthlings globe" },
          bajada: { es: "Del agradecimiento de la donación a la home", en: "From the donation thank-you to the home page" },
          embed: "assets/ai-lab/when/globo/index.html",
          alt: { es: "Globo de Earthlings en vivo: el pin entra girando, aterriza en el globo y una ola naranja enciende los puntos; se puede arrastrar para girarlo", en: "Live Earthlings globe: the pin spins in, lands on the globe, and an orange wave lights up the dots; it can be dragged to spin" },
          pie: { es: "La animación en vivo, con el motor real del globo y puntos de ejemplo en vez de donantes reales. Nació en el agradecimiento de la donación: el pin entra girando, aterriza en el globo y una ola naranja enciende a los demás Earthlings. La animación es mía; el equipo de desarrollo propuso cómo llevarla a la home, yo refiné esas propuestas y desarrollo publicó la sección (PR #737).", en: "The animation live, with the globe’s real engine and example dots instead of real donors. It was born in the donation thank-you: the pin spins in, lands on the globe, and an orange wave lights up the other Earthlings. The animation is mine; the development team proposed how to bring it to the home page, I refined those proposals, and development shipped the section (PR #737)." },
        },
        {
          tipo: "prompts",
          titulo: { es: "En donate: el pin de Earthlings", en: "In donate: the Earthlings pin" },
          nota: { es: "El globo nació en el agradecimiento de la donación, junto al pin de cada Earthling. Una selección de mis prompts reales para el pin; solo corregí la ortografía.", en: "The globe was born in the donation thank-you, next to each Earthling’s pin. A selection of my real prompts for the pin, in their original Spanish; I only fixed spelling." },
          items: [
            {
              fecha: { es: "19 nov · el brief", en: "Nov 19 · the brief" },
              prompts: ["Necesitamos crear una propuesta para las personas que donan más de una vez. Por ahora el pin es el mismo […] queremos poder hacer un pin que vaya mostrando las rachas: si dono una sola vez es el que ya tenemos, si dono 2 algo le pasa al pin, algo en él varía y me muestra esa racha de donación. […] Genera 5 propuestas de ese pin con cada donación, para rachas de hasta 5 veces por lo menos. Ten en cuenta cómo funciona WHEN visualmente, su identidad de marca, su estilo, su KV, sus colores, sus formas, todo."],
              traduccion: { en: "We need a proposal for people who give more than once. Today the pin stays the same […] we want a pin that shows streaks: one donation is the pin we have, with two something changes and shows the streak. […] Make 5 proposals of the pin for streaks of at least 5 donations. Consider how WHEN works visually: its brand identity, style, key visual, colours, shapes, everything." },
              resultado: { es: "Cinco propuestas dibujadas sobre el arte real del pin, cada una con sus 5 estados y la animación de una donación nueva.", en: "Five proposals drawn on the real pin artwork, each with its 5 states and the animation of a new donation." },
            },
            {
              fecha: { es: "19 nov · rondas", en: "Nov 19 · rounds" },
              prompts: [
                "Ten en cuenta para algunas propuestas la parte de atrás del pin.",
                "La 5 me gusta, pero hazlo por el reverso del pin y dentro del pin, no por fuera.",
                "[…] Debes fijarte siempre en el design system, en cómo es la marca, en lo que transmite, en cómo es su KV.",
              ],
              traduccion: { en: "Use the back of the pin for some proposals. / I like 5, but put it on the back and inside the pin, not outside. / […] Always look at the design system, at the brand, what it conveys, and its key visual." },
              resultado: { es: "Varias rondas entre el frente, el reverso y el canto del pin, siempre con el arte, los colores y las formas de WHEN.", en: "Several rounds across the front, back, and edge of the pin, always with WHEN’s artwork, colours, and shapes." },
            },
            {
              fecha: { es: "20 nov · la elegida", en: "Nov 20 · the pick" },
              prompts: [
                "Vamos a quedarnos con Heartbeat, y para esta vamos a hacer que los círculos empiecen en pequeño y se vayan agrandando […]",
                "Separa más los anillos para que se note el crecimiento.",
              ],
              traduccion: { en: "Let’s keep Heartbeat, and make the circles start small and grow […] / Space the rings further apart so the growth shows." },
              resultado: { es: "Heartbeat: cada donación suma un anillo de esmalte naranja en el reverso, de pequeño a grande, y el pin late una vez por donación. Falta definir qué cuenta como racha y que la API diga cuántas veces ha donado cada persona.", en: "Heartbeat: each donation adds an orange enamel ring on the back, from small to large, and the pin beats once per donation. Still open: what counts as a streak, and the API reporting how many times each person has given." },
              imagenes: [
                { src: "assets/ai-lab/when/pin-heartbeat.jpg", titulo: { es: "Heartbeat, de 1 a 5 donaciones", en: "Heartbeat, from 1 to 5 donations" }, alt: { es: "Reverso del pin con anillos naranjas y los estados de 1 a 5 donaciones", en: "Back of the pin with orange rings and the states from 1 to 5 donations" } },
              ],
            },
          ],
        },
        {
          tipo: "prompts",
          titulo: { es: "En la home: de diez propuestas a la sección publicada", en: "On the home page: from ten proposals to the shipped section" },
          nota: { es: "Una selección de mis prompts reales. Solo corregí la ortografía.", en: "A selection of my real prompts, in their original Spanish. I only fixed spelling." },
          items: [
            {
              fecha: { es: "13 nov · el brief", en: "Nov 13 · the brief" },
              prompts: [
                "Necesito que veas la animación de whenjustice.org/donate al final, cuando está el thank you, cuando se termina el flujo de donación. Esa misma animación es necesario agregarla de alguna forma al home para hacer el match entre ambas cosas. Busca formas que concuerden con el diseño del home y el design system de WHEN.",
                "Me gustan, pero dame al menos 10 opciones.",
              ],
              traduccion: { en: "Look at the animation at the end of whenjustice.org/donate, on the thank-you after donating. That same animation needs to be added to the home page somehow, to connect both. Find ways that match the home design and WHEN’s design system. / I like them, but give me at least 10 options." },
              resultado: { es: "Diez propuestas en un artifact de Claude para revisarlas y compartirlas.", en: "Ten proposals in a Claude artifact to review and share." },
            },
            {
              fecha: { es: "13 nov · restricciones", en: "Nov 13 · constraints" },
              prompts: [
                "En las demás propuestas, como la del hero o la de collective momentum, el globo debe verse más […]",
                "Pero esos banners no pueden superar el viewport.",
              ],
              traduccion: { en: "In the other proposals, like the hero or collective momentum ones, the globe must show more […] / But those banners can’t be taller than the viewport." },
              resultado: { es: "Una regla para todas las propuestas: ninguna más alta que el viewport, en ningún breakpoint.", en: "One rule for every proposal: none taller than the viewport, at any breakpoint." },
            },
            {
              fecha: { es: "13 nov · descartar la ronda", en: "Nov 13 · dropping the round" },
              prompts: ["No me gustan. La mayoría de las animaciones tiene los puntos mal, están aglomerados y no debería ser así. El globo no debe tener líneas verticales y horizontales. Las propuestas deben ser minimalistas pero impactantes. Mejor si son interactivas, que involucren al usuario, que lo motiven a ser parte de esa comunidad, que quiera ser el siguiente, que quiera explorar la animación."],
              traduccion: { en: "I don’t like them. Most animations get the dots wrong; they’re clumped and shouldn’t be. The globe shouldn’t have vertical and horizontal lines. Proposals should be minimal but striking. Ideally interactive: involving people, making them want to join the community, be next, explore the animation." },
              resultado: { es: "Descarté la ronda. La siguiente usó el motor original del globo, sin modificarlo, para que los puntos y el estilo fueran idénticos al agradecimiento.", en: "I dropped the round. The next one used the globe’s original engine, unmodified, so the dots and style matched the thank-you exactly." },
              imagenes: [
                { src: "assets/proyectos/when-justice/globo-propuesta-1.jpg", titulo: { es: "El globo como horizonte", en: "The globe as a horizon" }, alt: { es: "Propuesta con el globo como horizonte", en: "Proposal with the globe as a horizon" } },
                { src: "assets/proyectos/when-justice/globo-propuesta-3.jpg", titulo: { es: "Un mapa que crece", en: "A map that grows" }, alt: { es: "Propuesta con un mapa de puntos que crece en el tiempo", en: "Proposal with a dot map that grows over time" } },
                { src: "assets/proyectos/when-justice/globo-propuesta-7.jpg", titulo: { es: "Anillos como un árbol", en: "Rings like a tree" }, alt: { es: "Propuesta con anillos de crecimiento mensual", en: "Proposal with monthly growth rings" } },
                { src: "assets/proyectos/when-justice/globo-propuesta-9.jpg", titulo: { es: "El globo con la historia", en: "The globe with the story" }, alt: { es: "Propuesta con el globo y la historia del movimiento", en: "Proposal with the globe and the movement’s story" } },
              ],
            },
            {
              fecha: { es: "13 nov · combinar lo que gustó", en: "Nov 13 · combining what worked" },
              prompts: [
                "A partir de este artefacto y estos comentarios […] necesito que crees propuestas que incluyan las cosas que le gustaron de cada una, para generar 5 propuestas nuevas.",
                "Recuerda que todas las propuestas deben llevar el live wire feature y el scrolling ticker tape.",
              ],
              traduccion: { en: "Based on this artifact and these comments […] create proposals that include what they liked in each one, to make 5 new proposals. / Remember every proposal must include the live wire feature and the scrolling ticker tape." },
              resultado: { es: "El equipo de desarrollo había propuesto formas de llevar el globo a la home. WHEN eligió una base y pidió sumar tres funciones de otras propuestas: el live wire, el ticker y las constelaciones. Las refiné en cinco propuestas que las combinan, todas con el globo a toda la altura del banner.", en: "The development team had proposed ways to bring the globe to the home page. WHEN picked a base and asked to add three features from other proposals: the live wire, the ticker, and the constellations. I refined them into five proposals that combine those features, all with the globe at the banner’s full height." },
              imagenes: [
                { src: "assets/ai-lab/when/globe-r2-1.jpg", titulo: { es: "1 · Lista en vivo", en: "1 · Live list" }, alt: { es: "Propuesta con el globo a la derecha y la lista de los últimos donantes", en: "Proposal with the globe on the right and the latest donors list" } },
                { src: "assets/ai-lab/when/globe-r2-2.jpg", titulo: { es: "2 · Ticker arriba", en: "2 · Ticker on top" }, alt: { es: "Propuesta con el ticker de donantes en la parte superior", en: "Proposal with the donor ticker at the top" } },
                { src: "assets/ai-lab/when/globe-r2-3.jpg", titulo: { es: "3 · Cúpula", en: "3 · Dome" }, alt: { es: "Propuesta con el globo como una cúpula en la parte inferior", en: "Proposal with the globe as a dome at the bottom" } },
                { src: "assets/ai-lab/when/globe-r2-4.jpg", titulo: { es: "4 · Sala de control", en: "4 · Control room" }, alt: { es: "Propuesta con las cifras a la izquierda, el globo al centro y la lista a la derecha", en: "Proposal with figures on the left, the globe in the centre and the list on the right" } },
                { src: "assets/ai-lab/when/globe-r2-5.jpg", titulo: { es: "5 · Borde oscuro", en: "5 · Dark edge" }, alt: { es: "Propuesta sobre fondo oscuro con el globo al borde", en: "Proposal on a dark background with the globe at the edge" } },
              ],
              pie: { es: "Las cifras de estas propuestas son datos de prueba.", en: "The figures in these proposals are test data." },
            },
            {
              fecha: { es: "13 nov · QA", en: "Nov 13 · QA" },
              prompts: ["Cuando las redes se forman entre los puntos, los títulos de los pines quedan por detrás. Arréglalo, deberían quedar por encima."],
              traduccion: { en: "When the networks form between the dots, the pin titles end up behind them. Fix it; they should sit on top." },
              resultado: { es: "Los títulos de los pines quedaron por encima de los arcos.", en: "Pin titles now sit above the arcs." },
            },
            {
              fecha: { es: "16 nov · Figma", en: "Nov 16 · Figma" },
              prompts: [
                "Usa este como ejemplo para ver cómo debe quedar la sección de Earthlings con el globo […] Necesito que esa sección la repliques de acuerdo a los lineamientos de cada breakpoint, en su respectivo frame.",
                "Asegúrate de que los textos estén con la variable correcta. Aunque deben tener la misma variable y estilo que en desk, cada variable debe adaptarse al breakpoint correcto.",
              ],
              traduccion: { en: "Use this as the example of how the Earthlings section with the globe should look […] Replicate it following each breakpoint’s guidelines, in its own frame. / Make sure texts use the right variable: same variable and style as desktop, but adapted to each breakpoint." },
              resultado: { es: "La sección Earthlings quedó en el archivo WHEN 2.0 en los 4 breakpoints, con sus variables de texto. Desarrollo la construyó siguiendo ese diseño (PR #737).", en: "The Earthlings section landed in the WHEN 2.0 file across 4 breakpoints, with its text variables. Development built it from that design (PR #737)." },
            },
          ],
        },

        {
          tipo: "contribucion",
          id: "contribucion",
          num: "05",
          titulo: { es: "Mi contribución", en: "My contribution" },
          items: {
            es: ["El diseño de la animación del globo y el brief de las dos piezas, con sus restricciones: design system, 4 breakpoints, un viewport", "El criterio en cada ronda: qué no funcionaba y por qué", "La elección de la animación final de Case Pillars", "El pedido de medir el rendimiento antes de publicar", "El QA: los cambios que nadie pidió y el margen de tablet", "La entrega: pull request #743 y el componente en Figma"],
            en: ["Designing the globe animation and the brief for both pieces, with their constraints: design system, 4 breakpoints, one viewport", "Judgment in every round: what didn’t work and why", "Choosing the final Case Pillars animation", "Asking for performance to be measured before shipping", "QA: the unrequested changes and the tablet margin", "Delivery: pull request #743 and the component in Figma"],
          },
        },
        {
          tipo: "reflexion",
          id: "reflexion",
          num: "06",
          titulo: { es: "Reflexión", en: "Reflection" },
          limites: {
            es: ["Todavía no hay datos de uso: no se mide cuánta gente abre los pilares ni cuántos clics a donar salen del globo.", "Las versiones intermedias de la animación 2C no se guardaron como capturas; quedan los prompts que las describen.", "La animación de Case Pillars cuesta más trabajo del hilo principal que la sección vieja, aunque sigue dentro del presupuesto."],
            en: ["There’s no usage data yet: nobody measures how many people open the pillars or how many clicks to donate come from the globe.", "The in-between versions of the 2C animation weren’t saved as screenshots; the prompts that describe them remain.", "The Case Pillars animation costs more main-thread work than the old section, though it stays within budget."],
          },
          siguiente: {
            es: ["Medir la interacción con los pilares y los clics a donar desde el globo.", "Mergear el #744 y llevar a un pull request el margen de tablet."],
            en: ["Measure interaction with the pillars and clicks to donate from the globe.", "Merge #744 and open a pull request for the tablet margin."],
          },
        },
      ],
      pendientes: [
        "Confirmar que se pueden mostrar sus prompts con la ortografía corregida.",
      ],
    },

    /* ============================================================ CUIDA LOS FAROLES (DESTINY · DÍA DE VELITAS)
       Proyecto profesional para la comunicación interna de Destiny. Fuentes: ~/Documents/Destiny 2026/Velitas
       (DECISIONS.md con 40 decisiones del 18-11-2026, STATE.md, capturas de cada versión, prototipo/juego.html
       y el GIF del mail) y el historial de la sesión de Claude Code (prompts literales, solo con la ortografía
       corregida). El juego que se ve en vivo es el archivo final, sin cambios. Aún no se ha enviado (7 dic). */
    {
      slug: "cuida-los-faroles",
      tipo: "profesional",
      estado: "publicado",
      destacado: true,
      demo: false,
      nombre: "Cuida los Faroles",
      etiqueta: { es: "Destiny · Día de Velitas", en: "Destiny · Little Candles Day" },
      subtitulo: {
        es: "Una landing con minijuego para el Día de Velitas, hecha en un día con IA: de un benchmark visual a un juego de 30 segundos con sonido.",
        en: "A landing page with a minigame for Colombia’s Little Candles Day, built in one day with AI: from a visual benchmark to a 30-second game with sound.",
      },
      contribucionCorta: {
        es: "Concepto, dirección visual, reglas del juego, balance de dificultad y cada ronda de ajustes.",
        en: "Concept, visual direction, game rules, difficulty balance, and every round of adjustments.",
      },
      categorias: ["ui", "prototype"],
      resultado: "funcional",
      color: "#3A3F9E",
      fecha: { es: "Noviembre 2026", en: "November 2026" },
      preview: "assets/ai-lab/velitas/portada.webp",
      previewAlt: { es: "Cuida los Faroles: faroles de bronce encendidos en media luna bajo un cielo azul con luna", en: "Cuida los Faroles: lit bronze lanterns in a half-moon under a blue night sky" },

      overview: {
        problema: {
          es: "Destiny celebra el Día de Velitas con su equipo y quería una pieza interna por correo, en el formato corto e interactivo que ya había usado en Halloween.",
          en: "Destiny celebrates Little Candles Day with its team and wanted an internal email piece, in the short interactive format it had used for Halloween.",
        },
        objetivo: {
          es: "Una experiencia corta que una a los equipos y que dé ganas de compartir el puntaje, con la estética de los faroles colombianos.",
          en: "A short experience that brings teams together and makes people want to share their score, with the look of Colombian lanterns.",
        },
      },

      secciones: [
        {
          tipo: "texto",
          id: "reto",
          num: "01",
          titulo: { es: "El reto", en: "The challenge" },
          texto: {
            es: [
              "El Día de Velitas (7 de diciembre) abre la Navidad en Colombia: las familias encienden velas y faroles en la calle. Destiny quería celebrarlo con su equipo con un correo y una landing corta temática, como la que había hecho en Halloween.",
              "La pieza tenía que verse colombiana (nada de Navidad genérica), funcionar en el celular y en el computador, y ser lo bastante corta para jugarla entre una tarea y otra.",
            ],
            en: [
              "Little Candles Day (December 7) opens Christmas in Colombia: families light candles and lanterns in the street. Destiny wanted to celebrate it with its team through an email and a short themed landing page, like the one it made for Halloween.",
              "The piece had to feel Colombian (no generic Christmas), work on phones and computers, and be short enough to play between tasks.",
            ],
          },
        },
        {
          tipo: "texto",
          id: "workflow",
          num: "02",
          titulo: { es: "Cómo trabajé con IA", en: "How I worked with AI" },
          texto: {
            es: [
              "Trabajé con Claude Code en una sola jornada. Primero un benchmark solo visual; con él elegí la dirección y el tipo de farol. Desde ahí, cada versión fue una página que revisaba en el navegador y ajustaba con un prompt nuevo. Quedaron 40 decisiones registradas ese día.",
              "Todo está hecho en código: la ilustración, las animaciones, la música y los efectos de sonido se generan en la página, sin imágenes ni archivos de audio.",
            ],
            en: [
              "I worked with Claude Code in a single day. First a visual-only benchmark; with it I chose the direction and the lantern style. From there, every version was a page I reviewed in the browser and adjusted with a new prompt. That day left 40 recorded decisions.",
              "Everything is built in code: the illustration, animations, music, and sound effects are generated in the page, with no image or audio files.",
            ],
          },
          puntos: {
            es: [
              "Delegado a la IA: el benchmark, el código de la escena y del juego, el sonido y la medición de rendimiento.",
              "A mi cargo: el concepto, las referencias (el farol colombiano y los dos estilos de ilustración), las reglas, el balance de dificultad, los textos y cada ronda de ajustes.",
            ],
            en: [
              "Delegated to AI: the benchmark, the scene and game code, the sound, and performance measurement.",
              "My responsibility: the concept, the references (the Colombian lantern and the two illustration styles), the rules, difficulty balance, the copy, and every round of adjustments.",
            ],
          },
        },
        {
          tipo: "video",
          id: "juego",
          num: "03",
          titulo: { es: "Juégalo", en: "Play it" },
          bajada: { es: "El archivo final, tal como se enviará", en: "The final file, as it will be sent" },
          embed: "assets/ai-lab/velitas/juego/index.html",
          clase: "faroles",
          alt: { es: "Cuida los Faroles en vivo: raspa el fósforo, enciende el farol central y juega 30 segundos apagando incendios y encendiendo faroles", en: "Cuida los Faroles live: strike the match, light the central lantern, and play 30 seconds putting out fires and relighting lanterns" },
          pie: { es: "Raspa el fósforo en la caja y llévalo hasta el farol, o usa «Encender con un toque». Tiene música y efectos: el botón de arriba a la derecha lo silencia.", en: "Strike the match on the box and take it to the lantern, or use «Encender con un toque». It has music and sound effects: the top-right button mutes it." },
        },
        {
          tipo: "prompts",
          titulo: { es: "De la landing al minijuego", en: "From landing page to minigame" },
          nota: { es: "Una selección de mis prompts reales del 18 de noviembre. Solo corregí la ortografía; «[…]» marca lo que recorté.", en: "A selection of my real prompts from November 18, in their original Spanish. I only fixed spelling; «[…]» marks cuts." },
          items: [
            {
              fecha: { es: "El benchmark", en: "The benchmark" },
              prompts: [
                "Necesito que crees un benchmark de mails y landings cortas con temáticas festivas […] La que vamos a crear es con temática de Día de Velitas, la celebración colombiana, así que es importante que los referentes visuales vayan acorde a velas.",
                "[…] No me sirven artículos, solo referentes visuales, interacciones y estilos de ilustración.",
              ],
              traduccion: { en: "Create a benchmark of festive emails and short landing pages […] Ours is themed on Little Candles Day, the Colombian celebration, so the visual references must be about candles. / […] No articles: only visual references, interactions, and illustration styles." },
              resultado: { es: "Un benchmark solo visual: 29 microinteracciones y 48 estilos de ilustración de velas y faroles.", en: "A visual-only benchmark: 29 microinteractions and 48 illustration styles of candles and lanterns." },
            },
            {
              fecha: { es: "La dirección", en: "The direction" },
              prompts: ["Este tipo de faroles son muy comunes en Colombia: suelen ser de cartón con recortes de figuras y papel de colores detrás, que al prender la vela se ven del color del papel […] Me gusta el estilo de ilustración de Sathya y de Sweta B. Me imagino un camino iluminado a lado y lado con faroles de diferentes colores […] y buscar una interacción chévere con un farol que aparezca en la mitad de la pantalla."],
              traduccion: { en: "These lanterns are very common in Colombia: cardboard with cut-out shapes and colored paper behind, which glow in the paper’s color when the candle is lit […] I like Sathya’s and Sweta B’s illustration styles. I picture a path lit on both sides with lanterns of different colors […] and a cool interaction with a lantern in the middle of the screen." },
              resultado: { es: "Una landing: se raspa un fósforo en la caja, se acerca al farol central y la luz se pasa por todo el camino.", en: "A landing page: you strike a match on the box, bring it to the central lantern, and the light travels down the path." },
              imagenes: [
                { src: "assets/ai-lab/velitas/v1-carton.webp", titulo: { es: "Faroles de cartón", en: "Cardboard lanterns" }, alt: { es: "Primera versión: camino de faroles de cartón de colores con un farol al centro", en: "First version: a path of colored cardboard lanterns with one in the center" } },
                { src: "assets/ai-lab/velitas/v1-fondo.webp", titulo: { es: "Fondo de cordilleras", en: "Mountain backdrop" }, alt: { es: "Fondo con cordilleras en capas y bruma, en escritorio y móvil", en: "Backdrop with layered mountains and mist, on desktop and mobile" } },
              ],
            },
            {
              fecha: { es: "El minijuego", en: "The minigame" },
              prompts: [
                "Quiero otra versión, déjala aparte para no perder esta: que sea un minijuego, donde se incendia un farol y hay que apagarlo antes de que se queme; si se quema pierdes puntos, si se apaga uno debes encenderlo.",
                "La idea es que empecemos como con el otro: llega la persona a la landing y prende el farol, luego cambia un poco la pantalla para mostrar las reglas y el título cambia a «demuéstranos qué tan listo estás para la maratón de esta noche» o algo así.",
              ],
              traduccion: { en: "I want another version, kept separate so we don’t lose this one: a minigame where a lantern catches fire and you must put it out before it burns; if it burns you lose points, if one goes out you must relight it. / Let’s start like the other: the person arrives, lights the lantern, then the screen changes to show the rules and the title becomes «show us how ready you are for tonight’s marathon» or similar." },
              resultado: { es: "El juego arranca como la landing: al encender el farol central, el título cambia y aparecen las reglas.", en: "The game starts like the landing page: once the central lantern is lit, the title changes and the rules appear." },
              imagenes: [
                { src: "assets/ai-lab/velitas/juego-v2.webp", titulo: { es: "Primera partida", en: "First game" }, alt: { es: "Primera versión del minijuego con un farol en llamas", en: "First version of the minigame with a lantern on fire" } },
                { src: "assets/ai-lab/velitas/juego-v3-reglas.webp", titulo: { es: "Las reglas", en: "The rules" }, alt: { es: "El título cambia a «¿Qué tan listo estás para la maratón de esta noche?» con las reglas", en: "The title changes to «How ready are you for tonight’s marathon?» with the rules" } },
              ],
            },
            {
              fecha: { es: "El balance", en: "The balance" },
              prompts: [
                "1. El fósforo se debe encender cada vez que se va a usar. 2. A los faroles se les debe dar clic múltiples veces, no solo una vez: tú en la vida real no apagas uno tan fácil. […] El título debe notarse más al cambiar […], no sé si poner un glitch o un efecto de blur por un periodo muy corto.",
                "Haz que sea más impredecible si va a ser que se quema o que se apaga.",
                "Baja el tiempo a 30 segundos.",
              ],
              traduccion: { en: "1. The match must be struck each time it’s used. 2. Lanterns need several clicks, not one: in real life you don’t put one out that easily. […] The title change must be more noticeable […], maybe a glitch or a very brief blur. / Make it less predictable whether a lantern will burn or go out. / Cut the time to 30 seconds." },
              resultado: { es: "Seis versiones de dificultad en una tarde: de unos 13 eventos por partida (muy fácil) a 38 (imposible) y, al final, unos 20 en 30 segundos. Antes de cada evento el farol tiembla, sin que se sepa si se quemará o se apagará.", en: "Six difficulty versions in one afternoon: from about 13 events per game (too easy) to 38 (impossible) and, finally, about 20 in 30 seconds. Before each event the lantern shakes, without revealing whether it will burn or go out." },
              imagenes: [
                { src: "assets/ai-lab/velitas/juego-v4.webp", titulo: { es: "Glitch en el título", en: "Title glitch" }, alt: { es: "El título con efecto glitch y la partida con varios toques por incendio", en: "The title with a glitch effect and the game with several taps per fire" } },
                { src: "assets/ai-lab/velitas/juego-v5.webp", titulo: { es: "Llamas con más detalle", en: "More detailed flames" }, alt: { es: "Llamas con contorno, degradados y chispas sobre los faroles", en: "Flames with outline, gradients, and sparks on the lanterns" } },
              ],
            },
            {
              fecha: { es: "El farol", en: "The lantern" },
              prompts: [
                "Los faroles deben cambiar a la referencia que te pongo: deben tener mucho más detalle, pero no dañes la estética de la página general; deben tener más sombras para darle un poco más de 3D, al igual que las llamas.",
                "Lo único bueno es el cambio de color […] El camino debe acoplarse a la distribución de los faroles; ya no debe ser un camino como tal.",
              ],
              traduccion: { en: "The lanterns must change to the reference I’m sending: much more detail, without breaking the page’s overall look; more shadows for a bit of 3D, and the same for the flames. / The only good part is the color change […] The path must follow the lanterns’ layout; it shouldn’t be a path anymore." },
              resultado: { es: "Un farol de bronce con vidrio pintado (venado, pinos y nieve) que toma el color de cada luz, en media luna alrededor del central sobre una plazoleta ovalada.", en: "A bronze lantern with painted glass (deer, pines, and snow) that takes each light’s color, set in a half-moon around the central one on an oval plaza." },
              imagenes: [
                { src: "assets/ai-lab/velitas/farol-bronce.webp", titulo: { es: "El farol de bronce", en: "The bronze lantern" }, alt: { es: "Faroles de bronce en el juego", en: "Bronze lanterns in the game" } },
                { src: "assets/ai-lab/velitas/plazoleta.webp", titulo: { es: "La plazoleta", en: "The plaza" }, alt: { es: "Faroles en media luna sobre una plazoleta ovalada", en: "Lanterns in a half-moon on an oval plaza" } },
              ],
            },
            {
              fecha: { es: "Tutorial y sonido", en: "Tutorial and sound" },
              prompts: [
                "Quisiera que las instrucciones fueran diferentes: un modal que aparece al dar Empezar, con pasos que explican con un pequeño GIF lo que se debe hacer […]",
                "Pongamos una música de fondo muy suave que no se sienta invasiva y que vaya con el ambiente navideño, y sonidos que acompañen, como al prender el fósforo, cuando se enciende uno, cuando se apaga […]",
                "Añade al modal del final, cuando das el puntaje, un texto que diga algo como: compártelo con el equipo, veamos quién es el master cuidando farolitos.",
              ],
              traduccion: { en: "I’d like different instructions: a modal on Start, with steps that explain each action with a small GIF […] / Let’s add very soft, non-intrusive background music with a Christmas mood, and sounds for striking the match, lighting a lantern, one going out […] / In the final score modal, add something like: share it with the team, let’s see who the master lantern keeper is." },
              resultado: { es: "Un tutorial de 5 pasos con animaciones; «Noche de paz» en caja musical y efectos generados en la página, con botón para silenciar; y una invitación a compartir el puntaje.", en: "A 5-step tutorial with animations; «Silent Night» on a music box and effects generated in the page, with a mute button; and an invitation to share the score." },
              imagenes: [
                { src: "assets/ai-lab/velitas/tutorial.webp", titulo: { es: "El tutorial en 5 pasos", en: "The 5-step tutorial" }, alt: { es: "Los cinco pasos del tutorial: apagar incendios, raspar el fósforo, encender, no dejar que se quemen y empezar", en: "The five tutorial steps: put out fires, strike the match, relight, don’t let them burn, and start" } },
              ],
            },
          ],
        },
        {
          tipo: "cifras",
          titulo: { es: "Rendimiento y formato", en: "Performance and format" },
          items: [
            { desde: "33 ms", valor: "17 ms", texto: { es: "por cuadro (p95): el juego quedó fluido a 60 fps.", en: "per frame (p95): the game runs smoothly at 60 fps." }, medicion: { es: "en Chrome real, después de quitar los filtros de brillo de los faroles laterales y cambiar los brillos difuminados por degradados.", en: "in real Chrome, after removing glow filters from the side lanterns and replacing blurred glows with gradients." } },
            { desde: "16", valor: "0", texto: { es: "trabones de más de 50 ms durante la partida.", en: "stutters over 50 ms during a game." }, medicion: { es: "misma medición, antes y después de los cambios de rendimiento.", en: "same measurement, before and after the performance changes." } },
            { valor: "30 s", texto: { es: "por partida, con unos 20 eventos.", en: "per game, with about 20 events." }, medicion: { es: "punto medio entre la versión fácil (~13 eventos) y la imposible (~38).", en: "midpoint between the easy version (~13 events) and the impossible one (~38)." } },
          ],
        },
        {
          tipo: "contribucion",
          id: "contribucion",
          num: "04",
          titulo: { es: "Mi contribución", en: "My contribution" },
          items: {
            es: ["El concepto: una landing que se vuelve juego", "Las referencias: el farol colombiano y los estilos de ilustración", "Las reglas y el balance de dificultad, ronda por ronda", "Los textos del juego, del tutorial y del cierre", "Pedir medir y arreglar el rendimiento cuando se trababa"],
            en: ["The concept: a landing page that turns into a game", "The references: the Colombian lantern and the illustration styles", "The rules and difficulty balance, round by round", "The copy for the game, tutorial, and ending", "Asking to measure and fix performance when it stuttered"],
          },
        },
        {
          tipo: "reflexion",
          id: "reflexion",
          num: "05",
          titulo: { es: "Reflexión", en: "Reflection" },
          limites: {
            es: ["Todavía no se ha enviado (el Día de Velitas es el 7 de diciembre), así que no hay datos de aperturas, partidas ni puntajes compartidos.", "No hay datos de correos anteriores de Destiny para comparar.", "El arrastre del fósforo se revisó en el navegador; falta probarlo con más personas en celulares reales."],
            en: ["It hasn’t been sent yet (Little Candles Day is December 7), so there’s no data on opens, plays, or shared scores.", "There’s no data from Destiny’s previous emails to compare against.", "Dragging the match was reviewed in the browser; it still needs testing with more people on real phones."],
          },
          siguiente: {
            es: ["Medir aperturas del correo, partidas jugadas y puntajes compartidos después del 7 de diciembre.", "Usar esos datos como línea base para las próximas piezas internas."],
            en: ["Measure email opens, games played, and scores shared after December 7.", "Use that data as a baseline for future internal pieces."],
          },
        },
      ],
      pendientes: [
        "Confirmar que se puede mostrar el logo de Destiny y el juego completo en el portafolio.",
        "Después del 7 de diciembre: agregar aperturas, partidas y puntajes compartidos si Destiny los mide.",
        "Confirmar si alguien más participó (aprobación, envío del correo).",
      ],
    },

    /* ============================================================ RUMBO */
    {
      slug: "rumbo",
      tipo: "experimento",
      estado: "publicado",
      destacado: true,
      nombre: "Rumbo",
      etiqueta: { es: "Spain Visa Tracker", en: "Spain Visa Tracker" },
      subtitulo: {
        es: "Un gestor personal para seguir una solicitud de visa, de la idea a una app funcional.",
        en: "A personal manager to follow a visa application, from idea to a working app.",
      },
      resumen: {
        es: "Una app web que responde cuatro preguntas: dónde voy en el proceso, qué me falta, qué hago ahora y qué tengo que revisar, y cuándo.",
        en: "A web app that answers four questions: where am I in the process, what's missing, what do I do next, and what do I need to follow up on, and when.",
      },
      contribucionCorta: {
        es: "Problema, alcance, principios del producto y dirección visual.",
        en: "Problem, scope, product principles and visual direction.",
      },
      categorias: ["product", "ui", "prototype"],
      resultado: "funcional",
      color: "#6f6af8",
      fecha: { es: "Octubre 2026", en: "October 2026" },
      preview: "assets/ai-lab/rumbo/v3-inicio.webp",
      previewAlt: { es: "Inicio de Rumbo con el progreso del proceso y el siguiente paso", en: "Rumbo home with process progress and next step" },

      overview: {
        problema: {
          es: "Una solicitud de visa son decenas de requisitos, documentos con vencimiento y trámites con terceros. La información vive repartida entre correos, carpetas y conversaciones con el abogado.",
          en: "A visa application means dozens of requirements, expiring documents and procedures with third parties. The information is scattered across emails, folders and conversations with the lawyer.",
        },
        objetivo: {
          es: "Organizar lo que la persona ya sabe, mostrar el progreso real y sugerir el siguiente paso, sin reemplazar la asesoría legal.",
          en: "Organize what the person already knows, show real progress and suggest the next step, without replacing legal advice.",
        },
      },

      secciones: [
        {
          tipo: "texto",
          id: "reto",
          num: "01",
          titulo: { es: "El reto", en: "The challenge" },
          texto: {
            es: [
              "La idea nació de mi propia solicitud de una visa de nómada digital para España desde Colombia. Mi abogado me ayuda a interpretar el proceso legal; lo que me faltaba era un lugar para saber, de un vistazo, en qué punto estaba.",
              "La restricción más importante era de producto, no técnica: la herramienta no podía inventar requisitos ni dar por cierto algo que no estuviera verificado.",
            ],
            en: [
              "The idea came from my own application for a Spanish digital nomad visa from Colombia. My lawyer helps me interpret the legal process; what I was missing was one place to see, at a glance, where I stood.",
              "The key constraint was about the product, not the technology: the tool could not invent requirements or treat anything unverified as fact.",
            ],
          },
          puntos: {
            es: [
              "No consulta ninguna autoridad ni valida la autenticidad legal de los documentos.",
              "No incluye una lista oficial genérica: cada requisito indica su fuente.",
              "No es asesoría legal.",
            ],
            en: [
              "It doesn't query any authority or validate the legal authenticity of documents.",
              "It ships no generic official checklist: every requirement shows its source.",
              "It is not legal advice.",
            ],
          },
        },
        {
          tipo: "principios",
          id: "principios",
          num: "02",
          titulo: { es: "Principios del producto", en: "Product principles" },
          bajada: { es: "Las reglas que definí para que la herramienta fuera confiable", en: "The rules I set so the tool would be trustworthy" },
          items: [
            {
              titulo: { es: "Nada se completa solo", en: "Nothing completes itself" },
              texto: { es: "Un requisito nunca se marca como cumplido automáticamente. Cuando todos sus documentos están listos, la app solo lo sugiere y la persona confirma.", en: "A requirement is never completed automatically. When all its documents are ready, the app only suggests it and the person confirms." },
            },
            {
              titulo: { es: "Cada dato dice de dónde viene", en: "Every data point says where it comes from" },
              texto: { es: "Cada requisito indica su fuente: fuente oficial, confirmado por el abogado, ingresado por mí o ejemplo sin verificar.", en: "Every requirement shows its source: official source, confirmed by the lawyer, entered by me, or unverified example." },
            },
            {
              titulo: { es: "Los ejemplos se ven como ejemplos", en: "Examples look like examples" },
              texto: { es: "Los requisitos de ejemplo siempre llevan la etiqueta «Sin verificar» y no incluyen montos ni plazos.", en: "Example requirements always carry an «Unverified» label and include no amounts or timeframes." },
            },
            {
              titulo: { es: "La IA propone, la persona decide", en: "AI proposes, the person decides" },
              texto: { es: "El asistente responde con los datos registrados y separa datos, notas y sugerencias. Los cambios que propone solo se aplican al pulsar «Confirmar». Nunca recibe el contenido de los archivos.", en: "The assistant answers from the recorded data and separates data, notes and suggestions. The changes it proposes only apply after pressing «Confirm». It never receives file contents." },
            },
          ],
        },
        {
          tipo: "texto",
          id: "workflow",
          num: "03",
          titulo: { es: "Cómo trabajé con IA", en: "How I worked with AI" },
          texto: {
            es: [
              "Construí la app con un agente de programación con IA. Yo definí el problema, el alcance de la primera versión y las reglas del producto; el agente implementó, y yo revisé cada resultado en el navegador y pedí cambios hasta quedar conforme.",
              "Cada cambio quedó registrado en el historial del proyecto. Ese registro es la evidencia de cómo evolucionó: de un MVP funcional a una herramienta con identidad propia y listas más simples.",
            ],
            en: [
              "I built the app with an AI coding agent. I defined the problem, the scope of the first version and the product rules; the agent implemented, and I reviewed every result in the browser and asked for changes until I was satisfied.",
              "Every change was recorded in the project history. That record is the evidence of how it evolved: from a working MVP to a tool with its own identity and simpler lists.",
            ],
          },
          puntos: {
            es: [
              "Delegado a la IA: implementación, pruebas automáticas y documentación técnica.",
              "A mi cargo: problema, alcance, principios, dirección visual, revisión de cada pantalla y decisión final.",
            ],
            en: [
              "Delegated to AI: implementation, automated tests and technical documentation.",
              "My responsibility: problem, scope, principles, visual direction, reviewing every screen and the final call.",
            ],
          },
        },
        {
          tipo: "registro",
          id: "registro",
          titulo: { es: "Registro real del proyecto", en: "Real project log" },
          nota: { es: "Mensajes de los commits, tal como quedaron en el historial. 23 de octubre de 2026.", en: "Commit messages exactly as recorded in the history. October 23, 2026." },
          items: [
            { hora: "18:16", texto: "Build Rumbo: personal visa process manager MVP" },
            { hora: "21:15", texto: "Give Rumbo a brand identity and clearer hierarchy" },
            { hora: "21:23", texto: "Switch Rumbo to the Índigo direction and simplify remaining lists" },
            { hora: "21:40", texto: "Turn settings into an accordion list" },
            { hora: "21:43", texto: "Full-width settings accordion; stop layout shift; standard Tailwind setup" },
            { hora: "21:46", texto: "Settings: side-by-side short fields, country dropdowns" },
            { hora: "21:59", texto: "Load visa types and official requirements from a consulate-sourced catalog" },
            { hora: "22:06", texto: "Tasks: animated check, undo, uncheck, full pending list" },
          ],
        },
        {
          tipo: "iteraciones",
          id: "iteraciones",
          num: "04",
          titulo: { es: "Iteraciones y decisiones", en: "Iterations and decisions" },
          bajada: { es: "Tres versiones del inicio, capturadas del propio historial del proyecto", en: "Three versions of the home screen, captured from the project's own history" },
          items: [
            {
              version: "v1",
              nombre: { es: "MVP funcional", en: "Working MVP" },
              src: "assets/ai-lab/rumbo/v1-inicio.webp",
              alt: { es: "Primera versión del inicio, con seis bloques de información", en: "First version of the home screen, with six information blocks" },
              problema: { es: "Todo funcionaba, pero el inicio mostraba seis bloques con el mismo peso: progreso, bloqueados, vencidas, próximas, documentos y vigencias. Costaba saber qué mirar primero.", en: "Everything worked, but the home screen showed six blocks with the same weight: progress, blocked, overdue, upcoming, documents and expiry. It was hard to know what to look at first." },
            },
            {
              version: "v2",
              nombre: { es: "Primera identidad", en: "First identity" },
              src: "assets/ai-lab/rumbo/v2-inicio.webp",
              alt: { es: "Segunda versión con encabezado oscuro y acentos terracota", en: "Second version with a dark header and terracotta accents" },
              cambio: { es: "Una marca propia (azul petróleo, terracota y una tipografía serif) y una jerarquía clara: el progreso arriba, un solo «siguiente paso» y una agenda única «Esta semana» en lugar de seis bloques compitiendo.", en: "Its own brand (petrol blue, terracotta and a serif typeface) and a clear hierarchy: progress on top, a single «next step» and one «This week» agenda instead of six competing blocks." },
            },
            {
              version: "v3",
              nombre: { es: "Dirección Índigo", en: "Índigo direction" },
              src: "assets/ai-lab/rumbo/v3-inicio.webp",
              alt: { es: "Versión actual con superficies claras y un solo color de acento índigo", en: "Current version with light surfaces and a single indigo accent color" },
              cambio: { es: "Una sola tipografía, superficies claras y el índigo como único color de foco. La jerarquía de la v2 se mantiene; el siguiente paso pasa a su propia tarjeta y las demás listas se simplifican con el mismo filtro.", en: "One typeface, light surfaces and indigo as the only focus color. The v2 hierarchy stays; the next step moves to its own card and the other lists are simplified with the same filter." },
            },
          ],
          comparar: {
            antes: { src: "assets/ai-lab/rumbo/v1-requisitos.webp", alt: { es: "Requisitos en la primera versión", en: "Requirements in the first version" } },
            despues: { src: "assets/ai-lab/rumbo/requisitos.webp", alt: { es: "Requisitos en la versión actual", en: "Requirements in the current version" } },
            pie: { es: "Requisitos: v1 frente a la versión actual. Arrastra para comparar.", en: "Requirements: v1 vs. the current version. Drag to compare." },
          },
        },
        {
          tipo: "contribucion",
          id: "contribucion",
          num: "05",
          titulo: { es: "Mi contribución", en: "My contribution" },
          items: {
            es: ["Definición del problema, a partir de mi propia solicitud", "Alcance de la primera versión", "Principios del producto: fuentes, ejemplos sin verificar y confirmación manual", "Dirección visual: de la primera identidad a la dirección Índigo", "Revisión de cada pantalla y pedidos de ajuste", "Decisión final sobre qué conservar y qué descartar"],
            en: ["Problem definition, based on my own application", "Scope of the first version", "Product principles: sources, unverified examples and manual confirmation", "Visual direction: from the first identity to the Índigo direction", "Reviewing every screen and requesting adjustments", "Final call on what to keep and what to drop"],
          },
        },
        {
          tipo: "resultado",
          id: "resultado",
          num: "06",
          titulo: { es: "Resultado", en: "Final output" },
          bajada: { es: "Una app funcional, con datos de demostración en todas las capturas", en: "A working app, with demo data in every screenshot" },
          pantallas: [
            { src: "assets/ai-lab/rumbo/requisitos.webp", titulo: { es: "Requisitos", en: "Requirements" }, texto: { es: "Agrupados por categoría, con su fuente y sus dependencias. Solo se completan cuando la persona lo confirma.", en: "Grouped by category, with their source and dependencies. They only complete when the person confirms." } },
            { src: "assets/ai-lab/rumbo/documentos-zoom.webp", titulo: { es: "Documentos", en: "Documents" }, texto: { es: "Lo que ya tienes y lo que te falta, con estado y vencimiento.", en: "What you have and what you still need, with status and expiry." } },
            { src: "assets/ai-lab/rumbo/tareas-zoom.webp", titulo: { es: "Tareas", en: "Tasks" }, texto: { es: "Con plazos y dependencias: una tarea no se puede iniciar si la anterior no ha terminado.", en: "With deadlines and dependencies: a task can't start until the previous one is done." } },
            { src: "assets/ai-lab/rumbo/tramites-zoom.webp", titulo: { es: "Trámites y seguimiento", en: "Procedures and follow-up" }, texto: { es: "Lo que depende de una entidad externa. La persona registra el estado y Rumbo le recuerda cuándo revisar.", en: "What depends on an external entity. The person records the status and Rumbo reminds them when to check." } },
          ],
          movil: { src: "assets/ai-lab/rumbo/inicio-movil.webp", alt: { es: "Inicio de Rumbo en el celular", en: "Rumbo home on a phone" } },
          prueba: {
            es: "Aún no está publicado en línea. Funciona en local, con una cuenta de demostración con datos ficticios, y tiene 31 pruebas automáticas.",
            en: "It's not published online yet. It runs locally, with a demo account with fictitious data, and has 31 automated tests.",
          },
        },
        {
          tipo: "reflexion",
          id: "reflexion",
          num: "07",
          titulo: { es: "Reflexión", en: "Reflection" },
          limites: {
            es: ["Sin estado en tiempo real de ninguna entidad: los trámites se actualizan a mano, por diseño.", "Una sola solicitud activa por persona en la interfaz.", "No se ha hecho una revisión de seguridad externa. Todavía no está lista para guardar documentos sensibles en un servidor público."],
            en: ["No real-time status from any authority: procedures are updated by hand, by design.", "One active application per person in the interface.", "No external security review has been done. It's not ready yet to store sensitive documents on a public server."],
          },
          siguiente: {
            es: ["Llevarla de prototipo local a una web app publicada.", "Conectar una base de datos alojada y un almacenamiento privado y cifrado para los documentos que se cargan.", "Reforzar la seguridad: autenticación con un proveedor dedicado, permisos por usuario y una revisión externa.", "Activar los servicios que hoy están preparados pero sin conectar: recordatorios por correo y el asistente de IA."],
            en: ["Take it from a local prototype to a published web app.", "Connect a hosted database and private, encrypted storage for uploaded documents.", "Harden security: authentication with a dedicated provider, per-user permissions and an external review.", "Turn on the services that are ready but not yet connected: email reminders and the AI assistant."],
          },
        },
      ],
      pendientes: [
        "Confirmar la lista de «Mi contribución» y el texto de «Cómo trabajé con IA».",
        "Agregar «Lo que aprendí» en la reflexión (no se escribió para no inventarlo).",
        "Si hay prompts o instrucciones guardadas, agregar uno o dos fragmentos reales en «Cómo trabajé con IA».",
        "Cuando esté publicada en línea, agregar el enlace para probarla.",
      ],
    },

    /* ============================================================ PRÓXIMOS */
    {
      slug: "website-generation",
      tipo: "experimento",
      estado: "en-preparacion",
      destacado: true,
      nombre: "Website Generation",
      etiqueta: { es: "Experimento web", en: "Web experiment" },
      subtitulo: { es: "De un brief a una experiencia web, documentando cada ajuste de diseño.", en: "From a brief to a web experience, documenting every design adjustment." },
      plan: {
        es: ["Brief y objetivo", "Dirección inicial", "Estructura y contenido", "Interfaz generada", "Ajustes por criterio de diseño", "Resultado final"],
        en: ["Brief and goal", "Initial direction", "Structure and content", "Generated interface", "Design-led adjustments", "Final output"],
      },
      categorias: ["ui", "prototype"],
      resultado: "diseno",
      color: "#6f9bff",
    },
    {
      slug: "ux-data-analysis",
      tipo: "experimento",
      estado: "en-preparacion",
      destacado: true,
      nombre: "UX & Data Analysis",
      etiqueta: { es: "Experimento de análisis", en: "Analysis experiment" },
      subtitulo: { es: "Analizar resultados de pruebas con IA y convertir los hallazgos en decisiones de diseño.", en: "Analyzing test results with AI and turning findings into design decisions." },
      plan: {
        es: ["Pregunta a responder", "Datos de entrada (sintéticos si no hay reales, siempre identificados)", "Análisis asistido por IA", "Hallazgos y limitaciones", "Decisiones de diseño", "Visualización final"],
        en: ["Question to answer", "Input data (synthetic if no real data, always labeled)", "AI-assisted analysis", "Findings and limitations", "Design decisions", "Final visualization"],
      },
      categorias: ["data", "product"],
      resultado: "analisis",
      color: "#c77dff",
    },
  ],
};
