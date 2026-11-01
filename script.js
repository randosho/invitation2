/* ===== Edit your details here ===== */
const CONFIG = {
  bride: "Laxmi",
  groom: "Deepak",
  eventDate: new Date(2026, 10, 25, 15, 5, 0), // Lagna: 25 Nov 2026, 3:05 PM
  events: [ // [date, name, show time?]
    [new Date(2026, 10, 24, 0, 0), "Haladi", false],
    [new Date(2026, 10, 25, 15, 5), "Lagna", true],
  ],
  mapUrl: "https://maps.app.goo.gl/xzAiPQ1xLEn72Y3u9?g_st=aw",
};

const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const clock = (d) => { const h = d.getHours(); return `${h % 12 || 12}:${pad(d.getMinutes())} ${h < 12 ? "AM" : "PM"}`; };

/* content */
const E = CONFIG.eventDate;
["bride", "bride2"].forEach((i) => ($(i).textContent = CONFIG.bride));
["groom", "groom2"].forEach((i) => ($(i).textContent = CONFIG.groom));
$("dateText").textContent = `${pad(E.getDate())} · ${pad(E.getMonth() + 1)} · ${E.getFullYear()}`;
$("seal").textContent = `${CONFIG.groom[0]}·${CONFIG.bride[0]}`;
$("coverNames").textContent = `${CONFIG.groom} & ${CONFIG.bride}`;
$("coverDate").textContent = $("dateText").textContent;
$("sign").textContent = `${CONFIG.groom} & ${CONFIG.bride}`;
$("mapBtn").href = CONFIG.mapUrl;
$("events").innerHTML = CONFIG.events.map(([d, n, t]) =>
  `<li class="reveal"><div class="d"><b>${pad(d.getDate())}</b><small>${MON[d.getMonth()]}</small></div><div class="e"><h4>${n}</h4><p>${DAY[d.getDay()]}${t ? " · " + clock(d) : ""}</p></div></li>`).join("");

/* art */
document.body.insertAdjacentHTML("afterbegin", ART.defs());
document.querySelectorAll("[data-art]").forEach((el) => (el.innerHTML = ART[el.dataset.art]()));

/* petals */
const COLORS = ["#f6b54a", "#f39a2b", "#f8d36a", "#ee8aa3", "#f6bccb"];
document.querySelectorAll(".petals").forEach((box) => {
  const h = box.parentElement.clientHeight || 800;
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("i"), dur = 12 + Math.random() * 10, sz = 9 + Math.random() * 9;
    p.className = "petal";
    p.style.cssText = `left:${Math.random() * 96}%;width:${sz}px;height:${sz * 1.2}px;--h:${h + 40}px;--dx:${(Math.random() - 0.5) * 120}px;--rot:${Math.random() * 540 - 270}deg;--dur:${dur}s;--dly:-${Math.random() * dur}s;animation-name:fall;opacity:${0.65 + Math.random() * 0.3}`;
    box.append(p);
  }
});

/* countdown */
function tick() {
  const s = Math.max(0, Math.floor((E - Date.now()) / 1000));
  $("cd-d").textContent = pad(Math.floor(s / 86400)); $("cd-h").textContent = pad(Math.floor((s % 86400) / 3600));
  $("cd-m").textContent = pad(Math.floor((s % 3600) / 60)); $("cd-s").textContent = pad(s % 60);
}
tick(); setInterval(tick, 1000);

/* scroll reveal */
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* music: assets/music.mp3. Browsers refuse sound until the visitor taps or presses a key (scrolling does not
   count), so the page tries to play on load and, if that is blocked, starts on the first tap anywhere.
   The speaker button always shows what is really happening and mutes or restarts the music. */
const soundBtn = $("sound");
const bgm = new Audio("assets/music.mp3");
bgm.loop = true; bgm.preload = "auto"; bgm.volume = 0.25;
let wanted = true; // the visitor has not asked for silence
const GESTURES = ["pointerdown", "pointerup", "touchend", "click", "keydown"];
function showState() {
  const playing = !bgm.paused;
  soundBtn.classList.toggle("off", !playing);
  soundBtn.classList.toggle("hint", wanted && !playing); // pulse while waiting for the first tap
}
function tryPlay() { return bgm.play().then(showState, () => { showState(); throw 0; }); }
function unlock(e) {
  if (!wanted || !bgm.paused || (e.target.closest && e.target.closest("#sound"))) return;
  tryPlay().then(() => GESTURES.forEach((g) => removeEventListener(g, unlock, true)), () => {});
}
bgm.addEventListener("playing", showState);
bgm.addEventListener("pause", showState);
GESTURES.forEach((g) => addEventListener(g, unlock, true));
tryPlay().catch(() => {});
soundBtn.addEventListener("click", () => {
  if (bgm.paused) { wanted = true; tryPlay().catch(() => {}); } else { wanted = false; bgm.pause(); }
  showState();
});
document.addEventListener("visibilitychange", () => { if (wanted) document.hidden ? bgm.pause() : bgm.play().catch(() => {}); });
showState();

/* envelope: opens on tap, or on its own once scrolled into view */
const env = $("env"), invite = $("invitation");
function openEnv(fromTap) {
  if (env.classList.contains("open")) return;
  env.classList.add("open"); invite.classList.add("open"); env.setAttribute("aria-expanded", "true");
  if (fromTap && wanted && bgm.paused) tryPlay().catch(() => {});
}
env.addEventListener("click", () => openEnv(true));
env.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), openEnv(true)));
new IntersectionObserver((es, o) => es.some((e) => e.isIntersecting) && (setTimeout(() => openEnv(false), 900), o.disconnect()), { threshold: 0.9 }).observe(env);


/* Lagna card: analog clock + add to calendar */
(function () {
  const h = E.getHours() % 12, m = E.getMinutes();
  const hand = (deg, len, w) => `<line x1="100" y1="100" x2="100" y2="${100 - len}" stroke="#8c1238" stroke-width="${w}" stroke-linecap="round" transform="rotate(${deg} 100 100)"/>`;
  let t = "";
  for (let i = 0; i < 60; i++) t += `<line x1="100" y1="${i % 5 ? 10 : 7}" x2="100" y2="${i % 5 ? 13 : 16}" stroke="#b98a3c" stroke-width="${i % 5 ? 0.8 : 1.6}" transform="rotate(${i * 6} 100 100)"/>`;
  $("clock").innerHTML = `<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="94" fill="#fffaf1" stroke="#e3c27d"/>${t}${hand((h + m / 60) * 30, 50, 4)}${hand(m * 6, 70, 2.6)}<circle cx="100" cy="100" r="5" fill="#b98a3c"/></svg><b>${clock(E)}</b>`;
  $("lDate").textContent = `${DAY[E.getDay()]}, ${E.getDate()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][E.getMonth()]} ${E.getFullYear()}`;
  const f = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  const end = new Date(E.getTime() + 2 * 3600e3);
  $("calBtn").href = "https://calendar.google.com/calendar/render?" + new URLSearchParams({ action: "TEMPLATE", text: `${CONFIG.groom} & ${CONFIG.bride}: Lagna`, dates: `${f(E)}/${f(end)}`, details: "Wedding of " + CONFIG.groom + " & " + CONFIG.bride, location: CONFIG.mapUrl });
  $("tag").textContent = `#${CONFIG.groom}Weds${CONFIG.bride}`;
})();

/* cover: the first tap opens the temple doors and starts the music (the tap is what lets the browser play sound) */
const cover = $("cover");
$("cvWay").style.clipPath = ART.doorClip();
for (let i = 0; i < 16; i++) {
  const d = document.createElement("i"), dur = 9 + Math.random() * 9;
  d.style.cssText = `left:${Math.random() * 100}%;--dx:${(Math.random() - 0.5) * 80}px;animation-duration:${dur}s;animation-delay:-${Math.random() * dur}s;opacity:0;transform:scale(${0.6 + Math.random() * 0.8})`;
  $("cvDust").append(d);
}
function openCover() {
  if (cover.classList.contains("open")) return;
  wanted = true;
  tryPlay().catch(() => {});
  const scene = $("cvScene"), sr = scene.getBoundingClientRect(), wr = $("cvWay").getBoundingClientRect();
  scene.style.transformOrigin = `${wr.left + wr.width / 2 - sr.left}px ${wr.top + wr.height * 0.6 - sr.top}px`;
  cover.classList.add("open");
  setTimeout(() => cover.classList.add("through"), 1250);
  setTimeout(() => { document.body.classList.remove("locked"); window.scrollTo(0, 0); }, 1500);
  setTimeout(() => cover.classList.add("gone"), 1900);
  setTimeout(() => cover.remove(), 3100);
}
cover.addEventListener("click", openCover);
cover.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), openCover()));
cover.focus({ preventScroll: true });
