/* Ornamental SVG art, generated in code (no image files needed). */
const ART = (() => {
  const f = (n) => +n.toFixed(1);

  /* marigold flower symbol: two rings of petals around a darker core */
  const marigold = (id, outer, inner, core) => {
    let s = `<symbol id="${id}" viewBox="-12 -12 24 24">`;
    for (let i = 0; i < 14; i++) s += `<ellipse cy="-6.4" rx="3.1" ry="6" fill="${outer}" stroke="rgba(140,60,0,.28)" stroke-width=".3" transform="rotate(${(i * 360) / 14})"/>`;
    for (let i = 0; i < 10; i++) s += `<ellipse cy="-3.7" rx="2.2" ry="4.1" fill="${inner}" transform="rotate(${i * 36 + 18})"/>`;
    return s + `<circle r="2.3" fill="${core}"/></symbol>`;
  };

  /* shared gradients and symbols, injected once at the top of <body> */
  const defs = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    ${marigold("mgA", "#f27d1a", "#f9a52a", "#cf5208")}${marigold("mgB", "#f8ae1a", "#fcd24c", "#e5860b")}
    <linearGradient id="lgL" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#34901a"/><stop offset="1" stop-color="#a4e04a"/></linearGradient>
    <linearGradient id="lgD" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#23700f"/><stop offset="1" stop-color="#5fb62a"/></linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbe6a8"/><stop offset=".5" stop-color="#c9953a"/><stop offset="1" stop-color="#8a5c14"/></linearGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="#ffd37e" stop-opacity=".8"/><stop offset="1" stop-color="#ffd37e" stop-opacity="0"/></radialGradient>
    <radialGradient id="flame" cx=".5" cy=".75" r=".65"><stop offset="0" stop-color="#fff7c8"/><stop offset=".5" stop-color="#ffc73a"/><stop offset="1" stop-color="#f26a0f"/></radialGradient>
    <linearGradient id="clay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d98a4a"/><stop offset="1" stop-color="#9c4f22"/></linearGradient>
    <symbol id="jas" viewBox="-7 -7 14 14">${Array.from({length:5},(_,i)=>`<ellipse cy="-3.6" rx="2.6" ry="3.9" fill="#fffef8" stroke="#e6d9bb" stroke-width=".4" transform="rotate(${i*72})"/>`).join("")}<circle r="1.5" fill="#f1cf62"/></symbol>
    <symbol id="jasP" viewBox="-7 -7 14 14">${Array.from({length:5},(_,i)=>`<ellipse cy="-3.6" rx="2.6" ry="3.9" fill="#f4a0b6" stroke="#d1708c" stroke-width=".4" transform="rotate(${i*72})"/>`).join("")}<circle r="1.5" fill="#fbe3a0"/></symbol>
    <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6df9a"/><stop offset=".45" stop-color="#c9923a"/><stop offset="1" stop-color="#7a4f12"/></linearGradient>
    <radialGradient id="coco" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#b57a3f"/><stop offset="1" stop-color="#5b3416"/></radialGradient>
  </defs></svg>`;

  /* one banana leaf with midrib and side veins */
  const leaf = (x, y, ang, len, wid, dark) => {
    let s = `<g transform="translate(${x} ${y}) rotate(${ang})">`;
    s += `<path d="M0 0C${-wid} ${f(-len * 0.28)} ${f(-wid * 0.95)} ${f(-len * 0.78)} 0 ${-len}C${f(wid * 0.95)} ${f(-len * 0.78)} ${wid} ${f(-len * 0.28)} 0 0Z" fill="url(#${dark ? "lgD" : "lgL"})" stroke="#256f0e" stroke-width="1"/>`;
    s += `<path d="M0 0V${-len}" stroke="#2c8212" stroke-width="1.6" fill="none"/>`;
    for (let i = 1; i < 11; i++) {
      const t = i / 11, yy = -len * t, w = wid * Math.sin(Math.PI * Math.min(t * 1.08, 1)) * 0.92;
      s += `<path d="M0 ${f(yy)}L${f(w)} ${f(yy - len * 0.07)}M0 ${f(yy)}L${f(-w)} ${f(yy - len * 0.07)}" stroke="#2c8212" stroke-opacity=".55" stroke-width=".9" fill="none"/>`;
    }
    return s + "</g>";
  };

  const cluster = (small) => {
    const k = small ? 0.62 : 1;
    const L = [[-54, 175, 46, 1], [-32, 222, 52, 1], [-10, 250, 54, 0], [14, 205, 48, 0], [36, 150, 40, 1]];
    return L.map(([a, len, w, d]) => leaf(34, 0, a, len * k, w * k, d)).join("");
  };

  /* hanging marigold garland across the top (toran) */
  const toran = () => {
    const top = 4, sag = 30, xs = [-12, 131.3, 274.7, 442];
    let rope = "", flowers = "", drops = "";
    const drop = (x, y, len) => {
      let d = `<path d="M${f(x)} ${f(y)}V${f(y + len)}" stroke="#b5651d" stroke-width="1.2"/>`;
      for (let i = 1; i <= Math.floor(len / 10); i++)
        d += `<circle cx="${f(x)}" cy="${f(y + i * 10)}" r="${i % 2 ? 3 : 2.4}" fill="${i % 2 ? "#e0540c" : "#f6b21b"}"/>`;
      const e = y + len;
      return d + `<use href="#mgA" x="${f(x - 9)}" y="${f(e - 6)}" width="18" height="18"/><path d="M${f(x - 4)} ${f(e + 12)}h8l-1.2 9h-5.6z" fill="url(#gold)"/>`;
    };
    for (let s = 0; s < 3; s++) {
      const x0 = xs[s], x2 = xs[s + 1], xm = (x0 + x2) / 2, cy = top + 2 * sag;
      rope += `<path d="M${x0} ${top}Q${f(xm)} ${cy} ${x2} ${top}" stroke="#b5651d" stroke-width="2" fill="none"/>`;
      for (let i = s ? 1 : 0; i <= 10; i++) {
        const t = i / 10, u = 1 - t;
        const x = u * u * x0 + 2 * u * t * xm + t * t * x2, y = u * u * top + 2 * u * t * cy + t * t * top, sz = i % 2 ? 22 : 27;
        flowers += `<use href="#${i % 2 ? "mgB" : "mgA"}" x="${f(x - sz / 2)}" y="${f(y - sz / 2)}" width="${sz}" height="${sz}"/>`;
      }
      drops += drop(xm, top + sag - 2, 56);
      if (s < 2) drops += drop(x2, top, 78);
    }
    return `<svg viewBox="0 0 430 125" aria-hidden="true">${rope}${drops}${flowers}</svg>`;
  };

  /* mangala kalasam: gold pot, mango leaves, coconut, marigold collar */
  const kalash = () => {
    let s = `<g class="kal" transform="translate(155 158)"><ellipse cx="60" cy="100" rx="86" ry="82" fill="url(#glow)"/>`;
    [-52, -26, 0, 26, 52].forEach((a, i) => {
      s += `<g transform="translate(60 54) rotate(${a})"><path d="M0 0C-11 -12 -10 -34 0 -50C10 -34 11 -12 0 0Z" fill="url(#${i % 2 ? "lgL" : "lgD"})" stroke="#256f0e" stroke-width=".8"/><path d="M0 0V-48" stroke="#2c8212" stroke-width="1"/></g>`;
    });
    s += `<ellipse cx="60" cy="28" rx="16" ry="19" fill="url(#coco)"/><path d="M52 12q8-10 16 0" stroke="#e9c27a" stroke-width="1.6" fill="none"/><circle cx="55" cy="30" r="1.8" fill="#3b210c"/><circle cx="65" cy="30" r="1.8" fill="#3b210c"/><circle cx="60" cy="36" r="1.8" fill="#3b210c"/>`;
    s += `<path d="M38 58C30 70 8 82 10 112C12 140 30 156 38 162H82C90 156 108 140 110 112C112 82 90 70 82 58Z" fill="url(#gold)" stroke="#7a4d0c" stroke-width="1.2"/>`;
    s += `<rect x="30" y="50" width="60" height="11" rx="5.5" fill="url(#gold)" stroke="#7a4d0c" stroke-width="1"/>`;
    s += `<path d="M14 104Q60 126 106 104" stroke="#8c1238" stroke-width="7" fill="none" opacity=".92"/>`;
    for (let i = 0; i < 9; i++) { const x = 20 + i * 10, y = 108 + Math.sin(((i + 0.5) / 9) * Math.PI) * 11; s += `<path d="M${x} ${f(y - 4)}l3 4l-3 4l-3-4z" fill="#f8e0a0"/>`; }
    s += `<path d="M40 138Q60 150 80 138" stroke="#8c1238" stroke-width="2.4" fill="none"/><path d="M45 128Q60 138 75 128" stroke="#f8e0a0" stroke-width="1.2" fill="none"/>`;
    for (let i = 0; i < 7; i++) { const x = 36 + i * 8, y = 68 + Math.sin((i / 6) * Math.PI) * 6; s += `<use href="#${i % 2 ? "mgB" : "mgA"}" x="${x - 6}" y="${f(y - 6)}" width="12" height="12"/>`; }
    return s + "</g>";
  };

  /* small oil lamp with a flickering flame */
  const diya = (x, y) => `<g class="kal"><ellipse cx="${x}" cy="${y - 34}" rx="30" ry="30" fill="url(#glow)" class="flame-glow"/>
    <path class="flame" d="M${x} ${y - 52}C${x + 9} ${y - 36} ${x + 8} ${y - 24} ${x} ${y - 16}C${x - 8} ${y - 24} ${x - 9} ${y - 36} ${x} ${y - 52}Z" fill="url(#flame)"/>
    <path d="M${x - 22} ${y - 14}C${x - 19} ${y + 6} ${x + 19} ${y + 6} ${x + 22} ${y - 14}Z" fill="url(#clay)" stroke="#7c3d17" stroke-width="1"/>
    <path d="M${x - 22} ${y - 14}H${x + 22}" stroke="#e8c36f" stroke-width="2.4"/></g>`;

  const scene = () => `<svg viewBox="0 0 430 330" aria-hidden="true">
    <ellipse cx="215" cy="250" rx="200" ry="110" fill="url(#glow)" opacity=".55"/>
    <g transform="translate(0 336)">${cluster(false)}</g>
    <g transform="translate(430 336) scale(-1 1)">${cluster(false)}</g>
    <g transform="translate(-14 340)">${cluster(true)}</g>
    <g transform="translate(444 340) scale(-1 1)">${cluster(true)}</g>
    ${kalash()}${diya(112, 322)}${diya(318, 322)}</svg>`;

  const leaves = () => `<svg viewBox="0 0 430 210" aria-hidden="true">
    <g transform="translate(0 216)">${cluster(false)}</g><g transform="translate(430 216) scale(-1 1)">${cluster(false)}</g></svg>`;

  /* faint line-art mandala used behind sections */
  const mandala = () => {
    let s = '<svg viewBox="-200 -200 400 400" fill="none" stroke="#b98a3c" stroke-width="1" aria-hidden="true">';
    [192, 176, 124, 74, 32].forEach((r) => (s += `<circle r="${r}"/>`));
    for (let i = 0; i < 16; i++) s += `<path d="M0 -76C17 -104 17 -142 0 -172C-17 -142 -17 -104 0 -76Z" transform="rotate(${i * 22.5})"/><path d="M0 -34C8 -48 8 -62 0 -72C-8 -62 -8 -48 0 -34Z" transform="rotate(${i * 22.5 + 11.25})"/>`;
    for (let i = 0; i < 48; i++) s += `<circle r="1.6" cy="-184" fill="#b98a3c" transform="rotate(${i * 7.5})"/>`;
    return s + "</svg>";
  };

  const star = () => `<svg viewBox="-10 -10 20 20" aria-hidden="true">${Array.from({ length: 8 }, (_, i) => `<ellipse cy="-5.2" rx="1.7" ry="4.4" fill="#5d4037" transform="rotate(${i * 45})"/>`).join("")}<circle r="2" fill="#f2eadc"/><circle r="1" fill="#5d4037"/></svg>`;
  const heart = () => `<svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21C5 15 1 11.5 1 7.2 1 4 3.4 1.6 6.5 1.6c2.3 0 4.3 1.3 5.5 3.3 1.2-2 3.2-3.3 5.5-3.3 3.1 0 5.5 2.4 5.5 5.6C23 11.5 19 15 12 21z" fill="#a3153f"/></svg>`;
  const divider = () => `<svg viewBox="0 0 240 24" aria-hidden="true"><defs><linearGradient id="dv" x1="0" x2="1"><stop offset="0" stop-color="#b98a3c" stop-opacity="0"/><stop offset="1" stop-color="#b98a3c"/></linearGradient><linearGradient id="dv2" x1="1" x2="0"><stop offset="0" stop-color="#b98a3c" stop-opacity="0"/><stop offset="1" stop-color="#b98a3c"/></linearGradient></defs><path d="M10 12H104" stroke="url(#dv)"/><path d="M230 12H136" stroke="url(#dv2)"/><path d="M120 4l8 8l-8 8l-8-8z" fill="none" stroke="#b98a3c"/><circle cx="120" cy="12" r="2" fill="#b98a3c"/><circle cx="106" cy="12" r="1.5" fill="#b98a3c"/><circle cx="134" cy="12" r="1.5" fill="#b98a3c"/></svg>`;
  const pin = () => `<svg viewBox="0 0 24 30" aria-hidden="true"><path d="M12 29C5 20 2 15.500 2 11a10 10 0 0 1 20 0c0 4.500-3 9-10 18z" fill="none" stroke="#b98a3c" stroke-width="1.5"/><circle cx="12" cy="11" r="3.600" fill="#8c1238"/></svg>`;

    /* ---- Tamil temple entrance (cover) ---- */
  let rs = 11;
  const rnd = () => (rs = (rs * 16807) % 2147483647) / 2147483647;
  // carved relief: shadow copy below-right, highlight copy above-left, then the face
  const emboss = (c, face = "#6a3c1c", dark = "rgba(16,6,1,.75)", light = "rgba(255,205,150,.30)") =>
    `<g transform="translate(.8 1)" fill="${dark}">${c}</g><g transform="translate(-.6 -.7)" fill="${light}">${c}</g><g fill="${face}">${c}</g>`;
  const ivory = (c) => emboss(c, "#eadcbd", "rgba(110,70,30,.45)", "rgba(255,255,255,.6)");
  const goldE = (c) => emboss(c, "url(#dBrass)", "rgba(60,30,5,.6)", "rgba(255,244,210,.7)");
  const stud = (x, y, r = 2.4) => `<circle cx="${f(x + .7)}" cy="${f(y + 1)}" r="${r}" fill="rgba(0,0,0,.5)"/><circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="url(#dStud)"/><circle cx="${f(x - r * .35)}" cy="${f(y - r * .4)}" r="${f(r * .3)}" fill="rgba(255,250,225,.85)"/>`;
  const rosette = (n = 8, pr = 3, pl = 7) => Array.from({ length: n }, (_, i) => `<ellipse cy="${-pl}" rx="${pr}" ry="${pl}" transform="rotate(${(i * 360) / n})"/>`).join("") + `<circle r="${pr}"/>`;
  const petal = (len, w) => `<path d="M0 0C${w} ${-len * .3} ${w} ${-len * .7} 0 ${-len}C${-w} ${-len * .7} ${-w} ${-len * .3} 0 0Z"/>`;
  const sampleQ = (x0, y0, cx, cy, x2, y2, step = 2.9) => {
    const L = Math.hypot(cx - x0, cy - y0) + Math.hypot(x2 - cx, y2 - cy), n = Math.ceil(L / step), out = [];
    for (let i = 0; i <= n; i++) { const t = i / n, u = 1 - t; out.push([u * u * x0 + 2 * u * t * cx + t * t * x2, u * u * y0 + 2 * u * t * cy + t * t * y2]); }
    return out;
  };
  // the cusped (seven-lobed) arch over the doorway, in the 400x600 frame space
  const archPts = (n = 140) => {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const u = i / n, th = Math.PI * (1 - u), m = Math.abs(Math.sin(7 * Math.PI * u)), w = Math.min(1, u * 9, (1 - u) * 9), s = 1 - 0.085 * (1 - m) * w;
      pts.push([200 + 100 * s * Math.cos(th), 250 - 75 * s * Math.sin(th)]);
    }
    return pts;
  };
  // the same opening as a clip-path polygon in percent of the doorway box (x 100-300, y 175-540)
  const doorClip = () => "polygon(0% 100%," + archPts(90).map(([x, y]) => `${f((x - 100) / 2)}% ${f(((y - 175) / 365) * 100)}%`).join(",") + ",100% 100%)";
  const diya2 = (x, y) => `<ellipse cx="${x}" cy="${y - 20}" rx="20" ry="20" fill="url(#glow)" class="flame-glow"/>
    <path class="flame" d="M${x} ${y - 29}C${x + 4} ${y - 22} ${x + 4} ${y - 16} ${x} ${y - 12}C${x - 4} ${y - 16} ${x - 4} ${y - 22} ${x} ${y - 29}Z" fill="url(#flame)"/>
    <path d="M${x - 11} ${y - 11}C${x - 9} ${y - 1} ${x + 9} ${y - 1} ${x + 11} ${y - 11}Z" fill="url(#dBrass)" stroke="#5c3a0c" stroke-width=".7"/><ellipse cx="${x}" cy="${y - 11}" rx="11" ry="2" fill="#2e1906"/>`;
  const kalasam = (x, y) => `<path d="M${x - 7} ${y}C${x - 11} ${y - 8} ${x - 7} ${y - 15} ${x} ${y - 16}C${x + 7} ${y - 15} ${x + 11} ${y - 8} ${x + 7} ${y}Z" fill="url(#dBrass)" stroke="#6b4510" stroke-width=".6"/>
    <rect x="${x - 4}" y="${y - 19}" width="8" height="3" rx="1" fill="url(#dBrass)"/><path d="M${x - 3} ${y - 19}C${x - 3} ${y - 24} ${x - 1} ${y - 28} ${x} ${y - 31}C${x + 1} ${y - 28} ${x + 3} ${y - 24} ${x + 3} ${y - 19}Z" fill="url(#dBrass)" stroke="#6b4510" stroke-width=".5"/>`;

  const doorFrame = () => {
    const ap = archPts(), inner = ap.map((p) => p.map(f).join(" ")).join("L");
    let s = `<svg viewBox="0 0 400 600" aria-hidden="true"><defs>
      <filter id="dGrain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.24" numOctaves="3" seed="7" result="n"/>
        <feColorMatrix in="n" type="matrix" values="0 0 0 0 .18  0 0 0 0 .02  0 0 0 0 .04  1.6 0 0 0 -.66" result="g"/>
        <feComposite in="g" in2="SourceGraphic" operator="in" result="gi"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="gi"/></feMerge></filter>
      <filter id="dStoneTex" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3" result="n"/>
        <feColorMatrix in="n" type="matrix" values="0 0 0 0 .45  0 0 0 0 .32  0 0 0 0 .18  0 0 0 .18 0" result="g"/>
        <feComposite in="g" in2="SourceGraphic" operator="in" result="gi"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="gi"/></feMerge></filter>
      <filter id="dBlur"><feGaussianBlur stdDeviation="1.8"/></filter>
      <linearGradient id="dBrassV" x1="0" x2="1"><stop offset="0" stop-color="#6b4510"/><stop offset=".4" stop-color="#e9c46a"/><stop offset=".7" stop-color="#b8862e"/><stop offset="1" stop-color="#5c3a0c"/></linearGradient>
      <linearGradient id="dBrass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6df9a"/><stop offset=".5" stop-color="#c9923a"/><stop offset="1" stop-color="#6b4510"/></linearGradient>
      <radialGradient id="dStud" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fff3c8"/><stop offset=".4" stop-color="#dcaa48"/><stop offset="1" stop-color="#5c3a0c"/></radialGradient>
      <linearGradient id="dHinge" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".45"/><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#ffcf90" stop-opacity=".05"/></linearGradient>
      <linearGradient id="dIvory" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8efdc"/><stop offset="1" stop-color="#e3d0aa"/></linearGradient>
      <linearGradient id="dIvoryV" x1="0" x2="1"><stop offset="0" stop-color="#cfb98f"/><stop offset=".35" stop-color="#f6ecd6"/><stop offset=".7" stop-color="#ead9b8"/><stop offset="1" stop-color="#c4ad82"/></linearGradient>
      <linearGradient id="dStep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efe3c9"/><stop offset="1" stop-color="#c8b28a"/></linearGradient>
      <linearGradient id="dShadeV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0810" stop-opacity=".55"/><stop offset="1" stop-color="#2a0810" stop-opacity="0"/></linearGradient>
      <radialGradient id="dWine" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#9a2447"/><stop offset="1" stop-color="#5a0f24"/></radialGradient>
    </defs>`;
    // ivory carved façade
    s += '<rect x="22" y="50" width="356" height="492" fill="url(#dIvory)" filter="url(#dStoneTex)"/><rect x="22" y="50" width="356" height="492" fill="none" stroke="rgba(120,80,30,.35)"/>';
    // cornice with dentils and a gold band, and a row of kalasam finials
    s += '<rect x="12" y="40" width="376" height="14" fill="url(#dIvoryV)"/><rect x="12" y="52" width="376" height="2.5" fill="url(#dBrass)"/>';
    let den = ""; for (let x = 26; x < 376; x += 10) den += `<rect x="${x}" y="57" width="6" height="7"/>`;
    s += ivory(den);
    [52, 126, 200, 274, 348].forEach((x) => (s += kalasam(x, 40)));
    // spandrel carvings above the pillars
    let sp = "";
    [[64, 108], [336, 108]].forEach(([x, y]) => {
      sp += `<g transform="translate(${x} ${y})">${rosette(12, 3, 11)}</g>`;
      sp += `<g transform="translate(${x} ${y + 34})">${rosette(8, 2, 6)}</g>`;
    });
    s += ivory(sp);
    // pillars with a carved climbing vine, lotus capital and base
    const pil = (x) => {
      let p = `<rect x="${x}" y="176" width="56" height="326" fill="url(#dIvoryV)"/><rect x="${x + 10}" y="196" width="36" height="290" fill="rgba(150,110,60,.14)" stroke="rgba(120,80,30,.35)" stroke-width=".8"/>`;
      let vine = "", d = "";
      for (let y = 200; y <= 482; y += 2) d += `${y === 200 ? "M" : "L"}${f(x + 28 + 9 * Math.sin((y - 200) / 18))} ${y}`;
      for (let y = 210, k = 0; y <= 474; y += 18, k++) {
        const vx = x + 28 + 9 * Math.sin((y - 200) / 18), side = k % 2 ? 1 : -1;
        vine += `<g transform="translate(${f(vx)} ${y}) rotate(${side * 58})">${petal(10, 3.6)}</g>`;
      }
      p += `<path d="${d}" fill="none" stroke="rgba(110,70,30,.42)" stroke-width="3.2" transform="translate(.8 1)"/><path d="${d}" fill="none" stroke="#e6d5b2" stroke-width="2.4"/>`;
      p += ivory(vine);
      p += `<rect x="${x - 6}" y="160" width="68" height="18" fill="url(#dIvoryV)"/><rect x="${x - 6}" y="176" width="68" height="2.5" fill="url(#dBrass)"/>`;
      let cap = ""; for (let i = 0; i < 11; i++) cap += `<g transform="translate(${x - 2 + i * 6} 160)">${petal(8 - Math.abs(i - 5) * .4, 3.2)}</g>`;
      p += goldE(cap);
      p += `<rect x="${x - 6}" y="500" width="68" height="40" fill="url(#dIvoryV)"/><rect x="${x - 6}" y="502" width="68" height="2.5" fill="url(#dBrass)"/><rect x="${x - 6}" y="532" width="68" height="2.5" fill="url(#dBrass)"/>`;
      return p;
    };
    s += pil(36) + pil(308);
    // torana: the arch band between a smooth outer arch and the cusped opening
    s += `<path d="M64 250A136 120 0 0 1 336 250H300L${inner.split("L").reverse().join("L")}Z" fill="url(#dIvory)" filter="url(#dStoneTex)"/>`;
    let beads = "";
    for (let i = 1; i < 30; i++) { const t = Math.PI * (1 - i / 30); beads += `<circle cx="${f(200 + 118 * Math.cos(t))}" cy="${f(250 - 98 * Math.sin(t))}" r="2"/>`; }
    s += ivory(beads);
    let flames = "";
    for (let i = 0; i <= 30; i++) { const t = Math.PI * (1 - i / 30), big = i % 2 === 0; flames += `<g transform="translate(${f(200 + 137 * Math.cos(t))} ${f(250 - 121 * Math.sin(t))}) rotate(${f(90 - (t * 180) / Math.PI)})">${petal(big ? 15 : 10, big ? 5 : 3.6)}</g>`; }
    s += goldE(flames);
    s += '<path d="M64 250A136 120 0 0 1 336 250" fill="none" stroke="url(#dBrass)" stroke-width="2.6"/>';
    s += `<path d="M100 540V250L${inner}V540" fill="none" stroke="url(#dBrass)" stroke-width="3"/><path d="M96 540V250" stroke="rgba(110,70,30,.4)" stroke-width="1"/><path d="M304 540V250" stroke="rgba(110,70,30,.4)" stroke-width="1"/>`;
    // gold scrolls where the arch springs
    const scroll = (x, dir) => `<g transform="translate(${x} 250) scale(${dir} 1)"><path fill-rule="evenodd" d="M0 0C0 -14 16 -16 18 -6C20 4 8 6 6 -1C5 -5 10 -6 11 -3C12 0 9 1 9 -1C8 3 14 3 15 -3C16 -11 4 -12 3 0Z"/></g>`;
    s += goldE(scroll(84, 1) + scroll(316, -1));
    // Ganesha medallion at the crown
    s += '<circle cx="200" cy="128" r="26" fill="url(#dWine)"/><circle cx="200" cy="128" r="26" fill="none" stroke="url(#dBrass)" stroke-width="3.2"/><circle cx="200" cy="128" r="21.5" fill="none" stroke="rgba(246,223,154,.6)" stroke-width=".8"/>';
    s += '<image href="assets/ganesha-gold.png" x="186" y="109" width="28" height="36"/>';
    // steps and diyas
    s += '<rect x="14" y="540" width="372" height="26" fill="url(#dStep)" filter="url(#dStoneTex)"/><rect x="14" y="540" width="372" height="1.5" fill="rgba(255,255,255,.7)"/><rect x="14" y="565" width="372" height="1.2" fill="rgba(110,70,30,.35)"/>';
    s += '<rect x="0" y="566" width="400" height="34" fill="url(#dStep)" opacity=".92"/><rect x="0" y="566" width="400" height="1.5" fill="rgba(255,255,255,.6)"/>';
    s += diya2(64, 542) + diya2(336, 542);
    return s + "</svg>";
  };

  // one door leaf (the left one; the right one is mirrored in CSS), in the 100x365 half of the doorway
  const doorLeaf = () => {
    let s = '<svg viewBox="0 0 100 365" preserveAspectRatio="none" aria-hidden="true">';
    s += '<rect width="100" height="365" fill="#6e1529" filter="url(#dGrain)"/><rect width="100" height="365" fill="url(#dHinge)"/>';
    s += '<rect x="3" y="3" width="94" height="359" fill="none" stroke="url(#dBrass)" stroke-width="1.3"/>';
    // the arched top panel: a gold lotus fan rising from the top rail
    s += '<rect x="9" y="6" width="80" height="88" fill="rgba(40,4,12,.35)"/>';
    let fan = "";
    for (let i = 0; i < 9; i++) fan += `<g transform="rotate(${-80 + i * 20})">${petal(52, 8)}</g>`;
    for (let i = 0; i < 7; i++) fan += `<g transform="rotate(${-72 + i * 24})">${petal(30, 6)}</g>`;
    fan += '<path d="M-16 0A16 16 0 0 1 16 0Z"/>';
    s += `<g transform="translate(92 92)">${goldE(fan)}</g>`;
    s += '<rect x="7" y="96" width="86" height="3" fill="url(#dBrass)"/>';
    // grid of small carved panels, two across, five down
    for (let r = 0; r < 5; r++) for (let c = 0; c < 2; c++) {
      const x = 10 + c * 40, y = 106 + r * 48;
      s += `<rect x="${x}" y="${y}" width="36" height="40" fill="#4a0b19"/><rect x="${x}" y="${y}" width="36" height="40" fill="none" stroke="rgba(0,0,0,.55)" stroke-width="1.2"/>`;
      s += `<rect x="${x + 3}" y="${y + 3}" width="30" height="34" fill="none" stroke="#c9923a" stroke-width=".8"/>`;
      s += `<g transform="translate(${x + 18} ${y + 20}) scale(.82)">${goldE(rosette(8, 3, 9))}</g>`;
    }
    // the conical brass bosses (kumizh) at every crossing, and along the outer stile
    for (let r = 0; r <= 5; r++) { const y = 102 + r * 48; [7, 48].forEach((x) => (s += stud(x, y, 3.4))); }
    for (let y = 16; y < 96; y += 20) s += stud(6, y, 2.2);
    // brass meeting strip with small studs, and the ring knocker
    s += '<rect x="90" y="0" width="10" height="365" fill="url(#dBrassV)"/><rect x="89" y="0" width="1.2" height="365" fill="rgba(0,0,0,.55)"/>';
    for (let y = 12; y < 362; y += 22) s += stud(95, y, 1.7);
    s += `<g transform="translate(80 250)"><circle r="9" fill="rgba(0,0,0,.45)" transform="translate(.8 1.2)"/><g fill="url(#dBrass)">${rosette(8, 3, 6.5)}</g><circle r="3" fill="url(#dStud)"/>
      <circle cx="1" cy="16.5" r="10" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="3.2"/><circle cy="15" r="10" fill="none" stroke="url(#dBrass)" stroke-width="3"/></g>`;
    return s + "</svg>";
  };

  // mango-leaf thoranam with marigolds across the doorway, and marigold strings down both sides
  const doorOver = () => {
    rs = 11;
    let s = '<svg viewBox="0 0 400 600" aria-hidden="true">';
    s += `<path class="lintel-shadow" d="M100 540V250L${archPts().map((p) => p.map(f).join(" ")).join("L")}V540Z" fill="url(#dShadeV)" opacity=".0"/>`;
    const marigoldString = (pts, size) => {
      let sh = `<path d="M${pts.map((p) => p.map(f).join(" ")).join("L")}" transform="translate(2 3)" stroke="rgba(60,20,0,.35)" stroke-width="${size}" stroke-linecap="round" fill="none" filter="url(#dBlur)"/>`, fl = "";
      pts.forEach((p, i) => {
        const z = size * (0.9 + rnd() * 0.25);
        fl += `<use href="#${i % 3 === 1 ? "mgB" : "mgA"}" x="${f(p[0] - z / 2)}" y="${f(p[1] - z / 2)}" width="${f(z)}" height="${f(z)}" transform="rotate(${f(rnd() * 360)} ${f(p[0])} ${f(p[1])})"/>`;
      });
      return sh + fl;
    };
    // side strings
    const L = sampleQ(99, 252, 94, 340, 101, 430, 8.5), R = sampleQ(301, 252, 306, 340, 299, 430, 8.5);
    s += marigoldString(L, 13) + marigoldString(R, 13);
    [L[L.length - 1], R[R.length - 1]].forEach(([x, y]) => {
      s += `<g transform="translate(${f(x)} ${f(y + 6)})"><path d="M0 0C5 8 5 18 0 26C-5 18 -5 8 0 0Z" fill="url(#lgD)"/><path d="M0 2V24" stroke="#1f5a0c" stroke-width=".7"/></g>`;
    });
    // thoranam string across, with mango leaves hanging and marigolds between them
    const T = sampleQ(96, 250, 200, 262, 304, 250, 10.5);
    s += `<path d="M${T.map((p) => p.map(f).join(" ")).join("L")}" stroke="#6b4a1e" stroke-width="1.2" fill="none"/>`;
    let leaves = "", balls = "";
    T.forEach(([x, y], i) => {
      if (i % 2 === 0) {
        const len = 26 + rnd() * 8, rot = (rnd() - 0.5) * 16;
        leaves += `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)})"><path d="M0 0C6 ${f(len * .3)} 6 ${f(len * .7)} 0 ${f(len)}C-6 ${f(len * .7)} -6 ${f(len * .3)} 0 0Z" fill="url(#${rnd() > .5 ? "lgD" : "lgL"})" stroke="#1f5a0c" stroke-width=".5"/><path d="M0 1V${f(len - 2)}" stroke="rgba(20,60,8,.7)" stroke-width=".6"/></g>`;
        leaves += `<g transform="translate(${f(x + 2)} ${f(y + 3)}) rotate(${f(rot)})" opacity=".25"><path d="M0 0C6 ${f(len * .3)} 6 ${f(len * .7)} 0 ${f(len)}C-6 ${f(len * .7)} -6 ${f(len * .3)} 0 0Z" fill="#2a1000" filter="url(#dBlur)"/></g>`;
      } else {
        const z = 12 + rnd() * 2;
        balls += `<use href="#${i % 4 === 1 ? "mgB" : "mgA"}" x="${f(x - z / 2)}" y="${f(y - z / 2)}" width="${f(z)}" height="${f(z)}"/>`;
      }
    });
    s += leaves + balls;
    return s + "</svg>";
  };

  const rangoli = () => {
    let s = '<svg viewBox="-100 -100 200 200" aria-hidden="true" fill="none" stroke-linecap="round">';
    s += '<circle r="92" stroke="#c62b4f" stroke-width="1.3" stroke-dasharray="1 6"/><circle r="84" stroke="#b5741b" stroke-width="1.2"/><circle r="38" stroke="#c62b4f" stroke-width="1.2"/><circle r="14" stroke="#b5741b" stroke-width="1.2"/>';
    for (let i = 0; i < 16; i++) s += `<path d="M0 -40C14 -56 14 -70 0 -82C-14 -70 -14 -56 0 -40Z" transform="rotate(${i * 22.5})" stroke="#c62b4f" stroke-width="1.2"/>`;
    for (let i = 0; i < 8; i++) s += `<path d="M0 -16C7 -24 7 -30 0 -36C-7 -30 -7 -24 0 -16Z" transform="rotate(${i * 45 + 22.5})" stroke="#e8a93c" stroke-width="1.2"/>`;
    for (let i = 0; i < 32; i++) s += `<circle r="1.5" cy="-88" fill="#e8a93c" transform="rotate(${i * 11.25})"/>`;
    return s + '<circle r="4" fill="#c62b4f"/></svg>';
  };
  return { doorFrame, doorLeaf, doorOver, rangoli, doorClip, defs, toran, scene, leaves, mandala, star, heart, divider, pin };
})();
