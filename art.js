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

    /* ---- temple door pieces ---- */
  const lotus = () => `<svg viewBox="0 0 100 100" aria-hidden="true" fill="#a8703a" stroke="#2c1608" stroke-width="1.3" stroke-linejoin="round">
    <path d="M50 14C60 30 62 52 50 72C38 52 40 30 50 14Z"/><path d="M50 72C34 64 20 48 16 30C34 34 46 50 50 72Z"/><path d="M50 72C66 64 80 48 84 30C66 34 54 50 50 72Z"/>
    <path d="M50 72C28 72 12 62 6 48C24 46 42 56 50 72Z" fill="#935d2e"/><path d="M50 72C72 72 88 62 94 48C76 46 58 56 50 72Z" fill="#935d2e"/>
    <path d="M50 72C42 80 40 88 50 94C60 88 58 80 50 72Z" fill="#b57b42"/><path d="M50 22C54 36 54 50 50 62" fill="none" stroke="#e0b87a" stroke-width=".9"/></svg>`;
  const gopuram = () => `<svg viewBox="0 0 100 100" aria-hidden="true" fill="#a8703a" stroke="#2c1608" stroke-width="1.3" stroke-linejoin="round">
    <path d="M47 6h6v8h-6z"/><path d="M38 14h24l4 10H34z"/><path d="M32 24h36l4 12H28z"/><path d="M26 36h48l5 14H21z"/><path d="M20 50h60l6 16H14z"/><path d="M12 66h76v22H12z"/>
    <path d="M44 88V74a6 6 0 0 1 12 0v14z" fill="#3a2010"/><path d="M26 56h6v6h-6zM68 56h6v6h-6zM44 42h12v5H44z" fill="#3a2010" stroke="none"/></svg>`;
  const bell = () => `<svg viewBox="0 0 64 112" aria-hidden="true"><path d="M32 0V30" stroke="#6e4d1c" stroke-width="2.4" stroke-dasharray="3 2"/><circle cx="32" cy="32" r="6" fill="url(#brass)"/>
    <path d="M12 92C12 62 20 44 32 40C44 44 52 62 52 92Z" fill="url(#brass)" stroke="#6b4510" stroke-width="1"/><path d="M20 90C20 66 25 54 30 50" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2.4" stroke-linecap="round"/>
    <rect x="8" y="90" width="48" height="9" rx="4.5" fill="url(#brass)" stroke="#6b4510" stroke-width="1"/><circle cx="32" cy="105" r="5.5" fill="url(#brass)"/></svg>`;
  const garland = () => {
    let s = "", back = "";
    const q = (t, x0, y0, cx, cy, x2, y2) => [(1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t * t * x2, (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t * t * y2];
    for (let i = 0; i <= 36; i++) {
      const [x, y] = q(i / 36, 30, 16, 215, 112, 400, 16), p = i % 4 === 2, z = p ? 15 : 17;
      back += `<ellipse cx="${f(x)}" cy="${f(y + 3)}" rx="9" ry="4.5" fill="#3c7a2a" transform="rotate(${(i % 2 ? 24 : -24)} ${f(x)} ${f(y)})"/>`;
      s += `<use href="#${p ? "jasP" : "jas"}" x="${f(x - z / 2)}" y="${f(y - z / 2)}" width="${z}" height="${z}"/>`;
    }
    let d = "";
    [[.1, 46], [.26, 58], [.5, 50], [.74, 58], [.9, 46]].forEach(([t, len]) => {
      const [x, y] = q(t, 30, 16, 215, 112, 400, 16);
      d += `<path d="M${f(x)} ${f(y)}V${f(y + len)}" stroke="#7aa05a" stroke-width="1.2"/>`;
      for (let k = 1; k <= Math.floor(len / 11); k++) d += `<use href="#${k % 3 === 0 ? "jasP" : "jas"}" x="${f(x - 7)}" y="${f(y + k * 11 - 7)}" width="14" height="14"/>`;
      d += `<use href="#jasP" x="${f(x - 8)}" y="${f(y + len - 4)}" width="16" height="16"/>`;
    });
    return `<svg viewBox="0 0 430 190" aria-hidden="true">${back}${d}${s}</svg>`;
  };
  const strand = () => {
    let s = '<path d="M11 0V300" stroke="#7aa05a" stroke-width="1.2"/>';
    for (let i = 0; i < 24; i++) s += `<use href="#${i % 6 === 4 ? "jasP" : "jas"}" x="${3 + (i % 2 ? 1.5 : -1.5)}" y="${f(2 + i * 12)}" width="16" height="16"/>`;
    return `<svg viewBox="0 0 22 304" aria-hidden="true">${s}<use href="#jasP" x="2" y="288" width="18" height="18"/></svg>`;
  };
  const lamp = () => {
    let s = '<svg viewBox="0 0 90 250" aria-hidden="true"><ellipse cx="45" cy="239" rx="34" ry="8" fill="url(#brass)" stroke="#6b4510"/><ellipse cx="45" cy="229" rx="25" ry="7" fill="url(#brass)" stroke="#6b4510"/>';
    s += '<path d="M39 228L41 84H49L51 228Z" fill="url(#brass)" stroke="#6b4510"/>';
    [196, 160, 124].forEach((y, i) => (s += `<ellipse cx="45" cy="${y}" rx="${15 - i * 2}" ry="5" fill="url(#brass)" stroke="#6b4510"/>`));
    s += '<ellipse cx="45" cy="80" rx="38" ry="8" fill="url(#brass)" stroke="#6b4510"/><path d="M40 80C40 60 42 46 45 40C48 46 50 60 50 80Z" fill="url(#brass)" stroke="#6b4510"/><circle cx="45" cy="36" r="5" fill="url(#brass)"/>';
    [10, 27, 45, 63, 80].forEach((x, i) => {
      const y = 78 - (i % 2 ? 6 : 0);
      s += `<ellipse cx="${x}" cy="${y - 20}" rx="14" ry="14" fill="url(#glow)" class="flame-glow"/><path class="flame" d="M${x} ${y - 30}C${x + 5} ${y - 22} ${x + 5} ${y - 14} ${x} ${y - 9}C${x - 5} ${y - 14} ${x - 5} ${y - 22} ${x} ${y - 30}Z" fill="url(#flame)"/><path d="M${x - 7} ${y - 8}C${x - 5} ${y + 1} ${x + 5} ${y + 1} ${x + 7} ${y - 8}Z" fill="url(#brass)" stroke="#6b4510" stroke-width=".8"/>`;
    });
    return s + "</svg>";
  };
  return { lotus, gopuram, bell, garland, strand, lamp, defs, toran, scene, leaves, mandala, star, heart, divider, pin };
})();
