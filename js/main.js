/* Behaviour: language, theme, links from config, case windows, samples, dock,
   data-flow line, event counting. No libraries. */
(function () {
  "use strict";
  var SITE = window.SITE, CASES = window.CASES, ROLES = window.ROLES, VI = window.I18N_VI, UI = window.UI_TEXT;
  var root = document.documentElement;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var params = new URLSearchParams(location.search);
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = "en";
  var t = function (k) { return UI[lang][k]; };

  /* ---------- Draft mode ---------- */
  root.setAttribute("data-draft-mode", SITE.draft ? "on" : "off");

  /* ---------- Event counting (GoatCounter, optional) ---------- */
  function track(name) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: name, title: name, event: true });
    }
  }
  if (SITE.goatcounter) {
    var gc = document.createElement("script");
    gc.async = true;
    gc.src = "https://gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://" + SITE.goatcounter + ".goatcounter.com/count");
    gc.onload = function () {
      var ref = params.get("ref");
      if (ref) track("ref-" + ref.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40));
    };
    document.head.appendChild(gc);
  }

  /* ---------- Toast ---------- */
  var toastEl = $("#toast"), toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  /* ---------- Links from config ---------- */
  function wire(el, href, missingMsgKey, eventName, opts) {
    if (href) {
      el.setAttribute("href", href);
      if (opts && opts.download) el.setAttribute("download", "");
      el.addEventListener("click", function () { track(eventName); });
    } else if (SITE.draft) {
      el.setAttribute("data-draft", "");
      el.addEventListener("click", function (e) { e.preventDefault(); toast(t(missingMsgKey)); });
    } else {
      el.hidden = true;
    }
  }
  function mailto() {
    return SITE.email ? "mailto:" + SITE.email + "?subject=" + encodeURIComponent(UI.en.mailSubject) : "";
  }
  $$("[data-link]").forEach(function (el) {
    var kind = el.getAttribute("data-link");
    if (kind === "email") wire(el, mailto(), "noEmail", "email");
    else if (kind === "linkedin") wire(el, SITE.linkedin, "noLinkedin", "linkedin");
    else if (kind === "github") { if (SITE.github) el.href = SITE.github; else el.hidden = true; }
    else if (kind === "cv-ba") wire(el, SITE.cv.ready ? SITE.cv.ba : "", "noCv", "cv-ba", { download: true });
    else if (kind === "cv-int") wire(el, SITE.cv.ready ? SITE.cv.integration : "", "noCv", "cv-integration", { download: true });
  });
  if (!SITE.cv.ready && !SITE.draft) $$("[data-cv-menu]").forEach(function (m) { m.hidden = true; });
  if (SITE.phone) {
    $("#phone-line").hidden = false;
    var ph = $("#phone-link");
    ph.textContent = SITE.phone;
    ph.href = "tel:" + SITE.phone.replace(/[^+\d]/g, "");
  }
  if (SITE.portrait) {
    $$("[data-portrait]").forEach(function (ph) {
      var img = document.createElement("img");
      img.className = "portrait";
      img.src = SITE.portrait;
      img.alt = "Ta Quoc Thien Trung";
      ph.replaceWith(img);
    });
  } else if (SITE.draft) {
    $$("[data-portrait]").forEach(function (ph) { ph.setAttribute("data-draft", ""); });
  }

  /* ---------- Language ---------- */
  var i18nEls = $$("[data-i18n]");
  var enText = new Map();
  i18nEls.forEach(function (el) { enText.set(el, el.innerHTML); });

  function setLang(next, user) {
    lang = next === "vi" ? "vi" : "en";
    root.lang = lang;
    i18nEls.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.innerHTML = lang === "vi" && VI[k] ? VI[k] : enText.get(el);
    });
    $("#lang-btn span").innerHTML = lang === "vi" ? "EN / <b>VI</b>" : "<b>EN</b> / VI";
    $("#footer-lang").textContent = t("footerLang");
    $("#updated-date").textContent = SITE.updated[lang];
    renderRole(currentRole);
    renderSamples();
    renderCerts();
    if (openCaseId) fillCase(openCaseId);
    if (user) { store.set("lang", lang); if (lang === "vi") track("lang-vi"); }
  }
  function toggleLang(e) { if (e) e.preventDefault(); setLang(lang === "vi" ? "en" : "vi", true); }
  $("#lang-btn").addEventListener("click", toggleLang);
  $("#footer-lang").addEventListener("click", toggleLang);
  $$("[data-lang-toggle]").forEach(function (b) { b.addEventListener("click", toggleLang); });

  /* ---------- Theme ---------- */
  $("#theme-btn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  /* ---------- Mobile nav ---------- */
  var burger = $("#burger"), navLinks = $("#nav-links");
  burger.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", function () { navLinks.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); });

  /* ---------- Dropdown menus ---------- */
  function closeMenus(except) {
    $$("[data-menu]").forEach(function (b) {
      if (b === except) return;
      b.setAttribute("aria-expanded", "false");
      b.nextElementSibling.hidden = true;
    });
  }
  $$("[data-menu]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var panel = btn.nextElementSibling, open = panel.hidden;
      closeMenus(btn);
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", function () { closeMenus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenus(); });

  /* ---------- Copy summary ---------- */
  $$("[data-copy-summary]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = window.SUMMARY[lang];
      var done = function () { toast(t("copied")); track("summary-copy"); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { toast(t("copyFail")); });
      } else { toast(t("copyFail")); }
    });
  });

  /* ---------- Role tabs ---------- */
  var currentRole = "ba";
  function renderRole(key) {
    currentRole = key;
    var r = ROLES[key], c = r[lang];
    $$("[data-role]").forEach(function (tab) { tab.setAttribute("aria-selected", String(tab.getAttribute("data-role") === key)); });
    $("#role-kicker").textContent = c.kicker;
    $("#role-title").textContent = c.title;
    $("#role-points").innerHTML = c.points.map(function (p) { return "<li>" + p + "</li>"; }).join("");
    $("#role-tools").textContent = r.tools;
    var cv = $("#role-cv"), ready = SITE.cv.ready;
    cv.textContent = c.cta;
    cv.setAttribute("data-role-cv", r.cv);
    if (ready) cv.href = r.cv === "integration" ? SITE.cv.integration : SITE.cv.ba;
  }
  $$("[data-role]").forEach(function (tab) {
    tab.addEventListener("click", function () { renderRole(tab.getAttribute("data-role")); });
  });

  /* ---------- Work samples ---------- */
  var lightbox = $("#lightbox");
  function sampleTile(s) {
    var c = s[lang], tag = s.tag ? s.tag[lang] : t("sanitized");
    var el = document.createElement(s.src ? "button" : "div");
    el.className = "sample";
    if (s.src) {
      el.type = "button";
      el.innerHTML = '<span class="sample-thumb' + (s.fit === "contain" ? " contain" : "") + '"><img loading="lazy" src="' + s.src + '" alt="' + c[0] + '"></span>';
      el.addEventListener("click", function () {
        $("#lb-img").src = s.src; $("#lb-img").alt = c[0];
        $("#lb-title").textContent = c[0] + " · " + tag;
        lightbox.showModal(); $(".win-body", lightbox).scrollTop = 0; track("sample-open");
      });
    } else {
      el.setAttribute("data-draft", "");
      el.innerHTML = '<span class="sample-thumb ph">' + t("samplePending") + "</span>";
    }
    el.insertAdjacentHTML("beforeend", "<span><b>" + c[0] + "</b><span>" + c[1] + "</span></span><em>" + tag + (s.case ? " · case " + s.case : "") + "</em>");
    return el;
  }
  function renderSamples() {
    var grid = $("#samples-grid");
    var list = SITE.samples.filter(function (s) { return s.src || SITE.draft; });
    grid.innerHTML = "";
    var groups = SITE.sampleGroups || {}, keys = [];
    list.forEach(function (s) { var g = s.group || ""; if (keys.indexOf(g) < 0) keys.push(g); });
    keys.forEach(function (g) {
      var wrap = document.createElement("div");
      wrap.className = "sample-group";
      if (groups[g]) wrap.innerHTML = '<p class="group-title"><b>' + groups[g][lang][0] + "</b> <span>— " + groups[g][lang][1] + "</span></p>";
      var row = document.createElement("div");
      row.className = "samples";
      list.filter(function (s) { return (s.group || "") === g; }).forEach(function (s) { row.appendChild(sampleTile(s)); });
      wrap.appendChild(row);
      grid.appendChild(wrap);
    });
    $("#samples").hidden = list.length === 0;
    $$('a[href="#samples"]').forEach(function (a) { a.hidden = list.length === 0; });
  }

  /* ---------- Credentials ---------- */
  function renderCerts() {
    var grid = $("#certs-grid"), list = SITE.certs || [];
    grid.innerHTML = list.map(function (c) {
      var x = c[lang];
      return '<article class="card cert"><p class="cert-when">' + c.when[lang] + "</p><h3>" + x[0] + "</h3><p>" + x[1] + "</p>" +
        (c.url ? '<a class="cert-link" href="' + c.url + '" target="_blank" rel="noopener" data-cert>' + t("verify") + " ↗</a>" : "") + "</article>";
    }).join("");
    $$("[data-cert]", grid).forEach(function (a) { a.addEventListener("click", function () { track("cert-verify"); }); });
    $("#credentials").hidden = list.length === 0;
  }

  /* ---------- Case window ---------- */
  var dialog = $("#case-dialog"), openCaseId = null, order = Object.keys(CASES);
  function chips(arr) { return arr.map(function (x) { return '<span class="chip">' + x + "</span>"; }).join(""); }
  function fillCase(id) {
    var c = CASES[id], x = c[lang];
    $("#cd-path").textContent = "case-" + id + " · " + c.slug;
    $("#cd-context").innerHTML = chips(x.context);
    $("#cd-kicker").textContent = x.kicker;
    $("#cd-title").textContent = x.title;
    $("#cd-summary").textContent = x.summary;
    $("#cd-metrics").innerHTML = c.metrics.map(function (m) {
      return '<span class="case-num"' + (m.unverified ? " data-draft data-unverified" : "") + "><strong>" + m.value + "</strong><span>" + m[lang] + "</span></span>";
    }).join("");
    ["challenge", "ownership", "delivery", "outcome"].forEach(function (k) { $("#cd-" + k).textContent = x[k]; });
    $("#cd-tools").innerHTML = chips(c.tools);
    $("#cd-company").textContent = c.company + " · " + c.period;
    var box = $("#cd-samples");
    box.innerHTML = "";
    SITE.samples.filter(function (s) { return s.src && s.case === id; }).forEach(function (s) { box.appendChild(sampleTile(s)); });
    box.hidden = !box.children.length;
  }
  function openCase(id, silent) {
    if (!CASES[id]) return;
    openCaseId = id;
    fillCase(id);
    if (!dialog.open) dialog.showModal();
    $(".win-body", dialog).scrollTop = 0;
    history.replaceState(null, "", "#case-" + id);
    if (!silent) track("case-" + id);
  }
  dialog.addEventListener("close", function () {
    openCaseId = null;
    history.replaceState(null, "", location.pathname + location.search);
  });
  $$("[data-case]").forEach(function (card) {
    card.addEventListener("click", function () { openCase(card.getAttribute("data-case")); });
  });
  $$("[data-open-case]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); openCase(a.getAttribute("data-open-case")); });
  });
  $("#cd-next").addEventListener("click", function () {
    openCase(order[(order.indexOf(openCaseId) + 1) % order.length]);
  });
  $$("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
    $$("[data-close]", d).forEach(function (b) { b.addEventListener("click", function () { d.close(); }); });
  });

  /* ---------- Reveal on scroll, count-up ---------- */
  function countUp(el) {
    var to = +el.getAttribute("data-count"), pre = el.getAttribute("data-prefix") || "", suf = el.getAttribute("data-suffix") || "";
    var start = null, dur = 900;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(to * eased).toLocaleString("en-US") + suf;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        if (en.target.hasAttribute("data-count") && !reduceMotion) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal, [data-count]").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Dock + data-flow line ---------- */
  var dock = $("#dock"), hero = $("#home"), fill = $("#flow-fill"), token = $("#flow-token");
  var flowSections = $$("[data-flow]"), ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight;
    dock.classList.toggle("show", y > hero.offsetHeight * 0.6);
    var max = document.documentElement.scrollHeight - vh;
    var p = max > 0 ? Math.min(1, y / max) : 0;
    var travel = vh - 68 - 120;
    var pos = 60 + p * travel;
    fill.style.height = pos + "px";
    token.style.top = pos + "px";
    var label = "PO";
    flowSections.forEach(function (s) { if (s.getBoundingClientRect().top < vh * 0.5) label = s.getAttribute("data-flow"); });
    if (token.textContent !== label) token.textContent = label;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener("resize", onScroll);

  $$("[data-track]").forEach(function (el) { el.addEventListener("click", function () { track(el.getAttribute("data-track")); }); });

  /* ---------- Start ---------- */
  var startLang = params.get("lang") || store.get("lang") || "en";
  setLang(startLang, false);
  onScroll();
  var m = location.hash.match(/^#case-(\d\d)$/);
  if (m) openCase(m[1], true);
})();
