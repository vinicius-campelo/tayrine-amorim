/* Tayrine Amorim Contabilidade - interações do site */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5561998035237";
  var COOKIE_KEY = "ta_cookie_consent";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  // Ano atual no copyright
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Header ao rolar + botão voltar ao topo
  var header = $("#header");
  var toTop = $("#toTop");
  function onScroll() {
    var y = window.scrollY;
    //if (header && !header.classList.contains("header--solid")) header.classList.toggle("is-scrolled", y > 30);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // Menu mobile
  var nav = $("#nav");
  var toggle = $("#navToggle");
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$(".nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setMenu(false); closeModal(); } });

  // Link ativo conforme a seção visível
  var links = $$(".nav__link[href^='#']");
  if ("IntersectionObserver" in window && links.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { var s = $(l.getAttribute("href")); if (s) spy.observe(s); });
  }

  // Animações de entrada
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Contadores animados
  $$("[data-count]").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var render = function (n) { el.textContent = prefix + n + suffix; };
    render(0);
    var run = function () {
      var start = null;
      var step = function (t) {
        if (!start) start = t;
        var p = Math.min((t - start) / 1600, 1);
        render(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window) {
      var co = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { run(); co.disconnect(); }
      });
      co.observe(el);
    } else { render(target); }
  });

  // Slider de depoimentos
  var slider = $("#slider");
  if (slider) {
    var track = $(".slider__track", slider);
    var slides = $$(".testimonial", slider);
    var dots = $(".slider__dots", slider);
    var current = 0;
    var timer;
    var go = function (i) {
      current = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      $$("button", dots).forEach(function (d, k) { d.setAttribute("aria-selected", String(k === current)); });
    };
    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Depoimento " + (i + 1));
      b.addEventListener("click", function () { go(i); restart(); });
      dots.appendChild(b);
    });
    var restart = function () { clearInterval(timer); timer = setInterval(function () { go(current + 1); }, 6500); };
    var startX = 0;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { go(current + (dx < 0 ? 1 : -1)); restart(); }
    });
    go(0);
    restart();
  }

  // Formulário -> WhatsApp
  var form = $("#whatsForm");
  if (form) {
    var phone = $("#telefone", form);
    phone.addEventListener("input", function () {
      var d = phone.value.replace(/\D/g, "").slice(0, 11);
      var out = d;
      if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
      if (d.length > 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2, d.length - 4) + "-" + d.slice(d.length - 4);
      phone.value = out;
    });

    var setError = function (input, msg) {
      var field = input.closest(".field");
      if (!field) return;
      field.classList.toggle("has-error", !!msg);
      $(".field__error", field).textContent = msg || "";
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {
        nome: $("#nome", form).value.trim(),
        telefone: phone.value.trim(),
        email: $("#email", form).value.trim(),
        perfil: $("#perfil", form).value,
        servico: $("#servico", form).value,
        mensagem: $("#mensagem", form).value.trim()
      };
      var ok = true;

      setError($("#nome", form), data.nome.length < 3 ? "Informe seu nome completo." : "");
      if (data.nome.length < 3) ok = false;

      var digits = data.telefone.replace(/\D/g, "");
      setError(phone, digits.length < 10 ? "Informe um WhatsApp válido com DDD." : "");
      if (digits.length < 10) ok = false;

      var emailBad = data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      setError($("#email", form), emailBad ? "E-mail inválido." : "");
      if (emailBad) ok = false;

      setError($("#perfil", form), data.perfil ? "" : "Selecione uma opção.");
      setError($("#servico", form), data.servico ? "" : "Selecione um serviço.");
      if (!data.perfil || !data.servico) ok = false;

      var consent = $("#consentimento", form);
      $("#consentError").textContent = consent.checked ? "" : "É necessário aceitar a Política de Privacidade.";
      if (!consent.checked) ok = false;

      if (!ok) {
        var first = $(".has-error input, .has-error select", form) || consent;
        first.focus();
        return;
      }

      var lines = [
        "Olá, Tayrine! Vim pelo site e gostaria de um orçamento.",
        "",
        "*Nome:* " + data.nome,
        "*WhatsApp:* " + data.telefone
      ];
      if (data.email) lines.push("*E-mail:* " + data.email);
      lines.push("*Perfil:* " + data.perfil);
      lines.push("*Serviço:* " + data.servico);
      if (data.mensagem) lines.push("", "*Mensagem:* " + data.mensagem);

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
      var win = window.open(url, "_blank", "noopener");
      if (!win) window.location.href = url;
      form.reset();
    });
  }

  // Cookies / LGPD
  var banner = $("#cookieBanner");
  var modal = $("#cookieModal");
  var prefA = $("#prefAnalytics");
  var prefM = $("#prefMarketing");

  function readConsent() {
    try { return JSON.parse(localStorage.getItem(COOKIE_KEY)); } catch (err) { return null; }
  }
  function saveConsent(analytics, marketing) {
    var value = { essential: true, analytics: !!analytics, marketing: !!marketing, date: new Date().toISOString() };
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify(value)); } catch (err) { /* armazenamento indisponível */ }
    if (banner) banner.hidden = true;
    closeModal();
    document.dispatchEvent(new CustomEvent("cookieconsent", { detail: value }));
  }
  function openModal() {
    if (!modal) return;
    var c = readConsent() || {};
    if (prefA) prefA.checked = !!c.analytics;
    if (prefM) prefM.checked = !!c.marketing;
    modal.hidden = false;
  }
  function closeModal() { if (modal) modal.hidden = true; }

  if (banner && !readConsent()) setTimeout(function () { banner.hidden = false; }, 900);

  $$("[data-cookie]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var action = btn.getAttribute("data-cookie");
      if (action === "accept") saveConsent(true, true);
      else if (action === "reject") saveConsent(false, false);
      else if (action === "settings") openModal();
      else if (action === "save") saveConsent(prefA && prefA.checked, prefM && prefM.checked);
      else if (action === "close") closeModal();
    });
  });
  $$("[data-open-cookies]").forEach(function (b) { b.addEventListener("click", openModal); });
  if (modal) modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
})();
