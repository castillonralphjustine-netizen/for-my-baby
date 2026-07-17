/* ============================================================
   FOR MY LOVE — script.js
   Everything on the site reads from CONFIG below.
   Change the values here and the whole site updates itself.
============================================================ */

const CONFIG = {
  loverName: "My Love",                 // the person you're building this for
  yourName: "Your Love",                // your name / signature
  relationshipStart: "2023-02-14T00:00:00", // ISO date the timer counts from
  galleryImages: [
    // { src: "assets/images/photo1.jpg", caption: "The day we met" },
    { src: "assets/images/photo1.jpg", caption: "The day we met" },
    { src: "assets/images/photo2.jpg", caption: "Our first trip" },
    { src: "assets/images/photo3.jpg", caption: "That silly afternoon" },
    { src: "assets/images/photo4.jpg", caption: "Coffee dates" },
    { src: "assets/images/photo5.jpg", caption: "Golden hour" },
    { src: "assets/images/photo6.jpg", caption: "Just us" },
  ],
  music: {
    src: "assets/music/our-song.mp3",
    title: "Our Song",
    artist: "for you, from me",
    cover: "assets/images/album-cover.jpg",
  },
  password: "141223",                   // "our special date" — digits only, e.g. ddmmyy

  loveLetter:
    "Every love story is beautiful, but ours is my favorite. From the first " +
    "hello to every ordinary Tuesday since, you've made my world softer and " +
    "brighter. I love the way you laugh at your own jokes before you finish " +
    "telling them, the way you always save me the last bite, and the way " +
    "home just means wherever you are. I don't have the perfect words for " +
    "how much you mean to me — so I built you this instead. Thank you for " +
    "choosing me, every single day.",

  openWhen: {
    happy: "I'm so glad you're happy right now — hold onto this feeling. " +
      "Whatever made you smile today, I hope it multiplies. And remember: " +
      "you make ME this happy just by existing. Go celebrate a little. 🎉",
    miss: "I miss you too, more than you know. Distance is just a small, " +
      "annoying detail between us — it doesn't change a single thing about " +
      "how much I love you. Close your eyes for a second; I'm sending you " +
      "the biggest hug I can from here. 💙",
    sad: "Hey. It's okay to feel sad — I've got you, even from far away. " +
      "This feeling won't stay forever, I promise. Breathe with me: in for " +
      "four, out for four. You are so loved, so held, and never, ever alone. 🌸",
  },

  memories: [
    { date: "The Beginning", title: "First Conversation", text: "The message that started everything — I almost didn't send it." },
    { date: "First Date", title: "Nervous & Giddy", text: "I planned three things to say in case I panicked. I used all three." },
    { date: "One Month", title: "Our First Monthsary", text: "You were already my favorite part of every day." },
    { date: "First Trip", title: "Somewhere New, Together", text: "Getting lost with you beats knowing the way alone." },
    { date: "A Quiet Tuesday", title: "The Little Things", text: "No plans, no occasion — just us, and it was perfect." },
    { date: "Looking Ahead", title: "Future Dreams", text: "Every plan I make for the future has you in it." },
  ],

  reasons: [
    "I love your smile.", "I love how safe I feel with you.", "I love your kindness.",
    "I love your laugh.", "I love every little thing about you.", "I love how you remember tiny details about me.",
    "I love the way you say my name.", "I love your terrible puns.", "I love how you dance when you think no one's watching.",
    "I love your morning voice.", "I love how you fight for the people you love.", "I love your handwriting.",
    "I love how you get excited about small things.", "I love your patience with me.", "I love how you make me laugh at 2am.",
    "I love your hugs.", "I love how you always know what to say.", "I love your ambition.",
    "I love how you care for everyone around you.", "I love your curiosity.", "I love how you hum without noticing.",
    "I love your honesty.", "I love how you make any place feel like home.", "I love your stubbornness (most of the time).",
    "I love how you apologize when you're wrong.", "I love your taste in music.", "I love how you steal the blanket and I don't even mind.",
    "I love your cooking.", "I love how you cheer for me louder than anyone.", "I love your bravery.",
    "I love how you make ordinary days feel special.", "I love your silly voices.", "I love how you always know when something's wrong.",
    "I love your handwriting on sticky notes.", "I love how excited you get about food.", "I love your loyalty.",
    "I love how you never let an argument stay unresolved.", "I love your sense of humor.", "I love how you hold my hand in your sleep.",
    "I love your work ethic.", "I love how you believe in me more than I believe in myself.", "I love your softness.",
    "I love how you make friends everywhere you go.", "I love your playlists.", "I love how you remember my coffee order.",
    "I love your resilience.", "I love how you always share your fries.", "I love your voice notes.",
    "I love how you check on me during hard days.", "I love your creativity.", "I love how you make plans just to see me.",
    "I love your hands.", "I love how you introduce me to your friends.", "I love your optimism.",
    "I love how you never make me feel silly for caring too much.", "I love your eyes.", "I love how you tell stories with your whole body.",
    "I love your intelligence.", "I love how gentle you are with animals.", "I love your bad dancing.",
    "I love how proud you are of the people you love.", "I love your forehead kisses.", "I love how you say 'we' instead of 'I'.",
    "I love your empathy.", "I love how you make the mundane feel magical.", "I love your fashion sense.",
    "I love how you remember our inside jokes.", "I love your voice when you're sleepy.", "I love how you never give up on us.",
    "I love your handwriting on birthday cards.", "I love how you always find the good in people.", "I love your confidence.",
    "I love how you make me want to be better.", "I love your playlists for every mood.", "I love how you send me songs that remind you of me.",
    "I love your grip on my hand in crowds.", "I love how you make me feel chosen.", "I love your generosity.",
    "I love how you plan surprises even when you're bad at keeping secrets.", "I love your calm in chaos.", "I love how you never let me feel alone.",
    "I love your goofy selfies.", "I love how you say goodnight every single night.", "I love your determination.",
    "I love how you make our home feel warm.", "I love your voice when you talk about your dreams.", "I love how you show up, always.",
    "I love your quiet moments.", "I love how you make me laugh until it hurts.", "I love your bravery when things get hard.",
    "I love how you love the people I love.", "I love your endless questions.", "I love how you make me feel like enough.",
    "I love your patience when I'm difficult.", "I love how safe your arms feel.", "I love your unwavering support.",
    "I love how you make Tuesdays feel like Fridays.", "I love your whole, entire heart.",
    "I love that after everything, I'd still choose you — every single time.",
  ],

  quotes: [
    "You are my today and all of my tomorrows.",
    "In a sea of people, my eyes will always search for you.",
    "You are my sun, my moon, and all my stars.",
    "I love you more than yesterday, less than tomorrow.",
    "Home isn't a place, it's a person.",
    "You had me at hello.",
    "Every love story is beautiful, but ours is my favorite.",
    "I love you and that's the beginning and end of everything.",
  ],
};

/* ============================================================
   UTILITIES
============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const rand = (min, max) => Math.random() * (max - min) + min;

document.addEventListener("DOMContentLoaded", init);

function init() {
  hydrateConfig();
  buildBackground();
  setupLoader();
  setupWelcome();
  setupNav();
  setupTheme();
  setupScrollProgress();
  setupBackToTop();
  setupRevealOnScroll();
  setupEnvelope();
  setupGallery();
  setupPlayer();
  setupTimer();
  setupTimeline();
  setupReasons();
  setupOpenWhen();
  setupSurprise();
  setupGames();
  setupCursorFx();
  setupQuoteToast();
  setupFooter();
}

/* ============================================================
   HYDRATE STATIC TEXT FROM CONFIG
============================================================ */
function hydrateConfig() {
  $("#loverNameHero") && ($("#loverNameHero").textContent = CONFIG.loverName);
  $("#letterSignature") && ($("#letterSignature").textContent = CONFIG.yourName);
  $("#footerYourName") && ($("#footerYourName").textContent = CONFIG.yourName);
  $("#footerLoverName") && ($("#footerLoverName").textContent = CONFIG.loverName);
  $("#songTitle") && ($("#songTitle").textContent = CONFIG.music.title);
  $("#songArtist") && ($("#songArtist").textContent = CONFIG.music.artist);
  $("#reasonsTotal") && ($("#reasonsTotal").textContent = CONFIG.reasons.length);

  const audioSource = $("#audioSource");
  if (audioSource) audioSource.src = CONFIG.music.src;
  const cover = $("#albumCoverImg");
  if (cover) cover.src = CONFIG.music.cover;
}

/* ============================================================
   LOADER
============================================================ */
function setupLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => $("#loader")?.classList.add("is-hidden"), 500);
  });
  // fallback in case load already fired
  setTimeout(() => $("#loader")?.classList.add("is-hidden"), 2200);
}

/* ============================================================
   BACKGROUND — stars, moon, petals, floating hearts
============================================================ */
function buildBackground() {
  const starsWrap = $("#bgStars");
  if (starsWrap) {
    for (let i = 0; i < 60; i++) {
      const s = document.createElement("span");
      s.className = "star";
      const size = rand(1, 3);
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.top = `${rand(0, 100)}%`;
      s.style.left = `${rand(0, 100)}%`;
      s.style.animationDelay = `${rand(0, 3)}s`;
      s.style.animationDuration = `${rand(2, 5)}s`;
      starsWrap.appendChild(s);
    }
  }

  const petalsWrap = $("#bgPetals");
  if (petalsWrap) {
    const petalChars = ["🌸", "🌸", "🌸", "✿"];
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.textContent = petalChars[Math.floor(rand(0, petalChars.length))];
      p.style.left = `${rand(0, 100)}%`;
      p.style.fontSize = `${rand(0.8, 1.6)}rem`;
      p.style.setProperty("--drift", `${rand(-80, 80)}px`);
      p.style.animationDuration = `${rand(10, 20)}s`;
      p.style.animationDelay = `${rand(0, 16)}s`;
      petalsWrap.appendChild(p);
    }
  }

  const heartsWrap = $("#bgHearts");
  if (heartsWrap) {
    for (let i = 0; i < 10; i++) {
      const h = document.createElement("span");
      h.className = "floating-heart";
      h.textContent = "❤";
      h.style.left = `${rand(0, 100)}%`;
      h.style.fontSize = `${rand(0.7, 1.4)}rem`;
      h.style.setProperty("--drift", `${rand(-60, 60)}px`);
      h.style.animationDuration = `${rand(14, 24)}s`;
      h.style.animationDelay = `${rand(0, 18)}s`;
      heartsWrap.appendChild(h);
    }
  }

  // small hearts specifically for the hero section
  const hero = $(".hero-hearts");
  if (hero) {
    for (let i = 0; i < 8; i++) {
      const h = document.createElement("span");
      h.className = "floating-heart";
      h.textContent = "❤";
      h.style.left = `${rand(0, 100)}%`;
      h.style.fontSize = `${rand(0.8, 1.3)}rem`;
      h.style.setProperty("--drift", `${rand(-40, 40)}px`);
      h.style.animationDuration = `${rand(10, 16)}s`;
      h.style.animationDelay = `${rand(0, 10)}s`;
      hero.appendChild(h);
    }
  }
}

/* ============================================================
   WELCOME PAGE — enter button + heart explosion
============================================================ */
function setupWelcome() {
  const enterBtn = $("#enterBtn");
  const welcome = $("#welcome");
  const site = $("#site");
  const burst = $("#heartBurst");

  enterBtn?.addEventListener("click", () => {
    // heart explosion
    for (let i = 0; i < 24; i++) {
      const h = document.createElement("span");
      h.textContent = "❤";
      const angle = rand(0, Math.PI * 2);
      const dist = rand(120, 320);
      h.style.setProperty("--bx", `${Math.cos(angle) * dist}px`);
      h.style.setProperty("--by", `${Math.sin(angle) * dist}px`);
      h.style.animationDelay = `${rand(0, 0.15)}s`;
      burst.appendChild(h);
    }

    setTimeout(() => welcome.classList.add("is-leaving"), 250);

    setTimeout(() => {
      welcome.style.display = "none";
      site.hidden = false;
      document.body.style.overflow = "";
      window.scrollTo({ top: 0 });
    }, 1100);
  });
}

/* ============================================================
   NAVIGATION — smooth scroll + active highlight
============================================================ */
function setupNav() {
  const links = $$("#navList a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      $(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
    });
  });

  const sections = links
    .map((l) => $(l.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const active = links.find((l) => l.getAttribute("href") === `#${entry.target.id}`);
          active?.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ============================================================
   THEME TOGGLE — dark / light
============================================================ */
function setupTheme() {
  const btn = $("#themeToggle");
  const icon = $("#themeIcon");
  const stored = window.__theme || null;
  let theme = stored || "light";
  applyTheme(theme);

  btn?.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    applyTheme(theme);
  });

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
    if (icon) icon.textContent = t === "dark" ? "☀️" : "🌙";
    window.__theme = t;
  }
}

/* ============================================================
   SCROLL PROGRESS BAR
============================================================ */
function setupScrollProgress() {
  const bar = $("#scrollProgress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = `${scrolled || 0}%`;
  });
}

/* ============================================================
   BACK TO TOP
============================================================ */
function setupBackToTop() {
  const btn = $("#backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 700);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
function setupRevealOnScroll() {
  const targets = $$(".section-inner, .timeline-item, .gallery-card, .timer-card");
  targets.forEach((t) => t.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}

/* ============================================================
   LOVE LETTER — envelope open + typing animation
============================================================ */
function setupEnvelope() {
  const envelope = $("#envelope");
  const paper = $("#letterPaper");
  const typedEl = $("#letterTypedText");
  let typed = false;

  envelope?.addEventListener("click", () => {
    const isOpen = envelope.classList.toggle("is-open");
    envelope.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      paper.hidden = false;
      spawnMiniHearts(envelope);
      if (!typed) {
        typed = true;
        typeText(typedEl, CONFIG.loveLetter, 22);
      }
    }
  });
}

function typeText(el, text, speed = 25) {
  el.textContent = "";
  el.classList.remove("is-done");
  let i = 0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    } else {
      el.classList.add("is-done");
    }
  };
  tick();
}

function spawnMiniHearts(anchor) {
  const rect = anchor.getBoundingClientRect();
  for (let i = 0; i < 10; i++) {
    const h = document.createElement("span");
    h.textContent = "❤";
    h.style.position = "fixed";
    h.style.left = `${rect.left + rect.width / 2}px`;
    h.style.top = `${rect.top}px`;
    h.style.color = "var(--rose-deep)";
    h.style.fontSize = `${rand(0.8, 1.4)}rem`;
    h.style.zIndex = "50";
    h.style.pointerEvents = "none";
    h.style.setProperty("--drift", `${rand(-60, 60)}px`);
    h.style.animation = `heartFloat ${rand(1.6, 2.4)}s ease-out forwards`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
}

/* ============================================================
   GALLERY + LIGHTBOX
============================================================ */
let galleryIndex = 0;

function setupGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;

  CONFIG.galleryImages.forEach((img, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-card";
    card.setAttribute("aria-label", img.caption || `Photo ${i + 1}`);
    card.innerHTML = `
      <img src="${img.src}" alt="${img.caption || ""}" loading="lazy"
        onerror="this.style.display='none'; this.parentElement.querySelector('.gallery-fallback').style.display='flex'">
      <div class="gallery-fallback" style="display:none">📷</div>
      <div class="gallery-caption">${img.caption || ""}</div>
    `;
    card.addEventListener("click", () => openLightbox(i));
    grid.appendChild(card);
  });

  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightboxPrev")?.addEventListener("click", () => shiftLightbox(-1));
  $("#lightboxNext")?.addEventListener("click", () => shiftLightbox(1));
  $("#lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") shiftLightbox(-1);
    if (e.key === "ArrowRight") shiftLightbox(1);
  });
}

function openLightbox(i) {
  galleryIndex = i;
  renderLightbox();
  $("#lightbox").hidden = false;
}
function closeLightbox() {
  $("#lightbox").hidden = true;
}
function shiftLightbox(dir) {
  galleryIndex = (galleryIndex + dir + CONFIG.galleryImages.length) % CONFIG.galleryImages.length;
  renderLightbox();
}
function renderLightbox() {
  const img = CONFIG.galleryImages[galleryIndex];
  $("#lightboxImg").src = img.src;
  $("#lightboxImg").alt = img.caption || "";
  $("#lightboxCaption").textContent = img.caption || "";
}

/* ============================================================
   MUSIC PLAYER
============================================================ */
function setupPlayer() {
  const audio = $("#audioEl");
  const playBtn = $("#playPauseBtn");
  const iconPlay = $("#iconPlay");
  const iconPause = $("#iconPause");
  const progress = $("#progressBar");
  const volume = $("#volumeBar");
  const currentEl = $("#playerCurrent");
  const durationEl = $("#playerDuration");
  const playerCard = $(".player");
  if (!audio) return;

  audio.volume = 0.7;

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // file likely missing — fail silently, still toggle UI so it doesn't feel broken
      });
      iconPlay.hidden = true; iconPause.hidden = false;
      playerCard.classList.add("is-playing");
      playBtn.setAttribute("aria-label", "Pause");
    } else {
      audio.pause();
      iconPlay.hidden = false; iconPause.hidden = true;
      playerCard.classList.remove("is-playing");
      playBtn.setAttribute("aria-label", "Play");
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentEl.textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
  });
  audio.addEventListener("ended", () => {
    iconPlay.hidden = false; iconPause.hidden = true;
    playerCard.classList.remove("is-playing");
  });

  progress.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
  });
  volume.addEventListener("input", () => { audio.volume = Number(volume.value); });
}

function formatTime(sec) {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/* ============================================================
   LOVE TIMER — live countup since relationshipStart
============================================================ */
function setupTimer() {
  const startDate = new Date(CONFIG.relationshipStart);
  if (isNaN(startDate)) return;

  $("#timerSince").textContent =
    `Since ${startDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}`;

  const els = {
    years: $("#tYears"), months: $("#tMonths"), days: $("#tDays"),
    hours: $("#tHours"), minutes: $("#tMinutes"), seconds: $("#tSeconds"),
  };

  function tick() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonth; months--;
    }
    if (months < 0) { months += 12; years--; }

    els.years.textContent = Math.max(years, 0);
    els.months.textContent = Math.max(months, 0);
    els.days.textContent = Math.max(days, 0);
    els.hours.textContent = Math.max(hours, 0);
    els.minutes.textContent = Math.max(minutes, 0);
    els.seconds.textContent = Math.max(seconds, 0);
  }

  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   TIMELINE / MEMORIES
============================================================ */
function setupTimeline() {
  const wrap = $("#timelineWrap");
  if (!wrap) return;
  CONFIG.memories.forEach((m) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <p class="timeline-date">${m.date}</p>
      <h3 class="timeline-title">${m.title}</h3>
      <p class="timeline-text">${m.text}</p>
    `;
    wrap.appendChild(item);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  $$(".timeline-item", wrap).forEach((el) => observer.observe(el));
}

/* ============================================================
   REASONS I LOVE YOU
============================================================ */
function setupReasons() {
  const btn = $("#reasonHeartBtn");
  const list = $("#reasonsList");
  const countEl = $("#reasonsCount");
  if (!btn || !list) return;

  const shuffled = [...CONFIG.reasons].sort(() => Math.random() - 0.5);
  let index = 0;

  btn.addEventListener("click", () => {
    if (index >= shuffled.length) index = 0; // loop back around
    const chip = document.createElement("div");
    chip.className = "reason-chip glass";
    chip.textContent = shuffled[index];
    list.prepend(chip);
    index++;
    countEl.textContent = Math.min(index, shuffled.length);

    btn.classList.remove("is-pop");
    void btn.offsetWidth; // restart animation
    btn.classList.add("is-pop");
  });
}

/* ============================================================
   OPEN WHEN...
============================================================ */
function setupOpenWhen() {
  const cards = $$(".openwhen-card");
  const modal = $("#openwhenModal");
  const icon = $("#openwhenIcon");
  const text = $("#openwhenText");
  const iconMap = { happy: "❤️", miss: "💙", sad: "🌸" };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.key;
      icon.textContent = iconMap[key] || "💌";
      text.textContent = CONFIG.openWhen[key] || "";
      modal.hidden = false;
    });
  });

  $("#openwhenClose")?.addEventListener("click", () => { modal.hidden = true; });
  modal?.addEventListener("click", (e) => { if (e.target === modal) modal.hidden = true; });
}

/* ============================================================
   SECRET SURPRISE
============================================================ */
function setupSurprise() {
  const form = $("#surpriseForm");
  const input = $("#surprisePassword");
  const error = $("#surpriseError");
  const reveal = $("#surpriseReveal");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim().toLowerCase().replace(/[\s\-\/]/g, "");
    const target = String(CONFIG.password).toLowerCase().replace(/[\s\-\/]/g, "");

    if (val && val === target) {
      error.textContent = "";
      $("#surpriseMessage").textContent =
        "You remembered. That date changed everything for me — it's the day " +
        "my life quietly got so much better. Here's to a thousand more like it. " +
        "I love you more than any password could hold. 🎆";
      reveal.hidden = false;
      launchConfetti();
    } else {
      error.textContent = "Not quite — think about our special date. 💭";
      error.classList.remove("is-shake");
      void error.offsetWidth;
      error.classList.add("is-shake");
    }
  });

  reveal?.addEventListener("click", (e) => {
    if (e.target === reveal) reveal.hidden = true;
  });
}

function launchConfetti() {
  const colors = ["#C9708C", "#F3CE8E", "#E4D7FB", "#FFD3E4"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("span");
    piece.textContent = Math.random() > 0.5 ? "❤" : "✦";
    piece.style.position = "fixed";
    piece.style.left = `${rand(0, 100)}vw`;
    piece.style.top = "-20px";
    piece.style.color = colors[Math.floor(rand(0, colors.length))];
    piece.style.fontSize = `${rand(0.8, 1.6)}rem`;
    piece.style.zIndex = "950";
    piece.style.pointerEvents = "none";
    piece.style.transition = `transform ${rand(2.5, 4)}s ease-in, opacity ${rand(2.5, 4)}s ease-in`;
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.transform = `translate(${rand(-100, 100)}px, ${rand(500, 900)}px) rotate(${rand(0, 360)}deg)`;
      piece.style.opacity = "0";
    });
    setTimeout(() => piece.remove(), 4200);
  }
}

/* ============================================================
   MINI GAMES
============================================================ */
function setupGames() {
  setupGameTabs();
  setupCatchGame();
  setupMemoryGame();
  setupForeverGame();
}

function setupGameTabs() {
  const tabs = $$(".game-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      $$(".game-panel").forEach((p) => p.classList.remove("is-active"));
      $(`#game-${tab.dataset.game}`)?.classList.add("is-active");
    });
  });
}

/* ---- Game 1: Catch the Hearts ---- */
function setupCatchGame() {
  const field = $("#catchField");
  const startBtn = $("#catchStart");
  const scoreEl = $("#catchScore");
  const timeEl = $("#catchTime");
  if (!field) return;

  let score = 0, timeLeft = 30, spawnTimer = null, countdownTimer = null, running = false;

  startBtn.addEventListener("click", () => {
    if (running) return;
    running = true;
    score = 0; timeLeft = 30;
    scoreEl.textContent = score; timeEl.textContent = timeLeft;
    field.innerHTML = "";
    startBtn.textContent = "Playing…";
    startBtn.disabled = true;

    spawnTimer = setInterval(spawnHeart, 550);
    countdownTimer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if (timeLeft <= 0) endGame();
    }, 1000);
  });

  function spawnHeart() {
    const heart = document.createElement("button");
    heart.type = "button";
    heart.className = "catch-heart";
    heart.textContent = "❤";
    heart.setAttribute("aria-label", "Catch this heart");
    heart.style.left = `${rand(4, 90)}%`;
    const duration = rand(2.6, 4.2);
    heart.style.animationDuration = `${duration}s`;
    field.appendChild(heart);

    const remove = () => heart.remove();
    heart.addEventListener("animationend", remove);
    heart.addEventListener("click", () => {
      if (!running) return;
      score++;
      scoreEl.textContent = score;
      heart.classList.add("is-caught");
      setTimeout(remove, 300);
    });
  }

  function endGame() {
    running = false;
    clearInterval(spawnTimer);
    clearInterval(countdownTimer);
    field.innerHTML = `<p style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;font-family:var(--font-script);font-size:1.4rem;color:var(--rose-deep);">You caught ${score} hearts — just like I caught feelings for you. 💘</p>`;
    startBtn.textContent = "Play Again";
    startBtn.disabled = false;
  }
}

/* ---- Game 2: Memory Matching ---- */
function setupMemoryGame() {
  const grid = $("#memoryGrid");
  const movesEl = $("#memoryMoves");
  const winEl = $("#memoryWin");
  const restartBtn = $("#memoryRestart");
  if (!grid) return;

  const symbols = ["❤️", "💌", "🌸", "💍", "🎵", "✨", "🌙", "💞"];
  let firstCard = null, moves = 0, matched = 0, lock = false;

  function build() {
    grid.innerHTML = "";
    winEl.hidden = true;
    moves = 0; matched = 0; firstCard = null; lock = false;
    movesEl.textContent = moves;

    const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    deck.forEach((symbol) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "memory-card";
      card.dataset.symbol = symbol;
      card.innerHTML = `
        <span class="memory-card-inner">
          <span class="memory-face memory-front">💗</span>
          <span class="memory-face memory-back">${symbol}</span>
        </span>`;
      card.addEventListener("click", () => flip(card));
      grid.appendChild(card);
    });
  }

  function flip(card) {
    if (lock || card.classList.contains("is-flipped") || card.classList.contains("is-matched")) return;
    card.classList.add("is-flipped");

    if (!firstCard) { firstCard = card; return; }

    moves++; movesEl.textContent = moves;
    lock = true;

    if (firstCard.dataset.symbol === card.dataset.symbol) {
      firstCard.classList.add("is-matched");
      card.classList.add("is-matched");
      matched++;
      firstCard = null; lock = false;
      if (matched === symbols.length) {
        winEl.hidden = false;
        launchConfetti();
      }
    } else {
      setTimeout(() => {
        firstCard.classList.remove("is-flipped");
        card.classList.remove("is-flipped");
        firstCard = null; lock = false;
      }, 800);
    }
  }

  restartBtn.addEventListener("click", build);
  build();
}

/* ---- Game 3: Will You Be My Forever? ---- */
function setupForeverGame() {
  const stage = $("#foreverStage");
  const ending = $("#foreverEnding");
  const yesBtn = $("#foreverYes");
  const noBtn = $("#foreverNo");
  const taunt = $("#foreverTaunt");
  if (!yesBtn || !noBtn) return;

  const taunts = [
    "Nice try.", "Nope!", "Not happening.", "Try again!", "Almost… not really.", "Catch me if you can 😏",
  ];
  let scale = 1;

  function evade() {
    const stageRect = stage.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = stageRect.width - btnRect.width - 10;
    const maxY = stageRect.height - btnRect.height - 10;
    const x = rand(0, Math.max(maxX, 40));
    const y = rand(0, Math.max(maxY, 40));
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    taunt.textContent = taunts[Math.floor(rand(0, taunts.length))];

    scale = Math.min(scale + 0.06, 1.8);
    yesBtn.style.transform = `scale(${scale})`;
  }

  stage.style.position = "relative";
  noBtn.addEventListener("mouseenter", evade);
  noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); evade(); }, { passive: false });
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taunt.textContent = "You really thought that would work? 😄";
    evade();
  });

  yesBtn.addEventListener("click", () => {
    stage.hidden = true;
    ending.hidden = false;
    launchConfetti();
  });
}

/* ============================================================
   CURSOR FX — heart trail + sparkles (desktop pointer only)
============================================================ */
function setupCursorFx() {
  const canvas = $("#cursorFx");
  if (!canvas || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    canvas?.remove();
    return;
  }
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  window.addEventListener("resize", () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

  let particles = [];
  let lastSpawn = 0;

  window.addEventListener("mousemove", (e) => {
    const now = performance.now();
    if (now - lastSpawn < 60) return;
    lastSpawn = now;
    particles.push({
      x: e.clientX, y: e.clientY,
      vx: rand(-0.3, 0.3), vy: rand(-0.6, -0.2),
      life: 1, isHeart: Math.random() > 0.6,
      size: rand(6, 12),
    });
    if (particles.length > 60) particles.shift();
  });

  function loop() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.life -= 0.02;
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.isHeart ? "#C9708C" : "#F3CE8E";
      if (p.isHeart) {
        drawHeart(ctx, p.x, p.y, p.size);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    particles = particles.filter((p) => p.life > 0);
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
}

function drawHeart(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.beginPath();
  ctx.moveTo(0, 4);
  ctx.bezierCurveTo(-6, -6, -16, 2, 0, 12);
  ctx.bezierCurveTo(16, 2, 6, -6, 0, 4);
  ctx.fill();
  ctx.restore();
}

/* ============================================================
   FLOATING LOVE QUOTES
============================================================ */
function setupQuoteToast() {
  const toast = $("#quoteToast");
  if (!toast || !CONFIG.quotes.length) return;
  let i = 0;

  function show() {
    toast.textContent = `"${CONFIG.quotes[i % CONFIG.quotes.length]}"`;
    toast.hidden = false;
    toast.style.animation = "none";
    void toast.offsetWidth;
    toast.style.animation = "";
    i++;
    setTimeout(() => { toast.hidden = true; }, 5000);
  }

  setTimeout(show, 6000);
  setInterval(show, 22000);
}

/* ============================================================
   FOOTER QUOTE
============================================================ */
function setupFooter() {
  const el = $("#footerQuote");
  if (!el || !CONFIG.quotes.length) return;
  el.textContent = `"${CONFIG.quotes[Math.floor(rand(0, CONFIG.quotes.length))]}"`;
}
