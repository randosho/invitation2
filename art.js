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

    /* ---- temple door (cover) ---- */
  // carved relief: a dark copy below-right, a light copy above-left, then the wood face
  const emboss = (c, face = "#6a3c1c") => `<g transform="translate(.9 1.1)" fill="rgba(16,6,1,.75)">${c}</g><g transform="translate(-.7 -.8)" fill="rgba(255,205,150,.30)">${c}</g><g fill="${face}">${c}</g>`;
  const stud = (x, y, r = 2.4) => `<circle cx="${f(x + .6)}" cy="${f(y + .9)}" r="${r}" fill="rgba(0,0,0,.5)"/><circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="url(#dStud)"/>`;
  const rosette = (n = 8, pr = 3, pl = 7) => Array.from({ length: n }, (_, i) => `<ellipse cy="${-pl}" rx="${pr}" ry="${pl}" transform="rotate(${(i * 360) / n})"/>`).join("") + `<circle r="${pr}"/>`;
  const lotusMedallion = () => {
    let s = '<path fill-rule="evenodd" d="M-30 0a30 38 0 1 0 60 0a30 38 0 1 0 -60 0ZM-25.5 0a25.5 33 0 1 0 51 0a25.5 33 0 1 0 -51 0Z"/>';
    for (let i = 0; i < 18; i++) { const t = (i / 18) * Math.PI * 2; s += `<circle cx="${f(Math.sin(t) * 22)}" cy="${f(-Math.cos(t) * 29)}" r="1.3"/>`; }
    s += '<path d="M0 -22C7 -11 7 2 0 13C-7 2 -7 -11 0 -22Z"/><path d="M0 13C-9 8 -17 -3 -18 -14C-8 -11 -2 -2 0 13Z"/><path d="M0 13C9 8 17 -3 18 -14C8 -11 2 -2 0 13Z"/>';
    s += '<path d="M0 14C-12 14 -21 7 -23 -2C-13 -4 -4 3 0 14Z"/><path d="M0 14C12 14 21 7 23 -2C13 -4 4 3 0 14Z"/><path d="M-13 17H13L9 22H-9Z"/>';
    return s;
  };
  const archNiche = () => '<path fill-rule="evenodd" d="M-26 34V-6C-26 -24 -12 -33 0 -40C12 -33 26 -24 26 -6V34ZM-21 30V-5C-21 -19 -10 -27 0 -33C10 -27 21 -19 21 -5V30Z"/>' + `<g transform="translate(0 4)">${rosette(8, 2.6, 6.5)}</g>`;
  const jaali = () => { let s = ""; for (let y = -42; y <= 42; y += 12) for (let x = -36; x <= 36; x += 12) s += `<path d="M${x} ${y - 5}L${x + 5} ${y}L${x} ${y + 5}L${x - 5} ${y}Z"/>`; return s; };
  const panel = (x, y, w, h, motif, k) => {
    const a = 3, b = 9, cx = x + w / 2, cy = y + h / 2;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="rgba(10,4,1,.6)"/>
      <path d="M${x + a} ${y + a}H${x + w - a}L${x + w - b} ${y + b}H${x + b}Z" fill="rgba(255,205,150,.2)"/>
      <path d="M${x + a} ${y + a}L${x + b} ${y + b}V${y + h - b}L${x + a} ${y + h - a}Z" fill="rgba(255,205,150,.11)"/>
      <path d="M${x + a} ${y + h - a}L${x + b} ${y + h - b}H${x + w - b}L${x + w - a} ${y + h - a}Z" fill="rgba(0,0,0,.42)"/>
      <path d="M${x + w - a} ${y + a}L${x + w - b} ${y + b}V${y + h - b}L${x + w - a} ${y + h - a}Z" fill="rgba(0,0,0,.28)"/>
      <rect x="${x + b}" y="${y + b}" width="${w - 2 * b}" height="${h - 2 * b}" fill="rgba(60,30,10,.3)"/>
      <rect x="${x + b + 3}" y="${y + b + 3}" width="${w - 2 * b - 6}" height="${h - 2 * b - 6}" fill="none" stroke="rgba(0,0,0,.4)" stroke-width=".8"/>
      <g transform="translate(${cx} ${cy}) scale(${k})">${emboss(motif)}</g>`;
  };
  const doorLeaf = () => {
    let s = '<svg viewBox="0 0 120 400" preserveAspectRatio="none" aria-hidden="true">';
    s += '<rect width="120" height="400" fill="#5a3115" filter="url(#dGrain)"/><rect width="120" height="400" fill="url(#dHinge)"/>';
    s += '<rect x="2" y="2" width="116" height="396" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="2.5"/>';
    s += panel(12, 14, 88, 98, archNiche(), 0.95) + panel(12, 124, 88, 140, lotusMedallion(), 1.05) + panel(12, 276, 88, 110, jaali(), 0.82);
    [118, 270].forEach((y) => [26, 56, 86].forEach((x) => (s += stud(x, y, 2.2))));
    s += '<rect x="111" y="0" width="9" height="400" fill="url(#dBrassV)" opacity=".92"/><rect x="110" y="0" width="1.2" height="400" fill="rgba(0,0,0,.55)"/>';
    for (let y = 14; y <= 390; y += 24) s += stud(115.5, y, 1.7);
    s += `<g transform="translate(90 196)"><circle r="9.5" fill="rgba(0,0,0,.45)" transform="translate(.8 1.2)"/><g fill="url(#dBrass)">${rosette(8, 3, 6.5)}</g><circle r="3.2" fill="url(#dStud)"/>
      <circle cx="1" cy="16.5" r="10.5" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="3.4"/><circle cy="15" r="10.5" fill="none" stroke="url(#dBrass)" stroke-width="3.2"/></g>`;
    return s + "</svg>";
  };
  const diya2 = (x, y) => `<ellipse cx="${x}" cy="${y - 20}" rx="20" ry="20" fill="url(#glow)" class="flame-glow"/>
    <path class="flame" d="M${x} ${y - 29}C${x + 4} ${y - 22} ${x + 4} ${y - 16} ${x} ${y - 12}C${x - 4} ${y - 16} ${x - 4} ${y - 22} ${x} ${y - 29}Z" fill="url(#flame)"/>
    <path d="M${x - 11} ${y - 11}C${x - 9} ${y - 1} ${x + 9} ${y - 1} ${x + 11} ${y - 11}Z" fill="url(#dBrass)" stroke="#5c3a0c" stroke-width=".7"/><ellipse cx="${x}" cy="${y - 11}" rx="11" ry="2" fill="#2e1906"/>`;
  const doorFrame = () => {
    let s = `<svg viewBox="0 0 400 560" aria-hidden="true"><defs>
      <filter id="dGrain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.24" numOctaves="3" seed="7" result="n"/>
        <feColorMatrix in="n" type="matrix" values="0 0 0 0 .09  0 0 0 0 .045  0 0 0 0 .015  1.7 0 0 0 -.66" result="g"/>
        <feComposite in="g" in2="SourceGraphic" operator="in" result="gi"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="gi"/></feMerge></filter>
      <filter id="dBlur"><feGaussianBlur stdDeviation="1.6"/></filter>
      <linearGradient id="dBrassV" x1="0" x2="1"><stop offset="0" stop-color="#6b4510"/><stop offset=".4" stop-color="#e9c46a"/><stop offset=".7" stop-color="#b8862e"/><stop offset="1" stop-color="#5c3a0c"/></linearGradient>
      <linearGradient id="dBrass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6df9a"/><stop offset=".5" stop-color="#c9923a"/><stop offset="1" stop-color="#6b4510"/></linearGradient>
      <radialGradient id="dStud" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff1c0"/><stop offset=".45" stop-color="#d9a441"/><stop offset="1" stop-color="#5c3a0c"/></radialGradient>
      <linearGradient id="dHinge" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".42"/><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#ffcf90" stop-opacity=".06"/></linearGradient>
      <linearGradient id="dStone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6d6055"/><stop offset="1" stop-color="#2f2822"/></linearGradient>
      <linearGradient id="dShadeV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    </defs>`;
    const pil = (x) => {
      let p = `<rect x="${x}" y="112" width="46" height="384" fill="#4a2711" filter="url(#dGrain)"/><rect x="${x}" y="112" width="46" height="384" fill="url(#dHinge)" opacity=".6"/>`;
      [10, 20, 30].forEach((o) => (p += `<rect x="${x + o}" y="150" width="5" height="318" rx="2.5" fill="rgba(0,0,0,.42)"/><rect x="${x + o + 4}" y="150" width="1" height="318" fill="rgba(255,200,140,.12)"/>`));
      p += `<rect x="${x - 5}" y="104" width="56" height="16" fill="#55301a" filter="url(#dGrain)"/><rect x="${x - 5}" y="117" width="56" height="3" fill="url(#dBrass)"/>`;
      p += `<rect x="${x - 5}" y="490" width="56" height="32" fill="#55301a" filter="url(#dGrain)"/><rect x="${x - 5}" y="492" width="56" height="3" fill="url(#dBrass)"/>`;
      return p;
    };
    s += pil(32) + pil(322);
    // architrave around the opening, with a carved bead row
    s += '<rect x="72" y="112" width="256" height="410" fill="#3a1d0b"/><rect x="72" y="112" width="256" height="410" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="1.5"/>';
    let beads = "";
    for (let y = 126; y < 518; y += 7) beads += `<circle cx="76" cy="${y}" r="1.7"/><circle cx="324" cy="${y}" r="1.7"/>`;
    for (let x = 80; x <= 320; x += 7) beads += `<circle cx="${x}" cy="116" r="1.7"/>`;
    s += emboss(beads, "#5a3216");
    // lintel
    s += '<rect x="20" y="44" width="360" height="70" fill="#4d2a12" filter="url(#dGrain)"/>';
    s += '<rect x="20" y="58" width="360" height="1.5" fill="rgba(0,0,0,.45)"/><rect x="20" y="96" width="360" height="1.5" fill="rgba(0,0,0,.45)"/><rect x="20" y="97.5" width="360" height="1" fill="rgba(255,200,140,.15)"/>';
    let sc = "";
    for (let x = 22; x < 378; x += 12) sc += `<path d="M${x} 112a6 6 0 0 1 12 0Z"/>`;
    s += emboss(sc, "#5e3418");
    let ros = "";
    [56, 96, 136, 264, 304, 344].forEach((x) => (ros += `<g transform="translate(${x} 77)">${rosette(8, 2.4, 6)}</g>`));
    s += emboss(ros, "#64391a");
    s += '<ellipse cx="200" cy="78" rx="30" ry="21" fill="#2a1406"/><ellipse cx="200" cy="78" rx="30" ry="21" fill="none" stroke="url(#dBrass)" stroke-width="2.2"/>';
    s += '<image href="assets/ganesha-gold.png" x="186" y="60" width="28" height="36"/>';
    // cornice and finial
    s += '<rect x="10" y="30" width="380" height="16" fill="#5a3318" filter="url(#dGrain)"/><rect x="10" y="30" width="380" height="1.5" fill="rgba(255,210,150,.3)"/><rect x="10" y="44" width="380" height="2.5" fill="url(#dBrass)"/>';
    s += '<path d="M190 30C186 22 190 15 200 13C210 15 214 22 210 30Z" fill="url(#dBrass)"/><path d="M196 13C196 8 198 4 200 1C202 4 204 8 204 13Z" fill="url(#dBrass)"/>';
    s += '<rect x="34" y="114" width="332" height="26" fill="url(#dShadeV)" opacity=".7"/>';
    // steps and diyas
    s += '<rect x="24" y="522" width="352" height="18" fill="url(#dStone)"/><rect x="24" y="522" width="352" height="1.5" fill="rgba(255,230,200,.3)"/>';
    s += '<rect x="8" y="540" width="384" height="20" fill="url(#dStone)" opacity=".85"/><rect x="8" y="540" width="384" height="1.5" fill="rgba(255,230,200,.22)"/>';
    s += diya2(48, 524) + diya2(352, 524);
    return s + "</svg>";
  };
  // jasmine strings (gajra) laid along a path: small cream buds, a rose bead and leaves now and then
  const gajra = (pts) => {
    let path = `M${pts.map((p) => p.map(f).join(" ")).join("L")}`, s = `<path d="${path}" transform="translate(1.6 3.2)" stroke="rgba(0,0,0,.5)" stroke-width="7" stroke-linecap="round" fill="none" filter="url(#dBlur)"/>`;
    pts.forEach((p, i) => {
      const q = pts[Math.min(i + 1, pts.length - 1)], o = pts[Math.max(i - 1, 0)], ang = (Math.atan2(q[1] - o[1], q[0] - o[0]) * 180) / Math.PI;
      if (i % 28 === 14) {
        s += `<ellipse cx="${f(p[0])}" cy="${f(p[1])}" rx="1.8" ry="4.6" fill="#4b7b33" transform="rotate(${f(ang + 140)} ${f(p[0])} ${f(p[1])}) translate(0 -3)"/><ellipse cx="${f(p[0])}" cy="${f(p[1])}" rx="1.8" ry="4.6" fill="#3f6d2b" transform="rotate(${f(ang + 40)} ${f(p[0])} ${f(p[1])}) translate(0 -3)"/>`;
        s += `<circle cx="${f(p[0])}" cy="${f(p[1])}" r="3.4" fill="#9e2b45"/><circle cx="${f(p[0] - 1)}" cy="${f(p[1] - 1.1)}" r="1.2" fill="rgba(255,190,205,.55)"/>`;
      } else {
        s += `<ellipse cx="${f(p[0])}" cy="${f(p[1])}" rx="3" ry="4.1" fill="${i % 2 ? "#fffcf2" : "#efe6cf"}" stroke="rgba(140,120,80,.45)" stroke-width=".35" transform="rotate(${f(ang + 90)} ${f(p[0])} ${f(p[1])})"/>`;
      }
    });
    return s;
  };
  const sampleQ = (x0, y0, cx, cy, x2, y2, step = 2.9) => {
    const L = Math.hypot(cx - x0, cy - y0) + Math.hypot(x2 - cx, y2 - cy), n = Math.ceil(L / step), out = [];
    for (let i = 0; i <= n; i++) { const t = i / n, u = 1 - t; out.push([u * u * x0 + 2 * u * t * cx + t * t * x2, u * u * y0 + 2 * u * t * cy + t * t * y2]); }
    return out;
  };
  const doorOver = () => {
    let s = '<svg viewBox="0 0 400 560" aria-hidden="true"><rect class="lintel-shadow" x="80" y="120" width="240" height="40" fill="url(#dShadeV)"/>';
    s += gajra(sampleQ(84, 118, 79, 240, 88, 352)) + gajra(sampleQ(316, 118, 321, 240, 312, 352));
    const sw = sampleQ(86, 120, 200, 200, 314, 120);
    [[0.27, 24], [0.5, 38], [0.73, 24]].forEach(([t, len]) => {
      const p = sw[Math.round(t * (sw.length - 1))];
      s += gajra(sampleQ(p[0], p[1], p[0], p[1] + len / 2, p[0], p[1] + len));
    });
    s += gajra(sw);
    return s + "</svg>";
  };
  const rangoli = () => {
    let s = '<svg viewBox="-100 -100 200 200" aria-hidden="true" fill="none" stroke="#fff7e6" stroke-width="1.3" stroke-linecap="round">';
    s += '<circle r="92" stroke-dasharray="1 6"/><circle r="84"/><circle r="38"/><circle r="14"/>';
    for (let i = 0; i < 16; i++) s += `<path d="M0 -40C14 -56 14 -70 0 -82C-14 -70 -14 -56 0 -40Z" transform="rotate(${i * 22.5})"/>`;
    for (let i = 0; i < 8; i++) s += `<path d="M0 -16C7 -24 7 -30 0 -36C-7 -30 -7 -24 0 -16Z" transform="rotate(${i * 45 + 22.5})"/>`;
    for (let i = 0; i < 32; i++) s += `<circle r="1.4" cy="-88" fill="#fff7e6" stroke="none" transform="rotate(${i * 11.25})"/>`;
    return s + '<circle r="4" fill="#fff7e6" stroke="none"/></svg>';
  };
  return { doorFrame, doorLeaf, doorOver, rangoli, defs, toran, scene, leaves, mandala, star, heart, divider, pin };
})();
