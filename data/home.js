/* ==========================================================================
   HOME — contenido de las secciones nuevas de la home (rediseño 2026).
   Los casos siguen viviendo en data/proyectos.js; aquí solo se decide qué se muestra,
   en qué orden y con qué imagen.

   Textos bilingües: { es: "...", en: "..." }.
   pendiente: true → el dato falta confirmarlo; se muestra con borde punteado en la vista previa.
   Fuente de la trayectoria: CV (assets/cv-isabella-montes.pdf).
   ========================================================================== */

window.HOME = {
  /* ---------- Hero ---------- */
  disponibilidad: {
    es: "Disponible · Senior Product Designer · Remoto",
    en: "Available · Senior Product Designer · Remote",
  },
  retrato: { src: "assets/retrato/isabella.jpg?v=2", alt: { es: "Retrato de Isabella Montes", en: "Portrait of Isabella Montes" } },

  /* ---------- Cifras (se animan al entrar en pantalla) ---------- */
  cifras: [
    { valor: { es: "+5", en: "5+" }, texto: { es: "años en diseño digital", en: "years in digital design" } },
    { desde: { es: "4 horas →", en: "4 hours →" }, valor: "5 min", texto: { es: "para pedir un CDT · Banco W", en: "to request a CDT · Banco W" } },
    { desde: { es: "7 pestañas →", en: "7 tabs →" }, valor: { es: "1 vista", en: "1 view" }, texto: { es: "para completar una solicitud · Nova", en: "to complete a request · Nova" } },
    { valor: "25/25", texto: { es: "completaron el pago en la prueba del prototipo · Keralty", en: "completed payment in the prototype test · Keralty" } },
  ],

  /* ---------- Trabajo seleccionado (orden de la home) ----------
     2026-11-21: tarjetas con mockups (assets/mockups/); la portada de cada caso usa otro mockup (portada en proyectos.js).
     pantallas: capturas que se muestran en la tarjeta (estilo M3 hasta tener las escenas M1).
     escena: foto de escena con el dispositivo (M1). Si existe, reemplaza a las pantallas. */
  seleccion: [
    {
      slug: "when-justice",
      nuevo: true,
      cliente: "WHEN Justice",
      nombre: "WHEN Justice",
      anio: { es: "2025 – hoy", en: "2025 – present" },
      industria: { es: "Impacto legal · ONG", en: "Legal impact · Nonprofit" },
      titular: {
        es: "Diseño de producto para una ONG que financia litigios contra quienes dañan la salud y el planeta: del modelo de campañas al de fondos.",
        en: "Product design for a nonprofit that funds litigation against those who harm health and the planet: from a campaign model to a fund model.",
      },
      comp: { tipo: "escena", src: "assets/mockups/when-macbook-sofa-beige.webp?v=2", pos: "center 55%", alt: { es: "Mockup de un MacBook sobre un sofá beige con el agradecimiento de la donación de WHEN Justice: el pin y el globo de Earthlings", en: "Mockup of a MacBook on a beige sofa with WHEN Justice’s donation thank-you: the Earthlings pin and globe" } },
      etiqueta: { es: "Nuevo", en: "New" },
      caso: true,
    },
    {
      slug: "banco-w",
      comp: { tipo: "escena", src: "assets/mockups/banco-w-iphone-cuero.webp", pos: "center 55%", alt: { es: "Mockup de un iPhone sobre un sofá de cuero con la pantalla «Confirma los datos» del CDT digital de Banco W", en: "Mockup of an iPhone on a leather sofa with Banco W’s digital CDT «Confirm your details» screen" } },
    },
    {
      slug: "nova",
      comp: { tipo: "escena", src: "assets/mockups/nova-macbook-madera.webp", pos: "center", alt: { es: "Mockup de un MacBook sobre una mesa de madera con la vista de un caso en Nova", en: "Mockup of a MacBook on a wooden table with a matter view in Nova" } },
    },
    {
      slug: "keralty",
      comp: { tipo: "escena", src: "assets/mockups/keralty-iphone-escritorio.webp", pos: "center 45%", alt: { es: "Mockup de un iPhone en un soporte con el pago en línea de las Clínicas Dentales", en: "Mockup of an iPhone on a stand with the Dental Clinics online payment" } },
    },
  ],

  /* ---------- Archivo: proyectos secundarios (FitUp queda fuera de la home) ---------- */
  archivo: [
    /* mockups (2026-11-21, prueba en «Otros proyectos» antes de llevarlos a los demás casos) */
    { slug: "mycoach", pantalla: "assets/mockups/mycoach-iphone-ambient.webp?v=2", mockup: true, pos: "center" },
    { slug: "lemon-joy", pantalla: "assets/mockups/lemon-joy-macbook-showcase.webp", mockup: true, pos: "center" },
    { slug: "fitup", pantalla: "assets/mockups/mycoach-iphone-mano.webp", mockup: true, pos: "center" },
  ],

  /* ---------- Diseño + IA ---------- */
  ia: [
    /* destacada: IA en producción para una marca grande (caso propio en /toyota/) */
    {
      destacado: true,
      nombre: "Toyota Colombia",
      tipo: { es: "IA en producción · imágenes de producto", en: "AI in production · product imagery" },
      texto: {
        es: "Páginas de vehículo para Toyota con fotos de producto creadas con Gemini y fieles a cada modelo: GR Yaris, RAV4 HEV, Corolla Cross.",
        en: "Vehicle pages for Toyota with product photos made in Gemini and true to every model: GR Yaris, RAV4 HEV, Corolla Cross.",
      },
      foto: "assets/proyectos/toyota/corolla-cross-gr-curva.jpg",
      metrica: { valor: "+15", texto: { es: "páginas publicadas, ~2 semanas cada una", en: "pages published, ~2 weeks each" } },
      href: "toyota/",
    },
    {
      nombre: "Cuida los Faroles",
      tipo: { es: "Día de Velitas · hecho 100% con IA", en: "Día de Velitas · built 100% with AI" },
      texto: {
        es: "Un juego corto para el Día de Velitas para enviar por correo corporativo: une a los equipos, genera comunidad y celebra el compañerismo.",
        en: "A short game for Colombia's Little Candles Day, made to be sent by company email to bring teams together and celebrate camaraderie.",
      },
      foto: "assets/mockups/faroles-macbook-concreto.webp",
      alt: { es: "Mockup de un MacBook con la pantalla de inicio de Cuida los Faroles", en: "Mockup of a MacBook with the Cuida los Faroles start screen" },
      href: "ai-lab/cuida-los-faroles/",
    },
    {
      nombre: "Rumbo",
      tipo: { es: "App propia · experimento con IA", en: "Personal app · AI experiment" },
      texto: {
        es: "Un gestor de trámites de visa que diseñé y construí con IA: progreso, documentos y próximos pasos en una sola vista.",
        en: "A visa-process manager I designed and built with AI: progress, documents and next steps in a single view.",
      },
      foto: "assets/mockups/rumbo-macbook-blanco.webp",
      alt: { es: "Mockup de un MacBook con el inicio de Rumbo y datos de demostración", en: "Mockup of a MacBook with Rumbo’s home screen and demo data" },
      href: "ai-lab/rumbo/",
    },
    {
      nombre: "WHEN Justice",
      tipo: { es: "IA en un producto real", en: "AI on a real product" },
      texto: {
        es: "Case Pillars y el globo de Earthlings: dos animaciones publicadas, con mis prompts, cada ronda de propuestas y el pull request.",
        en: "Case Pillars and the Earthlings globe: two shipped animations, with my prompts, every round of proposals, and the pull request.",
      },
      foto: "assets/mockups/when-ia-macbook-mesa-horizontal.webp",
      alt: { es: "Mockup de un MacBook sobre una mesa blanca con la sección Earthlings y el globo de WHEN Justice", en: "Mockup of a MacBook on a white table with the WHEN Justice Earthlings section and globe" },
      href: "ai-lab/when-animaciones/",
    },
  ],

  /* ---------- Cómo trabajo ---------- */
  /* imágenes de servicios: artefactos reales de los casos (2026-11-21; antes fotos de Unsplash) */
  servicios: [
    { t: { es: "Product design de punta a punta", en: "End-to-end product design" }, d: { es: "Discovery, flujos, prototipos y validación con usuarios.", en: "Discovery, flows, prototypes and user validation." }, prueba: "nova", cliente: "Nova", img: "assets/servicios/producto.jpg?v=4" },
    { t: { es: "Investigación y estrategia UX", en: "Research and UX strategy" }, d: { es: "Entrevistas, focus groups y pruebas, atadas a métricas de negocio.", en: "Interviews, focus groups and testing, tied to business metrics." }, prueba: "banco-w", cliente: "Banco W", img: "assets/servicios/investigacion.jpg?v=4" },
    { t: { es: "UI y design systems", en: "UI and design systems" }, d: { es: "Interfaces accesibles y sistemas listos para desarrollo.", en: "Accessible interfaces and systems ready for development." }, prueba: "when-justice", cliente: "WHEN Justice", img: "assets/servicios/ui-sistemas.jpg?v=4" },
    { t: { es: "Prototipos y producto con IA", en: "Prototyping and product with AI" }, d: { es: "Prototipos en código, QA y pull requests que ingeniería revisa.", en: "Coded prototypes, QA, and pull requests that engineering reviews." }, prueba: "when-justice", cliente: "WHEN Justice", img: "assets/servicios/ia.jpg?v=4" },
  ],

  /* ---------- Proceso (Folira): texto armado con lo que cuentan los casos; aprobado por Isabella (2026-11-19).
     Artefactos reales de los casos (2026-11-21; antes fotos de Unsplash elegidas por Isabella) ---------- */
  proceso: {
    pasos: [
      { t: { es: "Entender", en: "Understand" }, h: { es: "Entender el problema antes de diseñar.", en: "Understand the problem before designing." }, d: { es: "Entrevistas, datos y el proceso actual del negocio, para saber qué importa y qué se va a medir.", en: "Interviews, data and the current business process, to know what matters and what we will measure." }, img: "assets/proceso/entender.jpg?v=2", alt: { es: "Auditoría anotada de la página del NOW Fund de WHEN Justice", en: "Annotated audit of the WHEN Justice NOW Fund page" }, icono: "buscar" },
      { t: { es: "Diseñar", en: "Design" }, h: { es: "Flujos claros antes que pantallas.", en: "Clear flows before screens." }, d: { es: "Flujos, wireframes e interfaz sobre el design system, de cerca con producto e ingeniería.", en: "Flows, wireframes and UI on top of the design system, close to product and engineering." }, img: "assets/proceso/disenar.jpg?v=2", alt: { es: "Cuatro de las diez propuestas del globo de WHEN Justice", en: "Four of the ten WHEN Justice globe proposals" }, icono: "lapiz" },
      { t: { es: "Validar", en: "Validate" }, h: { es: "Probar con personas reales.", en: "Test with real people." }, d: { es: "Pruebas con usuarios y métricas para decidir con evidencia, no con opiniones.", en: "User testing and metrics to decide with evidence, not opinions." }, img: "assets/proceso/validar.jpg?v=2", alt: { es: "Mapa de calor de una prueba en Maze del pago de Keralty", en: "Heatmap from a Keralty payment test in Maze" }, icono: "check" },
      { t: { es: "Entregar", en: "Deliver" }, h: { es: "Listo para desarrollo.", en: "Ready for development." }, d: { es: "Entrego a desarrollo con specs y componentes, y hago QA de lo que se implementa. Con IA, también abro pull requests de interfaz que ingeniería revisa y aprueba.", en: "I hand off to development with specs and components, and QA what gets built. With AI, I also open interface pull requests that engineering reviews and approves." }, img: "assets/proceso/entregar-handoff.webp", fit: "contain", alt: { es: "Handoff de la pantalla Pre-Launch Progress de WHEN Justice: la tarjeta de campaña con su asistente por pasos y tres notas para desarrollo", en: "Handoff of the WHEN Justice Pre-Launch Progress screen: the campaign card with its step wizard and three notes for development" }, icono: "enviar" },
    ],
  },

  /* ---------- Trayectoria (fuente: CV) ---------- */
  trayectoria: [
    { anios: { es: "2024 – hoy", en: "2024 – now" }, rol: "Product Designer", lugar: { es: "Por contrato", en: "Contract work" }, vinculo: { es: "Contratista", en: "Contractor" },
      clientes: [
        { n: "Katapult · WHEN Justice", anios: { es: "2025 – hoy", en: "2025 – now" }, txt: { es: "Llegué con el producto en marcha e impulsé apostar por muchas donaciones pequeñas en vez de pocas grandes, con la web enfocada en conversión. Lidero el diseño y el design system; con IA prototipo, hago QA y abro pull requests.", en: "I joined with the product underway and pushed it to bet on many small donations over a few large ones, with a conversion-focused site. I lead design and the design system; with AI I prototype, run QA and open pull requests." } },
        { n: "Iridian", anios: "2024 – 2026", txt: { es: "Más de 6 proyectos de salud, tecnología y bienestar. MyCoach: del 41% al 68% de personas que completan el onboarding en la beta.", en: "6+ projects in health, tech and wellness. MyCoach: from 41% to 68% of people completing onboarding in the beta." } },
        { n: "Keralty", anios: "2025", txt: { es: "Sitio y portal de pagos de las Clínicas Dentales, con el pago probado por 83 personas en dos pruebas con prototipo.", en: "Dental Clinics website and payment portal, with the payment flow tested by 83 people in two prototype tests." } },
        { n: "Rob Levine Legal Solutions", anios: "2024 – 2025", txt: { es: "Nova: de 7 pestañas a una sola vista, −15% de errores y −20% de tiempo buscando información.", en: "Nova: from 7 tabs to a single view, −15% errors and −20% time finding information." } },
      ] },
    { anios: "2023 – 2024", rol: "UX/UI Designer", lugar: "Banco W", vinculo: { es: "Empleo directo", en: "Full-time" },
      desc: { es: "El primer producto 100% digital del banco: pedir un CDT pasó de unas 4 horas en la oficina a cinco minutos desde el celular.", en: "The bank’s first fully digital product: requesting a CDT went from about 4 hours at a branch to five minutes on a phone." } },
    { anios: "2020 – 2023", rol: "UX/UI Designer", lugar: "Destiny co", vinculo: { es: "Empleo directo", en: "Full-time" },
      desc: { es: "Interfaces web y móviles y piezas digitales para clientes como Rappi, Toyota y Colombina.", en: "Web and mobile interfaces and digital assets for clients such as Rappi, Toyota and Colombina." } },
  ],

  /* logos: Simple Icons 13.21.0 (CC0), pintados con el color de cada marca */
  herramientas: [
    { n: "Figma", logo: "assets/herramientas/figma.svg", c: "#F24E1E" },
    { n: "Maze", logo: "assets/herramientas/maze.svg", c: "#3B25E0" },
    { n: "Claude Code", logo: "assets/herramientas/claude.svg", c: "#D97757" },
    { n: "Google Analytics", logo: "assets/herramientas/googleanalytics.svg", c: "#E37400" },
    { n: "Adobe Creative Cloud", logo: "assets/herramientas/adobecreativecloud.svg", c: "#DA1F26" },
  ],

  testimonio: {
    pendiente: true,
    cita: { es: "Aquí va una cita real de un PM o ingeniero con quien hayas trabajado.", en: "A real quote from a PM or engineer you worked with goes here." },
    autor: { es: "Nombre · rol · empresa", en: "Name · role · company" },
  },

  contacto: {
    rol: { es: "Abierta a roles de Senior Product Designer · Remoto", en: "Open to Senior Product Designer roles · Remote" },
    lugar: { es: "Cali, Colombia · UTC−5 · Español nativo, inglés B2", en: "Cali, Colombia · UTC−5 · Native Spanish, English B2" },
  },
};
