(function () {
  "use strict";
  document.documentElement.classList.add("js");

  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const projects = S.projects;
  const byId = (id) => projects.findIndex((p) => p.id === id);

  $("#year").textContent = new Date().getFullYear();

  /* ---------------- Toast ---------------- */
  const toast = $("#toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-show"), 2400);
  }

  /* ---------------- Theme ---------------- */
  const themeBtn = $("#theme-toggle");
  const sysDark = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => {
    const t = document.documentElement.dataset.theme;
    return t ? t === "dark" : sysDark.matches;
  };
  const syncThemeLabel = () =>
    themeBtn.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
  syncThemeLabel();
  themeBtn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncThemeLabel();
  });

  /* ---------------- Nav ---------------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuBtn = $("#menu-btn");
  const menu = $("#mobile-menu");
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    nav.classList.toggle("is-scrolled", open || window.scrollY > 24);
  }
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));

  const navLinks = $$(".nav-links a");
  const sections = ["work", "experience", "stack", "about", "contact"].map((id) => document.getElementById(id));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => s && spy.observe(s));
  new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) navLinks.forEach((a) => a.classList.remove("is-active")); },
    { rootMargin: "-45% 0px -50% 0px" }
  ).observe($("#home"));

  /* ---------------- Typer ---------------- */
  const typerEl = $(".typer-text");
  if (!reduceMotion && typerEl) {
    let r = 0, i = S.roles[0].length, deleting = true;
    const tick = () => {
      const word = S.roles[r];
      if (deleting) {
        i--;
        typerEl.textContent = word.slice(0, i);
        if (i === 0) { deleting = false; r = (r + 1) % S.roles.length; }
        setTimeout(tick, 38);
      } else {
        const next = S.roles[r];
        i++;
        typerEl.textContent = next.slice(0, i);
        if (i === next.length) { deleting = true; setTimeout(tick, 2200); }
        else setTimeout(tick, 70);
      }
    };
    setTimeout(tick, 2600);
  }

  /* ---------------- Hero app switcher ---------------- */
  const switcher = $(".switcher");
  const tabsEl = $("#switcher-tabs");
  const screen = $("#hero-screen");
  const phone = $("#hero-phone");
  const caption = $("#hero-caption");
  let current = -1;

  tabsEl.innerHTML = projects
    .map(
      (p, n) =>
        `<button class="tab" type="button" role="tab" id="tab-${p.id}" aria-selected="false" aria-controls="hero-phone" tabindex="${n === 0 ? 0 : -1}" data-i="${n}">${esc(p.name)}<span class="tab-progress"></span></button>`
    )
    .join("");
  const tabs = $$(".tab", tabsEl);

  function showProject(n) {
    if (n === current) return;
    const p = projects[n];
    current = n;
    tabs.forEach((t, k) => {
      const on = k === n;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    // restart progress animation
    const prog = tabs[n].querySelector(".tab-progress");
    prog.style.animation = "none";
    void prog.offsetWidth;
    prog.style.animation = "";

    const old = $$(".ui", screen);
    screen.insertAdjacentHTML("beforeend", window.renderScreen(p.id));
    const fresh = screen.lastElementChild;
    if (old.length && !reduceMotion) {
      fresh.classList.add("is-entering");
      fresh.addEventListener("animationend", () => { old.forEach((o) => o.remove()); fresh.classList.remove("is-entering"); }, { once: true });
    } else {
      old.forEach((o) => o.remove());
    }
    phone.setAttribute("aria-label", `${p.name} app preview, ${p.category}`);
    caption.innerHTML = `${esc(p.name)}, ${esc(p.category.toLowerCase())}.<button type="button" data-open="${p.id}">Open case study</button>`;
  }

  const auto = !reduceMotion;
  if (auto) switcher.classList.add("is-auto");
  tabsEl.addEventListener("animationend", (e) => {
    if (e.animationName !== "fill" || !switcher.classList.contains("is-auto")) return;
    showProject((current + 1) % projects.length);
  });
  function stopAuto() { switcher.classList.remove("is-auto"); }
  tabsEl.addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (!t) return;
    stopAuto();
    showProject(+t.dataset.i);
  });
  tabsEl.addEventListener("keydown", (e) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(e.key in keys) && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    stopAuto();
    let n = current;
    if (e.key === "Home") n = 0;
    else if (e.key === "End") n = projects.length - 1;
    else n = (current + keys[e.key] + projects.length) % projects.length;
    showProject(n);
    tabs[n].focus();
  });
  const heroDevice = $(".hero-device");
  [heroDevice, switcher].forEach((el) => {
    el.addEventListener("mouseenter", () => switcher.classList.add("is-paused"));
    el.addEventListener("mouseleave", () => switcher.classList.remove("is-paused"));
    el.addEventListener("focusin", () => switcher.classList.add("is-paused"));
    el.addEventListener("focusout", () => switcher.classList.remove("is-paused"));
  });
  phone.addEventListener("click", () => openSheet(projects[current].id));
  phone.style.cursor = "pointer";
  showProject(0);

  /* ---------------- Work list ---------------- */
  const platformsText = (p) => {
    const set = new Set();
    p.apps.forEach((a) => (a.platforms || []).forEach((x) => set.add(x)));
    return set.size ? Array.from(set).join(" and ") : "";
  };
  $("#work-list").innerHTML = projects
    .map(
      (p, n) => `
      <li class="reveal" style="--d:${(n % 3) * 0.06}s">
        <button class="work-row" type="button" data-open="${p.id}" style="--app:${p.accent}" aria-label="${esc(p.name)}, ${esc(p.category)}. Open case study">
          <span class="mini work-mini">${window.renderScreen(p.id)}</span>
          <span>
            <span class="work-name">${esc(p.name)}</span>
            <span class="work-cat">${esc(p.category)}</span>
          </span>
          <span class="work-summary">${esc(p.summary)}</span>
          <span class="work-side">
            <span class="tag">${esc(p.metric)}</span>
            <span class="work-go">Case study</span>
          </span>
        </button>
      </li>`
    )
    .join("");

  /* ---------------- Case study sheet ---------------- */
  const root = $("#sheet-root");
  const sheet = $(".sheet", root);
  const body = $("#sheet-body");
  let openIdx = -1;
  let lastFocus = null;

  function storeRows(p) {
    if (!p.apps.length) return "";
    return `<div class="cs-stores">${p.apps
      .map((a) => {
        const items = (a.platforms || []).map((pl) => {
          const url = pl === "Android" ? a.android : a.ios;
          const store = pl === "Android" ? "Google Play" : "App Store";
          return url
            ? `<a class="btn btn--ink store-btn" href="${esc(url)}" target="_blank" rel="noopener">Get it on ${store}</a>`
            : `<span class="platform">${pl}</span>`;
        });
        return `<div class="store-row"><span class="store-label">${esc(a.label)}</span>${items.join("")}</div>`;
      })
      .join("")}</div>`;
  }

  function renderCase(n) {
    const p = projects[n];
    const prev = projects[(n - 1 + projects.length) % projects.length];
    const next = projects[(n + 1) % projects.length];
    return `
      <article class="cs" style="--app:${p.accent}">
        <div class="cs-hero">
          <div class="cs-device"><div class="phone-scale"><div class="phone"><span class="phone-island"></span><div class="phone-screen">${window.renderScreen(p.id)}</div></div></div></div>
          <div class="cs-intro">
            <p class="cs-cat">${esc(p.category)}</p>
            <h2 id="sheet-title">${esc(p.name)}</h2>
            <span class="tag">${esc(p.metric)}</span>
          </div>
        </div>
        <p class="cs-summary">${esc(p.summary)}</p>
        ${storeRows(p)}
        <h3 class="cs-h">Key features</h3>
        <ul class="cs-features">${p.features.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("")}</ul>
        <h3 class="cs-h">The hard part</h3>
        <div class="cs-challenge">
          <div><small>Challenge</small><p>${esc(p.challenge)}</p></div>
          <div><small>Approach</small><p>${esc(p.approach)}</p></div>
        </div>
        <h3 class="cs-h">Built with</h3>
        <ul class="chips">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        <nav class="cs-foot" aria-label="More projects">
          <button class="cs-step" type="button" data-step="-1"><small>Previous project</small><strong>${esc(prev.name)}</strong></button>
          <button class="cs-step cs-step--next" type="button" data-step="1"><small>Next project</small><strong>${esc(next.name)}</strong></button>
        </nav>
      </article>`;
  }

  function lockScroll(on) {
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = on ? "hidden" : "";
    document.body.style.paddingRight = on && sbw ? sbw + "px" : "";
  }

  function openSheet(id) {
    const n = byId(id);
    if (n < 0) return;
    const wasOpen = !root.hidden;
    if (!wasOpen) lastFocus = document.activeElement;
    openIdx = n;
    body.innerHTML = renderCase(n);
    if (wasOpen) {
      $(".cs", body).classList.add("is-swapping");
      sheet.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
    history.replaceState(null, "", "#work/" + id);
    if (!wasOpen) {
      root.hidden = false;
      lockScroll(true);
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-open")));
      sheet.scrollTop = 0;
      setTimeout(() => $("[data-close].icon-btn", root).focus(), 60);
    }
  }

  function closeSheet() {
    if (root.hidden) return;
    root.classList.remove("is-open");
    history.replaceState(null, "", "#work");
    const done = () => {
      root.hidden = true;
      body.innerHTML = "";
      lockScroll(false);
      if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    };
    if (reduceMotion) done();
    else setTimeout(done, 450);
  }

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-open]");
    if (opener) { e.preventDefault(); openSheet(opener.dataset.open); return; }
    if (e.target.closest("[data-close]")) { closeSheet(); return; }
    const step = e.target.closest("[data-step]");
    if (step && !root.hidden) {
      const n = (openIdx + +step.dataset.step + projects.length) % projects.length;
      openSheet(projects[n].id);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (root.hidden) return;
    if (e.key === "Escape") { closeSheet(); return; }
    if (e.key === "Tab") {
      const f = $$('button, a[href], [tabindex]:not([tabindex="-1"])', sheet).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  function routeFromHash() {
    const m = location.hash.match(/^#work\/([\w-]+)/);
    if (m) openSheet(m[1]);
    else if (!root.hidden) closeSheet();
  }
  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();

  /* ---------------- Experience ---------------- */
  const tl = $("#timeline");
  tl.innerHTML = S.experience
    .map(
      (x, n) => `
      <div class="tl-item${n === 0 ? " is-open is-current" : ""}">
        <span class="tl-dot" aria-hidden="true"></span>
        <button class="tl-head" type="button" aria-expanded="${n === 0}" aria-controls="tl-panel-${n}" id="tl-head-${n}">
          <span class="tl-period">${esc(x.period)}</span>
          <span class="tl-company">${esc(x.company)}</span>
          <span class="tl-role">${esc(x.role)}</span>
          <span class="tl-place">${esc(x.place)}</span>
          <span class="tl-toggle" aria-hidden="true"><svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg></span>
        </button>
        <div class="tl-panel" id="tl-panel-${n}" role="region" aria-labelledby="tl-head-${n}">
          <div><ul>${x.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul></div>
        </div>
      </div>`
    )
    .join("");
  tl.addEventListener("click", (e) => {
    const head = e.target.closest(".tl-head");
    if (!head) return;
    const item = head.parentElement;
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    head.setAttribute("aria-expanded", String(open));
  });

  /* ---------------- Stack ---------------- */
  const list = $("#stack-list");
  const panel = $("#stack-panel");
  list.innerHTML = S.skills
    .map(
      (s, n) =>
        `<button class="stack-tab" type="button" role="tab" id="st-${n}" aria-selected="${n === 0}" aria-controls="stack-panel" tabindex="${n === 0 ? 0 : -1}" data-i="${n}">${esc(s.name)}</button>`
    )
    .join("");
  const stTabs = $$(".stack-tab", list);
  function showSkill(n) {
    const s = S.skills[n];
    stTabs.forEach((t, k) => { t.setAttribute("aria-selected", String(k === n)); t.tabIndex = k === n ? 0 : -1; });
    panel.setAttribute("aria-labelledby", "st-" + n);
    panel.innerHTML = `<div class="sp-in">
      <h3>${esc(s.name)}</h3>
      <p>${esc(s.text)}</p>
      <ul class="chips">${s.tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </div>`;
  }
  list.addEventListener("click", (e) => {
    const t = e.target.closest(".stack-tab");
    if (t) showSkill(+t.dataset.i);
  });
  list.addEventListener("keydown", (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const cur = stTabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    const n = (cur + keys[e.key] + stTabs.length) % stTabs.length;
    showSkill(n);
    stTabs[n].focus();
  });
  showSkill(0);

  /* ---------------- Marquees ---------------- */
  const loop = (items) => {
    const row = items.map((t) => `<span>${esc(t)}</span>`).join("");
    return row + row;
  };
  $("#stack-marquee").innerHTML = loop(S.stackMarquee);
  $("#band-track").innerHTML = loop(Array(6).fill("Open to team-lead roles and client projects"));

  /* ---------------- Copy email ---------------- */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (err) {}
      ta.remove();
      return ok;
    }
  }
  $$("[data-copy-email]").forEach((btn) => {
    const label = $("[data-copy-label]", btn);
    const original = label.textContent;
    btn.addEventListener("click", async () => {
      const ok = await copyText(S.person.email);
      if (ok) {
        label.textContent = "Copied";
        showToast("Email copied: " + S.person.email);
        setTimeout(() => (label.textContent = original), 2000);
      } else {
        showToast("Couldn't copy. The address is " + S.person.email);
      }
    });
  });

  /* ---------------- Contact form → mailto ---------------- */
  const form = $("#contact-form");
  const err = $("#form-error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const msg = form.message.value.trim();
    if (!msg) {
      err.textContent = "Add a short message so I know what you need.";
      form.message.focus();
      return;
    }
    err.textContent = "";
    const subject = name ? `Project enquiry from ${name}` : "Project enquiry";
    const bodyText = msg + (name ? `\n\n${name}` : "");
    window.location.href = `mailto:${S.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  });
  form.message.addEventListener("input", () => { if (form.message.value.trim()) err.textContent = ""; });

  /* ---------------- Portrait (set SITE.person.photo in data.js) ---------------- */
  if (S.person.photo) {
    const portrait = $("#portrait");
    const img = new Image();
    img.alt = S.person.name;
    img.onload = () => { portrait.prepend(img); portrait.classList.add("has-photo"); };
    img.src = S.person.photo;
  }

  /* ---------------- Reveal on scroll ---------------- */
  const revealer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); revealer.unobserve(e.target); } }),
    { rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal").forEach((el) => revealer.observe(el));

  /* ---------------- Back to top ---------------- */
  $("#to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
})();
