/* ==========================================================================
   Plantillas: convierten data/proyectos.js en HTML.
   Para agregar proyectos no necesitas tocar este archivo.
   ========================================================================== */
window.renderApp = (lang) => {
  const P = window.PROYECTOS || [];
  const ui = window.I18N[lang];
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v ?? "");
  const pad = (n) => String(n).padStart(2, "0");
  const attr = (s = "") => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const plain = (s = "") => String(s).replace(/<[^>]+>/g, "");
  // URLs limpias: bybelladesign.com/nova/ (en local, abriendo el archivo, se usa nova/index.html)
  const caseUrl = (p) => (location.protocol === "file:" ? `${p.slug}/index.html` : `${p.slug}/`);
  const tags = (p) => `<ul class="tags">${t(p.tags).map((x) => `<li>${x}</li>`).join("")}</ul>`;

  const zoomable = (img) => `<img src="${attr(img.src)}" alt="${attr(t(img.alt))}" decoding="async">`;

  /* ---------- Dispositivos 3D construidos con CSS (con grosor real) ----------
     tipos: phone · laptop (pro, con muesca) · ultrabook (sin muesca, con mentón) · monitor (con base) · browser (ventana)
     acabados: silver · midnight · spaceblack · graphite · natural · desert · white · black · blue */
  const DEFAULT_FIN = { phone: "natural", laptop: "silver", ultrabook: "graphite", monitor: "silver", browser: "dark" };
  const edges = (n) => Array.from({ length: n }, (_, k) => `<i class="dv__edge" style="--k:${k + 1}"></i>`).join("");
  const panel = (inner, extra = "", n = 4) =>
    `${edges(n)}<i class="dv__back"></i><div class="dv__face"><div class="device__screen">${inner}</div>${extra}</div>`;
  const device = (tipo, inner, fin) => {
    // render: mockup ya armado (imagen sin fondo con la pantalla montada)
    if (tipo === "render") return `<div class="device dv--render">${inner}</div>`;
    // frontal: MacBook de frente (marco de imagen con la pantalla transparente)
    if (tipo === "frontal")
      return `<div class="device dv--frontal dv--desk"><div class="device__screen">${inner}</div><img class="dv__frame" src="assets/mockups/macbook-front.webp" alt="" decoding="async"></div>`;
    const t = tipo || "laptop";
    const f = `dv-${fin || DEFAULT_FIN[t] || "silver"}`;
    const desk = t === "phone" ? "" : " dv--desk";
    if (t === "phone")
      return `<div class="device dv dv--phone ${f}">
        ${panel(inner, `<span class="dv__island"></span>`, 6)}
        <i class="dv__btn dv__btn--1"></i><i class="dv__btn dv__btn--2"></i><i class="dv__btn dv__btn--3"></i>
      </div>`;
    if (t === "monitor")
      return `<div class="device dv dv--monitor${desk} ${f}">
        <i class="dv__neck"></i><i class="dv__foot"></i>
        ${panel(inner, `<span class="dv__cam"></span>`, 5)}
      </div>`;
    if (t === "browser")
      return `<div class="device dv dv--browser${desk} ${f}">
        ${edges(2)}<div class="dv__face"><div class="dv__bar"><i></i><i></i><i></i><span></span></div><div class="device__screen">${inner}</div></div>
      </div>`;
    // laptop y ultrabook: tapa inclinada + base con teclado como plano en perspectiva
    return `<div class="device dv dv--laptop dv--${t}${desk} ${f}">
      <div class="dv__lid">${panel(inner, `<span class="dv__cam"></span>`, 4)}</div>
      <div class="dv__base"><i class="dv__lip"></i></div>
    </div>`;
  };
  const shot = (src) => `<img src="${attr(src)}" alt="" decoding="async">`;

  /* ---------- Escena: dispositivos superpuestos ---------- */
  const scene = (p) => {
    const e = p.escena || [];
    if (!e.length) return `<div class="scene scene--type" style="--c:${attr(p.color)}" aria-hidden="true"><span class="scene__word" data-depth="0.8">${p.nombre}</span></div>`;
    const kind = e.every((d) => d.dispositivo === "phone") ? "phones" : "desktop";
    // composicion: ver README. Sin ella, la composición genérica
    const cls = p.composicion ? `scene--c scene--${p.composicion}` : `scene--${kind} scene--n${e.length}`;
    return `
      <div class="scene ${cls}" style="--c:${attr(p.color)}" aria-hidden="true">
        <div class="scene__stage">
          ${e.map((d, k) => `
            <div class="scene__dev scene__dev--${k + 1} scene__dev--${d.dispositivo}"${d.ratio || d.alto ? ` style="${d.ratio ? `aspect-ratio:${d.ratio};` : ""}${d.alto ? `height:${d.alto}%;` : ""}"` : ""} data-depth="${(0.5 + k * 0.6).toFixed(1)}">
              <div class="scene__float" style="--delay:${k * -1.7}s">${device(d.dispositivo, shot(d.src), d.acabado || (d.dispositivo === "phone" && p.acabado))}</div>
            </div>`).join("")}
        </div>
      </div>`;
  };

  /* ---------- Home: franja de marcas ---------- */
  const logos = document.querySelector("[data-logos]");
  if (logos) {
    const items = (window.MARCAS || []).map((m) =>
      m.logo ? `<li><img src="${attr(m.logo)}" alt="${attr(m.nombre)}" decoding="async"></li>` : `<li><span class="logos__text">${m.nombre}</span></li>`
    ).join("");
    logos.innerHTML = `<ul class="logos__track">${items}${items.replace(/<li>/g, '<li aria-hidden="true">')}</ul>`;
  }

  /* ---------- Métrica de impacto: "2 semanas → 5 min" o una cifra sola ---------- */
  const metrics = (items) => items.map((it, k) => metric(it, k, items.some((x) => x.desde))).join("");
  const impactos = (p) => p.bloques?.find((b) => b.tipo === "impacto")?.items || [];
  // pad: si alguna cifra de la fila tiene "antes", las demás reservan ese renglón para quedar alineadas
  const metric = (it, k = 0, pad = false) => `
    <li data-reveal style="--d:${k * 90}ms">
      <strong>${it.desde ? `<small class="metric__from">${t(it.desde)} →</small>` : pad ? `<small class="metric__from" aria-hidden="true">&nbsp;</small>` : ""}<span${it.desde ? "" : ` data-count="${attr(t(it.valor))}"`}>${t(it.valor)}</span></strong>
      <span>${t(it.texto)}</span>
    </li>`;

  /* ---------- Home: casos destacados + más proyectos ---------- */
  const card = (p, i) => {
    const tag = p.caso ? "a" : "div";
    const href = p.caso ? ` href="${caseUrl(p)}"` : "";
    const top = impactos(p)[0];
    return `
      <article class="card" style="--c:${attr(p.color)}">
        <${tag} class="card__link"${href}>
          <div class="card__media clip" data-reveal>${scene(p)}</div>
          <div class="card__body">
            <p class="card__meta"><span>${pad(i + 1)} — ${p.cliente}</span><span>${t(p.industria) || t(p.anio) || ""}</span></p>
            <h3 class="card__title">${p.nombre}</h3>
            <p class="card__summary">${t(p.titular) || t(p.subtitulo)}</p>
            ${top ? `<p class="card__metric"><strong>${top.desde ? `${t(top.desde)} → ` : ""}${top.valor}</strong> ${t(top.texto)}</p>` : ""}
            <div class="card__foot">
              ${tags(p)}
              ${p.caso
                ? `<span class="card__cta" aria-hidden="true">${ui["work.view"]} <span class="arrow">→</span></span>`
                : `<span class="badge">${ui["work.soon"]}</span>`}
            </div>
          </div>
        </${tag}>
      </article>`;
  };
  const featured = P.filter((p) => p.destacado);
  const others = P.filter((p) => !p.destacado);
  const grid = document.querySelector("[data-work-grid]");
  if (grid) grid.innerHTML = featured.map(card).join("");

  // Hero: la métrica principal de cada caso destacado, enlazada al caso
  const proof = document.querySelector("[data-proof]");
  if (proof) {
    proof.innerHTML = featured.map((p) => {
      const m = impactos(p)[0];
      return m ? `
        <li style="--c:${attr(p.color)}"><a href="${caseUrl(p)}">
          <strong>${m.desde ? `${t(m.desde)} → ` : ""}${m.valor}</strong>
          <span>${t(m.texto)} · <em>${p.clienteCorto || p.cliente}</em></span>
        </a></li>` : "";
    }).join("");
  }

  const more = document.querySelector("[data-more-grid]");
  if (more) {
    more.innerHTML = others.map((p) => `
      <li class="mini" style="--c:${attr(p.color)}">
        <a class="mini__link" href="${caseUrl(p)}">
          <div class="mini__media clip">${scene(p)}</div>
          <div class="mini__body">
            <p class="card__meta"><span>${p.cliente}</span><span>${t(p.industria) || ""}</span></p>
            <h4 class="mini__title">${p.nombre} <span class="arrow" aria-hidden="true">→</span></h4>
            <p class="card__summary">${t(p.subtitulo)}</p>
            ${p.metricaTarjeta ? `<p class="card__metric"><strong>${p.metricaTarjeta.valor}</strong> ${t(p.metricaTarjeta.texto)}</p>` : ""}
          </div>
        </a>
      </li>`).join("");
  }

  /* ---------- Caso de estudio ---------- */
  const root = document.querySelector("[data-case]");
  if (!root) return;

  const slug = document.body.dataset.slug || new URLSearchParams(location.search).get("p");
  const cases = P.filter((p) => p.caso);
  const i = cases.findIndex((p) => p.slug === slug);

  if (i < 0) {
    root.innerHTML = `
      <section class="case-hero">
        <div class="case-hero__inner">
          <h1 class="case-hero__name">404</h1>
          <p class="case-hero__summary">${ui["case.notfound"]} <a href="./#trabajo" class="link">${ui["case.back"]}</a></p>
        </div>
      </section>`;
    return;
  }

  const p = cases[i];
  const next = cases[(i + 1) % cases.length];

  document.title = `${p.nombre === p.cliente ? p.nombre : `${p.nombre} — ${p.cliente}`} · Isabella Montes`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", plain(t(p.resumen)));
  root.style.setProperty("--c", p.color);
  document.documentElement.style.setProperty("--case", p.color);

  const toc = [];
  const review = new URLSearchParams(location.search).has("review");
  const heroImpact = p.bloques?.find((b) => b.tipo === "impacto");
  const list =(arr) => (arr?.length ? `<ul class="b-list">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>` : "");

  /* ---------- Componentes del design system, construidos en código ----------
     Cada caso describe sus componentes reales (colores, radios y estados de su UI kit)
     y aquí se dibujan como HTML, en vez de pegar capturas del archivo de Figma. */
  const DSI = {
    bank: '<path d="M3 9.5 12 4l9 5.5M5 10v8m4.7-8v8m4.6-8v8M19 10v8M3.5 20h17" />',
    doc: '<path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M9.5 12h6m-6 3.5h6" />',
    upload: '<path d="M12 16V5m-4.5 4.5L12 5l4.5 4.5M5 19h14" />',
    trash: '<path d="M4.5 7h15M10 4h4m-7.5 3 .8 13h9.4l.8-13M10 11v5.5m4-5.5v5.5" />',
    chevron: '<path d="m6 9.5 6 6 6-6" />',
    user: '<circle cx="12" cy="8" r="3.6" /><path d="M4.8 20c.9-3.6 3.7-5.5 7.2-5.5s6.3 1.9 7.2 5.5" />',
    search: '<circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" />',
    id: '<rect x="3" y="5.5" width="18" height="13" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M5.8 16c.6-1.5 1.8-2.3 3.2-2.3s2.6.8 3.2 2.3M14.5 10h4m-4 3h3" />',
    cal: '<rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 9.5h17M8 3v4m8-4v4" />',
    history: '<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5" /><path d="M4 4v4.5h4.5M12 8v4.5l3 2" />',
    order: '<path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M9.5 13h6m-6 3.5h4" />',
  };
  const dsIcon = (n, c = "currentColor") => (DSI[n] ? `<svg class="dsc-ico" viewBox="0 0 24 24" fill="none" stroke="${attr(c)}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${DSI[n]}</svg>` : "");
  const cssv = (o) => Object.entries(o).filter(([, v]) => v != null && v !== "").map(([k, v]) => `--k-${k}:${v}`).join(";");
  const dsPart = {
    botones: (g, it) => `<span class="dsc-btn${it.subrayado ? " dsc-btn--link" : ""}" style="${attr(cssv({ bg: it.fondo, fg: it.color, bd: it.borde || it.fondo, ring: it.anillo, r: g.radio, w: g.ancho, h: g.alto, fw: it.peso ?? g.peso, fs: g.tam, px: g.relleno }))}">${it.icono ? dsIcon(it.icono) : ""}${t(it.texto ?? g.texto ?? "")}</span>`,
    campos: (g, it) => `
      <div class="dsc-field${g.linea ? " dsc-field--line" : ""}" style="${attr(cssv({ bg: it.fondo, bd: it.borde, fg: it.color, r: g.radio, w: g.ancho, msg: it.mensajeColor }))}">
        ${g.etiqueta ? `<span class="dsc-field__label">${t(g.etiqueta)}<b>*</b></span>` : ""}
        <span class="dsc-field__box${it.cursor ? " is-caret" : ""}">${g.icono ? dsIcon(g.icono) : ""}<span class="${it.valor ? "dsc-val" : "dsc-ph"}">${t(it.valor || it.placeholder || g.placeholder)}</span>${g.iconoDer ? dsIcon(g.iconoDer) : ""}</span>
        ${it.mensaje ? `<small class="dsc-field__msg">${t(it.mensaje)}</small>` : ""}
      </div>`,
    seleccion: (g, it) => `<span class="dsc-pick dsc-pick--${it.control}${it.activo ? " is-on" : ""}" style="${attr(cssv({ on: it.color || g.color, off: g.apagado }))}">${it.control === "check" && it.activo ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ""}</span>`,
    tarjetas: (g, it) => {
      const icono = it.icono ?? g.icono, sep = it.separador ?? g.separador;
      return `
      <div class="dsc-card dsc-card--${it.forma || g.forma || "fila"}" style="${attr(cssv({ bg: it.fondo, bd: it.borde || "transparent", bw: it.grosor, fg: it.color, r: g.radio, w: it.ancho || g.ancho, sh: it.sombra ? "0 2px 10px rgba(0,0,0,.08)" : "none" }))}">
        ${icono ? `<span class="dsc-card__ico">${dsIcon(icono, it.colorIcono || g.colorIcono || "currentColor")}</span>${sep ? '<i class="dsc-card__sep"></i>' : ""}` : ""}
        <span class="dsc-card__lines">${(it.lineas || g.lineas || []).map((l) => `<span style="${attr(cssv({ lc: l.color, lw: l.peso, ls: l.tam }))}">${t(l.texto)}</span>`).join("")}</span>
        ${it.accion ? `<span class="dsc-card__act">${dsIcon(it.accion, it.colorAccion || "currentColor")}</span>` : ""}
      </div>`;
    },
    lista: (g, it) => `
      <div class="dsc-field" style="${attr(cssv({ bd: it.borde || g.borde, r: g.radio, w: g.ancho }))}">
        <span class="dsc-field__box">${g.icono ? dsIcon(g.icono) : ""}<span class="${it.valor ? "dsc-val" : "dsc-ph"}">${t(it.valor || g.placeholder)}</span>${dsIcon("chevron")}</span>
        ${it.opciones ? `<ul class="dsc-menu">${it.opciones.map((o, k) => `<li${k === it.resaltada ? ` style="background:${attr(g.resaltado)}"` : ""}>${t(o)}</li>`).join("")}</ul>` : ""}
      </div>`,
    pestanas: (g, it) => `
      <div class="dsc-tabs" style="${attr(cssv({ on: g.activa, fg: g.color, tl: g.linea }))}">${g.opciones.map((o, k) => `<span class="dsc-tab${k === it.activa ? " is-on" : ""}">${o.icono ? dsIcon(o.icono) : ""}${t(o.texto)}</span>`).join("")}</div>`,
  };
  const componentes = (c) => `
    <section class="b-ds__comp" style="font-family:${attr(c.fuente || "inherit")}">
      <h4 class="b-ds__label">${t(c.titulo || { es: "Componentes y estados", en: "Components and states" })}</h4>
      <div class="b-ds__groups">
        ${c.grupos.map((g) => `
          <div class="dsc-group${g.ancha ? " dsc-group--wide" : g.span ? ` dsc-group--${g.span}` : ""}">
            <p class="dsc-group__name">${t(g.nombre)}</p>
            <ul class="dsc-group__row dsc-group__row--${g.tipo}">
              ${g.items.map((it) => `<li><div class="dsc-demo">${dsPart[g.tipo](g, it)}</div><span class="dsc-state">${t(it.estado)}</span></li>`).join("")}
            </ul>
            ${g.nota ? `<p class="dsc-note">${t(g.nota)}</p>` : ""}
          </div>`).join("")}
      </div>
    </section>`;

  const blocks = {
    // El primer bloque de impacto se muestra arriba, en el banner del caso
    impacto: (b) => (b === heroImpact ? "" : `<ul class="b-impact">${metrics(b.items)}</ul>`),

    capitulo: (b, k) => {
      const id = `c-${k}`;
      toc.push({ id, num: b.num, label: t(b.titulo) });
      // Si le sigue un spotlight con laptop, el título se dibuja dentro de su columna fija
      if (mergedChapter(k)) return "";
      return chapterHtml(b, id);
    },

    declaracion: (b) => `<p class="b-statement" data-words>${t(b.texto)}</p>`,

    texto: (b) => `
      <section class="b-text" data-reveal>
        ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        <div class="b-text__body">${(t(b.texto) || []).map((x) => `<p>${x}</p>`).join("")}${list(t(b.puntos))}</div>
      </section>`,

    // Tarjeta que lleva a otra pieza del sitio (p. ej. el AI Lab), con imagen, texto y llamado
    enlace: (b) => `
      <a class="b-link" href="${attr(b.href)}" data-reveal>
        ${b.img ? `<span class="b-link__media"><img src="${attr(b.img)}" alt="" loading="lazy" decoding="async"></span>` : ""}
        <span class="b-link__body">
          ${b.etiqueta ? `<span class="b-link__kicker">${t(b.etiqueta)}</span>` : ""}
          <strong class="b-link__title">${t(b.titulo)}</strong>
          <span class="b-link__text">${t(b.texto)}</span>
          <span class="b-link__cta">${t(b.cta)} <span class="arrow" aria-hidden="true">→</span></span>
        </span>
      </a>`,

    contraste: (b) => `
      <div class="b-versus">
        ${["antes", "despues"].map((side, k) => `
          <section class="b-versus__col b-versus__col--${side}" data-reveal style="--d:${k * 120}ms">
            <h3>${t(b[side].titulo)}</h3>
            <ul>${t(b[side].puntos).map((x) => `<li>${x}</li>`).join("")}</ul>
          </section>`).join("")}
      </div>`,

    antesDespues: (b) => `
      <figure class="b-compare clip" data-reveal style="--pos:50%">
        <img class="b-compare__img" src="${attr(b.despues.src)}" alt="${attr(`${ui["case.after"]}: ${t(b.despues.alt)}`)}" decoding="async">
        <div class="b-compare__before">
          <img class="b-compare__img" src="${attr(b.antes.src)}" alt="${attr(`${ui["case.before"]}: ${t(b.antes.alt)}`)}" decoding="async">
        </div>
        <span class="b-compare__label b-compare__label--before" aria-hidden="true">${ui["case.before"]}</span>
        <span class="b-compare__label b-compare__label--after" aria-hidden="true">${ui["case.after"]}</span>
        <span class="b-compare__handle" aria-hidden="true"><span>↔</span></span>
        <input class="b-compare__range" type="range" min="0" max="100" value="50" aria-label="${attr(ui["case.compare"])}">
      </figure>`,

    proceso: (b) => `
      <ol class="b-process" data-reveal style="--n:${b.fases.length}">
        ${b.fases.map((f, k) => `
          <li style="--d:${k * 160}ms;--k:${k}">
            <span class="b-process__dot" aria-hidden="true"></span>
            <span class="b-process__num">${pad(k + 1)}</span>
            <h3>${t(f.titulo)}</h3>
            <p>${t(f.texto)}</p>
          </li>`).join("")}
      </ol>`,

    tarjetas: (b) => `
      <section class="b-cards-wrap">
        ${b.titulo ? `<h3 class="b-text__title" data-reveal>${t(b.titulo)}</h3>` : ""}
        <ul class="b-cards" style="--n:${b.items.length === 4 ? 2 : Math.min(b.items.length, 3)}">
          ${b.items.map((it, k) => `
            <li class="b-card" data-reveal style="--d:${(k % 3) * 80}ms">
              <span class="b-card__num">${pad(k + 1)}</span>
              ${it.titulo ? `<h4>${t(it.titulo)}</h4>` : ""}
              <p>${t(it.texto)}</p>
            </li>`).join("")}
        </ul>
      </section>`,

    spotlight: (b, k) => `
      <div class="b-spot">
        <div class="b-spot__aside">
          ${mergedChapter(k - 1) ? chapterHtml(p.bloques[k - 1], `c-${k - 1}`, " b-chapter--pinned") : ""}
          <div class="b-spot__media" aria-hidden="true">
            ${device(b.dispositivo || "laptop", b.items.map((it, j) => `<img src="${attr(it.src)}" alt="" data-i="${j}" class="${j === 0 ? "is-active" : ""}" decoding="async">`).join(""), phoneFin(b.dispositivo))}
          </div>
        </div>
        <ol class="b-spot__steps">
          ${b.items.map((it, k) => `
            <li class="b-spot__step${k === 0 ? " is-active" : ""}" data-i="${k}">
              <span class="b-spot__num">${pad(k + 1)}</span>
              <h3>${t(it.titulo)}</h3>
              <p>${t(it.texto)}</p>
              <div class="b-spot__inline">${device(b.dispositivo || "laptop", zoomable(it), phoneFin(b.dispositivo))}</div>
            </li>`).join("")}
        </ol>
      </div>`,

    // Recorrido de pantallas móviles: celular fijo a un lado y los pasos subiendo (misma animación que spotlight)
    // Recorrido: horizontal (avanza de lado con el scroll) o, con estilo: "fijo", celular fijo y pasos subiendo
    recorrido: (b, k) => b.estilo === "fijo" ? blocks.spotlight({ dispositivo: "phone", items: b.pasos }, k) : `
      <section class="b-flow" style="--n:${b.pasos.length}" aria-label="${attr(ui["case.flow"])}">
        <div class="b-flow__sticky">
          <p class="b-flow__hint" aria-hidden="true">${ui["case.swipe"]} →</p>
          <ol class="b-flow__track" tabindex="0">
            ${b.pasos.map((s, j) => `
              <li class="b-flow__step">
                <div class="b-flow__phone">${device("phone", zoomable(s), p.acabado)}</div>
                <div class="b-flow__text">
                  <span class="b-flow__num">${ui["case.step"]} ${pad(j + 1)}</span>
                  <h3>${t(s.titulo)}</h3>
                  <p>${t(s.texto)}</p>
                </div>
              </li>`).join("")}
          </ol>
        </div>
      </section>`,

    /* Pantallas móviles sin pasos: para sitios informativos, no para flujos */
    responsive: (b) => `
      <section class="b-resp" data-reveal>
        <div class="b-resp__text">
          ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
          ${b.texto ? `<p>${t(b.texto)}</p>` : ""}
        </div>
        <div class="b-resp__phones">
          ${b.pantallas.map((s) => `<div class="b-resp__phone">${device("phone", zoomable(s), p.acabado)}</div>`).join("")}
        </div>
      </section>`,

    imagen: (b) => `
      <figure class="b-figure${b.estilo === "angosto" ? " b-figure--narrow" : b.estilo === "marco" ? " b-figure--framed" : ""}">
        <div class="b-media clip" data-reveal>${zoomable(b)}</div>
        ${b.pie ? `<figcaption>${t(b.pie)}</figcaption>` : ""}
      </figure>`,

    galeria: (b) => b.estilo === "carrusel" ? `
      <section class="b-carousel" data-reveal>
        <div class="b-carousel__nav">
          <button type="button" data-carousel="-1" aria-label="${attr(t({ es: "Anterior", en: "Previous" }))}">←</button>
          <button type="button" data-carousel="1" aria-label="${attr(t({ es: "Siguiente", en: "Next" }))}">→</button>
        </div>
        <ol class="b-carousel__track" tabindex="0" aria-label="${attr(t(b.titulo) || t({ es: "Pantallas", en: "Screens" }))}">
          ${b.imagenes.map((img) => `
            <li class="b-carousel__item">
              <figure>
                <div class="b-carousel__stage">${zoomable(img)}</div>
                ${img.titulo ? `<figcaption><strong>${t(img.titulo)}</strong>${img.texto ? `<span>${t(img.texto)}</span>` : ""}</figcaption>` : ""}
              </figure>
            </li>`).join("")}
        </ol>
        ${b.pie ? `<p class="b-carousel__note">${t(b.pie)}</p>` : ""}
      </section>` : `
      <div class="b-gallery${b.estilo === "mosaico" ? " b-gallery--mosaic" : ""}" style="--cols:${b.imagenes.length === 4 ? 2 : Math.min(b.imagenes.length, 3)}">
        ${b.imagenes.map((img, k) => `<div class="b-media clip${img.ancho ? " b-media--wide" : ""}" data-reveal style="--d:${(k % 3) * 80}ms">${zoomable(img)}</div>`).join("")}
      </div>`,

    // Pull requests propios: número, título, estado y cambios, como evidencia de trabajo en el código
    prs: (b) => `
      <section class="b-prs" data-reveal>
        ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        ${b.texto ? `<p class="b-prs__intro">${t(b.texto)}</p>` : ""}
        <ul class="b-prs__list">
          ${b.items.map((it) => `
            <li class="b-prs__item">
              <span class="b-prs__icon b-prs__icon--${it.estado}" aria-hidden="true"><svg viewBox="0 0 16 16"><circle cx="4" cy="3.5" r="1.8"/><circle cx="4" cy="12.5" r="1.8"/><circle cx="12" cy="12.5" r="1.8"/><path d="M4 5.3v5.4M12 10.7V7.5a2.5 2.5 0 0 0-2.5-2.5H7.5m0 0 1.8-1.8M7.5 5l1.8 1.8"/></svg></span>
              <div class="b-prs__body">
                <p class="b-prs__title"><span class="b-prs__num">#${it.numero}</span> ${it.titulo}</p>
                <p class="b-prs__meta"><span class="b-prs__badge b-prs__badge--${it.estado}">${t(it.estado === "merged" ? { es: "Mergeado", en: "Merged" } : { es: "Abierto", en: "Open" })}</span><span class="b-prs__add">+${it.mas}</span><span class="b-prs__del">−${it.menos}</span><span>${t(it.archivos)}</span>${it.aprobaciones ? `<span>${t(it.aprobaciones)}</span>` : ""}<span>${t(it.fecha)}</span></p>
              </div>
            </li>`).join("")}
        </ul>
        ${b.pie ? `<p class="b-prs__note">${t(b.pie)}</p>` : ""}
      </section>`,

    cita: (b) => `<blockquote class="b-quote"><p data-words>${t(b.texto)}</p></blockquote>`,

    /* Estados de un módulo real (donación de WHEN), dibujados en HTML con los valores de su código */
    estadosModulo: (b) => {
      const montos = [10, 25, 50, 100, 250];
      const modulo = (e) => {
        const valido = !!e.monto && !e.error;
        return `
        <div class="mmod" style="font-family:${attr(b.fuente)}">
          <p class="mmod__lbl">Select a donation frequency</p>
          <div class="mmod__pills"><span class="mmod__pill${e.frecuencia === "mensual" ? "" : " is-on"}">One-time</span><span class="mmod__pill${e.frecuencia === "mensual" ? " is-on" : ""}">Monthly</span></div>
          <p class="mmod__lbl">Select your donation amount</p>
          <div class="mmod__grid">
            ${montos.map((m) => `<span class="mmod__amt${e.monto === m ? " is-on" : ""}">$${m}</span>`).join("")}
            <span class="mmod__other${e.error ? " is-error" : ""}${e.otro ? " is-filled" : ""}">${e.otro || "$ Other"}</span>
          </div>
          ${e.error ? `<p class="mmod__err">${e.error}</p>` : ""}
          <div class="mmod__foot"><span class="mmod__cta${valido ? "" : " is-off"}">${valido ? `Continue | <b>$${e.monto}</b>` : "Continue"} <span aria-hidden="true">→</span></span></div>
        </div>`;
      };
      return `
      <section class="mstates" data-reveal>
        ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        <ul class="mstates__grid">
          ${b.estados.map((e) => `
            <li class="mstates__item">
              <div class="mstates__stage" style="--m-bg:${attr(b.fondo)}">${modulo(e)}</div>
              <p class="mstates__name">${t(e.nombre)}</p>
              <p class="mstates__note">${t(e.nota)}</p>
            </li>`).join("")}
        </ul>
        ${b.errores ? `
          <div class="mstates__errors">
            <p class="mstates__name">${t(b.errores.titulo)}</p>
            <p class="mstates__note">${t(b.errores.texto)}</p>
            <ul>${b.errores.items.map((x) => `<li lang="en">${x}</li>`).join("")}</ul>
          </div>` : ""}
      </section>`;
    },

    /* Un componente documentado de punta a punta (anatomía, ejes, estados, tokens, reglas,
       accesibilidad y código), dibujado en HTML con los valores reales de su design system. */
    componente: (b) => {
      const P = b.paleta; // estilo → estado → [fondo, texto, borde]
      const cols = ["reposo", "hover", "presionado", "foco", "deshabilitado", "cargando"];
      const colName = { reposo: { es: "Reposo", en: "Default" }, hover: { es: "Hover", en: "Hover" }, presionado: { es: "Presionado", en: "Pressed" }, foco: { es: "Foco (teclado)", en: "Focus (keyboard)" }, deshabilitado: { es: "Deshabilitado", en: "Disabled" }, cargando: { es: "Cargando", en: "Loading" } };
      const btn = (estilo, estado, extra = {}) => {
        const base = P[estilo][estado === "foco" ? "reposo" : estado === "cargando" ? "deshabilitado" : estado];
        const [bg, fg, bd] = extra.colores || base;
        const vars = cssv({ bg, fg, bd: bd || "transparent", ring: estado === "foco" ? extra.anillo || b.foco : null });
        const label = extra.texto || b.texto;
        const inner = estado === "cargando"
          ? `<span class="fb__ghost" aria-hidden="true">${label}</span><span class="fb__spin" aria-hidden="true"></span>`
          : `<span class="fb__label${estilo === "ghost" && estado === "reposo" ? " is-under" : ""}">${label}</span>`;
        return `<span class="fb${estado === "foco" ? " is-focus" : ""}" style="${attr(vars)}">${inner}</span>`;
      };
      const ok = (v) => `<span class="cdoc__mark cdoc__mark--${v}" aria-hidden="true">${v === "ok" ? "✓" : v === "no" ? "✗" : "!"}</span>`;
      return `
      <div class="cdoc" style="--forma-bg:${attr(b.fondo)};font-family:${attr(b.fuente)}">
        <header class="cdoc__card cdoc__card--wide cdoc__head" data-reveal>
          <p class="cdoc__kicker">${t({ es: "Componente documentado", en: "Documented component" })}</p>
          <h4 class="cdoc__title">${t(b.nombre)}</h4>
          <p class="cdoc__lead">${t(b.intro)}</p>
          <ul class="cdoc__chips">${b.fuentes.map((f) => `<li>${t(f)}</li>`).join("")}</ul>
        </header>

        <section class="cdoc__card" data-reveal>
          <h5 class="cdoc__label">1 · ${t({ es: "Anatomía", en: "Anatomy" })}</h5>
          <div class="cdoc__stage cdoc__stage--anat">
            <span class="fb fb--anat" style="${attr(cssv({ bg: P.solid.reposo[0], fg: P.solid.reposo[1] }))}">
              <i class="cdoc__pin" data-n="1"></i>
              <span class="fb__ico">←<i class="cdoc__pin" data-n="2"></i></span>
              <span class="fb__label">${b.texto}<i class="cdoc__pin" data-n="3"></i></span>
              <span class="fb__ico">→<i class="cdoc__pin" data-n="4"></i></span>
            </span>
          </div>
          <ol class="cdoc__parts">${b.anatomia.map((a) => `<li><strong>${t(a.titulo)}</strong> ${t(a.detalle)}</li>`).join("")}</ol>
        </section>

        <section class="cdoc__card" data-reveal>
          <h5 class="cdoc__label">2 · ${t({ es: "Ejes y propiedades", en: "Axes and props" })}</h5>
          <table class="cdoc__table">
            ${b.ejes.map((e) => `<tr><th><code>${e.prop}</code></th><td>${t(e.valores)}${e.nota ? `<small>${t(e.nota)}</small>` : ""}</td></tr>`).join("")}
          </table>
        </section>

        <section class="cdoc__card cdoc__card--wide" data-reveal>
          <h5 class="cdoc__label">3 · ${t({ es: "Estados", en: "States" })}</h5>
          <div class="cdoc__matrix" role="table" aria-label="${attr(t({ es: "Estilos por estado", en: "Styles by state" }))}">
            <div class="cdoc__mrow cdoc__mrow--head" role="row"><span role="columnheader"></span>${cols.map((c) => `<span role="columnheader">${t(colName[c])}</span>`).join("")}</div>
            ${b.estilos.map((e) => `
              <div class="cdoc__mrow" role="row">
                <span class="cdoc__mname" role="rowheader"><code>${e}</code></span>
                ${cols.map((c) => `<span class="cdoc__cell" role="cell">${btn(e, c)}</span>`).join("")}
              </div>`).join("")}
          </div>
          <p class="cdoc__swipe" aria-hidden="true">${t({ es: "Desliza para ver todos los estados →", en: "Swipe to see every state →" })}</p>
          <p class="cdoc__note">${t(b.notaEstados)}</p>
        </section>

        <section class="cdoc__card" data-reveal>
          <h5 class="cdoc__label">4 · Tokens</h5>
          <table class="cdoc__table cdoc__table--tokens">
            ${b.tokens.map((k) => `<tr><th><code>${k.token.replace(/\//g, "/<wbr>")}</code></th><td><span class="cdoc__sw" style="background:${attr(k.hex)}"></span>${k.hex}<small>${t(k.uso)}</small></td></tr>`).join("")}
          </table>
        </section>

        <section class="cdoc__card" data-reveal>
          <h5 class="cdoc__label">5 · ${t({ es: "Reglas de uso", en: "Usage rules" })}</h5>
          <ul class="cdoc__rules">${(t(b.reglas) || []).map((r) => `<li>${r}</li>`).join("")}</ul>
        </section>

        <section class="cdoc__card cdoc__card--wide" data-reveal>
          <h5 class="cdoc__label">6 · ${t({ es: "Accesibilidad", en: "Accessibility" })}</h5>
          <ul class="cdoc__checks">${b.a11y.map((a) => `<li>${ok(a.estado)}<span>${t(a.texto)}</span></li>`).join("")}</ul>
        </section>

        <section class="cdoc__card cdoc__card--wide cdoc__code" data-reveal>
          <h5 class="cdoc__label">7 · ${t({ es: "En código", en: "In code" })}</h5>
          <pre><code>${attr(t(b.codigo))}</code></pre>
          <p class="cdoc__note">${t(b.pie)}</p>
        </section>
      </div>`;
    },

    /* Design system recreado en HTML: tipografía, escala, color y componentes */
    sistema: (b) => `
      <div class="b-ds" data-reveal>
        <section class="b-ds__col">
          <h4 class="b-ds__label">${ui["ds.type"]}</h4>
          ${(b.fuentes || []).map((f) => `
            <div class="b-ds__font">
              <span class="b-ds__aa" style="font-family:${attr(f.css)}" aria-hidden="true">Aa</span>
              <div><strong>${f.nombre}</strong><span>${t(f.uso)}</span></div>
            </div>`).join("")}
          ${b.escala ? `
            <ul class="b-ds__scale" style="font-family:${attr(b.fuentes?.[0]?.css || "inherit")}">
              ${b.escala.map((s) => `
                <li>
                  <span class="b-ds__tag">${s.tag}</span>
                  <span class="b-ds__sample" style="font-size:${Math.round(Math.min(s.px * 0.7, 24 + s.px * 0.1))}px">${ui["ds.sample"]}</span>
                  <span class="b-ds__px">${s.px}px${s.movil ? ` · ${ui["ds.mobile"]} ${s.movil}px` : ""}</span>
                </li>`).join("")}
            </ul>` : ""}
        </section>
        <section class="b-ds__col">
          <h4 class="b-ds__label">${ui["ds.color"]}</h4>
          <ul class="b-ds__swatches">
            ${(b.colores || []).map((c) => `
              <li><span class="b-ds__chip" style="background:${attr(c.hex)}"></span><strong>${t(c.nombre)}</strong><code>${c.hex}</code></li>`).join("")}
          </ul>
          ${b.degradados ? `
            <h4 class="b-ds__label">${ui["ds.gradients"]}</h4>
            <ul class="b-ds__grads">
              ${b.degradados.map((g) => `
                <li><span class="b-ds__chip" style="background:linear-gradient(90deg, ${attr(g.de)}, ${attr(g.a)})"></span><strong>${t(g.nombre)}</strong><code>${g.de} → ${g.a}</code></li>`).join("")}
            </ul>` : ""}
          ${b.botones ? `
            <h4 class="b-ds__label">${ui["ds.buttons"]}</h4>
            <div class="b-ds__buttons" style="font-family:${attr((b.fuentes?.[1] ?? b.fuentes?.[0])?.css || "inherit")}">
              ${b.botones.map((x) => `<span class="b-ds__btn" style="background:${attr(x.fondo)};color:${attr(x.color)};border-color:${attr(x.borde || x.fondo)}">${x.texto}</span>`).join("")}
            </div>` : ""}
        </section>
        ${b.componentes ? componentes(b.componentes) : ""}
      </div>`,

    /* Journey map recreado: fases, acciones, curva de emoción, pensamientos y dolores */
    journey: (b) => {
      const n = b.fases.length;
      const pts = b.fases.map((f, k) => [(k + 0.5) * 100, 90 - f.emocion * 80]);
      const path = pts.map(([x, y], k) => {
        if (!k) return `M${x} ${y}`;
        const [px, py] = pts[k - 1];
        return `C${px + 50} ${py} ${x - 50} ${y} ${x} ${y}`;
      }).join(" ");
      const face = (e) => (e >= 0.66 ? "😄" : e >= 0.4 ? "😐" : "😥");
      const row = (label, cells) => `<div class="b-journey__label">${label}</div>${cells}`;
      return `
        <section class="b-journey" data-reveal>
          ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
          <div class="b-journey__scroll" tabindex="0" role="region" aria-label="${attr(t(b.titulo) || "Journey map")}">
            <div class="b-journey__grid" style="--n:${n}">
              ${row("", b.fases.map((f, k) => `<div class="b-journey__phase"><span>${pad(k + 1)}</span>${t(f.nombre)}</div>`).join(""))}
              ${row(ui["journey.actions"], b.fases.map((f) => `<p class="b-journey__cell">${t(f.accion)}</p>`).join(""))}
              ${row(ui["journey.emotion"], `
                <div class="b-journey__curve" style="grid-column: span ${n}">
                  <svg viewBox="0 0 ${n * 100} 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="${path}" pathLength="1"/>
                  </svg>
                  ${pts.map(([x, y], k) => `<span class="b-journey__dot" style="left:${x / n}%;top:${y}%" title="${attr(t(b.fases[k].nombre))}">${face(b.fases[k].emocion)}</span>`).join("")}
                </div>`)}
              ${row(ui["journey.thoughts"], b.fases.map((f) => `<p class="b-journey__cell b-journey__thought">${t(f.pensamiento)}</p>`).join(""))}
              ${row(ui["journey.pains"], b.fases.map((f) => `<ul class="b-journey__cell b-journey__pains">${t(f.dolores).map((d) => `<li>${d}</li>`).join("")}</ul>`).join(""))}
            </div>
          </div>
        </section>`;
    },

    video: (b) => `
      <figure class="b-figure">
        <div class="b-media clip" data-reveal>
          <video src="${attr(b.src)}" poster="${attr(b.poster)}" controls muted playsinline preload="metadata"></video>
        </div>
      </figure>`,

    /* Decisión clave: Problema → Hallazgo → Decisión → Por qué */
    decision: (b) => `
      <section class="b-decision" data-reveal>
        ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        <dl class="b-decision__steps">
          ${["problema", "hallazgo", "decision", "porque"].filter((key) => b[key]).map((key, k) => `
            <div class="b-decision__step b-decision__step--${key}" style="--d:${k * 90}ms">
              <dt>${ui[`decision.${key}`]}</dt>
              <dd>${t(b[key])}</dd>
            </div>`).join("")}
        </dl>
      </section>`,

    /* Hallazgo de investigación: evidencia + qué cambió por eso */
    hallazgo: (b) => `
      <figure class="b-insight" data-reveal>
        ${b.etiqueta ? `<p class="b-insight__tag">${t(b.etiqueta)}</p>` : ""}
        <blockquote class="b-insight__quote">${t(b.texto)}</blockquote>
        ${b.fuente ? `<figcaption class="b-insight__source">${t(b.fuente)}</figcaption>` : ""}
        ${b.implicacion ? `<p class="b-insight__so"><span>${ui["insight.so"]}</span> ${t(b.implicacion)}</p>` : ""}
      </figure>`,

    /* Resultado: cifra + cómo se midió */
    resultado: (b) => `
      <section class="b-outcome" data-reveal>
        ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        <ul class="b-outcome__list">
          ${b.items.map((it) => `
            <li>
              <strong>${it.desde ? `<small class="metric__from">${t(it.desde)} →</small>` : ""}${t(it.valor)}</strong>
              <div><p>${t(it.texto)}</p>${it.medicion ? `<p class="b-outcome__how"><span>${ui["outcome.how"]}</span> ${t(it.medicion)}</p>` : ""}</div>
            </li>`).join("")}
        </ul>
      </section>`,

    /* Reflexión: qué aprendí y qué haría distinto */
    reflexion: (b) => `
      <section class="b-reflection" data-reveal>
        ${t(b.titulo) ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        <div class="b-reflection__cols">
          ${b.aprendi ? `<div><h4>${ui["reflection.learned"]}</h4><p>${t(b.aprendi)}</p></div>` : ""}
          ${b.distinto ? `<div><h4>${ui["reflection.next"]}</h4><p>${t(b.distinto)}</p></div>` : ""}
        </div>
      </section>`,

    /* Nota interna de revisión: solo visible con ?review=1, nunca para reclutadores */
    nota: (b) => (review ? `<aside class="b-note" role="note"><strong>${ui["review.note"]}</strong> ${t(b.texto)}</aside>` : ""),
  };

  function phoneFin(tipo) { return tipo === "phone" ? p.acabado : undefined; }
  function chapterHtml(b, id, cls = "") {
    return `
      <header class="b-chapter${cls}" id="${id}">
        <span class="b-chapter__num" aria-hidden="true">${b.num}</span>
        <div>
          <h2 class="b-chapter__title" data-words>${t(b.titulo)}</h2>
          ${b.bajada ? `<p class="b-chapter__sub" data-reveal>${t(b.bajada)}</p>` : ""}
        </div>
      </header>`;
  }
  function mergedChapter(k) {
    const cur = p.bloques?.[k], next = p.bloques?.[k + 1];
    return cur?.tipo === "capitulo" && next?.tipo === "spotlight" && (next.dispositivo || "laptop") !== "phone";
  }

  const body = (p.bloques || []).map((b, k) => blocks[b.tipo]?.(b, k) ?? "").join("");
  // Portada con la misma composición de su tarjeta en la home (degradado + pantallas); si no hay, la escena de siempre
  const coverOf = (proj) => {
    const comp = proj.portada || window.HOME?.seleccion?.find((x) => x.slug === proj.slug)?.comp;
    return comp && window.compMedia ? `${window.compMedia(comp, t)}</div>` : null;
  };
  const cover = coverOf(p);
  const fact = (label, value) => (value ? `<div><dt>${ui[label]}</dt><dd>${t(value)}</dd></div>` : "");
  const frases = t(p.frases) || [];

  root.innerHTML = `
    <section class="case-hero">
      <div class="case-hero__inner">
        <a href="./#trabajo" class="case-hero__back link">${ui["case.back"]}</a>
        <p class="case-hero__eyebrow" data-reveal>${[p.cliente, t(p.anio), t(p.subtitulo)].filter(Boolean).join(" · ")}</p>
        <h1 class="case-hero__name" data-words>${p.nombre}</h1>
        ${frases.length ? `
          <p class="roller" style="--len:${Math.max(...frases.map((f) => f.length))}" aria-label="${attr(frases.join(" "))}">
            <span class="roller__track" aria-hidden="true">
              ${[...frases, frases[0]].map((f) => `<span class="roller__line">${f}</span>`).join("")}
            </span>
          </p>` : ""}
        <p class="case-hero__summary" data-reveal>${t(p.titular) || t(p.resumen)}</p>
        ${heroImpact ? `<ul class="b-impact case-impact" aria-label="${attr(ui["case.impact"])}">${metrics(heroImpact.items)}</ul>` : ""}
      </div>
    </section>

    <dl class="case-facts" data-reveal>
      ${fact("case.product", p.producto)}
      ${fact("case.industry", p.industria)}
      ${fact("case.role", p.rol)}
      ${fact("case.timeline", p.duracion)}
      ${fact("case.team", p.equipo)}
      ${fact("case.scope", p.alcance)}
    </dl>

    ${p.titular ? `<p class="case-intro" data-reveal>${t(p.resumen)}</p>` : ""}

    ${cover ? `<div class="case-cover" data-reveal>${cover}</div>` : `<div class="case-showcase clip" data-reveal>${scene(p)}</div>`}

    <div class="case-layout">
      <nav class="toc" aria-label="${ui["case.contents"]}">
        <p class="toc__title">${ui["case.contents"]}</p>
        <ol>${toc.map((s) => `<li><a href="#${s.id}"><span>${s.num}</span>${s.label}</a></li>`).join("")}</ol>
      </nav>
      <div class="case-body">${body}</div>
    </div>

    <a href="${caseUrl(next)}" class="next${coverOf(next) ? " next--cover" : ""}" style="--c:${attr(next.color)}">
      <span class="next__text">
        <span class="next__label">${ui["case.next"]}</span>
        <span class="next__title">${next.nombre} <span class="arrow" aria-hidden="true">→</span></span>
        <span class="next__tags">${next.cliente} — ${t(next.subtitulo)}</span>
      </span>
      ${coverOf(next) ? `<div class="next__cover">${coverOf(next)}</div>` : ""}
    </a>`;
};
