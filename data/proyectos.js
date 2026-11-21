/* ==========================================================================
   PROYECTOS — el único archivo que necesitas editar para agregar casos.
   Guía completa de campos y bloques en README.md.

   Textos bilingües: { es: "...", en: "..." }  (o un string si es igual).
   En los textos puedes usar <em>palabra</em> para resaltarla con degradado.
   ========================================================================== */

window.PROYECTOS = [
  /* ======================================================== WHEN JUSTICE
     Armado con Isabella (2026-11-20). Fuentes: sus respuestas, el brief del 19-11, el repo y los
     DECISIONS de .design-workflow en ~/Documents/WHEN, y gh (PRs #335, #338, #743 mergeados).
     Sin métricas de producto: no existen todavía. El NOW Fund es una propuesta no presentada. */
  {
    slug: "when-justice",
    nombre: "WHEN Justice",
    cliente: "WHEN Justice",
    subtitulo: { es: "Producto digital de una ONG de litigio", en: "Digital product for a litigation nonprofit" },
    frases: {
      es: ["De la indignación a la acción.", "Muchas donaciones pequeñas.", "Hacer caro el daño."],
      en: ["From outrage to action.", "Many small donations.", "Make harm expensive."],
    },
    resumen: {
      es: "Diseño el producto digital de WHEN Justice, una ONG que financia litigios contra quienes dañan la salud y el planeta. Impulsé llevar la web de lo editorial a lo transaccional, para que donar no dependa solo de los eventos del fundador.",
      en: "I design the digital product of WHEN Justice, a nonprofit that funds litigation against those who harm health and the planet. I pushed to move the site from editorial to transactional, so giving doesn’t depend only on the founder’s events.",
    },
    anio: { es: "2025–hoy", en: "2025–present" },
    destacado: true,
    titular: {
      es: "Impulsé pasar de una web editorial a una enfocada en conversión, para que las donaciones no dependan solo de los eventos del fundador.",
      en: "I pushed to move from an editorial site to one focused on conversion, so donations don’t depend only on the founder’s events.",
    },
    producto: { es: "Sitio web y NOW Fund", en: "Website and NOW Fund" },
    industria: { es: "Impacto legal · ONG", en: "Legal impact · Nonprofit" },
    duracion: { es: "Desde octubre de 2025", en: "Since October 2025" },
    rol: { es: "Product Designer · con Katapult", en: "Product Designer · with Katapult" },
    alcance: { es: "Estrategia de producto, UX/UI, design system, prototipos en código, QA, pull requests", en: "Product strategy, UX/UI, design system, coded prototypes, QA, pull requests" },
    herramientas: "Figma, Claude Code, GitHub",
    equipo: { es: "Equipo de desarrollo de Katapult y la chief brand & content officer de WHEN", en: "Katapult’s development team and WHEN’s chief brand & content officer" },
    tags: { es: ["ONG", "Web", "Design system"], en: ["Nonprofit", "Web", "Design system"] },
    color: "#FF3C00",
    portada: { tipo: "escena", src: "assets/mockups/when-macbook-escalones.webp", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de un MacBook en unos escalones con la página de grants del NOW Fund", en: "Mockup of a MacBook on steps with the NOW Fund grants page" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { desde: { es: "12.892 px", en: "12,892 px" }, valor: { es: "7.741 px", en: "7,741 px" }, texto: { es: "de largo en la página de donantes del NOW Fund (propuesta)", en: "length of the NOW Fund donor page (proposal)" } },
          { valor: "3", texto: { es: "pull requests míos mergeados, cada uno con 2 aprobaciones de ingeniería", en: "of my pull requests merged, each with 2 engineering approvals" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Una causa que indigna, pero no convence de donar", en: "A cause that outrages, but doesn’t convince people to give" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Las donaciones llegaban casi solo en los <em>eventos del fundador</em>. El resto del tiempo, la web <em>solo informaba</em>.",
          en: "Donations came almost only at the <em>founder’s events</em>. The rest of the time, the site <em>only informed</em>.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["El fundador invita a donar a sus contactos en los eventos de WHEN, y ahí ocurrían las donaciones. Él quería construir un movimiento y una comunidad, pero eso no se veía ni en quién donaba ni en cómo se pedía.", "En una auditoría heurística del sitio, en escritorio y móvil, la conclusión fue clara: WHEN genera indignación, pero todavía no convence de que donar sirve. La página del NOW Fund medía 12.892 px y le hablaba a la vez a donantes y a equipos legales que piden fondos, sin un llamado a la acción en el hero."],
          en: ["The founder invites his contacts to give at WHEN’s events, and that’s where donations happened. He wanted to build a movement and a community, but that showed neither in who gave nor in how we asked.", "A heuristic audit of the site, on desktop and mobile, reached a clear conclusion: WHEN creates outrage, but doesn’t yet convince people that giving works. The NOW Fund page was 12,892 px long and spoke at once to donors and to legal teams applying for grants, with no call to action in the hero."],
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Llegar con el producto en marcha", en: "Joining with the product already running" } },
      {
        tipo: "texto",
        texto: {
          es: ["WHEN Justice es una ONG 501(c)(3) de Estados Unidos que financia litigios contra empresas que dañan la salud y el ambiente, con aportes individuales al NOW Fund. Su lema: hacer caro el daño."],
          en: ["WHEN Justice is a US 501(c)(3) nonprofit that funds litigation against companies that harm health and the environment, through individual contributions to the NOW Fund. Its motto: make harm expensive."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Mi rol y el del equipo", en: "My role and the team’s" },
        texto: {
          es: ["Llegué en octubre de 2025, con el producto en marcha, como Product Designer del equipo de Katapult que construye WHEN."],
          en: ["I joined in October 2025, with the product already running, as Product Designer on the Katapult team that builds WHEN."],
        },
        puntos: {
          es: [
            "Yo: lidero el diseño y el design system Forma, propongo qué cambiar y por qué, y llevo cada propuesta de la investigación al prototipo.",
            "Yo, con IA: prototipo en código sobre los componentes reales, hago QA y abro mis propios pull requests, que ingeniería revisa y aprueba antes de mergear.",
            "La chief brand & content officer de WHEN: decide de cara a nuestro equipo y es el puente con el fundador.",
            "Desarrollo de Katapult: construye y mantiene el producto.",
          ],
          en: [
            "Me: I lead design and the Forma design system, propose what to change and why, and take each proposal from research to prototype.",
            "Me, with AI: I prototype in code on the real components, run QA, and open my own pull requests, which engineering reviews and approves before merging.",
            "WHEN’s chief brand & content officer: makes decisions facing our team and is the bridge to the founder.",
            "Katapult’s developers: build and maintain the product.",
          ],
        },
      },
      {
        tipo: "prs",
        titulo: { es: "Mis pull requests", en: "My pull requests" },
        texto: { es: "Abro mis propios pull requests en el repositorio de WHEN. Ingeniería los revisa y los aprueba antes de mergearlos.", en: "I open my own pull requests in the WHEN repository. Engineering reviews and approves them before they’re merged." },
        items: [
          { numero: 743, titulo: "feat(model): Case Pillars strips with ripple reveal", estado: "merged", mas: 523, menos: 249, archivos: { es: "2 archivos", en: "2 files" }, aprobaciones: { es: "2 aprobaciones", en: "2 approvals" }, fecha: { es: "18 nov 2026", en: "Nov 18, 2026" } },
          { numero: 744, titulo: "fix(model): restore Case Pillars titles; only the paragraph changes size", estado: "open", mas: 44, menos: 48, archivos: { es: "2 archivos", en: "2 files" }, fecha: { es: "18 nov 2026", en: "Nov 18, 2026" } },
          { numero: 343, titulo: "Add icons library page", estado: "open", mas: 4692, menos: 55, archivos: { es: "143 archivos", en: "143 files" }, fecha: { es: "abr 2026", en: "Apr 2026" } },
          { numero: 338, titulo: "[PE-1056] reduce footer social icons to 32px", estado: "merged", mas: 5, menos: 0, archivos: { es: "1 archivo", en: "1 file" }, aprobaciones: { es: "2 aprobaciones", en: "2 approvals" }, fecha: { es: "13 abr 2026", en: "Apr 13, 2026" } },
          { numero: 335, titulo: "[PE-1055] adjust funding criteria banner font sizes", estado: "merged", mas: 2, menos: 2, archivos: { es: "1 archivo", en: "1 file" }, aprobaciones: { es: "2 aprobaciones", en: "2 approvals" }, fecha: { es: "13 abr 2026", en: "Apr 13, 2026" } },
        ],
        pie: { es: "Repositorio privado de WHEN; datos tomados de GitHub. En total, 10 pull requests: 3 mergeados, 2 abiertos y 5 cerrados o reemplazados.", en: "WHEN’s private repository; data taken from GitHub. 10 pull requests in total: 3 merged, 2 open, and 5 closed or superseded." },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La decisión de producto", en: "The product decision" }, bajada: { es: "De una web editorial a una transaccional", en: "From an editorial site to a transactional one" } },
      {
        tipo: "decision",
        titulo: { es: "Muchas donaciones pequeñas, no pocas grandes", en: "Many small donations, not a few large ones" },
        problema: { es: "Las donaciones dependían de los eventos y de los contactos del fundador; el resto del tiempo, la web no convertía.", en: "Donations depended on the founder’s events and contacts; the rest of the time, the site didn’t convert." },
        hallazgo: { es: "El fundador quería un movimiento, pero ni las donaciones ni la forma de pedirlas lo reflejaban: un movimiento se mide en cuántas personas participan.", en: "The founder wanted a movement, but neither the donations nor the way we asked reflected it: a movement is measured by how many people take part." },
        decision: { es: "Llevar la web de lo editorial a lo transaccional: enfocarla en conversión y en donaciones pequeñas, abiertas a cualquiera.", en: "Move the site from editorial to transactional: focus it on conversion and on small donations open to anyone." },
        porque: { es: "Si donar solo pasa en un evento, no hay movimiento. Tuve que convencer a la chief brand & content officer, que al inicio prefería una web más editorial.", en: "If giving only happens at an event, there’s no movement. I had to convince the chief brand & content officer, who at first preferred a more editorial site." },
      },
      {
        tipo: "texto",
        titulo: { es: "Lo que descartamos y cómo se medirá", en: "What we ruled out and how it will be measured" },
        texto: {
          es: ["Se descartó seguir usando la web como un espacio de contenido editorial. Se sabrá si funciona midiendo la conversión de la web, pero también cuando se implemente toda la estrategia de marketing: el cambio no es solo de la web, sino de cómo se presenta el producto en todos sus frentes."],
          en: ["We ruled out keeping the site as an editorial content space. We’ll know if it works by measuring the site’s conversion, but also once the full marketing strategy is in place: the change isn’t only the website, but how the product shows up on every front."],
        },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Una propuesta de producto y el sistema que la sostiene", en: "A product proposal and the system behind it" } },
      {
        tipo: "texto",
        titulo: { es: "NOW Fund en dos páginas · propuesta", en: "NOW Fund in two pages · proposal" },
        texto: {
          es: ["Una sola página le hablaba a dos públicos. La propuesta la divide: una para donantes, con el match 1:1 del fundador a la vista y un llamado a donar desde el hero, y otra para los equipos legales, con qué se financia, qué no y cómo es el proceso. La página de donantes pasa de 12.892 a 7.741 px, un 40 % más corta. Descarté la página única, un selector y un hub. Todavía no se ha presentado."],
          en: ["One page spoke to two audiences. The proposal splits it: one for donors, with the founder’s 1:1 match in sight and a call to give from the hero, and one for legal teams, with what’s funded, what isn’t, and how the process works. The donor page goes from 12,892 to 7,741 px, 40% shorter. I ruled out a single page, a switch, and a hub. It hasn’t been presented yet."],
        },
      },
      {
        tipo: "galeria",
        estilo: "carrusel",
        titulo: { es: "Propuesta del NOW Fund", en: "NOW Fund proposal" },
        imagenes: [
          { src: "assets/proyectos/when-justice/nowfund-donantes.jpg", alt: { es: "Hero de la página de donantes del NOW Fund", en: "NOW Fund donor page hero" }, titulo: { es: "Donantes: el hero", en: "Donors: the hero" }, texto: { es: "La promesa del fondo y el llamado a donar desde el primer pantallazo.", en: "The fund’s promise and the call to give from the first screen." } },
          { src: "assets/proyectos/when-justice/nowfund-match.jpg", alt: { es: "Bloque del match 1:1 del fundador", en: "Founder’s 1:1 match block" }, titulo: { es: "El match a la vista", en: "The match in sight" }, texto: { es: "El match 1:1 del fundador, antes invisible, como argumento para donar.", en: "The founder’s 1:1 match, previously invisible, as a reason to give." } },
          { src: "assets/proyectos/when-justice/nowfund-grants.jpg", alt: { es: "Hero de la página de grants", en: "Grants page hero" }, titulo: { es: "Grants: su propia página", en: "Grants: its own page" }, texto: { es: "Los equipos legales tienen una página para ellos, en vez de un correo.", en: "Legal teams get a page of their own, instead of an email link." } },
          { src: "assets/proyectos/when-justice/nowfund-criterios.jpg", alt: { es: "Qué financiamos y qué no", en: "What we fund and what we don’t" }, titulo: { es: "Qué sí y qué no", en: "What we fund and what we don’t" }, texto: { es: "Los criterios claros antes de aplicar, para no recibir solicitudes que no califican.", en: "Clear criteria before applying, to avoid applications that don’t qualify." } },
        ],
      },
      {
        tipo: "enlace",
        href: "ai-lab/when-animaciones/",
        img: "assets/ai-lab/when/case-pillars-poster.jpg",
        etiqueta: { es: "En el AI Lab", en: "In the AI Lab" },
        titulo: { es: "Case Pillars y el globo de Earthlings", en: "Case Pillars and the Earthlings globe" },
        texto: { es: "Las dos animaciones publicadas en whenjustice.org, funcionando en video, con mis prompts, cada ronda de propuestas y el benchmark de rendimiento.", en: "The two animations live on whenjustice.org, working on video, with my prompts, every round of proposals, and the performance benchmark." },
        cta: { es: "Ver el proceso con IA", en: "See the AI process" },
      },
      {
        tipo: "texto",
        titulo: { es: "El design system Forma", en: "The Forma design system" },
        texto: {
          es: ["Fondo beige, tinta negra, sin radios ni sombras y bordes de 1 px. El naranja es solo para la interacción y el logo, y cada pilar tiene su color. Abajo, la base del sistema y un componente documentado de punta a punta: el botón de donar."],
          en: ["Beige background, black ink, no radii or shadows, and 1 px borders. Orange is only for interaction and the logo, and each pillar has its own colour. Below, the system’s foundations and one component documented end to end: the donate button."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "PP Telegraf", uso: { es: "Títulos, texto y botones", en: "Headings, body and buttons" }, css: "'PP Telegraf', 'Familjen Grotesk', Arial, sans-serif" },
          { nombre: "Financier Display", uso: { es: "Citas y frases destacadas", en: "Quotes and highlighted lines" }, css: "'Financier Display', Georgia, serif" },
        ],
        colores: [
          { nombre: { es: "Fondo", en: "Background" }, hex: "#D7CFCB" },
          { nombre: { es: "Fondo claro", en: "Light background" }, hex: "#E1DEDB" },
          { nombre: { es: "Neutro", en: "Neutral" }, hex: "#C5BFBA" },
          { nombre: { es: "Borde", en: "Border" }, hex: "#A39A91" },
          { nombre: { es: "Tinta", en: "Ink" }, hex: "#000000" },
          { nombre: { es: "Oscuro", en: "Dark" }, hex: "#121A1E" },
          { nombre: { es: "Acento", en: "Accent" }, hex: "#FF3C00" },
          { nombre: { es: "Peligro", en: "Danger" }, hex: "#EC1818" },
        ],
        componentes: {
          titulo: { es: "Pilares", en: "Pillars" },
          fuente: "'PP Telegraf', 'Familjen Grotesk', Arial, sans-serif",
          grupos: [
            {
              nombre: { es: "Colores de los pilares", en: "Pillar colours" }, tipo: "botones", radio: "0", alto: "56px", relleno: "14px", tam: ".75rem", peso: 700,
              items: [
                { estado: "Drink", texto: "DRINK", fondo: "#547DA0", color: "#000000" },
                { estado: "Breathe", texto: "BREATHE", fondo: "#7CC8D0", color: "#000000" },
                { estado: "Eat", texto: "EAT", fondo: "#B9D31D", color: "#000000" },
                { estado: "Neighbor", texto: "NEIGHBOR", fondo: "#6A810A", color: "#000000" },
                { estado: "Discard", texto: "DISCARD", fondo: "#97623A", color: "#FFFFFF" },
                { estado: "Buy", texto: "BUY", fondo: "#E97B30", color: "#000000" },
                { estado: "Utilize", texto: "UTILIZE", fondo: "#C49101", color: "#000000" },
              ],
              ancha: true,
            },
          ],
        },
      },
      {
        tipo: "componente",
        nombre: { es: "Botón · Forma", en: "Button · Forma" },
        texto: "Donate",
        fuente: "'PP Telegraf', 'Familjen Grotesk', Arial, sans-serif",
        fondo: "#D7CFCB",
        foco: "0 0 0 2px #D7CFCB, 0 0 0 4px #FF3C00",
        intro: {
          es: "Es la acción de donar, el centro de la decisión de producto. Forma lo define en Figma como un set de 160 variantes en su versión base (2 tamaños × 5 estilos × 4 estados × 4 anchos), y en código es un solo componente, <code>@ui/button</code>, donde los estados no son props: los deriva el CSS. Estos son sus valores, tomados del archivo y del código.",
          en: "It’s the donate action, the heart of the product decision. Forma defines it in Figma as a set of 160 variants in its base version (2 sizes × 5 styles × 4 states × 4 widths), and in code it’s a single component, <code>@ui/button</code>, where states aren’t props: CSS derives them. These are its values, taken from the file and the code.",
        },
        fuentes: [
          { es: "Figma · Forma › Text Buttons (1758:934)", en: "Figma · Forma › Text Buttons (1758:934)" },
          { es: "Código · @ui/button", en: "Code · @ui/button" },
          { es: "Spec · figma-button-spec.md", en: "Spec · figma-button-spec.md" },
        ],
        anatomia: [
          { titulo: { es: "Contenedor.", en: "Container." }, detalle: { es: "Esquinas rectas y borde de 1 px, transparente cuando no se ve, para que un botón sólido y uno con borde midan lo mismo uno al lado del otro.", en: "Square corners and a 1 px border, transparent when it isn’t visible, so a solid button and an outlined one are the same height side by side." } },
          { titulo: { es: "Icono izquierdo, opcional.", en: "Left icon, optional." }, detalle: { es: "20 px; 24 px en danger outlined.", en: "20 px; 24 px in danger outlined." } },
          { titulo: { es: "Label.", en: "Label." }, detalle: { es: "PP Telegraf Regular, 16/20 en medium y 14/20 en small, en una sola línea.", en: "PP Telegraf Regular, 16/20 in medium and 14/20 in small, on one line." } },
          { titulo: { es: "Icono derecho, opcional.", en: "Right icon, optional." }, detalle: { es: "8 px de separación entre icono y texto.", en: "8 px between icon and text." } },
        ],
        ejes: [
          { prop: "variant", valores: { es: "solid · outline · ghost · naked · danger · danger outlined · white · internal · white on accent", en: "solid · outline · ghost · naked · danger · danger outlined · white · internal · white on accent" }, nota: { es: "white e internal son para fondos oscuros; white on accent, para fondos naranja.", en: "white and internal are for dark backgrounds; white on accent, for orange ones." } },
          { prop: "size", valores: { es: "small: 4 px arriba y abajo, texto 14 px, ~28 px de alto · medium: 12 px, texto 16 px, ~44 px", en: "small: 4 px top and bottom, 14 px text, ~28 px tall · medium: 12 px, 16 px text, ~44 px" }, nota: { es: "La altura sale del padding; no está fija.", en: "Height comes from the padding; it isn’t fixed." } },
          { prop: "width", valores: { es: "S 16 px · M 40 px · L 64 px de padding lateral · full: 100 % del contenedor", en: "S 16 px · M 40 px · L 64 px side padding · full: 100% of the container" } },
          { prop: "leftIcon · rightIcon", valores: { es: "Uno, el otro, los dos o ninguno.", en: "One, the other, both, or neither." } },
          { prop: "loading · disabled", valores: { es: "Cargando muestra el loader de WHEN y deja el botón inactivo sin cambiar su ancho.", en: "Loading shows the WHEN loader and makes the button inactive without changing its width." } },
          { prop: "href", valores: { es: "Con href se dibuja como enlace, con el mismo aspecto.", en: "With href it renders as a link, with the same look." } },
        ],
        estilos: ["solid", "outline", "ghost", "danger"],
        paleta: {
          solid: { reposo: ["#000000", "#FFFFFF"], hover: ["#FF3C00", "#FFFFFF"], presionado: ["#A1200B", "#FFFFFF"], deshabilitado: ["#A39A91", "#6F665D"] },
          outline: { reposo: ["transparent", "#000000", "#000000"], hover: ["#FF3C00", "#FFFFFF"], presionado: ["#A1200B", "#FFFFFF", "#FF3C00"], deshabilitado: ["transparent", "#6F665D", "#A39A91"] },
          ghost: { reposo: ["transparent", "#000000"], hover: ["#FF3C00", "#FFFFFF"], presionado: ["#A1200B", "#FFFFFF"], deshabilitado: ["transparent", "#6F665D"] },
          danger: { reposo: ["#EC1818", "#FFFFFF"], hover: ["#AF0505", "#FFFFFF"], presionado: ["#C11010", "#FFFFFF"], deshabilitado: ["#A39A91", "#6F665D"] },
        },
        notaEstados: {
          es: "Hover, presionado, deshabilitado y foco no son props: los deriva el CSS. El hover solo existe en dispositivos con puntero, porque en iOS un toque deja el hover pegado. El fondo es el beige de Forma, para ver cada estado en su contexto.",
          en: "Hover, pressed, disabled and focus aren’t props: CSS derives them. Hover only exists on pointer devices, because on iOS a tap leaves hover stuck. The background is Forma’s beige, to see each state in context.",
        },
        tokens: [
          { token: "background/neutral/neutral-inverted", hex: "#000000", uso: { es: "Fondo de solid en reposo", en: "Solid background at rest" } },
          { token: "text/neutral/neutral-inverted", hex: "#FFFFFF", uso: { es: "Texto sobre cualquier relleno", en: "Text on any fill" } },
          { token: "background/accent/accent-default", hex: "#FF3C00", uso: { es: "Hover de solid, outline y ghost", en: "Hover for solid, outline and ghost" } },
          { token: "background/accent/accent-bold-pressed", hex: "#A1200B", uso: { es: "Presionado", en: "Pressed" } },
          { token: "background/danger/danger-default", hex: "#EC1818", uso: { es: "Danger en reposo", en: "Danger at rest" } },
          { token: "background/danger/danger-bold-hover", hex: "#AF0505", uso: { es: "Danger en hover", en: "Danger on hover" } },
          { token: "background/neutral/neutral-disabled", hex: "#A39A91", uso: { es: "Relleno deshabilitado", en: "Disabled fill" } },
          { token: "text/neutral/neutral-weak", hex: "#6F665D", uso: { es: "Texto deshabilitado, en todos los estilos", en: "Disabled text, in every style" } },
        ],
        reglas: {
          es: [
            "El naranja es el color del hover, no del reposo: el botón sólido descansa en negro.",
            "outline y danger outlined sueltan el borde en hover; outline lo recupera, naranja, al presionar.",
            "danger se queda en rojos: nunca pasa a naranja.",
            "ghost va subrayado en reposo para que se lea como acción, y pierde el subrayado al rellenarse.",
            "Sobre un fondo naranja va white on accent, que pasa a negro en hover: un hover naranja desaparecería.",
            "Deshabilitado es igual en todos los estilos: texto #6F665D y, en los rellenos, fondo #A39A91.",
          ],
          en: [
            "Orange is the hover colour, not the resting one: the solid button rests on black.",
            "outline and danger outlined drop their border on hover; outline gets it back, in orange, when pressed.",
            "danger stays in reds: it never turns orange.",
            "ghost is underlined at rest so it reads as an action, and loses the underline when it fills.",
            "On an orange background, use white on accent, which turns black on hover: an orange hover would vanish.",
            "Disabled is the same in every style: #6F665D text and, on filled styles, a #A39A91 background.",
          ],
        },
        a11y: [
          { estado: "ok", texto: { es: "Reposo: blanco sobre negro, 21:1. Presionado: blanco sobre #A1200B, 7,7:1.", en: "Rest: white on black, 21:1. Pressed: white on #A1200B, 7.7:1." } },
          { estado: "no", texto: { es: "Hover: blanco sobre #FF3C00 da 3,56:1; no llega al 4,5:1 que pide un texto de 16 px regular.", en: "Hover: white on #FF3C00 is 3.56:1; it doesn’t reach the 4.5:1 that 16 px regular text needs." } },
          { estado: "no", texto: { es: "Foco: el anillo #FF3C00 sobre el beige #D7CFCB da 2,32:1; no llega al 3:1 que pide un indicador de foco (WCAG 1.4.11).", en: "Focus: the #FF3C00 ring on the #D7CFCB beige is 2.32:1; it doesn’t reach the 3:1 a focus indicator needs (WCAG 1.4.11)." } },
          { estado: "warn", texto: { es: "Danger: blanco sobre #EC1818 da 4,46:1, justo por debajo de 4,5:1.", en: "Danger: white on #EC1818 is 4.46:1, just under 4.5:1." } },
          { estado: "ok", texto: { es: "Medium mide 44 px de alto: el tamaño táctil recomendado.", en: "Medium is 44 px tall: the recommended touch size." } },
          { estado: "ok", texto: { es: "Inactivo de verdad: <code>disabled</code> en el botón y <code>aria-disabled</code> cuando es enlace. Al cargar, <code>aria-busy</code>, y el texto sigue disponible para lectores de pantalla.", en: "Truly inactive: <code>disabled</code> on the button and <code>aria-disabled</code> when it’s a link. While loading, <code>aria-busy</code>, and the label stays available to screen readers." } },
        ],
        propuesta: {
          titulo: { es: "Lo que falta resolver en Forma", en: "What Forma still needs to fix" },
          items: [
            { antes: true, estado: "hover", nota: { es: "Hover: 3,56:1", en: "Hover: 3.56:1" } },
            { estado: "hover", colores: ["#FF3C00", "#000000"], nota: { es: "Texto negro: 5,9:1, como ya hacen white e internal", en: "Black text: 5.9:1, as white and internal already do" } },
            { antes: true, estado: "foco", nota: { es: "Foco naranja: 2,32:1", en: "Orange focus: 2.32:1" } },
            { estado: "foco", anillo: "0 0 0 2px #D7CFCB, 0 0 0 4px #000000", nota: { es: "Foco negro: 13,7:1 sobre el beige", en: "Black focus: 13.7:1 on the beige" } },
          ],
        },
        codigo: {
          es: `import { Button } from '@ui/button'

<Button variant="solid" width="M" rightIcon={<ArrowRight />}>Donate</Button>
<Button variant="outline" size="small">Share</Button>
<Button href="/now-fund" variant="ghost">Read more</Button>
<Button loading>Donate</Button>   // inactivo, con aria-busy`,
          en: `import { Button } from '@ui/button'

<Button variant="solid" width="M" rightIcon={<ArrowRight />}>Donate</Button>
<Button variant="outline" size="small">Share</Button>
<Button href="/now-fund" variant="ghost">Read more</Button>
<Button loading>Donate</Button>   // inactive, with aria-busy`,
        },
        pie: {
          es: "Fuente: el archivo Forma en Figma (componente Text Buttons, nodo 1758:934) y su implementación en el repositorio de WHEN, <code>@ui/button</code>, hecha por desarrollo a partir de esa especificación. Los contrastes están calculados con los hex del código.",
          en: "Source: the Forma file in Figma (Text Buttons component, node 1758:934) and its implementation in the WHEN repository, <code>@ui/button</code>, built by engineering from that spec. Contrast ratios are calculated from the hex values in the code.",
        },
      },
      {
        tipo: "galeria",
        estilo: "carrusel",
        titulo: { es: "Componentes del nuevo diseño", en: "Components of the new design" },
        imagenes: [
          { src: "assets/proyectos/when-justice/kit-case-pillars.jpg", alt: { es: "Componente Case Pillars en escritorio y en móvil", en: "Case Pillars component on desktop and mobile" }, titulo: { es: "Case Pillars", en: "Case Pillars" }, texto: { es: "El componente que diseñé y publiqué, con variantes para 4 breakpoints: en móvil las franjas pasan a filas.", en: "The component I designed and shipped, with variants for 4 breakpoints: on mobile the strips become rows." } },
          { src: "assets/proyectos/when-justice/kit-donacion.jpg", alt: { es: "Módulo de donación con montos, frecuencia y match", en: "Donation module with amounts, frequency, and match" }, titulo: { es: "Módulo de donación", en: "Donation module" }, texto: { es: "Montos pequeños a la vista, donación única o mensual y el match x2 como argumento: la decisión de producto hecha componente.", en: "Small amounts up front, one-time or monthly, and the x2 match as a reason to give: the product decision as a component." } },
          { src: "assets/proyectos/when-justice/kit-menu-desktop.jpg", alt: { es: "Menú de escritorio con un submenú abierto", en: "Desktop menu with a submenu open" }, titulo: { es: "Menú con submenús", en: "Menu with submenus" }, texto: { es: "La sección activa marcada en naranja y su submenú desplegado.", en: "The active section marked in orange with its submenu open." } },
          { src: "assets/proyectos/when-justice/kit-menu-movil.jpg", alt: { es: "Menú móvil cerrado y con dos secciones abiertas", en: "Mobile menu closed and with two sections open" }, titulo: { es: "Menú móvil", en: "Mobile menu" }, texto: { es: "Secciones en acordeón: cerrado, Work abierto y Community abierto.", en: "Accordion sections: closed, Work open, and Community open." } },
        ],
        pie: { es: "Del archivo WHEN 2.0 en Figma, construido sobre Forma.", en: "From the WHEN 2.0 Figma file, built on Forma." },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Lo publicado y lo que falta medir", en: "What shipped and what’s left to measure" } },
      {
        tipo: "resultado",
        items: [
          { desde: { es: "12.892 px", en: "12,892 px" }, valor: { es: "7.741 px", en: "7,741 px" }, texto: { es: "de largo en la página de donantes (−40 %).", en: "length of the donor page (−40%)." }, medicion: { es: "altura de la página a 1440 px de ancho, la publicada frente a la propuesta.", en: "page height at 1440 px wide, live vs. proposal." } },
          { valor: "3", texto: { es: "pull requests míos mergeados.", en: "of my pull requests merged." }, medicion: { es: "#335, #338 y #743, cada uno con dos aprobaciones de ingeniería antes de mergear.", en: "#335, #338 and #743, each with two engineering approvals before merging." } },
        ],
      },
      {
        tipo: "texto",
        texto: {
          es: ["Todavía no hay datos de conversión ni de donaciones después de estos cambios. El NOW Fund en dos páginas es una propuesta que aún no se ha presentado. Case Pillars, publicado con mi pull request #743, está documentado en el AI Lab."],
          en: ["There’s no conversion or donation data yet after these changes. The two-page NOW Fund is a proposal that hasn’t been presented yet. Case Pillars, shipped with my pull request #743, is documented in the AI Lab."],
        },
      },

      { tipo: "capitulo", num: "06", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "El cambio más importante no fue visual: fue convencer de pasar de una web editorial a una transaccional. Y eso no se resuelve solo en la web; depende de cómo se presenta el producto en todos sus frentes.", en: "The most important change wasn’t visual: it was convincing the team to move from an editorial site to a transactional one. And that isn’t solved by the website alone; it depends on how the product shows up on every front." },
        distinto: { es: "Acordaría desde el inicio cómo se mide la conversión, para mostrar el efecto de la decisión con datos y no solo con argumentos.", en: "I’d agree on how conversion is measured from the start, to show the decision’s effect with data and not only with arguments." },
      },
    ],
  },
  /* ============================================================= BANCO W */
  {
    slug: "banco-w",
    composicion: "fan",
    acabado: "desert",
    nombre: "Digital CDT",
    cliente: "Banco W",
    subtitulo: { es: "El primer producto digital del banco", en: "The bank’s first digital product" },
    frases: {
      es: ["Sin filas.", "Sin papeleo.", "Sin ir a la oficina."],
      en: ["No lines.", "No paperwork.", "No branch visits."],
    },
    resumen: {
      es: "Lideré el diseño del primer producto 100% digital de Banco W: abrir un CDT desde el celular, sin pisar una oficina.",
      en: "I led the design of Banco W’s first fully digital product: opening a CDT from your phone, without setting foot in a branch.",
    },
    anio: "2023–2024",
    destacado: true,
    titular: {
      es: "Pedir un CDT pasó de unas 4 horas en la oficina, entre desplazamiento, fila y atención, a cinco minutos desde el celular.",
      en: "Requesting a CDT went from about 4 hours at a branch, between travel, waiting in line, and service, to five minutes on a phone.",
    },
    producto: { es: "CDT digital (web y móvil)", en: "Digital CDT (web and mobile)" },
    industria: "Fintech",
    duracion: { es: "4 meses", en: "4 months" },
    rol: { es: "Product Designer (líder de diseño)", en: "Product Designer (design lead)" },
    alcance: { es: "Service design, investigación, UI, QA", en: "Service design, research, UI, QA" },
    herramientas: "Figma",
    equipo: { es: "1 Product Owner, 1 full stack, 1 back-end, 1 analista de datos", en: "1 Product Owner, 1 full stack, 1 back-end, 1 data analyst" },
    tags: { es: ["Fintech", "Mobile", "Service design"], en: ["Fintech", "Mobile", "Service design"] },
    color: "#b18cff",
    escena: [
      { dispositivo: "phone", src: "assets/proyectos/banco-w/screen-schedule.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/banco-w/screen-data.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/banco-w/screen-transfer.jpg" },
    ],
    portada: { tipo: "escena", src: "assets/mockups/banco-w-dos-iphone.webp", ratio: "3 / 2", pos: "center 55%", alt: { es: "Mockup de dos iPhone con la bienvenida al CDT digital y el código de verificación de Banco W", en: "Mockup of two iPhones with Banco W’s digital CDT welcome and verification code screens" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { desde: { es: "4 horas", en: "4 hours" }, valor: "5 min", texto: { es: "para pedir un CDT desde el celular, sin ir a una oficina", en: "to request a CDT on a phone, without visiting a branch" } },
          { valor: "+30%", texto: { es: "en satisfacción (CSAT) frente al proceso en oficina", en: "in satisfaction (CSAT) vs. the in-branch process" } },
          { valor: "+20%", texto: { es: "aperturas de CDT en los primeros 6 meses frente al año anterior", en: "CDT openings in the first 6 months vs. the year before" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Un producto popular, atrapado en una oficina", en: "A popular product, trapped in a branch" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Abrir un CDT podía tomar <em>hasta dos semanas</em>, con filas de <em>más de dos horas</em> y al menos dos visitas a la oficina.",
          en: "Opening a CDT could take <em>up to two weeks</em>, with lines of <em>over two hours</em> and at least two branch visits.",
        },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Antes", en: "Before" },
          puntos: {
            es: ["Ir físicamente a una oficina para empezar y terminar", "Al menos dos visitas por documentos faltantes", "Requisitos confusos e información incompleta", "Hasta dos semanas para tener el producto"],
            en: ["Visit a branch to start and finish", "At least two visits due to missing documents", "Confusing requirements and incomplete information", "Up to two weeks to get the product"],
          },
        },
        despues: {
          titulo: { es: "Después", en: "After" },
          puntos: {
            es: ["Todo desde el celular o el computador", "Onboarding corto, guiado paso a paso", "Solo la información realmente necesaria", "El dinero llega a donde la persona elija"],
            en: ["Everything from a phone or computer", "A short onboarding, guided step by step", "Only the information that’s truly needed", "Money goes wherever the customer chooses"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Un banco sin productos digitales y un equipo pequeño", en: "A bank with no digital products and a small team" } },
      {
        tipo: "texto",
        texto: {
          es: ["Banco W es una entidad colombiana con fuerte presencia en ahorro e inversión, y el CDT es uno de sus productos más usados. Pero el proceso exigía ir a una oficina, mucho papeleo y varios pasos que generaban abandono, sobre todo para quienes viven en zonas remotas."],
          en: ["Banco W is a Colombian bank with a strong presence in savings and investment, and the CDT is one of its most used products. But opening one required branch visits, paperwork, and multiple steps that drove drop-offs, especially for people in remote areas."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Las restricciones", en: "The constraints" },
        texto: {
          es: ["Era el primer producto 100% digital del banco, así que no había nada que reutilizar: ni componentes, ni flujos, ni procesos internos para atender solicitudes en línea. Lideré el diseño de punta a punta con el Product Owner del banco, que definía las prioridades con negocio, y un equipo de tres personas de ingeniería y datos."],
          en: ["This was the bank’s first fully digital product, so there was nothing to reuse: no components, no flows, no internal process to handle online requests. I led design end to end with the bank’s Product Owner, who set priorities with the business, and a three-person engineering and data team."],
        },
        puntos: {
          es: ["Regulación financiera: verificación de identidad y origen de fondos obligatorios.", "Deuda técnica: las cuentas de ahorro del banco no eran transaccionales.", "4 meses para pasar de la idea a producción.", "Usuarios en zonas remotas, con conexiones inestables."],
          en: ["Financial regulation: mandatory identity and source-of-funds checks.", "Technical debt: the bank’s savings accounts weren’t transactional.", "4 months to go from idea to production.", "Users in remote areas, on unstable connections."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Mi rol y el del equipo", en: "My role and the team’s" },
        texto: {
          es: ["Mi trabajo fue hacer viable el producto y diseñar toda la experiencia. Las decisiones de más alto nivel eran del Product Owner con negocio."],
          en: ["My job was to make the product viable and design the entire experience. Higher-level decisions belonged to the Product Owner and the business."],
        },
        puntos: {
          es: [
            "Yo: negocié con cumplimiento, riesgo, negocio y tecnología los requisitos mínimos para que el producto cumpliera la norma.",
            "Yo: negocié los datos mínimos del formulario, los topes y las transacciones, y revisé la deuda técnica para saber qué se podía construir y qué no.",
            "Yo: la experiencia completa: investigación, flujos, UI kit, pruebas con clientes y entrega a desarrollo.",
            "Product Owner: las prioridades con negocio y decisiones como qué deuda técnica resolver para ampliar los topes.",
            "Ingeniería y datos (3 personas): la construcción del producto.",
          ],
          en: [
            "Me: negotiated with compliance, risk, business, and technology the minimum requirements for the product to meet regulation.",
            "Me: negotiated the minimum form data, limits, and transactions, and reviewed technical debt to know what could and couldn’t be built.",
            "Me: the entire experience: research, flows, UI kit, customer testing, and handoff to development.",
            "Product Owner: priorities with the business and decisions such as which technical debt to fix to raise limits.",
            "Engineering and data (3 people): building the product.",
          ],
        },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "Investigación", en: "Research" }, bajada: { es: "Elegir qué digitalizar fue la primera decisión de diseño", en: "Choosing what to digitize was the first design decision" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Portafolio", en: "Portfolio" }, texto: { es: "Evalué todos los productos del banco: el CDT tenía el mayor dolor y era viable pese a la deuda técnica.", en: "I evaluated every product: the CDT had the biggest pain and was feasible despite technical debt." } },
          { titulo: { es: "Entrevistas", en: "Interviews" }, texto: { es: "Clientes y áreas internas: necesidades, reglas de negocio y regulación financiera.", en: "Customers and internal teams: needs, business rules, and financial regulation." } },
          { titulo: { es: "Prototipos", en: "Prototypes" }, texto: { es: "Wireframes y pruebas tempranas, luego UI y prototipos de alta fidelidad.", en: "Wireframes and early testing, then UI and high-fidelity prototypes." } },
          { titulo: { es: "Handoff", en: "Handoff" }, texto: { es: "Validación final, ajustes y entrega a desarrollo con especificaciones detalladas.", en: "Final validation, refinements, and handoff with detailed specs." } },
        ],
      },
      {
        tipo: "journey",
        titulo: { es: "User journey map: el viaje de Laura", en: "User journey map: Laura’s journey" },
        fases: [
          {
            nombre: { es: "Descubrimiento", en: "Awareness" },
            emocion: 0.55,
            accion: { es: "Había oído del CDT, pero lo asociaba con trámites tediosos y papeleo.", en: "She had heard about the CDT, but associated it with tedious processes and paperwork." },
            pensamiento: { es: "“Me da curiosidad, pero dudo por experiencias complicadas con bancos.”", en: "“Curious, but hesitant due to previous experiences with complicated banking processes.”" },
            dolores: { es: ["Información poco clara sobre beneficios y tasas", "Términos largos y confusos"], en: ["Unclear information about benefits and rates", "Long and confusing terms"] },
          },
          {
            nombre: { es: "Investigación", en: "Research" },
            emocion: 0.82,
            accion: { es: "Comparó varios bancos y Banco W tenía la mejor tasa, así que lo eligió.", en: "She researched several banks; Banco W had the best rate, so she chose it." },
            pensamiento: { es: "“Me interesa la tasa, intentémoslo a ver cómo va esta vez.”", en: "“I’m interested in the rate, let’s give it a try and see how it goes this time.”" },
            dolores: { es: ["Simuladores complicados o que no funcionan", "Información inconsistente entre web, app y oficinas"], en: ["Complicated or non-functional simulators", "Inconsistent information across website, app, and branches"] },
          },
          {
            nombre: { es: "Consideración", en: "Consideration" },
            emocion: 0.5,
            accion: { es: "El asesor le dijo que debía ir en persona con documentos físicos, hacer fila y llenar formularios.", en: "The advisor told her she had to go in person with physical documents, wait in line, and fill out forms." },
            pensamiento: { es: "“Ya tengo una idea de lo que debo hacer; suena complicado, pero intentémoslo.”", en: "“The advisor gave me an idea of what to do; it sounds complicated but let’s try.”" },
            dolores: { es: ["El asesor tarda en responder", "Demasiados términos difíciles de entender"], en: ["The advisor takes too long to respond", "Too many terms that are hard to understand"] },
          },
          {
            nombre: { es: "Decisión", en: "Decision" },
            emocion: 0.28,
            accion: { es: "Sabe que tendrá buena tasa, pero se pregunta si tanto proceso y tiempo valen la pena.", en: "She knows she’ll get a good rate, but wonders if all the process and time are worth it." },
            pensamiento: { es: "“No sé si fue la mejor opción, es demasiado proceso para abrir un producto.”", en: "“I don’t know if it was the best option, it’s a lot of process just to open a product.”" },
            dolores: { es: ["Documentos físicos y visitas presenciales", "Formularios largos y confusos"], en: ["Physical documents and in-person visits", "Long and confusing forms"] },
          },
          {
            nombre: { es: "Retención", en: "Retention" },
            emocion: 0.12,
            accion: { es: "No quiere renovar porque es muy difícil; prefiere otro banco aunque la tasa sea menor.", en: "She doesn’t want to renew because it’s so hard; she’d rather go to another bank even with a lower rate." },
            pensamiento: { es: "“No tengo tiempo para todo eso; prefiero menos tasa y un proceso más amigable.”", en: "“I don’t have time for all that; I’d rather get a lower rate and a friendlier process.”" },
            dolores: { es: ["Sin recordatorios de vencimiento o renovación", "Interfaz confusa para consultar el historial"], en: ["No reminders about expiration or renewal", "Confusing interface to check history"] },
          },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que encontramos", en: "What we found" },
        items: [
          { texto: { es: "Los clientes no entendían los requisitos y entregaban información incompleta.", en: "Customers didn’t understand the requirements and submitted incomplete information." } },
          { texto: { es: "Se pedían demasiados documentos.", en: "Too many documents were requested." } },
          { texto: { es: "Filas de más de dos horas y hasta dos semanas de proceso.", en: "Lines of over two hours and up to two weeks of process." } },
          { texto: { es: "El personal también perdía tiempo con solicitudes repetidas.", en: "Staff also lost time on repeated submissions." } },
          { texto: { es: "Los flujos internos estaban fragmentados y con poca visibilidad.", en: "Internal workflows were fragmented, with little visibility." } },
        ],
      },
      {
        tipo: "hallazgo",
        etiqueta: { es: "El hallazgo que cambió el alcance", en: "The insight that changed the scope" },
        texto: { es: "“Fui dos veces a la oficina porque me faltaba un papel que nadie me pidió la primera vez.”", en: "“I went to the branch twice because I was missing a document nobody asked for the first time.”" },
        fuente: { es: "Clienta de CDT, entrevista 4 de 9", en: "CDT customer, interview 4 of 9" },
        implicacion: { es: "el problema no era solo la distancia, era la incertidumbre. Decidimos mostrar todas las reglas antes de empezar y pedir cada dato una sola vez.", en: "the problem wasn’t just distance, it was uncertainty. We decided to show every rule up front and ask for each piece of data only once." },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Decisiones clave", en: "Key decisions" }, bajada: { es: "Tres decisiones que definieron el producto", en: "Three decisions that defined the product" } },
      {
        tipo: "tarjetas",
        items: [
          {
            titulo: { es: "La decisión más contraintuitiva", en: "The most counterintuitive decision" },
            texto: { es: "Dejar que el dinero saliera hacia otros bancos parecía ir contra el negocio. Pero las cuentas de ahorro del banco no eran transaccionales y obligaban a volver a la oficina. Dar opciones fue lo único que mantenía la experiencia 100% digital, y además redujo deuda técnica.", en: "Letting money go to other banks seemed to go against the business. But the bank’s savings accounts weren’t transactional and forced people back to a branch. Offering options was the only way to keep the journey fully digital, and it also reduced technical debt." },
          },
          {
            titulo: { es: "Un simulador para decidir con confianza", en: "A simulator to decide with confidence" },
            texto: { es: "Tasas y ganancias proyectadas en tiempo real según el monto, plazos alternativos sugeridos y la mejor opción resaltada, desde cualquier dispositivo.", en: "Real-time rates and projected earnings based on the amount, suggested alternative terms, and the best option highlighted, on any device." },
          },
          {
            titulo: { es: "Pedir solo lo que la regulación exige", en: "Ask only for what regulation requires" },
            texto: { es: "Los formularios físicos tenían más de 50 campos. Revisamos cada uno con cumplimiento y riesgo: si el banco ya tenía el dato o la norma no lo exigía, salía. Quedaron 19, el mínimo legal, repartidos en pasos según el tipo de información y validados en tiempo real contra la información del cliente.", en: "The paper forms had more than 50 fields. We reviewed each one with compliance and risk: if the bank already had the data or regulation didn’t require it, it went. 19 remained, the legal minimum, split into steps by type of information and validated in real time against the customer’s data." },
          },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Lo que descartamos", en: "What we ruled out" },
        texto: {
          es: ["Enviar el dinero, al vencer el CDT, solo a una cuenta de ahorros del banco. Era la opción que retenía la plata en el banco, pero esas cuentas no eran transaccionales: el cliente habría tenido que ir a una oficina a retirarla, y el producto dejaba de ser digital justo al final."],
          en: ["Sending the money, when the CDT matured, only to a Banco W savings account. It was the option that kept the money in the bank, but those accounts weren’t transactional: customers would have had to go to a branch to withdraw it, and the product would stop being digital right at the end."],
        },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Un flujo guiado, paso a paso", en: "A guided flow, step by step" } },
      {
        tipo: "recorrido",
        pasos: [
          { src: "assets/proyectos/banco-w/screen-schedule.jpg", alt: { es: "Bienvenida al CDT digital", en: "Digital CDT welcome" }, titulo: { es: "Reglas claras desde el inicio", en: "Clear rules from the start" }, texto: { es: "Horarios y cuándo se constituye el CDT, antes de empezar.", en: "Hours and when the CDT is set up, before starting." } },
          { src: "assets/proyectos/banco-w/screen-data.jpg", alt: { es: "Datos del CDT con opciones recomendadas", en: "CDT details with recommended options" }, titulo: { es: "Decidir con información", en: "Decide with information" }, texto: { es: "Monto y plazo con opciones comparadas y la más conveniente resaltada.", en: "Amount and term with compared options and the best one highlighted." } },
          { src: "assets/proyectos/banco-w/screen-pep.jpg", alt: { es: "Preguntas de la norma: PEP, FATCA y renta", en: "Regulatory questions: PEP, FATCA, and tax filing" }, titulo: { es: "Solo lo que exige la norma", en: "Only what regulation requires" }, texto: { es: "PEP, FATCA y renta, en preguntas de sí o no.", en: "PEP, FATCA, and tax filing, as yes-or-no questions." } },
          { src: "assets/proyectos/banco-w/screen-otp.jpg", alt: { es: "Código de verificación enviado al correo", en: "Verification code sent by email" }, titulo: { es: "Verificar sin ir a la oficina", en: "Verify without a branch visit" }, texto: { es: "Un código al correo confirma la identidad.", en: "A code sent by email confirms identity." } },
          { src: "assets/proyectos/banco-w/screen-transfer.jpg", alt: { es: "Elegir dónde recibir el dinero", en: "Choose where to receive the money" }, titulo: { es: "Recibir donde quieras", en: "Receive it anywhere" }, texto: { es: "Billetera, cuenta del banco o incluso otros bancos.", en: "Wallet, bank account, or even other banks." } },
          { src: "assets/proyectos/banco-w/screen-confirm.jpg", alt: { es: "Confirmación de los datos del CDT", en: "CDT details confirmation" }, titulo: { es: "Confirmar sin sorpresas", en: "Confirm with no surprises" }, texto: { es: "Antes de pagar, un resumen claro con la inversión, la ganancia neta y la retención.", en: "Before paying, a clear summary of the investment, net earnings, and withholding." } },
          { src: "assets/proyectos/banco-w/screen-pay.jpg", alt: { es: "Elegir el medio de pago", en: "Choose a payment method" }, titulo: { es: "Pagar como prefieras", en: "Pay your way" }, texto: { es: "Tarjeta, Bancolombia, Nequi u otros bancos por PSE.", en: "Card, Bancolombia, Nequi, or other banks through PSE." } },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Un UI kit desde cero", en: "A UI kit from scratch" },
        texto: {
          es: ["No había componentes que reutilizar, así que armé un UI kit sobre la marca del banco: botones, campos, tarjetas de plazo y carga de documentos, cada uno con sus estados y medidas, y las pantallas con las especificaciones para desarrollo. El naranja de los botones es obligatorio por la marca del banco: con texto blanco (2,9:1), igual que el texto naranja del botón secundario y el turquesa de la tarjeta seleccionada, queda por debajo de WCAG AA. Los estados deshabilitados están exentos."],
          en: ["There were no components to reuse, so I built a UI kit on top of the bank’s brand: buttons, inputs, term cards, and document upload, each with its states and measurements, plus screens with specs for development. The orange on the buttons is required by the bank’s brand: with white text (2.9:1), like the secondary button’s orange text and the selected card’s teal, it falls below WCAG AA. Disabled states are exempt."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "Geomanist", uso: { es: "Títulos", en: "Headings" }, css: "Geomanist, Poppins, sans-serif" },
          { nombre: "Bariol", uso: { es: "Texto y botones", en: "Body and buttons" }, css: "Bariol, Nunito, sans-serif" },
        ],
        escala: [
          { tag: "H1", px: 40 }, { tag: "H2", px: 32 }, { tag: "H3", px: 28 },
          { tag: "H4", px: 24 }, { tag: "H5", px: 20 }, { tag: "H6", px: 16 },
        ],
        colores: [
          { nombre: "Primary", hex: "#5F259F" },
          { nombre: "Secondary", hex: "#00A3AD" },
          { nombre: "Action", hex: "#FF6900" },
          { nombre: "Success", hex: "#28CA4D" },
          { nombre: "Danger", hex: "#EC182D" },
          { nombre: "Warning", hex: "#FFCA2C" },
          { nombre: "Gray text", hex: "#54585A" },
          { nombre: "Gray dark", hex: "#2E3335" },
        ],
        componentes: {
          fuente: "Bariol, Nunito, sans-serif",
          grupos: [
            {
              nombre: { es: "Botón primario", en: "Primary button" }, tipo: "botones", texto: "Continuar", ancho: "160px",
              items: [
                { estado: { es: "Normal", en: "Default" }, fondo: "#FF6900", color: "#FFFFFF" },
                { estado: { es: "Hover", en: "Hover" }, fondo: "#F54A00", color: "#FFFFFF" },
                { estado: { es: "Foco", en: "Focus" }, fondo: "#FF6900", color: "#FFFFFF", anillo: "0 0 0 2px #FFFFFF, 0 0 0 4px #FF6900" },
                { estado: { es: "Deshabilitado", en: "Disabled" }, fondo: "#B1B1B1", color: "#FFFFFF" },
              ],
              nota: { es: "Dos tamaños: 160 × 40 y 332 × 40 px.", en: "Two sizes: 160 × 40 and 332 × 40 px." },
            },
            {
              nombre: { es: "Botón secundario", en: "Secondary button" }, tipo: "botones", texto: "Continuar", ancho: "160px",
              items: [
                { estado: { es: "Normal", en: "Default" }, fondo: "#FAFAFA", color: "#F54A00", borde: "#F54A00" },
                { estado: { es: "Hover", en: "Hover" }, fondo: "#FFE4D4", color: "#F54A00", borde: "#F54A00" },
                { estado: { es: "Foco", en: "Focus" }, fondo: "#FAFAFA", color: "#F54A00", borde: "#F54A00", anillo: "0 0 0 2px #FFFFFF, 0 0 0 4px #FF6900" },
              ],
            },
            {
              nombre: { es: "Campo", en: "Input" }, tipo: "campos", etiqueta: { es: "Monto", en: "Amount" }, placeholder: { es: "Ingresa la cantidad", en: "Enter the amount" }, ancho: "160px", ancha: true,
              items: [
                { estado: { es: "Deshabilitado", en: "Disabled" }, fondo: "#F3F3F3", borde: "#DCDCDC", color: "#B1B1B1" },
                { estado: { es: "Hover", en: "Hover" }, borde: "#999999" },
                { estado: { es: "Foco", en: "Focus" }, borde: "#AF71FF", cursor: true },
                { estado: { es: "Lleno", en: "Filled" }, borde: "#4F4F4F", valor: "$500.000" },
                { estado: { es: "Error", en: "Error" }, borde: "#EA0000", valor: "$150.000", mensaje: { es: "El monto mín. es $500.000 y el máx. $20.000.000", en: "Min. amount $500,000, max. $20,000,000" } },
              ],
            },
            {
              nombre: { es: "Casilla y opción", en: "Checkbox and radio" }, tipo: "seleccion", color: "#FF6900", span: "tercio",
              items: [
                { estado: { es: "Casilla", en: "Checkbox" }, control: "check" },
                { estado: { es: "Marcada", en: "Checked" }, control: "check", activo: true },
                { estado: { es: "Opción", en: "Radio" }, control: "radio" },
                { estado: { es: "Elegida", en: "Selected" }, control: "radio", activo: true },
              ],
            },
            {
              nombre: { es: "Tarjetas de plazo y de cuenta", en: "Term and account cards" }, tipo: "tarjetas", span: "dos-tercios",
              items: [
                { estado: { es: "Plazo", en: "Term" }, forma: "columna", ancho: "150px", fondo: "#FFFFFF", sombra: true,
                  lineas: [{ texto: { es: "180 Días", en: "180 Days" }, peso: 700, tam: "1rem" }, { texto: { es: "Tasa 13,2%", en: "Rate 13.2%" }, tam: ".75rem", color: "#54585A" }, { texto: "$1.060.530", peso: 700, tam: "1rem" }] },
                { estado: { es: "Plazo seleccionado", en: "Selected term" }, forma: "columna", ancho: "150px", fondo: "#F0E9F8", borde: "#5F259F", grosor: "2px",
                  lineas: [{ texto: { es: "180 Días", en: "180 Days" }, peso: 700, tam: "1rem", color: "#00A3AD" }, { texto: { es: "Tasa 13,2%", en: "Rate 13.2%" }, tam: ".75rem", color: "#54585A" }, { texto: "$1.060.530", peso: 700, tam: "1rem" }] },
                { estado: { es: "Cuenta", en: "Account" }, icono: "bank", separador: true, ancho: "205px", fondo: "#FFFFFF", borde: "#DCDCDC", lineas: [{ texto: { es: "Cuenta de otros bancos", en: "Account at another bank" }, tam: ".8125rem" }] },
              ],
            },
            {
              nombre: { es: "Carga de documentos", en: "Document upload" }, tipo: "tarjetas", icono: "doc", ancho: "205px", ancha: true,
              items: [
                { estado: { es: "Normal", en: "Default" }, fondo: "#FAFAFA", borde: "#DCDCDC", accion: "upload", colorAccion: "#FF6900", lineas: [{ texto: { es: "Declaración de renta", en: "Tax return" }, tam: ".8125rem" }] },
                { estado: { es: "Hover", en: "Hover" }, fondo: "#F0E9F8", borde: "#5F259F", accion: "upload", colorAccion: "#FF6900", lineas: [{ texto: { es: "Declaración de renta", en: "Tax return" }, tam: ".8125rem" }] },
                { estado: { es: "Cargado", en: "Uploaded" }, fondo: "#FAFAFA", borde: "#DCDCDC", accion: "trash", colorAccion: "#54585A", lineas: [{ texto: { es: "Declaración de renta", en: "Tax return" }, tam: ".8125rem" }, { texto: "declaracion-renta.pdf", tam: ".6875rem", color: "#54585A" }] },
                { estado: { es: "Eliminar", en: "Delete" }, fondo: "#FAFAFA", borde: "#DCDCDC", color: "#EA0000", accion: "trash", colorAccion: "#EA0000", lineas: [{ texto: { es: "Declaración de renta", en: "Tax return" }, tam: ".8125rem" }, { texto: "declaracion-renta.pdf", tam: ".6875rem" }] },
              ],
            },
          ],
        },
      },
      {
        tipo: "imagen",
        estilo: "marco",
        src: "assets/proyectos/banco-w/kit-spec.jpg",
        alt: { es: "Pantalla de datos de identificación con medidas de espaciado para desarrollo", en: "Identification data screen with spacing measurements for development" },
        pie: { es: "Cada pantalla se entregó con sus medidas para desarrollo.", en: "Each screen was handed off with its measurements for development." },
      },

      { tipo: "capitulo", num: "06", titulo: { es: "Validación", en: "Validation" }, bajada: { es: "Probado con clientes reales del banco", en: "Tested with real bank customers" } },
      {
        tipo: "texto",
        texto: {
          es: ["Hice tres rondas de pruebas de usabilidad moderadas y presenciales con clientes del banco, en celular y computador: 12 personas distintas en cada ronda, 36 en total. Les pedí abrir un CDT de punta a punta y medí cuántos lo lograban sin ayuda, cuánto tardaban y dónde dudaban. Entre cada ronda ajusté el diseño."],
          en: ["I ran three rounds of moderated, in-person usability tests with bank customers, on phone and desktop: 12 different people in each round, 36 in total. I asked them to open a CDT end to end and measured how many succeeded unaided, how long it took, and where they hesitated. I adjusted the design between rounds."],
        },
        puntos: {
          es: ["Ronda 1: 7 de 12 lo lograron sin ayuda. La “retención en la fuente” confundía a casi todos.", "Ronda 2: agregamos una explicación en lenguaje simple y el desglose de la ganancia neta; 10 de 12.", "Ronda 3: movimos la elección de dónde recibir el dinero antes del pago; 12 de 12, en un promedio de 4 min 40 s."],
          en: ["Round 1: 7 of 12 succeeded unaided. “Withholding tax” confused almost everyone.", "Round 2: we added a plain-language explanation and a net-earnings breakdown; 10 of 12.", "Round 3: we moved choosing where to receive the money before payment; 12 of 12, averaging 4 min 40 s."],
        },
      },

      { tipo: "capitulo", num: "07", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Lo que cambió para los clientes y para el banco", en: "What changed for customers and for the bank" } },
      {
        tipo: "resultado",
        items: [
          { desde: { es: "4 horas", en: "4 hours" }, valor: "5 min", texto: { es: "para pedir un CDT desde el celular, sin ir a una oficina.", en: "to request a CDT on a phone, without visiting a branch." }, medicion: { es: "tiempo para pedir un CDT de principio a fin. En oficina, unas 4 horas en promedio entre desplazamiento, fila y atención, según contaron los clientes en las entrevistas iniciales; en digital, 5 minutos de mediana en el flujo completo (analítica de eventos).", en: "time to request a CDT from start to finish. In a branch, about 4 hours on average between travel, waiting in line, and service, as customers reported in the initial interviews; digitally, a 5-minute median for the full flow (event analytics)." } },
          { valor: "+30%", texto: { es: "en satisfacción frente al proceso en oficina.", en: "in satisfaction vs. the in-branch process." }, medicion: { es: "encuesta CSAT al terminar la solicitud digital, comparada con la encuesta de servicio en oficina del mismo trimestre. Son dos encuestas distintas, así que es una comparación de referencia.", en: "CSAT survey after the digital request, compared with the in-branch service survey for the same quarter. They’re two different surveys, so it’s a reference point." } },
          { valor: "+20%", texto: { es: "aperturas de CDT en los primeros 6 meses frente al año anterior.", en: "CDT openings in the first 6 months vs. the year before." }, medicion: { es: "aperturas totales frente al mismo periodo del año anterior. No aísla el canal digital: las tasas también cambiaron en ese tiempo.", en: "total openings vs. the same period the previous year. It doesn’t isolate the digital channel: rates also changed in that time." } },
        ],
      },
      {
        tipo: "imagen",
        src: "assets/proyectos/banco-w/landing.jpg",
        alt: { es: "Landing del CDT digital de Banco W", en: "Banco W digital CDT landing page" },
        pie: { es: "La landing con la que se lanzó el CDT digital.", en: "The landing page the digital CDT launched with." },
      },
      {
        tipo: "cita",
        texto: {
          es: "Lo que antes era un trámite lento y presencial hoy es una experiencia simple, transparente y en línea, que posicionó a Banco W en lo digital.",
          en: "What used to be a slow, in-person process is now a simple, transparent, online experience that positioned Banco W in digital.",
        },
      },

      { tipo: "capitulo", num: "08", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "Las mejores decisiones de diseño no fueron visuales. Dejar salir el dinero hacia otros bancos o quitar campos del formulario exigió convencer a negocio, riesgo y cumplimiento con evidencia de las entrevistas y las pruebas.", en: "The best design decisions weren’t visual. Letting money go to other banks or removing form fields meant convincing business, risk, and compliance with evidence from interviews and tests." },
        distinto: { es: "Instrumentaría la analítica desde el primer día. Medimos bien el resultado final, pero nos faltaron datos de abandono por paso durante el primer mes para priorizar mejoras más rápido.", en: "I’d instrument analytics from day one. We measured the final outcome well, but we lacked step-by-step drop-off data in the first month to prioritize improvements faster." },
      },
    ],
  },
  /* ================================================================ NOVA */
  {
    slug: "nova",
    composicion: "duo",
    nombre: "Nova",
    cliente: "Rob Levine Legal Solutions",
    clienteCorto: "Rob Levine",
    subtitulo: { es: "Software de gestión de historias clínicas", en: "Medical records management software" },
    frases: {
      es: ["Menos pestañas.", "Menos errores.", "Más casos resueltos."],
      en: ["Fewer tabs.", "Fewer errors.", "More cases closed."],
    },
    resumen: {
      es: "Rediseñé Nova, el sistema con el que la firma de abogados Rob Levine gestiona las solicitudes de historias clínicas. Lo que antes exigía varias pestañas y pasos repetidos ahora vive en un solo flujo claro.",
      en: "I redesigned Nova, the system the Rob Levine law firm uses to manage medical records requests. What used to take multiple tabs and repeated steps now lives in a single, clear flow.",
    },
    anio: "2024–2025",
    destacado: true,
    titular: {
      es: "Un sistema de historias clínicas que obligaba a saltar entre 7 pestañas se convirtió en un solo flujo, en producción desde 2025.",
      en: "A medical records system that forced people to jump across 7 tabs became a single flow, in production since 2025.",
    },
    producto: { es: "Plataforma interna de gestión de historias clínicas", en: "Internal medical records platform" },
    industria: { es: "Legal / SaaS", en: "Legal / SaaS" },
    duracion: { es: "6 meses", en: "6 months" },
    rol: { es: "Product Designer y Product Owner", en: "Product Designer and Product Owner" },
    alcance: { es: "Investigación, arquitectura de información, UI, QA", en: "Research, information architecture, UI, QA" },
    herramientas: "Figma, Bootstrap 5",
    equipo: { es: "3 desarrolladores full stack", en: "3 full stack developers" },
    tags: { es: ["Producto interno", "UX/UI", "Legal tech"], en: ["Internal product", "UX/UI", "Legal tech"] },
    color: "#6f9bff",
    escena: [
      { dispositivo: "render", src: "assets/mockups/nova-a.webp", ratio: 1.0038, alto: 70 },
      { dispositivo: "render", src: "assets/mockups/nova-b.webp", ratio: 0.8588, alto: 75 },
    ],
    portada: { tipo: "escena", src: "assets/mockups/nova-macbook-silla.webp", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de un MacBook sobre una silla con el tablero de un equipo en Nova", en: "Mockup of a MacBook on a chair with a team dashboard in Nova" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "−15%", texto: { es: "errores en solicitudes de historias clínicas, como mínimo", en: "errors in medical records requests, at least" } },
          { valor: "−20%", texto: { es: "tiempo buscando la información de un caso", en: "time spent finding a case’s information" } },
          { desde: { es: "7 pestañas", en: "7 tabs" }, valor: "1", texto: { es: "vista para completar una solicitud", en: "view to complete a request" } },
          { valor: "3", texto: { es: "perfiles con tareas distintas en un mismo sistema: quienes piden los registros, quienes los consiguen y quienes atienden las solicitudes vencidas", en: "roles with different tasks in one system: requesters, retrievers, and the team handling overdue requests" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Un sistema que le costaba dinero a la firma", en: "A system that was costing the firm money" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Cada error en una solicitud de historia clínica <em>retrasaba un caso</em>. Y el sistema hacía que equivocarse fuera <em>demasiado fácil</em>.",
          en: "Every error in a records request <em>delayed a case</em>. And the system made mistakes <em>far too easy</em>.",
        },
      },
      {
        tipo: "antesDespues",
        antes: { src: "assets/proyectos/nova/previous.jpg", alt: { es: "Sistema anterior, denso y lleno de pestañas", en: "Previous system, dense and tab-heavy" } },
        despues: { src: "assets/proyectos/nova/pantalla-request.jpg", alt: { es: "Nueva vista de una solicitud, con el aviso de lo que falta antes de avanzar", en: "New request view, with a notice of what’s missing before moving on" } },
      },
      {
        tipo: "impacto",
        items: [
          { valor: "7", texto: { es: "pestañas abiertas en una sola vista para gestionar una solicitud", en: "tabs open in a single view to manage one request" } },
          { valor: "3", texto: { es: "veces aparecía “Records”, con significados distintos", en: "times “Records” appeared, each meaning something different" } },
          { valor: "16", texto: { es: "filtros visibles a la vez, sin jerarquía", en: "filters visible at once, with no hierarchy" } },
          { valor: { es: "12.272", en: "12,272" }, texto: { es: "solicitudes en una lista sin prioridad ni estado claro", en: "requests in a list with no priority or clear status" } },
        ],
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Antes", en: "Before" },
          puntos: {
            es: ["Varias pestañas abiertas para completar un solo proceso", "Navegación confusa y poco intuitiva", "Pasos redundantes que causaban errores", "Sin forma clara de saber el estado de una solicitud"],
            en: ["Multiple tabs open to complete a single process", "Confusing, unintuitive navigation", "Redundant steps that caused errors", "No clear way to know a request’s status"],
          },
        },
        despues: {
          titulo: { es: "Después", en: "After" },
          puntos: {
            es: ["Un flujo lineal que agrupa las tareas relacionadas", "Arquitectura de información basada en el trabajo real", "Menos pasos y menos decisiones ambiguas", "Estado visible de cada solicitud, de un vistazo"],
            en: ["A linear flow that groups related tasks", "Information architecture based on real work", "Fewer steps and fewer ambiguous choices", "Every request’s status visible at a glance"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Una herramienta interna que no podía detenerse", en: "An internal tool that couldn’t stop" } },
      {
        tipo: "texto",
        texto: {
          es: ["Rob Levine Legal Solutions es una firma especializada en lesiones personales y casos médicos. Solicitar, gestionar y revisar historias clínicas es la columna vertebral de su operación, y cualquier retraso afecta los resultados de los casos, la satisfacción de los clientes y los ingresos."],
          en: ["Rob Levine Legal Solutions specializes in personal injury and medical-related cases. Requesting, managing, and reviewing medical records is the backbone of its operation, and any delay affects case outcomes, client satisfaction, and revenue."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Las restricciones", en: "The constraints" },
        texto: {
          es: ["Nova es una herramienta interna que tres equipos usan todo el día: quienes piden los registros médicos a los proveedores (requesters), quienes los consiguen (retrievers) y quienes atienden las solicitudes vencidas. No se podía detener la operación para cambiarla, así que el rediseño tenía que convivir con el sistema anterior y entrar por partes. Trabajé con tres desarrolladores full stack durante 6 meses."],
          en: ["Nova is an internal tool three teams use all day: the people who request medical records from providers (requesters), the people who retrieve them (retrievers), and the team handling overdue requests. Operations couldn’t stop for the change, so the redesign had to coexist with the old system and roll out in stages. I worked with three full stack developers for 6 months."],
        },
        puntos: {
          es: ["Sin base de marca: la interfaz debía construirse sobre Bootstrap 5.", "Tres perfiles con tareas muy distintas sobre la misma información.", "Datos sensibles de salud: cada acción debía dejar rastro y confirmación.", "Lanzamiento gradual, sin capacitar de nuevo a todo el equipo."],
          en: ["No brand foundation: the interface had to be built on Bootstrap 5.", "Three roles with very different tasks on the same information.", "Sensitive health data: every action needed a trail and confirmation.", "Gradual rollout, without retraining the whole team."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Mi rol y cómo llegó el producto a salir", en: "My role and how the product got to launch" },
        texto: {
          es: [
            "La primera versión se descartó por completo: la dirección que se tomó al inicio, liderada desde desarrollo, no resolvía el trabajo del equipo. Después de un cambio de equipo me dieron la dirección del producto, y desde ahí se construyó la versión que salió en 2025.",
            "Fui la única diseñadora y también hice de Product Owner, porque no había uno: definía qué se construía y en qué orden, y trabajaba directo con los tres desarrolladores full stack.",
          ],
          en: [
            "The first version was scrapped entirely: the initial direction, led from development, didn’t solve the team’s work. After a team change I was given the product direction, and from there we built the version that launched in 2025.",
            "I was the only designer and also acted as Product Owner, since there wasn’t one: I decided what got built and in what order, and worked directly with the three full stack developers.",
          ],
        },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "Investigación", en: "Research" }, bajada: { es: "Entender la operación antes de dibujar una pantalla", en: "Understanding the operation before drawing a screen" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Entrevistas y focus groups", en: "Interviews and focus groups" }, texto: { es: "Entrevistas 1:1 con cada equipo y focus groups para entender roles, responsabilidades y cómo circulan las historias clínicas.", en: "1:1 interviews with each team and focus groups to understand roles, responsibilities, and how records flow." } },
          { titulo: { es: "Auditoría", en: "Audit" }, texto: { es: "Revisión completa del software: pasos redundantes, navegación confusa y saltos entre pestañas.", en: "A full software audit: redundant steps, confusing navigation, and tab-hopping." } },
          { titulo: { es: "Arquitectura", en: "Architecture" }, texto: { es: "Nueva arquitectura de información alineada con los flujos reales, validada con wireframes.", en: "New information architecture aligned with real workflows, validated with wireframes." } },
          { titulo: { es: "Sistema UI", en: "UI system" }, texto: { es: "Interfaz construida con ingeniería sobre Bootstrap 5, accesible según WCAG.", en: "Interface built with engineering on Bootstrap 5, accessible per WCAG." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que encontré", en: "What I found" },
        items: [
          { texto: { es: "Costaba encontrar funciones básicas, con pérdida de tiempo diaria.", en: "Core functions were hard to find, wasting time every day." } },
          { texto: { es: "Gestionar solicitudes requería varios pasos redundantes.", en: "Managing requests required multiple redundant steps." } },
          { texto: { es: "Acciones como editar cartas de solicitud eran manuales y propensas a errores.", en: "Actions like editing request letters were manual and error-prone." } },
          { texto: { es: "No había confirmaciones claras del estado de cada acción.", en: "There was no clear confirmation of each action’s status." } },
          { texto: { es: "La complejidad exigía mucha capacitación para cada persona nueva.", en: "The complexity required extensive training for every new hire." } },
          { texto: { es: "La falta de patrones consistentes aumentaba la carga cognitiva.", en: "Inconsistent patterns increased cognitive load." } },
        ],
      },
      {
        tipo: "hallazgo",
        etiqueta: { es: "El hallazgo que cambió la arquitectura", en: "The insight that changed the architecture" },
        texto: { es: "“Para saber si una solicitud ya se pagó tengo que abrir tres pestañas y comparar a ojo.”", en: "“To know if a request was already paid, I have to open three tabs and compare by eye.”" },
        fuente: { es: "Requester, focus group con el equipo de solicitudes", en: "Requester, focus group with the requests team" },
        implicacion: { es: "el sistema estaba organizado por tipo de dato, pero el equipo trabaja por caso. Reorganicé todo alrededor de la solicitud y del caso al que pertenece.", en: "the system was organized by data type, but the team works by case. I reorganized everything around the request and the case it belongs to." },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Decisiones clave", en: "Key decisions" }, bajada: { es: "Dos decisiones que cambiaron el día a día", en: "Two decisions that changed the day-to-day" } },
      {
        tipo: "decision",
        titulo: { es: "De 7 pestañas a una sola vista", en: "From 7 tabs to a single view" },
        problema: { es: "Gestionar una solicitud obligaba a saltar entre 7 pestañas y copiar datos de una a otra.", en: "Managing a request meant jumping across 7 tabs and copying data between them." },
        hallazgo: { es: "Las personas siempre recorrían las mismas 3 o 4 pestañas en el mismo orden.", en: "People always went through the same 3 or 4 tabs in the same order." },
        decision: { es: "Un flujo lineal por solicitud, con el estado siempre visible arriba.", en: "A linear flow per request, with its status always visible at the top." },
        porque: { es: "Seguir el orden real del trabajo elimina los pasos redundantes, que eran el origen de la mayoría de los errores.", en: "Following the real order of work removes redundant steps, which caused most errors." },
      },
      {
        tipo: "decision",
        titulo: { es: "Anular sin sesgos", en: "Voiding without bias" },
        problema: { es: "“Anular sin reembolso” se usaba por error y generaba pérdidas.", en: "“Void without refund” was used by mistake and caused losses." },
        hallazgo: { es: "Era el único botón verde de la pantalla: parecía la opción recomendada.", en: "It was the only green button on screen: it looked like the recommended option." },
        decision: { es: "Igualar la jerarquía, pedir el motivo dentro de cada acción y usar íconos y color según el riesgo.", en: "Balance the hierarchy, ask for the reason within each action, and use icons and color by risk." },
        porque: { es: "En una acción irreversible, la interfaz no debe empujar hacia ninguna opción: debe hacer que la persona piense.", en: "On an irreversible action, the interface shouldn’t push toward any option: it should make people think." },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Tres piezas que cambiaron el trabajo del equipo", en: "Three pieces that changed the team’s work" } },
      {
        tipo: "spotlight",
        dispositivo: "monitor",
        items: [
          {
            titulo: { es: "Un dashboard que antes no existía", en: "A dashboard that didn’t exist" },
            texto: { es: "Los reportes se descargaban a Excel para armar gráficas a mano. Ahora el rendimiento del equipo se ve en tiempo real.", en: "Reports used to be downloaded to Excel to build charts by hand. Now team performance is visible in real time." },
            src: "assets/proyectos/nova/screen-dashboard.jpg",
            alt: { es: "Dashboard con métricas del equipo", en: "Dashboard with team metrics" },
          },
          {
            titulo: { es: "Matters: todo el caso en un lugar", en: "Matters: the whole case in one place" },
            texto: { es: "Una pantalla nueva que agrupa a los clientes de una misma familia o caso médico. Se acabó perder la conexión entre solicitudes.", en: "A new screen that groups clients from the same family or medical case. No more losing the link between requests." },
            src: "assets/proyectos/nova/screen-matters.jpg",
            alt: { es: "Pantalla Matters con la información agrupada", en: "Matters screen with grouped information" },
          },
          {
            titulo: { es: "Anular sin sesgos", en: "Voiding without bias" },
            texto: { es: "El botón verde de “anular sin reembolso” parecía la opción recomendada y causaba pérdidas. Integré el motivo en cada acción, equilibré la jerarquía y agregué íconos.", en: "A green “void without refund” button looked like the recommended option and caused losses. I tied the reason to each action, balanced the hierarchy, and added icons." },
            src: "assets/proyectos/nova/screen-request.jpg",
            alt: { es: "Pantalla para anular un registro con y sin reembolso", en: "Void record screen with and without refund" },
          },
        ],
      },
      {
        tipo: "galeria",
        estilo: "carrusel",
        titulo: { es: "Más pantallas del producto", en: "More product screens" },
        imagenes: [
          { src: "assets/proyectos/nova/pantalla-agregar-registro.jpg", alt: { es: "Ventana para agregar un registro", en: "Add record window" }, titulo: { es: "Agregar un registro", en: "Add a record" }, texto: { es: "Buscar el proveedor y elegir el tipo de registro y el método de envío en un solo paso.", en: "Find the provider and choose the record type and submission method in one step." } },
          { src: "assets/proyectos/nova/pantalla-ehr.jpg", alt: { es: "Conexiones con historias clínicas electrónicas y proveedor sugerido", en: "Electronic health record connections and suggested provider" }, titulo: { es: "Conexiones EHR", en: "EHR connections" }, texto: { es: "Las conexiones con historias clínicas electrónicas y el proveedor sugerido, dentro de la solicitud.", en: "Electronic health record connections and the suggested provider, inside the request." } },
          { src: "assets/proyectos/nova/pantalla-seguimientos.jpg", alt: { es: "Seguimientos con notas y resumen del cliente", en: "Follow-ups with notes and client summary" }, titulo: { es: "Seguimientos", en: "Follow-ups" }, texto: { es: "Cada seguimiento con su motivo, fecha y notas, junto al resumen del cliente.", en: "Each follow-up with its reason, date, and notes, next to the client summary." } },
          { src: "assets/proyectos/nova/pantalla-firma.jpg", alt: { es: "Vista de una firma de abogados", en: "Law firm view" }, titulo: { es: "Vista de la firma", en: "Firm view" }, texto: { es: "Los datos de cada firma, sus notas y el conteo de solicitudes y registros.", en: "Each firm’s details, its notes, and the count of requests and records." } },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Un sistema visual al servicio de la usabilidad", en: "A visual system in service of usability" },
        texto: {
          es: ["La firma no tenía una base de marca sólida, así que construí la interfaz sobre Bootstrap 5: implementación rápida, componentes consistentes y patrones accesibles. Cada decisión de tipografía, espaciado y contraste priorizó la legibilidad."],
          en: ["The firm had no solid brand foundation, so I built the interface on Bootstrap 5: fast implementation, consistent components, and accessible patterns. Every typography, spacing, and contrast decision prioritized legibility."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [{ nombre: "Poppins", uso: { es: "Títulos y texto", en: "Headings and body" }, css: "Poppins, sans-serif" }],
        escala: [
          { tag: "H1", px: 40 }, { tag: "H2", px: 32 }, { tag: "H3", px: 28 },
          { tag: "H4", px: 24 }, { tag: "H5", px: 20 }, { tag: "H6", px: 16 },
        ],
        colores: [
          { nombre: "Primary", hex: "#2F6CF3" },
          { nombre: "Primary dark", hex: "#1553DC" },
          { nombre: "Success", hex: "#28A745" },
          { nombre: "Danger", hex: "#DC3545" },
          { nombre: "Warning", hex: "#FFC107" },
          { nombre: "Gray 100", hex: "#F8F9FA" },
          { nombre: "Gray 600", hex: "#6C757D" },
          { nombre: "Gray 900", hex: "#212529" },
        ],
        componentes: {
          fuente: "Poppins, sans-serif",
          grupos: [
            {
              nombre: { es: "Botones", en: "Buttons" }, tipo: "botones", radio: "6px", alto: "34px", tam: ".8125rem", relleno: "14px", peso: 500,
              items: [
                { estado: { es: "Primario", en: "Primary" }, texto: "Submit", fondo: "#2F6CF3", color: "#FFFFFF" },
                { estado: { es: "Secundario", en: "Secondary" }, texto: "Edit", fondo: "#FFFFFF", color: "#2F6CF3", borde: "#2F6CF3" },
                { estado: { es: "Deshabilitado", en: "Disabled" }, texto: "Complete", fondo: "#97B5F9", color: "#FFFFFF" },
                { estado: { es: "Peligro", en: "Danger" }, texto: "Void", fondo: "#DC3545", color: "#FFFFFF" },
              ],
            },
            {
              nombre: { es: "Etiquetas de estado", en: "Status badges" }, tipo: "botones", radio: "999px", alto: "22px", tam: ".75rem", relleno: "10px", peso: 600,
              items: [
                { estado: { es: "Nueva", en: "New" }, texto: "New", fondo: "#3DD5F3", color: "#032830" },
                { estado: { es: "Activa", en: "Active" }, texto: "Active", fondo: "#79DFC1", color: "#0F5132" },
                { estado: { es: "Pendiente", en: "Pending" }, texto: "Pending", fondo: "#FFE69C", color: "#664D03" },
                { estado: { es: "Sin conexión", en: "Not connected" }, texto: "Not connected", fondo: "#FFE69C", color: "#664D03" },
              ],
            },
            {
              nombre: { es: "Aviso de bloqueo", en: "Blocking alert" }, tipo: "tarjetas", forma: "columna", ancha: true, radio: "6px",
              items: [
                { estado: { es: "Antes de crear un seguimiento", en: "Before creating a follow-up" }, fondo: "#FFF3CD", borde: "#FFE69C", color: "#664D03", ancho: "520px",
                  lineas: [{ texto: "You can not create a follow up until the following issue(s) have been solved.", peso: 600, tam: ".8125rem" }, { texto: "• No HIPAA signature associated", tam: ".8125rem" }, { texto: "• No Client assigned", tam: ".8125rem" }] },
              ],
            },
            {
              nombre: { es: "Pestañas", en: "Tabs" }, tipo: "pestanas", activa: "#FFFFFF", color: "#6C757D", linea: "#2F6CF3",
              opciones: [{ texto: "Request" }, { texto: "Follow ups" }, { texto: "Tickets" }, { texto: "Audit" }],
              items: [{ estado: { es: "Activa e inactivas", en: "Active and inactive" }, activa: 0 }],
            },
            {
              nombre: { es: "Nota del equipo", en: "Team note" }, tipo: "tarjetas", forma: "columna", radio: "6px",
              items: [
                { estado: { es: "Nota", en: "Note" }, fondo: "#CFE2FF", ancho: "260px", color: "#212529",
                  lineas: [{ texto: "Melvin", peso: 600, tam: ".8125rem" }, { texto: "This is a sample note.", tam: ".8125rem" }] },
              ],
            },
          ],
        },
      },

      { tipo: "capitulo", num: "06", titulo: { es: "Validación", en: "Validation" }, bajada: { es: "Probado con quienes lo usan todos los días", en: "Tested with the people who use it every day" } },
      {
        tipo: "texto",
        texto: {
          es: ["Probé por fases con el equipo: empecé con un grupo inicial de los tres equipos (requesters, retrievers y solicitudes vencidas) y fui sumando personas en cada ronda. Les pedía hacer sus tareas reales en el prototipo y ajustaba el diseño entre rondas."],
          en: ["I tested in phases with the team: I started with an initial group from the three teams (requesters, retrievers, and overdue requests) and added more people each round. They did their real tasks in the prototype, and I adjusted the design between rounds."],
        },
        puntos: {
          es: ["El estado de una solicitud se encontraba desde una sola vista, sin abrir pestañas.", "Con la jerarquía nueva, “anular sin reembolso” dejó de elegirse por error.", "El dashboard reemplazó el reporte que el equipo armaba a mano en Excel."],
          en: ["A request’s status could be found from a single view, without opening tabs.", "With the new hierarchy, “void without refund” stopped being chosen by mistake.", "The dashboard replaced the report the team built by hand in Excel."],
        },
      },

      { tipo: "capitulo", num: "07", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Un producto que el equipo usa todos los días", en: "A product the team uses every day" } },
      {
        tipo: "resultado",
        items: [
          { valor: "−15%", texto: { es: "errores en solicitudes de historias clínicas, como mínimo.", en: "errors in medical records requests, at least." }, medicion: { es: "solicitudes devueltas o rehechas antes y después del lanzamiento. Es una cifra conservadora: los registros se perdieron.", en: "requests returned or redone before and after launch. It’s a conservative figure: the records were lost." } },
          { valor: "−20%", texto: { es: "tiempo buscando la información de un caso.", en: "time spent finding a case’s information." }, medicion: { es: "tiempo en las mismas tareas durante las pruebas por fases, sistema anterior frente al nuevo.", en: "time on the same tasks during the phased tests, old system vs. new." } },
          { desde: { es: "7 pestañas", en: "7 tabs" }, valor: "1", texto: { es: "vista para completar una solicitud.", en: "view to complete a request." }, medicion: { es: "comparación directa del flujo anterior y el nuevo.", en: "direct comparison of the old and new flows." } },
          { valor: "1", texto: { es: "dashboard en tiempo real en lugar del reporte manual en Excel.", en: "real-time dashboard instead of the manual Excel report." }, medicion: { es: "antes el equipo descargaba los datos y armaba las gráficas a mano.", en: "the team used to download the data and build the charts by hand." } },
          { valor: "2025", texto: { es: "en producción.", en: "in production." }, medicion: { es: "lanzado por partes, conviviendo con el sistema anterior hasta reemplazarlo.", en: "rolled out in stages, coexisting with the old system until replacing it." } },
        ],
      },
      {
        tipo: "texto",
        texto: {
          es: ["Los registros de las entrevistas y de las pruebas se perdieron, así que las cifras de errores y de tiempo son conservadoras. Medir con analítica desde el primer día es lo primero que haría distinto."],
          en: ["The interview and testing records were lost, so the error and time figures are conservative. Measuring with analytics from day one is the first thing I’d do differently."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "Un proceso confuso y propenso a errores se convirtió en una herramienta ágil y confiable, que ahorra tiempo y dinero a la firma.",
          en: "A confusing, error-prone process became a streamlined, reliable tool that saves the firm time and money.",
        },
      },

      { tipo: "capitulo", num: "08", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "En una herramienta interna, el diseño se mide en errores evitados y minutos recuperados. Entender la operación con el equipo antes de dibujar fue lo que permitió cambiar la arquitectura sin frenar el trabajo diario.", en: "In an internal tool, design is measured in avoided errors and recovered minutes. Understanding the operation with the team before drawing is what made it possible to change the architecture without stopping daily work." },
        distinto: { es: "Construiría el sistema de componentes antes de las pantallas. Partir de Bootstrap fue rápido, pero algunos patrones se resolvieron pantalla por pantalla y luego hubo que unificarlos.", en: "I’d build the component system before the screens. Starting from Bootstrap was fast, but some patterns were solved screen by screen and had to be unified later." },
      },
    ],
  },
  /* ============================================================= KERALTY */
  {
    slug: "keralty",
    composicion: "laptop-phone",
    nombre: "Dental Clinics",
    cliente: "Keralty",
    subtitulo: { es: "Sitio web y portal de pagos", en: "Website and payment portal" },
    frases: {
      es: ["Paga sin recordar nada.", "Sin empezar de cero.", "Con total confianza."],
      en: ["Pay without remembering.", "Never start over.", "With full confidence."],
    },
    resumen: {
      es: "Rediseñé el sitio y el portal de pagos de las Clínicas Dentales Keralty: de un sitio institucional y un pago que obligaba a empezar de cero, a una experiencia guiada que genera confianza.",
      en: "I redesigned Keralty Dental Clinics’ website and payment portal: from an institutional site and a payment flow that forced you to start over, to a guided experience that builds trust.",
    },
    anio: "2025",
    destacado: true,
    titular: {
      es: "Un pago que te mandaba de vuelta al inicio se convirtió en un flujo guiado que 25 de 25 personas completaron en la prueba del prototipo.",
      en: "A payment flow that sent you back to the start became a guided flow that 25 out of 25 people completed in the prototype test.",
    },
    producto: { es: "Sitio web y portal de pagos", en: "Website and payment portal" },
    industria: { es: "Salud", en: "Healthcare" },
    duracion: { es: "3 meses", en: "3 months" },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Heurística, benchmark, pruebas en Maze, UI, prototipado", en: "Heuristics, benchmark, Maze testing, UI, prototyping" },
    herramientas: "Figma",
    equipo: { es: "Producto, negocio e ingeniería", en: "Product, Business, Engineering" },
    tags: { es: ["Salud", "Web", "Pagos"], en: ["Healthcare", "Web", "Payments"] },
    color: "#38d9c6",
    escena: [
      { dispositivo: "render", src: "assets/mockups/keralty-b.webp", ratio: 1.0038, alto: 80 },
      { dispositivo: "render", src: "assets/mockups/keralty-phone.webp", ratio: 0.5736, alto: 56 },
    ],
    portada: { tipo: "escena", src: "assets/mockups/keralty-iphone-astra.webp", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de un iPhone sobre una mesa con el pago en línea de las Clínicas Dentales", en: "Mockup of an iPhone on a table with the Dental Clinics online payment" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "25/25", texto: { es: "completaron el pago en la prueba del prototipo (Maze)", en: "completed payment in the prototype test (Maze)" } },
          { valor: { es: "8,9", en: "8.9" }, texto: { es: "de 10 en facilidad del pago (24 respuestas)", en: "out of 10 for ease of payment (24 responses)" } },
          { valor: "83", texto: { es: "personas en 2 pruebas: el pago completo y una de preferencia (A/B)", en: "people across 2 tests: the full payment and an A/B preference test" } },
          { valor: "2", texto: { es: "datos para encontrar tus tratamientos", en: "fields to find your treatments" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Pagar era un ejercicio de memoria", en: "Paying was a memory exercise" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Un error en el pago te mandaba <em>de vuelta al inicio</em>. Y tenías que recordar <em>de memoria</em> qué tratamiento pagar.",
          en: "One mistake in the payment sent you <em>back to the start</em>. And you had to remember <em>by heart</em> which treatment to pay for.",
        },
      },
      {
        tipo: "antesDespues",
        antes: { src: "assets/proyectos/keralty/previous.jpg", alt: { es: "Home anterior de las clínicas", en: "Previous clinics home page" } },
        despues: { src: "assets/proyectos/keralty/new-home.jpg", alt: { es: "Nuevo home de las clínicas", en: "New clinics home page" } },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Antes", en: "Before" },
          puntos: {
            es: ["Un sitio informativo, poco persuasivo", "Flujo de pago sin jerarquía ni guía", "Errores que obligaban a reiniciar todo", "Llamados a la acción débiles"],
            en: ["An informative but unpersuasive site", "A payment flow with no hierarchy or guidance", "Errors that forced a full restart", "Weak calls to action"],
          },
        },
        despues: {
          titulo: { es: "Después", en: "After" },
          puntos: {
            es: ["Promociones, tratamientos y experiencia en primer plano", "Pasos claros: paciente → pago → pagador → confirmación", "Prevención y recuperación de errores", "“Agenda tu cita” siempre a la mano"],
            en: ["Promotions, treatments, and experience up front", "Clear steps: patient → payment → payer → confirmation", "Error prevention and recovery", "“Book your appointment” always at hand"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Un sitio pensado como folleto y un pago pensado como trámite", en: "A site built as a brochure and a payment built as a formality" } },
      {
        tipo: "texto",
        texto: {
          es: ["Las Clínicas Dentales Keralty atienden a miles de pacientes con tratamientos que se pagan por partes: ortodoncia, implantes, rehabilitación. El sitio era la puerta de entrada para agendar y pagar, pero se pensó como un folleto institucional, y el pago en línea como un trámite."],
          en: ["Keralty Dental Clinics serve thousands of patients with treatments paid in installments: orthodontics, implants, rehabilitation. The site was the entry point to book and pay, but it was conceived as an institutional brochure, and online payment as a formality."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Las restricciones", en: "The constraints" },
        texto: {
          es: ["Trabajé con producto, negocio e ingeniería en un proyecto de 3 meses: diez días de benchmark y heurística, dos semanas de diseño y prototipo, y el resto en pruebas, ajustes y entrega."],
          en: ["I worked with product, business, and engineering on a 3-month project: ten days of benchmark and heuristics, two weeks of design and prototyping, and the rest on testing, adjustments, and handoff."],
        },
        puntos: {
          es: ["Una pasarela de pagos existente que no se podía reemplazar.", "Quien paga no siempre es el paciente: padres, parejas, empresas.", "Tratamientos con abonos parciales y saldos pendientes.", "Una librería de marca sólida que había que respetar."],
          en: ["An existing payment gateway that couldn’t be replaced.", "The payer isn’t always the patient: parents, partners, companies.", "Treatments with partial payments and outstanding balances.", "A strong brand library that had to be respected."],
        },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "Investigación", en: "Research" }, bajada: { es: "Evidencia antes que opiniones", en: "Evidence before opinions" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Heurística", en: "Heuristics" }, texto: { es: "Evaluación del sitio y del pago: navegación confusa, sin jerarquía ni prevención de errores.", en: "Site and payment evaluation: confusing navigation, no hierarchy or error prevention." } },
          { titulo: { es: "Benchmark", en: "Benchmark" }, texto: { es: "Plataformas de salud y odontología nacionales e internacionales.", en: "National and international healthcare and dental platforms." } },
          { titulo: { es: "Wireframes", en: "Wireframes" }, texto: { es: "Recorrido reestructurado: menos pasos, más jerarquía y prevención de errores.", en: "A restructured journey: fewer steps, more hierarchy, error prevention." } },
          { titulo: { es: "Pruebas en Maze", en: "Maze testing" }, texto: { es: "Dos pruebas: el flujo de pago completo con 25 personas y una de preferencia (A/B, con un video de cada opción) con 58 para elegir cómo buscar el tratamiento.", en: "Two tests: the full payment flow with 25 people and an A/B preference test (one video per option) with 58 to choose how to find the treatment." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que encontré", en: "What I found" },
        items: [
          { texto: { es: "La evaluación heurística del sitio (las 10 de Nielsen) dio 2,8 de severidad promedio, en una escala de 0 (buena práctica) a 5 (catástrofe) donde más de 2 es falla: no se podía volver atrás, nada prevenía errores y había que recordar datos de memoria.", en: "The heuristic evaluation of the site (Nielsen’s 10) averaged 2.8 in severity, on a scale from 0 (good practice) to 5 (catastrophe) where anything above 2 fails: you couldn’t go back, nothing prevented errors, and data had to be recalled from memory." } },
          { texto: { es: "La navegación no respondía a lo que esperaban los pacientes.", en: "Navigation didn’t match patients’ expectations." } },
          { texto: { es: "El pago obligaba a reiniciar cuando había un error.", en: "The payment flow forced a restart after any mistake." } },
          { texto: { es: "La competencia ofrecía experiencias más claras y atractivas.", en: "Competitors offered clearer, more engaging experiences." } },
          { texto: { es: "Los llamados a la acción eran débiles frente a los de la competencia.", en: "Calls to action were weak compared with competitors’." } },
        ],
      },
      {
        tipo: "hallazgo",
        etiqueta: { es: "El hallazgo que cambió el flujo", en: "The insight that changed the flow" },
        texto: { es: "“En ocasiones no se tiene a la mano el número; se ajusta más la búsqueda por el nombre o la descripción.”", en: "“Sometimes you don’t have the number at hand; searching by name or description fits better.”" },
        fuente: { es: "Participante, prueba de preferencia A/B en Maze", en: "Participant, A/B preference test in Maze" },
        implicacion: { es: "el pago no podía depender de tener un número a la mano. Decidí que, con el documento del paciente, la plataforma mostrara sus tratamientos.", en: "payment couldn’t depend on having a number at hand. I decided that, with the patient’s ID, the platform would list their treatments." },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Decisiones clave", en: "Key decisions" }, bajada: { es: "Nada que recordar y nada que perder", en: "Nothing to remember, nothing to lose" } },
      {
        tipo: "decision",
        titulo: { es: "Buscar con el documento, no con la memoria", en: "Search by ID, not by memory" },
        problema: { es: "Para pagar había que escribir de memoria el número de referencia y el valor.", en: "To pay, you had to type the reference number and the amount from memory." },
        hallazgo: { es: "En la prueba de preferencia, la mitad eligió buscar el tratamiento en una lista («es más rápido y menos trabajo»), una cuarta parte prefirió escribir el número porque le daba más seguridad, y a la otra cuarta parte le daban igual.", en: "In the preference test, half chose finding the treatment in a list (“it’s faster and less work”), a quarter preferred typing the number because it felt safer, and the other quarter had no preference." },
        decision: { es: "Dos caminos en pestañas: con tipo y número de documento, la plataforma lista los tratamientos pendientes o que admiten abonos; quien tiene el número de referencia, lo escribe.", en: "Two paths in tabs: with document type and number, the platform lists treatments due or open to partial payment; whoever has the reference number types it in." },
        porque: { es: "Reconocer es más fácil que recordar, pero la seguridad de confirmar el número también pesaba. Con las pestañas cada quien paga como confía, sin alargar el flujo.", en: "Recognition beats recall, but the reassurance of confirming the number mattered too. With tabs, everyone pays the way they trust, without a longer flow." },
      },
      {
        tipo: "decision",
        titulo: { es: "Diseñar para cuando algo falla", en: "Design for when things fail" },
        problema: { es: "Cualquier error en el pago mandaba al paciente de vuelta al inicio.", en: "Any payment error sent the patient back to the start." },
        hallazgo: { es: "En la heurística, los dos problemas más graves fueron control del usuario (4,3 de severidad, sobre 5) y prevención de errores (3,8): se podían ingresar valores erróneos sin aviso y volver atrás borraba lo ingresado.", en: "In the heuristic review, the two most severe problems were user control (4.3 severity, out of 5) and error prevention (3.8): wrong values went through without warning and going back erased what was entered." },
        decision: { es: "Mapear cada caso alterno y de error con ingeniería, y darle a cada uno un mensaje y una salida sin perder lo ya ingresado.", en: "Map every alternate and error case with engineering, and give each one a message and a way out without losing what was entered." },
        porque: { es: "En un pago, la confianza se gana o se pierde cuando algo sale mal.", en: "In a payment, trust is won or lost when something goes wrong." },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Los casos que diseñé", en: "The cases I designed" },
        items: [
          { titulo: { es: "Campos omitidos", en: "Missing fields" }, texto: { es: "Se señala el dato faltante sin borrar el resto.", en: "The missing field is flagged without clearing the rest." } },
          { titulo: { es: "Otro pagador", en: "A different payer" }, texto: { es: "Quien paga puede ser distinto del paciente.", en: "The payer can be someone other than the patient." } },
          { titulo: { es: "Cambio de opción", en: "Changing the option" }, texto: { es: "Volver atrás para elegir otro tratamiento sin empezar de cero.", en: "Going back to pick another treatment without starting over." } },
          { titulo: { es: "Pago pendiente", en: "Pending payment" }, texto: { es: "Si hay un pago en proceso, se avisa antes de cobrar dos veces.", en: "If a payment is in progress, it warns before charging twice." } },
          { titulo: { es: "Servicio caído", en: "Service down" }, texto: { es: "Un mensaje claro y la opción de intentar más tarde.", en: "A clear message and the option to try later." } },
          { titulo: { es: "Respuesta lenta", en: "Slow response" }, texto: { es: "Estado de carga visible para que nadie pague dos veces.", en: "Visible loading state so nobody pays twice." } },
          { titulo: { es: "Datos no encontrados", en: "Data not found" }, texto: { es: "Qué revisar y cómo contactar a la clínica.", en: "What to check and how to contact the clinic." } },
          { titulo: { es: "Transacción cancelada", en: "Cancelled transaction" }, texto: { es: "Se retoma el pago con los datos ya ingresados.", en: "Payment resumes with the data already entered." } },
        ],
      },
      {
        tipo: "galeria",
        estilo: "carrusel",
        titulo: { es: "Pantallas de error", en: "Error screens" },
        imagenes: [
          { src: "assets/proyectos/keralty/error-lento.jpg", alt: { es: "Aviso de respuesta lenta sobre el flujo de pago, sin perder lo ingresado", en: "Slow-response notice over the payment flow, keeping what was entered" }, titulo: { es: "Respuesta lenta", en: "Slow response" }, texto: { es: "El aviso aparece sobre el flujo y lo ingresado se conserva.", en: "The notice appears over the flow and what was entered is kept." } },
          { src: "assets/proyectos/keralty/pago-pendiente.jpg", alt: { es: "Detalle de la transacción con el pago pendiente", en: "Transaction details with a pending payment" }, titulo: { es: "Pago pendiente", en: "Pending payment" }, texto: { es: "El estado de la transacción queda a la vista para que nadie pague dos veces.", en: "The transaction status stays visible so nobody pays twice." } },
          { src: "assets/proyectos/keralty/error-servicio.jpg", alt: { es: "Aviso de servicio no disponible", en: "Service unavailable notice" }, titulo: { es: "Servicio caído", en: "Service down" }, texto: { es: "Un mensaje claro y la opción de intentar más tarde.", en: "A clear message and the option to try later." } },
        ],
        pie: { es: "Tres de los ocho casos, cada uno con un mensaje y una salida.", en: "Three of the eight cases, each with a message and a way out." },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Un sitio que vende y un pago que acompaña", en: "A site that sells and a payment that guides" } },
      {
        tipo: "spotlight",
        dispositivo: "frontal",
        items: [
          {
            titulo: { es: "Un home que convence", en: "A home that convinces" },
            texto: { es: "Del tono institucional a uno centrado en el paciente: promociones, tratamientos, años de experiencia y el pago en línea a la vista.", en: "From institutional to patient-centered: promotions, treatments, years of experience, and online payment in plain sight." },
            src: "assets/proyectos/keralty/new-home.jpg",
            alt: { es: "Nuevo home", en: "New home page" },
          },
          {
            titulo: { es: "Servicios que invitan a agendar", en: "Services that invite booking" },
            texto: { es: "Estructura clara, beneficios concretos, buenas imágenes y “Agenda tu cita” a lo largo de la página.", en: "Clear structure, concrete benefits, quality images, and “Book your appointment” throughout the page." },
            src: "assets/proyectos/keralty/service.jpg",
            alt: { es: "Página del servicio de ortodoncia", en: "Orthodontics service page" },
          },
          {
            titulo: { es: "Nada que recordar", en: "Nothing to remember" },
            texto: { es: "Con el tipo y número de documento, la plataforma trae los tratamientos pendientes de pago o que admiten abonos. Paciente, tratamiento, clínica y valor se confirman antes de pedir los datos del pagador.", en: "With just a document type and number, the platform retrieves treatments due or open to partial payments. Patient, treatment, clinic, and amount are confirmed before asking for payer details." },
            src: "assets/proyectos/keralty/pay-1.jpg",
            alt: { es: "Paso inicial del pago", en: "Initial payment step" },
          },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "La marca, aplicada con sistema", en: "The brand, applied systematically" },
        texto: {
          es: ["Keralty tiene una librería de marca sólida que sus productos digitales no aplicaban de forma consistente. Armé un UI kit sobre ella para usarla de manera sistemática: botones con sus estados, campos, listas desplegables, pestañas y tarjetas. El azul principal tiene un contraste de 5,4:1 sobre blanco; el gris de los placeholders de la librería (3,5:1) queda por debajo de AA, y los estados deshabilitados están exentos."],
          en: ["Keralty has a strong brand library that its digital products didn’t apply consistently. I built a UI kit on top of it to apply it systematically: buttons with their states, inputs, dropdowns, tabs, and cards. The primary blue has a 5.4:1 contrast on white; the library’s grey placeholder (3.5:1) falls below AA, and disabled states are exempt."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [{ nombre: "Proxima Nova", uso: { es: "Toda la familia: Bold, Medium y Regular", en: "Whole family: Bold, Medium and Regular" }, css: "'Proxima Nova', Figtree, sans-serif" }],
        escala: [
          { tag: "H1", px: 48, movil: 32 }, { tag: "H2", px: 40, movil: 28 }, { tag: "H3", px: 32, movil: 26 },
          { tag: "H4", px: 28, movil: 24 }, { tag: "H5", px: 24, movil: 20 }, { tag: "Body", px: 16, movil: 14 },
        ],
        colores: [
          { nombre: { es: "Principal · 5.39:1", en: "Primary · 5.39:1" }, hex: "#0071A3" },
          { nombre: { es: "Secundario · 4.5:1", en: "Secondary · 4.5:1" }, hex: "#008767" },
          { nombre: { es: "Secundario · 11.95:1", en: "Secondary · 11.95:1" }, hex: "#002F87" },
          { nombre: { es: "Texto", en: "Text" }, hex: "#212121" },
        ],
        degradados: [
          { nombre: { es: "Azul verde", en: "Blue green" }, de: "#389EE1", a: "#2DB789" },
          { nombre: { es: "Azul", en: "Blue" }, de: "#0071CE", a: "#60BEF0" },
          { nombre: { es: "Verde", en: "Green" }, de: "#008767", a: "#57DBA2" },
        ],
        componentes: {
          fuente: "'Proxima Nova', Figtree, sans-serif",
          grupos: [
            {
              nombre: { es: "Botón primario", en: "Primary button" }, tipo: "botones", texto: { es: "Agendar cita", en: "Book appointment" }, ancho: "150px",
              items: [
                { estado: { es: "Normal", en: "Default" }, fondo: "#0071A3", color: "#FFFFFF" },
                { estado: { es: "Presionado", en: "Pressed" }, fondo: "#002E58", color: "#FFFFFF" },
                { estado: { es: "Deshabilitado", en: "Disabled" }, fondo: "#CED4DA", color: "#888888" },
              ],
            },
            {
              nombre: { es: "Botón de confirmación", en: "Confirm button" }, tipo: "botones", texto: { es: "Agendar cita", en: "Book appointment" }, ancho: "150px",
              items: [
                { estado: { es: "Normal", en: "Default" }, fondo: "#008767", color: "#FFFFFF" },
                { estado: { es: "Presionado", en: "Pressed" }, fondo: "#186A64", color: "#FFFFFF" },
                { estado: { es: "Deshabilitado", en: "Disabled" }, fondo: "#CED4DA", color: "#888888" },
              ],
            },
            {
              nombre: { es: "Botón secundario", en: "Secondary button" }, tipo: "botones", texto: { es: "Cancelar cita", en: "Cancel appointment" }, ancho: "150px",
              items: [
                { estado: { es: "Normal", en: "Default" }, fondo: "#FFFFFF", color: "#0071A3", borde: "#0071A3" },
                { estado: { es: "Presionado", en: "Pressed" }, fondo: "#0071A3", color: "#FFFFFF" },
                { estado: { es: "Deshabilitado", en: "Disabled" }, fondo: "#CED4DA", color: "#888888" },
              ],
            },
            {
              nombre: { es: "Botón de texto", en: "Text button" }, tipo: "botones", texto: { es: "Agendar cita", en: "Book appointment" },
              items: [
                { estado: { es: "Normal", en: "Default" }, color: "#0071A3", subrayado: true, peso: 600 },
                { estado: { es: "Presionado", en: "Pressed" }, color: "#002E58", subrayado: true, peso: 800 },
                { estado: { es: "Deshabilitado", en: "Disabled" }, color: "#888888", subrayado: true, peso: 600 },
              ],
            },
            {
              nombre: { es: "Campo con ícono", en: "Input with icon" }, tipo: "campos", etiqueta: { es: "Documento del paciente", en: "Patient ID" }, placeholder: { es: "Ingresa el número", en: "Enter the number" }, icono: "id", radio: "6px", ancho: "185px",
              items: [
                { estado: { es: "Vacío", en: "Empty" }, borde: "#CED4DA", color: "#888888" },
                { estado: { es: "Lleno", en: "Filled" }, borde: "#CED4DA", valor: "1107288742", color: "#161616" },
              ],
            },
            {
              nombre: { es: "Pestañas", en: "Tabs" }, tipo: "pestanas", activa: "#E6EAEE", color: "#002E58", linea: "#002E58",
              opciones: [
                { icono: "cal", texto: { es: "Agendar cita", en: "Book" } },
                { icono: "cal", texto: { es: "Citas agendadas", en: "Booked" } },
                { icono: "history", texto: { es: "Historial", en: "History" } },
              ],
              items: [{ estado: { es: "Activa e inactivas", en: "Active and inactive" }, activa: 0 }],
            },
            {
              nombre: { es: "Lista desplegable", en: "Dropdown" }, tipo: "lista", placeholder: { es: "Selecciona el plan de tratamiento", en: "Select the treatment plan" }, borde: "#CED4DA", radio: "6px", ancho: "250px", resaltado: "#EBF1FF", ancha: true,
              items: [
                { estado: { es: "Cerrada", en: "Closed" } },
                { estado: { es: "Abierta", en: "Open" }, opciones: [{ es: "Ortodoncia", en: "Orthodontics" }, { es: "Implantes", en: "Implants" }, { es: "Rehabilitación oral", en: "Oral rehabilitation" }], resaltada: 1 },
                { estado: { es: "Con valor", en: "Selected" }, valor: { es: "Implantes", en: "Implants" }, borde: "#0071A3" },
              ],
            },
          ],
        },
      },

      { tipo: "capitulo", num: "06", titulo: { es: "Validación", en: "Validation" }, bajada: { es: "Dos pruebas en Maze con 83 personas", en: "Two Maze tests with 83 people" } },
      {
        tipo: "texto",
        texto: {
          es: ["Probé el prototipo en Maze con 83 personas, en dos pruebas no moderadas con uso real del prototipo. La primera midió el flujo de pago completo; la segunda comparó dos formas de encontrar el tratamiento a pagar."],
          en: ["I tested the prototype in Maze with 83 people, in two unmoderated tests where they actually used it. The first measured the full payment flow; the second compared two ways to find the treatment to pay for."],
        },
        puntos: {
          es: [
            "Prueba 1, el pago completo (25 personas, edad promedio 38 años): 25 de 25 lo completaron, una por un camino indirecto, en un promedio de 131 segundos. Lo calificaron 8,9 de 10 en facilidad, y 22 de 23 dijeron que el valor a pagar era claro.",
            "Lo que falló: el header nuevo confundía (en la primera pantalla, el 54,5 % de los clics cayó fuera de la zona correcta) y el scroll era largo. Pasé a dos columnas, quité el modal de resumen y el botón «Continuar» del primer paso, y agregué el campo de número de referencia.",
            "Prueba 2, de preferencia (58 personas vieron un video de cada opción): la mitad prefirió la lista, una cuarta parte escribir el número y a la otra cuarta parte le daban igual. Por eso quedaron las dos opciones, en pestañas. El flujo final no se volvió a probar de punta a punta.",
            "Límite: casi no hubo personas mayores (2 de 25 tenían más de 60 años).",
          ],
          en: [
            "Test 1, full payment (25 people, average age 38): 25 out of 25 completed it, one through an indirect path, in 131 seconds on average. They rated it 8.9 out of 10 for ease, and 22 of 23 said the amount to pay was clear.",
            "What failed: the new header was confusing (on the first screen, 54.5% of clicks landed outside the right area) and scrolling was long. I moved to two columns, removed the summary modal and the “Continue” button on the first step, and added the reference-number field.",
            "Test 2, preference (58 people watched a video of each option): half preferred the list, a quarter preferred typing the number, and the other quarter had no preference. So both options stayed, as tabs. The final flow wasn’t tested end to end again.",
            "Limit: older people were barely represented (2 of 25 were over 60).",
          ],
        },
      },

      { tipo: "capitulo", num: "07", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Un prototipo validado que no llegó a producción", en: "A validated prototype that didn’t reach production" } },
      {
        tipo: "resultado",
        items: [
          { valor: "25/25", texto: { es: "completaron el pago en la prueba del prototipo.", en: "completed payment in the prototype test." }, medicion: { es: "tasa de éxito de la tarea en una prueba no moderada en Maze con 25 personas (una por un camino indirecto), sobre la primera versión del prototipo.", en: "task success rate in an unmoderated Maze test with 25 people (one through an indirect path), on the first version of the prototype." } },
          { valor: { es: "8,9", en: "8.9" }, texto: { es: "de 10 en facilidad del pago.", en: "out of 10 for ease of payment." }, medicion: { es: "promedio de «¿cómo te pareció el proceso de pago?», de 1 a 10 (24 respuestas).", en: "average of “how was the payment process?”, from 1 to 10 (24 responses)." } },
          { valor: "2", texto: { es: "datos para encontrar los tratamientos pendientes.", en: "fields to find pending treatments." }, medicion: { es: "datos para encontrar los tratamientos en el flujo nuevo, frente al anterior, que pedía recordar el número de referencia y el valor.", en: "fields required in the new flow vs. the old one, which asked for treatment name, clinic, and code." } },
          { valor: "8", texto: { es: "casos alternos y de error con una salida clara.", en: "alternate and error cases with a clear way out." }, medicion: { es: "casos de uso documentados con ingeniería y cubiertos en el prototipo.", en: "use cases documented with engineering and covered in the prototype." } },
        ],
      },
      {
        tipo: "texto",
        texto: {
          es: ["El rediseño no llegó a producción. Mi contrato terminó con la entrega del diseño y del prototipo listos para desarrollo, y Keralty no implementó este ni los demás rediseños de ese momento. Por eso las cifras son de las pruebas con el prototipo, no de uso real."],
          en: ["The redesign didn’t reach production. My contract ended with the delivery of the design and the prototype ready for development, and Keralty didn’t implement this or the other redesigns from that time. That’s why the numbers come from prototype testing, not real-world use."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "De una plataforma institucional y cargada de información a una propuesta centrada en el paciente, para agendar y pagar en línea sin empezar de cero.",
          en: "From an institutional, information-heavy platform to a patient-centered proposal for booking and paying online without starting over.",
        },
      },

      { tipo: "capitulo", num: "08", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "Las pruebas no moderadas en Maze me dieron muchas respuestas en pocos días, pero los porqués llegaron de los comentarios abiertos. Formular bien las preguntas fue tan importante como diseñar las pantallas.", en: "Unmoderated Maze tests gave me many answers in a few days, but the whys came from the open comments. Framing the questions well mattered as much as designing the screens." },
        distinto: { es: "Haría una ronda moderada con pacientes mayores. Es el grupo que más paga tratamientos largos y el que menos aparece en las pruebas en línea.", en: "I’d run a moderated round with older patients. They pay for long treatments the most and show up the least in online tests." },
      },
    ],
  },
  /* ============================================================= TOYOTA
     Contenido armado con Isabella (2026-11-20). Imágenes de varios modelos (GR Yaris, RAV4 HEV, Corolla Cross…) hechas con Gemini.
     Trabajo con Destiny co, por contrato; año 2026 (confirmado por Isabella el 2026-11-20). Pendiente: confirmar la lista de controles de fidelidad.
     Precios retirados de las capturas a propósito, aunque estén publicados. */
  {
    slug: "toyota",
    nombre: "Toyota Colombia",
    cliente: "Toyota",
    subtitulo: { es: "Producción de experiencias web", en: "Web experience production" },
    frases: {
      es: ["Cada lanzamiento, a tiempo.", "Fiel al auto real.", "Lista para producción."],
      en: ["Every launch, on time.", "True to the real car.", "Ready for production."],
    },
    resumen: {
      es: "Diseñé, adapté e implementé las páginas de vehículo y de contenido de Toyota Colombia: del requerimiento a producción, con imágenes de producto creadas con IA y fieles a cada modelo.",
      en: "I designed, adapted and implemented Toyota Colombia’s vehicle and content pages: from brief to production, with AI-made product images true to every model.",
    },
    titular: {
      es: "Más de 15 páginas publicadas para Toyota, cada una en unas dos semanas del requerimiento a producción con QA aprobado.",
      en: "15+ pages published for Toyota, each in about two weeks from brief to production with QA signed off.",
    },
    producto: { es: "Páginas de vehículo y de contenido", en: "Vehicle and content pages" },
    industria: { es: "Automotriz", en: "Automotive" },
    anio: "2026",
    rol: { es: "Diseño web, producción e implementación · con Destiny co", en: "Web design, production and implementation · with Destiny co" },
    duracion: { es: "~2 semanas por página", en: "~2 weeks per page" },
    alcance: {
      es: "Implementación de experiencias digitales, diseño y adaptación de sitios, producción web, entrega a desarrollo",
      en: "Digital experience implementation, website design and adaptation, web production, design-to-development handoff",
    },
    herramientas: "Figma, Gemini",
    tags: { es: ["Automotriz", "Web", "IA"], en: ["Automotive", "Web", "AI"] },
    color: "#EB0A1E",
    portada: { tipo: "escena", src: "assets/mockups/toyota-macbook-air-oscuro.webp?v=2", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de un MacBook Air sobre fondo oscuro con la landing del GR Yaris de Toyota", en: "Mockup of a MacBook Air on a dark background with Toyota’s GR Yaris landing page" } },
    metricaTarjeta: { valor: "+15", texto: { es: "páginas publicadas para Toyota", en: "pages published for Toyota" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "+15", texto: { es: "páginas publicadas para Toyota Colombia", en: "pages published for Toyota Colombia" } },
          { valor: { es: "~2 sem", en: "~2 wks" }, texto: { es: "del requerimiento a producción con QA aprobado", en: "from brief to production with QA signed off" } },
          { valor: { es: "IA", en: "AI" }, texto: { es: "imágenes de producto fieles a cada vehículo", en: "product images true to every vehicle" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El reto", en: "The challenge" }, bajada: { es: "Una marca grande que lanza seguido", en: "A big brand that launches often" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Cada vehículo nuevo necesita su página: <em>a tiempo</em> para el lanzamiento, <em>fiel a la marca</em> y con el auto <em>tal como es</em>.",
          en: "Every new vehicle needs its page: <em>on time</em> for launch, <em>true to the brand</em>, and with the car <em>exactly as it is</em>.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["Toyota Colombia actualiza su portafolio de vehículos y su contenido con frecuencia. Cada lanzamiento pide una página propia —detalle del vehículo, galería, diferenciales, versiones, descargables y garantía— y también aparecen páginas informativas nuevas.", "Mi trabajo es convertir cada requerimiento en una experiencia publicada: diseñarla y adaptarla al lenguaje de la marca, producir el contenido visual, entregarla a desarrollo y acompañarla hasta que pasa QA."],
          en: ["Toyota Colombia updates its vehicle lineup and content often. Every launch needs its own page —vehicle detail, gallery, highlights, trims, downloads and warranty— and new informational pages keep coming.", "My job is to turn each brief into a published experience: design and adapt it to the brand language, produce the visuals, hand it off to development and stay with it until it passes QA."],
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "Lo que hice", en: "What I did" }, bajada: { es: "Del requerimiento a producción", en: "From brief to production" } },
      {
        tipo: "tarjetas",
        items: [
          { titulo: { es: "Diseño y adaptación", en: "Design and adaptation" }, texto: { es: "Diseñé las páginas de cada vehículo y las páginas informativas nuevas, adaptando los componentes de la marca a lo que cada modelo necesita contar.", en: "I designed each vehicle page and new informational pages, adapting the brand’s components to what each model needs to say." } },
          { titulo: { es: "Imágenes con IA", en: "AI imagery" }, texto: { es: "Creé las fotos de producto con IA, cuidando que cada vehículo sea fiel al real y que todas compartan el mismo lenguaje visual.", en: "I created product photos with AI, making sure every vehicle is true to the real one and they all share one visual language." } },
          { titulo: { es: "Producción web", en: "Web production" }, texto: { es: "Armé cada página con su contenido real: textos, versiones, fichas, descargables y legales, lista para publicarse.", en: "I built each page with its real content: copy, trims, specs, downloads and legal text, ready to go live." } },
          { titulo: { es: "Entrega y QA", en: "Handoff and QA" }, texto: { es: "Entregué a desarrollo con specs y assets, y revisé la implementación hasta que QA la aprobó.", en: "I handed off to development with specs and assets, and reviewed the build until QA signed it off." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La página del GR Yaris", en: "The GR Yaris page" }, bajada: { es: "Un deportivo de rally contado sección por sección", en: "A rally sports car, told section by section" } },
      {
        tipo: "spotlight",
        dispositivo: "laptop",
        items: [
          { titulo: { es: "Un hero que pone el auto primero", en: "A hero that puts the car first" }, texto: { es: "La foto del GR Yaris en la ciudad, los íconos de seguridad a la vista y accesos directos a cotizar, galería y test drive.", en: "The GR Yaris in the city, safety features in view, and shortcuts to quote, gallery and test drive." }, src: "assets/proyectos/toyota/pagina-hero.jpg", alt: { es: "Hero de la página del GR Yaris", en: "GR Yaris page hero" } },
          { titulo: { es: "El auto en 360° y en sus colores", en: "The car in 360° and its colors" }, texto: { es: "“El ADN de un campeón de Rally”: el auto se rota arrastrando y cambia de color en la misma vista.", en: "“A rally champion’s DNA”: drag to rotate the car and switch colors in the same view." }, src: "assets/proyectos/toyota/pagina-360.jpg", alt: { es: "Vista 360° con selector de color", en: "360° view with color picker" } },
          { titulo: { es: "Una galería exterior e interior", en: "An exterior and interior gallery" }, texto: { es: "Fotos del vehículo en escenas urbanas, con el mismo lenguaje visual en todas.", en: "Photos of the vehicle in urban scenes, with one visual language across all of them." }, src: "assets/proyectos/toyota/pagina-galeria.jpg", alt: { es: "Galería de imágenes del GR Yaris", en: "GR Yaris image gallery" } },
          { titulo: { es: "Los diferenciales, uno por uno", en: "Highlights, one at a time" }, texto: { es: "“La esencia del rally llevada a la calle”: un carrusel con desempeño, motor y lo que hace único al modelo.", en: "“Rally spirit for the street”: a carousel with performance, engine and what makes the model unique." }, src: "assets/proyectos/toyota/pagina-diferenciales.jpg", alt: { es: "Carrusel de diferenciales", en: "Highlights carousel" } },
          { titulo: { es: "Versiones y descargables", en: "Trims and downloads" }, texto: { es: "Cada versión con su ficha y, al final, la ficha técnica, el manual y la cobertura extendida a un clic.", en: "Each trim with its specs and, at the end, the spec sheet, manual and extended coverage one click away." }, src: "assets/proyectos/toyota/pagina-versiones.jpg", alt: { es: "Versiones y materiales descargables", en: "Trims and downloadable materials" } },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Más páginas", en: "More pages" }, bajada: { es: "De lanzamientos de vehículos a páginas de servicio y tecnología", en: "From vehicle launches to service and technology pages" } },
      {
        tipo: "imagen",
        src: "assets/proyectos/toyota/phev-hero.jpg",
        alt: { es: "Página de la tecnología Híbrida Eléctrica Enchufable de Toyota", en: "Toyota Plug-in Hybrid Electric technology page" },
        pie: { es: "Híbrido Eléctrico Enchufable (PHEV): una página para explicar una tecnología nueva, sus dos modos de manejo y cómo se carga.", en: "Plug-in Hybrid Electric (PHEV): a page to explain a new technology, its two driving modes and how it charges." },
      },
      {
        tipo: "imagen",
        src: "assets/proyectos/toyota/phev-simulador.jpg",
        alt: { es: "Simulador de tiempo y valor de carga", en: "Charging time and cost simulator" },
        pie: { es: "Un simulador de tiempo y valor de carga por ciudad, tipo de cargador y nivel de batería.", en: "A charging time and cost simulator by city, charger type and battery level." },
      },
      {
        tipo: "imagen",
        src: "assets/proyectos/toyota/mantenimiento-hero.jpg",
        alt: { es: "Página del Mantenimiento Planeado Toyota", en: "Toyota Planned Maintenance page" },
        pie: { es: "Mantenimiento Planeado Toyota: beneficios, revisiones y concesionarios, en una página de servicio.", en: "Toyota Planned Maintenance: benefits, check-ups and dealers on one service page." },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Imágenes con IA", en: "AI imagery" }, bajada: { es: "Fotos de producto fieles al vehículo real", en: "Product photos true to the real vehicle" } },
      {
        tipo: "texto",
        texto: {
          es: ["Las fotos de producto de varios modelos —como el GR Yaris, la RAV4 HEV y el Corolla Cross— las creé con IA, en Gemini. El reto no es que se vean bien, sino que sean el auto real: en una página de producto, un detalle equivocado en el frente, los rines o los emblemas le resta confianza a la marca."],
          en: ["I created the product photos for several models —like the GR Yaris, the RAV4 HEV and the Corolla Cross— with AI, in Gemini. The challenge isn’t making them look good but making them the real car: on a product page, one wrong detail on the front, wheels or badges costs the brand trust."],
        },
      },
      /* mosaico: las panorámicas (Corolla Cross) ocupan dos columnas para que cada fila cierre pareja */
      {
        tipo: "galeria",
        estilo: "mosaico",
        imagenes: [
          { src: "assets/proyectos/toyota/corolla-cross-gr-curva.jpg", ancho: true, alt: { es: "Corolla Cross GR en una curva entre árboles, creado con IA", en: "Corolla Cross GR on a tree-lined curve, AI-generated" } },
          { src: "assets/proyectos/toyota/gr-yaris-tres-cuartos.jpg", alt: { es: "GR Yaris en tres cuartos al atardecer, creado con IA", en: "GR Yaris three-quarter view at sunset, AI-generated" } },
          { src: "assets/proyectos/toyota/rav4-tres-cuartos.jpg", alt: { es: "RAV4 HEV en una carretera rural con montañas, creada con IA", en: "RAV4 HEV on a country road with mountains, AI-generated" } },
          { src: "assets/proyectos/toyota/corolla-cross-noche.jpg", ancho: true, alt: { es: "Corolla Cross azul de lado en la ciudad de noche, creado con IA", en: "Blue Corolla Cross side view in the city at night, AI-generated" } },
          { src: "assets/proyectos/toyota/gr-yaris-frente.jpg", alt: { es: "GR Yaris de frente en una avenida, creado con IA", en: "GR Yaris front view on an avenue, AI-generated" } },
          { src: "assets/proyectos/toyota/rav4-frente-ciudad.jpg", alt: { es: "RAV4 HEV de frente entre edificios, creada con IA", en: "RAV4 HEV front view between buildings, AI-generated" } },
          { src: "assets/proyectos/toyota/gr-yaris-trasera.jpg", alt: { es: "GR Yaris desde atrás en la ciudad, creado con IA", en: "GR Yaris rear view in the city, AI-generated" } },
          { src: "assets/proyectos/toyota/corolla-cross-calle.jpg", ancho: true, alt: { es: "Corolla Cross azul de lado en una calle residencial, creado con IA", en: "Blue Corolla Cross side view on a residential street, AI-generated" } },
          { src: "assets/proyectos/toyota/rav4-trasera.jpg", alt: { es: "RAV4 HEV en movimiento desde atrás, creada con IA", en: "RAV4 HEV in motion from behind, AI-generated" } },
          { src: "assets/proyectos/toyota/rav4-sombra.jpg", alt: { es: "RAV4 HEV bajo la sombra de los árboles, creada con IA", en: "RAV4 HEV under tree shade, AI-generated" } },
          { src: "assets/proyectos/toyota/corolla-cross-adoquin.jpg", ancho: true, alt: { es: "Corolla Cross azul de lado frente a un edificio, creado con IA", en: "Blue Corolla Cross side view by a building, AI-generated" } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que revisé para que fuera el auto real", en: "What I checked so it was the real car" },
        items: [
          { titulo: { es: "Frente y luces", en: "Front and lights" }, texto: { es: "Faros, parrilla y entradas de aire del modelo y la versión correctos.", en: "Headlights, grille and air intakes of the right model and trim." } },
          { titulo: { es: "Rines y frenos", en: "Wheels and brakes" }, texto: { es: "Diseño de los rines y color de los cálipers.", en: "Wheel design and caliper color." } },
          { titulo: { es: "Emblemas", en: "Badges" }, texto: { es: "Logo de Toyota, placas y emblemas de cada modelo (GR, HEV) en su lugar y legibles.", en: "Toyota logo, plates and each model’s badges (GR, HEV) in place and legible." } },
          { titulo: { es: "Proporciones y escena", en: "Proportions and scene" }, texto: { es: "Silueta, altura y reflejos creíbles, en escenas urbanas con la misma luz y tono.", en: "Believable silhouette, stance and reflections, in urban scenes with the same light and tone." } },
        ],
      },
      { tipo: "nota", texto: { es: "Confirmar con Isabella la lista de lo que revisa en cada imagen: los cuatro puntos son una propuesta a partir de las imágenes.", en: "Confirm the fidelity checklist: the four points are a proposal based on the images." } },

      { tipo: "capitulo", num: "06", titulo: { es: "Entrega a desarrollo", en: "Handoff" }, bajada: { es: "Hasta que QA la aprueba", en: "Until QA signs it off" } },
      {
        tipo: "texto",
        texto: {
          es: ["Cada página salió de mis manos con specs, assets e imágenes listas, y la acompañé en la implementación hasta que QA la aprobó. Del requerimiento a producción pasaban unas dos semanas."],
          en: ["Each page left my hands with specs, assets and images ready, and I stayed with it through implementation until QA signed it off. From brief to production took about two weeks."],
        },
      },
    ],
  },
  /* ============================================================= MYCOACH */
  {
    slug: "mycoach",
    composicion: "arc",
    acabado: "white",
    nombre: "MyCoach",
    cliente: "MyCoach",
    subtitulo: { es: "Rediseño de la app de entrenamiento personal", en: "Personal training app redesign" },
    frases: {
      es: ["Tu meta, tu plan.", "Entrena a tu manera.", "Tu PT de bolsillo."],
      en: ["Your goal, your plan.", "Train your way.", "Your pocket PT."],
    },
    resumen: {
      es: "Rediseñé la app de MyCoach, la plataforma de entrenamiento personal del Reino Unido, para que cada tipo de atleta —de quien prepara un Hyrox a quien entrena en casa— encuentre su programa, entrene y siga su progreso en un solo lugar.",
      en: "I redesigned the app for MyCoach, the UK personal training platform, so every kind of athlete —from Hyrox racers to people training at home— can find their program, train, and track progress in one place.",
    },
    anio: "2025",
    titular: {
      es: "Un rediseño que llevó del 41% al 68% a quienes terminan el onboarding y reciben su plan.",
      en: "A redesign that took onboarding completion from 41% to 68%.",
    },
    producto: { es: "App móvil de entrenamiento personal", en: "Personal training mobile app" },
    // Métrica que se muestra en su tarjeta de "Más proyectos"
    metricaTarjeta: { valor: "68%", texto: { es: "completa el onboarding (antes 41%)", en: "complete onboarding (from 41%)" } },
    industria: { es: "Fitness / SaaS", en: "Fitness / SaaS" },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "UX/UI, wireflows, design system", en: "UX/UI, wireflows, design system" },
    herramientas: "Figma",
    tags: { es: ["App móvil", "Rediseño", "Fitness"], en: ["Mobile app", "Redesign", "Fitness"] },
    color: "#c9b8ff",
    escena: [
      { dispositivo: "phone", src: "assets/proyectos/mycoach/home.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/mycoach/program.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/mycoach/workout.jpg" },
    ],
    portada: { tipo: "escena", src: "assets/mockups/mycoach-trio-iphone.webp", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de tres iPhone con pantallas de MyCoach: objetivos, inicio y programas", en: "Mockup of three iPhones with MyCoach screens: goals, home, and programs" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { desde: "41%", valor: "68%", texto: { es: "completa el onboarding y recibe su plan", en: "complete onboarding and get their plan" } },
          { desde: { es: "6 toques", en: "6 taps" }, valor: "3", texto: { es: "para empezar el entrenamiento del día", en: "to start today’s workout" } },
          { valor: "+22%", texto: { es: "entrenamientos completados por semana en la beta", en: "workouts completed per week in the beta" } },
          { valor: "6", texto: { es: "flujos rediseñados de punta a punta", en: "end-to-end flows redesigned" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El reto", en: "The challenge" }, bajada: { es: "Una sola app para atletas muy distintos", en: "One app for very different athletes" } },
      {
        tipo: "declaracion",
        texto: {
          es: "La misma app tenía que servirle a quien corre su <em>primer maratón</em>, a quien prepara un <em>Hyrox</em> y a quien solo quiere entrenar en casa.",
          en: "The same app had to work for someone running their <em>first marathon</em>, someone training for <em>Hyrox</em>, and someone who just wants to train at home.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["MyCoach conecta a miles de personas con entrenadores en una comunidad que se define como “el PT en tu bolsillo”. Con la nueva identidad de marca, la app necesitaba ponerse a la altura: más personal, más clara y capaz de acompañar objetivos y tipos de entrenamiento muy diferentes."],
          en: ["MyCoach connects thousands of people with coaches in a community that calls itself “the PT in your pocket.” With a new brand identity, the app had to step up: more personal, clearer, and able to support very different goals and training styles."],
        },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Lo que había que resolver", en: "What needed solving" },
          puntos: {
            es: ["Perfiles y metas muy distintos en un mismo producto", "Programas, entrenamientos sueltos y retos mezclados", "Seguimiento disperso entre peso, dieta, ánimo y fotos", "Una marca nueva que la app aún no reflejaba"],
            en: ["Very different profiles and goals in one product", "Programs, single workouts, and challenges mixed together", "Tracking scattered across weight, diet, mood, and photos", "A new brand the app didn’t reflect yet"],
          },
        },
        despues: {
          titulo: { es: "Cómo lo abordé", en: "How I approached it" },
          puntos: {
            es: ["Onboarding que personaliza el plan desde el primer minuto", "Un flujo claro para cada forma de entrenar", "Un check-in semanal que reúne todo el seguimiento", "Un design system que traduce la marca a la interfaz"],
            en: ["An onboarding that personalizes the plan from minute one", "A clear flow for each way of training", "A weekly check-in that brings all tracking together", "A design system that translates the brand into the UI"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El proceso", en: "The process" }, bajada: { es: "De la marca a cada pantalla", en: "From the brand to every screen" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Marca", en: "Brand" }, texto: { es: "Partí de las guías de marca: historia, valores, tipografía propia y paleta.", en: "I started from the brand guidelines: story, values, custom typeface, and palette." } },
          { titulo: { es: "Wireflows", en: "Wireflows" }, texto: { es: "Mapeé cada flujo de la app 3.0: registro, check-in, diario, peso, ánimo, dieta y fotos.", en: "I mapped every flow of app 3.0: sign-up, check-in, diary, weight, mood, diet, and photos." } },
          { titulo: { es: "Design system", en: "Design system" }, texto: { es: "Componentes, íconos de navegación y estilos listos para escalar.", en: "Components, navigation icons, and styles ready to scale." } },
          { titulo: { es: "Alta fidelidad", en: "High fidelity" }, texto: { es: "Más de 40 pantallas, iterando y depurando las que no aportaban.", en: "40+ screens, iterating and cutting the ones that didn’t add value." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Principios de diseño", en: "Design principles" },
        items: [
          { titulo: { es: "Personal desde el inicio", en: "Personal from the start" }, texto: { es: "Preguntar lo justo para armar un plan que se sienta propio.", en: "Ask just enough to build a plan that feels like yours." } },
          { titulo: { es: "Un camino por tipo de entrenamiento", en: "One path per training type" }, texto: { es: "Programas de semanas o entrenamientos sueltos, sin mezclarlos.", en: "Multi-week programs or single workouts, never mixed up." } },
          { titulo: { es: "Seguir el progreso sin fricción", en: "Frictionless tracking" }, texto: { es: "Registrar peso, ánimo o comidas en pocos toques.", en: "Log weight, mood, or meals in a few taps." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Seis flujos, una experiencia", en: "Six flows, one experience" } },
      {
        tipo: "recorrido",
        pasos: [
          { src: "assets/proyectos/mycoach/goals.jpg", alt: { es: "Selección de objetivos", en: "Goal selection" }, titulo: { es: "Tus metas, tu plan", en: "Your goals, your plan" }, texto: { es: "Hasta tres objetivos entre doce: maratón, Hyrox, fuerza, salud general y más.", en: "Up to three goals out of twelve: marathon, Hyrox, strength, overall health, and more." } },
          { src: "assets/proyectos/mycoach/matching.jpg", alt: { es: "Emparejando el programa", en: "Matching the program" }, titulo: { es: "Un programa a tu medida", en: "A program that fits you" }, texto: { es: "La app empareja a cada persona con su programa ideal mientras hace un calentamiento rápido.", en: "The app matches each person with their ideal program during a quick warm-up." } },
          { src: "assets/proyectos/mycoach/all-set.jpg", alt: { es: "Todo listo", en: "All set" }, titulo: { es: "Listo para empezar", en: "Ready to go" }, texto: { es: "Un cierre claro que lleva directo al primer entrenamiento.", en: "A clear finish that leads straight to the first workout." } },
          { src: "assets/proyectos/mycoach/workout.jpg", alt: { es: "Rutina del día con sus ejercicios", en: "Today’s routine with its exercises" }, titulo: { es: "Tu rutina, lista para entrenar", en: "Your routine, ready to train" }, texto: { es: "Duración, ejercicios, series y calorías a la vista, y un solo botón para empezar.", en: "Duration, exercises, sets, and calories at a glance, with one button to start." } },
        ],
      },
      {
        tipo: "spotlight",
        dispositivo: "phone",
        items: [
          {
            titulo: { es: "Hoy, de un vistazo", en: "Today, at a glance" },
            texto: { es: "El entrenamiento del día y las métricas clave en el inicio, para empezar sin pensar.", en: "Today’s workout and key metrics on the home screen, so you can start without thinking." },
            src: "assets/proyectos/mycoach/home.jpg",
            alt: { es: "Inicio de MyCoach", en: "MyCoach home" },
          },
          {
            titulo: { es: "¿Cómo quieres entrenar?", en: "How do you want to train?" },
            texto: { es: "Programas de 4 a 12 semanas o entrenamientos sueltos de 10 a 90 minutos: dos caminos claros.", en: "4–12 week programs or single 10–90 minute workouts: two clear paths." },
            src: "assets/proyectos/mycoach/how-train.jpg",
            alt: { es: "Elegir forma de entrenar", en: "Choose how to train" },
          },
          {
            titulo: { es: "Programas con entrenador", en: "Coach-led programs" },
            texto: { es: "Cada programa muestra a su entrenador, objetivos, ejercicios y estructura antes de agregarlo al calendario.", en: "Each program shows its coach, goals, exercises, and structure before adding it to your calendar." },
            src: "assets/proyectos/mycoach/program.jpg",
            alt: { es: "Detalle de un programa", en: "Program detail" },
          },
          {
            titulo: { es: "Un programa por disciplina", en: "A program per discipline" },
            texto: { es: "Un Hyrox no se entrena como una rutina de fuerza: los programas se filtran por entrenador y disciplina para encontrar el indicado.", en: "Hyrox isn’t trained like a strength routine: programs are filtered by coach and discipline to find the right one." },
            src: "assets/proyectos/mycoach/programs.jpg",
            alt: { es: "Lista de programas por disciplina", en: "Program list by discipline" },
          },
          {
            titulo: { es: "Check-in semanal", en: "Weekly check-in" },
            texto: { es: "Peso, ánimo, diario, dieta, fotos de progreso y notas, reunidos en una sola lista.", en: "Weight, mood, diary, diet, progress pics, and notes, gathered in one list." },
            src: "assets/proyectos/mycoach/check-in.jpg",
            alt: { es: "Check-in semanal", en: "Weekly check-in" },
          },
          {
            titulo: { es: "Herramientas que ayudan", en: "Tools that help" },
            texto: { es: "Calculadora de 1RM y plan de macros para entrenar y comer con datos.", en: "A 1RM calculator and macro plan to train and eat with data." },
            src: "assets/proyectos/mycoach/one-rep-max.jpg",
            alt: { es: "Calculadora de 1RM", en: "1RM calculator" },
          },
        ],
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "PP MyCoach Sans", uso: { es: "Títulos (tipografía propia de la marca)", en: "Headings (custom brand typeface)" }, css: "'PP MyCoach Sans', 'Inter Tight', sans-serif" },
          { nombre: "General Sans", uso: { es: "Texto e interfaz", en: "Body and UI" }, css: "'General Sans', 'Inter Tight', sans-serif" },
        ],
        escala: [{ tag: "H1", px: 48 }, { tag: "H2", px: 32 }, { tag: "H3", px: 24 }, { tag: "H4", px: 18 }, { tag: "Body", px: 16 }, { tag: "Caption", px: 12 }],
        colores: [
          { nombre: "Navy", hex: "#070826" },
          { nombre: "Purple", hex: "#6142F6" },
          { nombre: "Lime", hex: "#E2EB80" },
          { nombre: "Lilac", hex: "#D1BFFA" },
          { nombre: "Cloud", hex: "#F7F7EF" },
          { nombre: "Sky", hex: "#C4D6FC" },
        ],
        botones: [
          { texto: "Continue", fondo: "#6142F6", color: "#FFFFFF" },
          { texto: "Start Workout", fondo: "#E2EB80", color: "#070826" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Una app que se siente como un entrenador", en: "An app that feels like a coach" } },
      {
        tipo: "texto",
        texto: {
          es: ["El rediseño ordenó la experiencia en flujos claros por objetivo y tipo de entrenamiento, llevó la nueva identidad de MyCoach a cada pantalla y dejó un design system listo para que el producto siga creciendo."],
          en: ["The redesign organized the experience into clear flows by goal and training type, brought MyCoach’s new identity to every screen, and left a design system ready for the product to keep growing."],
        },
      },
      {
        tipo: "resultado",
        items: [
          { desde: "41%", valor: "68%", texto: { es: "completa el onboarding y recibe su plan.", en: "complete onboarding and get their plan." }, medicion: { es: "embudo de analítica del onboarding, 4 semanas antes frente a 4 semanas después del lanzamiento de la beta.", en: "onboarding analytics funnel, 4 weeks before vs. 4 weeks after the beta launch." } },
          { desde: { es: "6 toques", en: "6 taps" }, valor: "3", texto: { es: "para empezar el entrenamiento del día.", en: "to start today’s workout." }, medicion: { es: "conteo de interacciones desde el home hasta iniciar la sesión, app anterior frente a la nueva.", en: "interaction count from home to starting the session, old app vs. new." } },
          { valor: "+22%", texto: { es: "entrenamientos completados por semana.", en: "workouts completed per week." }, medicion: { es: "promedio por usuario activo en la beta frente a la versión anterior.", en: "average per active user in the beta vs. the previous version." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Que cada persona sienta que tiene a su entrenador en el bolsillo, sin importar cómo entrene.",
          en: "Making everyone feel they have their coach in their pocket, no matter how they train.",
        },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "Diseñar para atletas muy distintos me obligó a separar lo que es común (el plan, el progreso) de lo que cambia (el tipo de entrenamiento). Esa separación es la que hace que la app escale.", en: "Designing for very different athletes forced me to separate what’s shared (the plan, progress) from what changes (the training type). That separation is what lets the app scale." },
        distinto: { es: "Probaría antes el onboarding con personas que nunca han tenido entrenador. Son las que más abandonan y las que menos aparecieron en las primeras pruebas.", en: "I’d test onboarding earlier with people who have never had a coach. They drop off the most and showed up the least in early tests." },
      },
    ],
  },
  /* =========================================================== LEMON JOY */
  {
    slug: "lemon-joy",
    composicion: "depth",
    acabado: "blue",
    nombre: "Lemon Joy",
    cliente: "Lemon Joy Events",
    subtitulo: { es: "Sitio web para agencia de eventos", en: "Website for an events agency" },
    frases: {
      es: ["Eventos que se sienten.", "Marcas que conectan.", "Experiencias memorables."],
      en: ["Events you can feel.", "Brands that connect.", "Memorable experiences."],
    },
    resumen: {
      es: "Diseñé el sitio de Lemon Joy Events, una agencia de eventos corporativos que trabaja con marcas como Marc Jacobs, Covergirl y Burberry: una web que vende experiencias con la misma energía de sus eventos.",
      en: "I designed the website for Lemon Joy Events, a corporate events agency working with brands like Marc Jacobs, Covergirl, and Burberry: a site that sells experiences with the same energy as its events.",
    },
    anio: "2025",
    titular: {
      es: "Un sitio que vende experiencias con la energía de sus eventos: +35% en solicitudes de propuesta.",
      en: "A site that sells experiences with the energy of its events: +35% in proposal requests.",
    },
    producto: { es: "Sitio web corporativo", en: "Corporate website" },
    industria: { es: "Eventos / Retail de marcas", en: "Events / Brand retail" },
    metricaTarjeta: { valor: "+35%", texto: { es: "solicitudes de propuesta tras el lanzamiento", en: "proposal requests after launch" } },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Diseño web, dirección visual, design system", en: "Web design, visual direction, design system" },
    herramientas: "Figma",
    tags: { es: ["Diseño web", "Desktop + mobile", "Eventos"], en: ["Web design", "Desktop + mobile", "Events"] },
    color: "#f6ef85",
    escena: [
      { dispositivo: "render", src: "assets/mockups/lemon-macbook.webp", ratio: 1.6377 },
      { dispositivo: "phone", src: "assets/proyectos/lemon-joy/mobile-1.jpg" },
    ],
    portada: { tipo: "escena", src: "assets/mockups/lemon-joy-macbook-sofa.webp", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de un MacBook sobre un sofá con la página de eventos de Lemon Joy", en: "Mockup of a MacBook on a sofa with Lemon Joy’s events page" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "+35%", texto: { es: "solicitudes de propuesta desde el sitio tras el lanzamiento", en: "proposal requests from the site after launch" } },
          { valor: "2x", texto: { es: "páginas vistas por visita: el portafolio invita a seguir explorando", en: "pages per visit: the portfolio invites further exploring" } },
          { valor: "3", texto: { es: "clics como máximo para pedir una propuesta desde cualquier página", en: "clicks at most to request a proposal from any page" } },
          { valor: "−30%", texto: { es: "rebote en mobile frente al sitio anterior", en: "mobile bounce rate vs. the previous site" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El reto", en: "The challenge" }, bajada: { es: "Vender experiencias en una pantalla", en: "Selling experiences on a screen" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Una agencia que crea experiencias memorables necesitaba <em>una web a la altura</em> de sus eventos.",
          en: "An agency that creates memorable experiences needed <em>a website that lived up</em> to its events.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["Lemon Joy organiza convenciones, lanzamientos de producto, cenas experienciales y fiestas corporativas para marcas reconocidas. Su mejor argumento es su trabajo, así que el sitio debía mostrarlo con fuerza, explicar con claridad qué hacen y llevar a las marcas a pedir una propuesta."],
          en: ["Lemon Joy runs conventions, product launches, experiential dinners, and corporate parties for well-known brands. Their best argument is their work, so the site had to showcase it boldly, clearly explain what they do, and lead brands to request a proposal."],
        },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Objetivos del sitio", en: "Site goals" },
        items: [
          { titulo: { es: "Mostrar el portafolio", en: "Show the portfolio" }, texto: { es: "Que las marcas y los eventos hablen por la agencia.", en: "Let the brands and events speak for the agency." } },
          { titulo: { es: "Explicar los servicios", en: "Explain the services" }, texto: { es: "Siete tipos de evento fáciles de recorrer y comparar.", en: "Seven event types that are easy to browse and compare." } },
          { titulo: { es: "Generar contactos", en: "Generate leads" }, texto: { es: "Llamados a la acción visibles en cada recorrido.", en: "Visible calls to action along every path." } },
        ],
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El enfoque", en: "The approach" }, bajada: { es: "La energía de un evento, traducida a la web", en: "The energy of an event, translated to the web" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Wireframes", en: "Wireframes" }, texto: { es: "Arquitectura de las 8 páginas: home, servicios, casos, nosotros, blog y contacto.", en: "Architecture for 8 pages: home, services, work, about, blog, and contact." } },
          { titulo: { es: "Design system", en: "Design system" }, texto: { es: "Tipografía, paleta, botones, inputs y componentes reutilizables.", en: "Typography, palette, buttons, inputs, and reusable components." } },
          { titulo: { es: "Diseño", en: "Design" }, texto: { es: "Desktop y mobile, con la marca aplicada en cada página.", en: "Desktop and mobile, with the brand applied to every page." } },
          { titulo: { es: "Prototipo", en: "Prototype" }, texto: { es: "Animaciones de carga y navegación prototipadas para el equipo de desarrollo.", en: "Loading and navigation animations prototyped for the dev team." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Decisiones de diseño", en: "Design decisions" },
        items: [
          { titulo: { es: "La fotografía manda", en: "Photography leads" }, texto: { es: "Los eventos reales son el contenido principal: generan confianza al instante.", en: "Real events are the main content: they build trust instantly." } },
          { titulo: { es: "Tipografía con carácter", en: "Type with character" }, texto: { es: "Brandon Grotesque en mayúsculas con acentos manuscritos, como la marca.", en: "Uppercase Brandon Grotesque with handwritten accents, just like the brand." } },
          { titulo: { es: "Contraste que guía", en: "Contrast that guides" }, texto: { es: "Navy profundo con amarillo limón para resaltar lo importante y los botones.", en: "Deep navy with lemon yellow to highlight what matters and the buttons." } },
          { titulo: { es: "Navegación siempre a mano", en: "Navigation always at hand" }, texto: { es: "Menú lateral fijo con redes sociales, sin quitarle espacio a las imágenes.", en: "A fixed side menu with social links, without taking space from the imagery." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Un sitio que se siente como un evento", en: "A site that feels like an event" } },
      {
        tipo: "spotlight",
        dispositivo: "frontal",
        items: [
          {
            titulo: { es: "“The bond between people & brands”", en: "“The bond between people & brands”" },
            texto: { es: "Un hero con el mensaje de la marca en grande y un llamado a la acción claro desde el primer segundo.", en: "A hero with the brand message front and center and a clear call to action from the first second." },
            src: "assets/proyectos/lemon-joy/home-hero.jpg",
            alt: { es: "Hero del home", en: "Home hero" },
          },
          {
            titulo: { es: "Qué hacemos, en un vistazo", en: "What we do, at a glance" },
            texto: { es: "Los tipos de evento como tarjetas con fotos reales, para recorrerlas como una galería.", en: "Event types as cards with real photos, browsable like a gallery." },
            src: "assets/proyectos/lemon-joy/home-services.jpg",
            alt: { es: "Sección de servicios", en: "Services section" },
          },
          {
            titulo: { es: "Valores que generan confianza", en: "Values that build trust" },
            texto: { es: "Cinco valores con íconos propios que explican cómo trabaja la agencia.", en: "Five values with custom icons that explain how the agency works." },
            src: "assets/proyectos/lemon-joy/home-values.jpg",
            alt: { es: "Valores de la agencia", en: "Agency values" },
          },
          {
            titulo: { es: "El trabajo como protagonista", en: "The work takes center stage" },
            texto: { es: "Eventos para Marc Jacobs, Covergirl y más, presentados como casos de éxito.", en: "Events for Marc Jacobs, Covergirl, and more, presented as success stories." },
            src: "assets/proyectos/lemon-joy/home-events.jpg",
            alt: { es: "Eventos memorables", en: "Memorable events" },
          },
          {
            titulo: { es: "Casos de estudio", en: "Case studies" },
            texto: { es: "Cada evento con su reto, la solución y los detalles que lo hicieron memorable.", en: "Each event with its challenge, solution, and the details that made it memorable." },
            src: "assets/proyectos/lemon-joy/case-study.jpg",
            alt: { es: "Caso de estudio de un evento", en: "Event case study" },
          },
        ],
      },
      {
        tipo: "responsive",
        titulo: { es: "Mobile, con el mismo impacto", en: "Mobile, with the same impact" },
        texto: {
          es: "El sitio se pensó también para el teléfono: el mensaje y la acción principal caben en la primera pantalla, y los servicios se recorren como tarjetas en una lectura vertical y cómoda.",
          en: "The site was also designed for phones: the message and main action fit on the first screen, and services are browsed as cards in a comfortable vertical read.",
        },
        pantallas: [
          { src: "assets/proyectos/lemon-joy/mobile-1.jpg", alt: { es: "Home en mobile", en: "Mobile home" } },
          { src: "assets/proyectos/lemon-joy/mobile-2.jpg", alt: { es: "Servicios en mobile", en: "Mobile services" } },
        ],
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "Brandon Grotesque", uso: { es: "Títulos en mayúsculas", en: "Uppercase headings" }, css: "'Brandon Grotesque', 'Inter Tight', sans-serif" },
          { nombre: "Be Vietnam", uso: { es: "Texto y navegación", en: "Body and navigation" }, css: "'Be Vietnam Pro', 'Inter Tight', sans-serif" },
          { nombre: "Rock Salt", uso: { es: "Acentos manuscritos", en: "Handwritten accents" }, css: "'Rock Salt', cursive" },
        ],
        escala: [{ tag: "H1", px: 180 }, { tag: "H2", px: 90 }, { tag: "H3", px: 32 }, { tag: "Body", px: 20 }, { tag: "Small", px: 16 }],
        colores: [
          { nombre: "Navy", hex: "#002554" },
          { nombre: "Deep navy", hex: "#001735" },
          { nombre: "Lemon", hex: "#F6EF85" },
          { nombre: "Blue", hex: "#0289CC" },
          { nombre: "Sky", hex: "#64D3FF" },
          { nombre: "White", hex: "#FFFFFF" },
        ],
        botones: [
          { texto: "See more", fondo: "#F6EF85", color: "#001735" },
          { texto: "Contact us", fondo: "#002554", color: "#F6EF85", borde: "#F6EF85" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Una web con la personalidad de la marca", en: "A website with the brand’s personality" } },
      {
        tipo: "texto",
        texto: {
          es: ["El sitio presenta a Lemon Joy como lo que es: una agencia que conecta personas y marcas a través de experiencias. Ocho plantillas consistentes en desktop y mobile, un design system reutilizable y una narrativa visual que pone el trabajo de la agencia en primer plano."],
          en: ["The site presents Lemon Joy as what it is: an agency that connects people and brands through experiences. Eight consistent templates across desktop and mobile, a reusable design system, and a visual narrative that puts the agency’s work up front."],
        },
      },
      {
        tipo: "resultado",
        items: [
          { valor: "+35%", texto: { es: "solicitudes de propuesta desde el sitio.", en: "proposal requests from the site." }, medicion: { es: "envíos del formulario de contacto, 3 meses antes frente a 3 meses después del lanzamiento.", en: "contact form submissions, 3 months before vs. 3 months after launch." } },
          { valor: "2x", texto: { es: "páginas vistas por visita.", en: "pages per visit." }, medicion: { es: "Google Analytics, mismo periodo del año anterior.", en: "Google Analytics, same period the previous year." } },
          { valor: "−30%", texto: { es: "rebote en mobile.", en: "mobile bounce rate." }, medicion: { es: "Google Analytics, sesiones móviles, sitio anterior frente al nuevo.", en: "Google Analytics, mobile sessions, old site vs. new." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Si los eventos se recuerdan, la web también debía hacerlo.",
          en: "If the events are memorable, the website had to be too.",
        },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "En un sitio de servicios, la personalidad vende tanto como la información. El reto fue que la energía visual no le quitara claridad al camino hacia la propuesta.", en: "On a services site, personality sells as much as information. The challenge was keeping the visual energy from getting in the way of the path to a proposal." },
        distinto: { es: "Definiría las métricas con el cliente desde el inicio. Medimos bien después del lanzamiento, pero sin una línea base más detallada fue difícil atribuir cada mejora.", en: "I’d define metrics with the client from the start. We measured well after launch, but without a more detailed baseline it was hard to attribute each improvement." },
      },
    ],
  },
  /* =============================================================== FITUP */
  {
    slug: "fitup",
    composicion: "deck",
    acabado: "black",
    nombre: "FitUp",
    cliente: "FitUp",
    subtitulo: { es: "App de entrenamiento personal", en: "Personal training app" },
    frases: {
      es: ["Sin improvisar.", "Progreso visible.", "Tu entrenador de bolsillo."],
      en: ["No more guessing.", "Visible progress.", "A pocket-sized trainer."],
    },
    resumen: {
      es: "Una app de entrenamiento que funciona como un entrenador personal de bolsillo: rutinas a tu nivel, progreso visible y motivación para no rendirte.",
      en: "A fitness app that works like a pocket-sized personal trainer: routines that fit your level, visible progress, and motivation to keep going.",
    },
    anio: { es: "Proyecto académico", en: "Academic project" },
    titular: {
      es: "Una app que funciona como un entrenador personal de bolsillo: rutinas a tu nivel y progreso visible.",
      en: "An app that works like a pocket-sized personal trainer: routines at your level and visible progress.",
    },
    producto: { es: "App móvil de entrenamiento", en: "Fitness mobile app" },
    industria: "Fitness",
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Investigación UX, UI, pruebas de usabilidad", en: "UX research, UI, usability testing" },
    tags: { es: ["App móvil", "UX/UI", "Fitness"], en: ["Mobile app", "UX/UI", "Fitness"] },
    color: "#a66bff",
    escena: [
      { dispositivo: "phone", src: "assets/proyectos/fitup/screen-home.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/fitup/screen-today.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/fitup/screen-goal.jpg" },
    ],
    portada: { tipo: "escena", src: "assets/mockups/fitup-iphone-superior.webp", ratio: "16 / 10", pos: "center", alt: { es: "Mockup de la parte superior de un iPhone con la pantalla de hoy de FitUp: calendario, ejercicios pendientes y tiempo para terminar", en: "Mockup of the top of an iPhone with FitUp’s Today screen: calendar, exercises left and time to finish" } },
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "12", texto: { es: "entrevistas con usuarios", en: "user interviews" } },
          { valor: "200", texto: { es: "personas encuestadas", en: "people surveyed" } },
          { valor: "4", texto: { es: "apps analizadas en el benchmark", en: "apps analyzed in the benchmark" } },
          { valor: "10", texto: { es: "usuarios en pruebas de usabilidad", en: "users in usability tests" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Entrenar sin saber si estás avanzando", en: "Training without knowing if you’re improving" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Lo peor de empezar a entrenar es <em>no saber por dónde empezar</em>.",
          en: "The worst part of starting to exercise is <em>knowing where to start</em>.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["La mayoría de quienes van al gimnasio no logran registrar sus entrenamientos de forma constante y no tienen una manera clara de ver su progreso. Buscan una app que los motive y les dé retroalimentación personalizada de sus entrenadores."],
          en: ["Most gym users have trouble consistently tracking their workouts and have no clear way to visualize their progress. They’re looking for an app that motivates them and gives personalized feedback from trainers."],
        },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Objetivos de la investigación", en: "Research objectives" },
        items: [
          { titulo: { es: "Problemas", en: "Problems" }, texto: { es: "Identificar los principales obstáculos al seguir rutinas de ejercicio.", en: "Identify the main problems users face when following exercise routines." } },
          { titulo: { es: "Motivaciones", en: "Motivations" }, texto: { es: "Entender motivaciones, frustraciones y hábitos frente al ejercicio.", en: "Understand motivations, frustrations, and habits around exercise." } },
          { titulo: { es: "Funcionalidades", en: "Features" }, texto: { es: "Evaluar qué funcionalidades mejorarían realmente la experiencia.", en: "Evaluate which features would truly improve the experience." } },
        ],
      },

      { tipo: "capitulo", num: "02", titulo: { es: "La investigación", en: "The research" }, bajada: { es: "Qué hacen los mejores y qué necesitan las personas", en: "What the best apps do and what people need" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Descubrir", en: "Discovery" }, texto: { es: "Definición del problema, benchmark, investigación UX y user journey.", en: "Problem definition, benchmark, UX research, and user journey." } },
          { titulo: { es: "Diseñar", en: "Design" }, texto: { es: "Flujo de la app, wireframes y diseño UI.", en: "App flow, wireframing, and UI design." } },
          { titulo: { es: "Prototipar", en: "Prototype" }, texto: { es: "Prototipo navegable para validar con usuarios reales.", en: "A clickable prototype to validate with real users." } },
          { titulo: { es: "Validar", en: "Validate" }, texto: { es: "Pruebas de usabilidad y ajustes sobre los hallazgos.", en: "Usability tests and adjustments based on findings." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Benchmark", en: "Benchmark" },
        items: [
          { titulo: "Nike Training Club", texto: { es: "Entrenamientos gratis, niveles de dificultad y videos. Lo clave: imágenes motivadoras y personalización según metas.", en: "Free workouts, difficulty levels, and videos. Key: motivating imagery and goal-based customization." } },
          { titulo: "Strava", texto: { es: "Seguimiento de actividades, retos y competencias con amigos. Lo clave: competencia social y gamificación.", en: "Activity tracking, challenges, and competitions with friends. Key: social competition and gamification." } },
          { titulo: "Fitbit", texto: { es: "Monitoreo de salud, estadísticas y comunidad. Lo clave: integración con wearables y seguimiento constante.", en: "Health monitoring, statistics, and community. Key: wearable integration and constant tracking." } },
          { titulo: "Freeletics", texto: { es: "Rutinas de alta intensidad con peso corporal. Lo clave: entrenamientos que se adaptan a cada persona.", en: "High-intensity bodyweight routines. Key: workouts that adapt to each person." } },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Lo que escuchamos", en: "What we heard" },
        texto: {
          es: ["Hice 12 entrevistas con personas que usan otras apps o quieren empezar, y una encuesta a 200 personas para entender preferencias y hábitos de entrenamiento."],
          en: ["I conducted 12 interviews with current and potential users of other apps, and surveyed 200 people to understand preferences and training habits."],
        },
      },
      {
        tipo: "tarjetas",
        items: [
          { titulo: { es: "Navegación compleja", en: "Complex navigation" }, texto: { es: "Costaba elegir entrenamientos adecuados para su nivel.", en: "It was hard to pick workouts that fit their fitness level." } },
          { titulo: { es: "Sin retroalimentación visual", en: "No visual feedback" }, texto: { es: "Frustración por no tener un seguimiento claro del progreso.", en: "Frustration at not having clear tracking of their progress." } },
          { titulo: { es: "Rutinas monótonas", en: "Monotonous workouts" }, texto: { es: "Aburrimiento de repetir las mismas rutinas cada semana.", en: "Boredom from repeating the same routines every week." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "“A veces me siento perdida en el gimnasio y no sé por dónde empezar; necesito una guía que me dé confianza.” — Fit Starter, persona construida a partir de las entrevistas",
          en: "“Sometimes I feel lost in the gym and don’t know where to start; I need a guide to help me feel more confident.” — Fit Starter, a persona built from the interviews",
        },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Frustraciones", en: "Frustrations" },
          puntos: {
            es: ["No tiene tiempo para sesiones largas", "No sabe si está progresando", "No sabe si hace bien los ejercicios"],
            en: ["No time for long gym sessions", "Can’t tell if she’s making progress", "Unsure if she’s doing exercises correctly"],
          },
        },
        despues: {
          titulo: { es: "Necesidades", en: "Needs" },
          puntos: {
            es: ["Rutinas cortas y personalizadas, incluso en casa", "Retroalimentación visual constante: gráficas y metas", "Videos o guías claras de cada ejercicio"],
            en: ["Short, personalized routines, even at home", "Constant visual feedback: charts and goals", "Clear exercise videos or guides"],
          },
        },
      },
      {
        tipo: "journey",
        titulo: { es: "User journey map", en: "User journey map" },
        fases: [
          {
            nombre: { es: "Descubrimiento", en: "Awareness" },
            emocion: 0.4,
            accion: { es: "Va al gimnasio con regularidad, pero no ve los resultados que espera.", en: "She goes to the gym regularly but isn’t getting the results she expects." },
            pensamiento: { es: "“Quizás no hago los ejercicios correctos, o no los hago bien.”", en: "“Maybe I’m not doing the right exercises, or not doing them right.”" },
            dolores: { es: ["No tiene una rutina clara e improvisa", "Duda de su técnica y del uso de las máquinas"], en: ["No clear routine; she improvises", "Doubts her technique and equipment use"] },
          },
          {
            nombre: { es: "Investigación", en: "Research" },
            emocion: 0.35,
            accion: { es: "Lee artículos, ve videos de entrenadores y pregunta a conocidos con más experiencia.", en: "Reads articles, watches trainer videos, and asks more experienced acquaintances." },
            pensamiento: { es: "“Quizás debería pagar un entrenador, pero no sé si puedo comprometerme.”", en: "“Maybe I should invest in a personal trainer, but I’m not sure I can commit.”" },
            dolores: { es: ["Tanta información abruma", "Las soluciones genéricas no se adaptan a su nivel"], en: ["The amount of information is overwhelming", "Generic solutions don’t fit her level"] },
          },
          {
            nombre: { es: "Consideración", en: "Consideration" },
            emocion: 0.25,
            accion: { es: "Piensa en clases grupales o programas en línea, pero no sabe qué camino tomar.", en: "Considers group classes or online programs, but feels unsure which way to go." },
            pensamiento: { es: "“No sé si inscribirme a clases grupales o seguir intentándolo sola.”", en: "“I don’t know whether to sign up for group classes or keep trying on my own.”" },
            dolores: { es: ["Le cuesta decidir qué opción le sirve", "Teme que las opciones avanzadas sean muy caras"], en: ["Hard to decide which option will help", "Fears advanced options are too expensive"] },
          },
          {
            nombre: { es: "Decisión", en: "Decision" },
            emocion: 0.55,
            accion: { es: "Decide que necesita algo que la guíe de forma estructurada.", en: "Decides she needs something to guide her in a structured way." },
            pensamiento: { es: "“Necesito algo que me diga exactamente qué hacer, a mi nivel y con mis metas.”", en: "“I need something that tells me exactly what to do, for my level and goals.”" },
            dolores: { es: ["Está decidida, pero no tiene claro el camino", "No ha encontrado cómo medir su progreso"], en: ["Determined, but the path isn’t clear", "Hasn’t found a way to track progress"] },
          },
          {
            nombre: { es: "Retención", en: "Retention" },
            emocion: 0.68,
            accion: { es: "Sigue una rutina más estructurada y empieza a mejorar, aunque sin un seguimiento claro.", en: "Follows a more structured routine and starts improving, but without clear follow-up." },
            pensamiento: { es: "“Debería buscar algo que me ayude a organizarme y medir lo que hago.”", en: "“I should look for something to help me get organized and measure what I do.”" },
            dolores: { es: ["No tiene forma de medir su progreso a largo plazo", "Aún duda de si ejecuta bien los ejercicios"], en: ["No way to measure long-term progress", "Still unsure if she executes exercises correctly"] },
          },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Un entrenador personal de bolsillo", en: "A pocket-sized personal trainer" } },
      {
        tipo: "declaracion",
        texto: {
          es: "FitUp analiza cómo entrenas para <em>ajustar tus rutinas</em> a tus metas.",
          en: "FitUp analyzes how you train to <em>tailor your routines</em> to your goals.",
        },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Qué hace FitUp", en: "What FitUp does" },
        items: [
          { titulo: { es: "Entrenamiento a tu medida", en: "Training customization" }, texto: { es: "Rutinas por tipo (HIIT, fuerza, cardio, flexibilidad) y por nivel.", en: "Routines by type (HIIT, strength, cardio, flexibility) and level." } },
          { titulo: { es: "Seguimiento del progreso", en: "Progress tracking" }, texto: { es: "Peso, calorías, tiempo de entrenamiento, estadísticas y medallas.", en: "Weight, calories, training time, statistics, and medals." } },
          { titulo: { es: "Entrenamientos guiados", en: "Guided workouts" }, texto: { es: "Cada ejercicio con series, músculos involucrados y temporizador.", en: "Every exercise with sets, muscles involved, and a timer." } },
          { titulo: { es: "Planeación nutricional", en: "Nutritional planning" }, texto: { es: "Apoyo para acompañar el entrenamiento con buenos hábitos.", en: "Support to pair training with healthy habits." } },
          { titulo: { es: "Comunidad y motivación", en: "Community and motivation" }, texto: { es: "Rachas, metas diarias y retos para no rendirse.", en: "Streaks, daily goals, and challenges to keep going." } },
          { titulo: { es: "Retos y metas", en: "Challenges and goals" }, texto: { es: "Objetivos claros que hacen visible cada avance.", en: "Clear goals that make every step forward visible." } },
        ],
      },
      {
        tipo: "spotlight",
        dispositivo: "phone",
        items: [
          {
            titulo: { es: "Un inicio que te dice qué hacer hoy", en: "A home that tells you what to do today" },
            texto: { es: "El entrenamiento del día arriba y, debajo, rutinas por tipo y por nivel. Nadie vuelve a llegar al gimnasio sin saber por dónde empezar.", en: "Today’s training up top, then routines by type and level. No one shows up at the gym without knowing where to start again." },
            src: "assets/proyectos/fitup/screen-home.jpg",
            alt: { es: "Inicio de FitUp", en: "FitUp home" },
          },
          {
            titulo: { es: "Tu plan, ejercicio por ejercicio", en: "Your plan, exercise by exercise" },
            texto: { es: "Ejercicios restantes, tiempo para terminar y la lista del día con series y repeticiones, para marcar cada logro.", en: "Exercises left, time to finish, and today’s list with sets and reps, so every win gets checked off." },
            src: "assets/proyectos/fitup/screen-today.jpg",
            alt: { es: "Plan de entrenamiento del día", en: "Today’s training plan" },
          },
          {
            titulo: { es: "Progreso que se ve", en: "Progress you can see" },
            texto: { es: "Meta diaria de calorías, el ejercicio de hoy y una racha visual que convierte la constancia en motivación.", en: "A daily calorie goal, today’s exercise, and a visual streak that turns consistency into motivation." },
            src: "assets/proyectos/fitup/screen-goal.jpg",
            alt: { es: "Meta diaria y racha", en: "Daily goal and streak" },
          },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Arquitectura de la app", en: "App architecture" },
        texto: {
          es: ["Cinco secciones desde el inicio: Entrenamientos (por tipo y por nivel, rutinas personalizadas), Mi progreso (métricas, estadísticas y medallas), Perfil (datos, preferencias e historial), Soporte (FAQ y contacto) y Ajustes."],
          en: ["Five sections from Home: Workouts (by type and level, personalized routines), My progress (metrics, statistics, and medals), Profile (info, preferences, and history), Support (FAQs and contact), and Settings."],
        },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "La validación", en: "The validation" }, bajada: { es: "Probado con 10 personas de distintos niveles", en: "Tested with 10 people across fitness levels" } },
      {
        tipo: "texto",
        texto: {
          es: ["Hice pruebas de usabilidad con 10 usuarios de perfiles principiante, intermedio y avanzado, para identificar problemas de navegación, comprensión de la interfaz y utilidad de las recomendaciones."],
          en: ["I ran usability tests with 10 beginner, intermediate, and advanced users to identify navigation issues, interface comprehension, and the usefulness of recommendations."],
        },
      },
      {
        tipo: "tarjetas",
        items: [
          { titulo: { es: "Lo que funcionó", en: "What worked" }, texto: { es: "La mayoría encontró muy útil la personalización automática de las rutinas.", en: "Most users found the automatic routine customization useful." } },
          { titulo: { es: "Lo que falló", en: "What failed" }, texto: { es: "A algunas personas les costaba encontrar las gráficas de progreso.", en: "Some users had trouble finding the progress charts." } },
          { titulo: { es: "Cómo lo resolví", en: "How I fixed it" }, texto: { es: "Llevé la sección de progreso al inicio, a un toque de distancia.", en: "I made the progress section accessible from the home screen." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Darle a las personas el control de su proceso: entrenar con un plan, ver cada avance y seguir motivadas.",
          en: "Empowering people to take control of their process: train with a plan, see every step forward, and stay motivated.",
        },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "La investigación cambió la idea inicial: las personas no necesitaban más rutinas, necesitaban saber si estaban avanzando. Ese hallazgo definió el producto.", en: "Research changed the initial idea: people didn’t need more routines, they needed to know whether they were improving. That insight defined the product." },
        distinto: { es: "Probaría un prototipo de baja fidelidad antes de la encuesta. Habría hecho preguntas más concretas a las 200 personas.", en: "I’d test a low-fidelity prototype before the survey. It would have led to more specific questions for the 200 respondents." },
      },
    ],
  },
];

/* ==========================================================================
   MARCAS — franja de logos en la home. El logo se muestra en blanco.
   Si "logo" está vacío se muestra el nombre como texto.
   ========================================================================== */
window.MARCAS = [
  { nombre: "Rappi", logo: "assets/logos/rappi.svg" },
  { nombre: "Toyota", logo: "assets/logos/toyota.svg" },
  { nombre: "Keralty", logo: "assets/logos/keralty.png" },
  { nombre: "Banco W", logo: "assets/logos/banco-w.png" },
  { nombre: "Rob Levine Legal Solutions", logo: "assets/logos/rob-levine.svg" },
  { nombre: "Heel", logo: "assets/logos/heel.png" },
  { nombre: "MyCoach", logo: "assets/logos/mycoach.svg" },
];
