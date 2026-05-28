(function () {
  function initialLanguage() {
    var saved = localStorage.getItem("site_lang");
    if (saved === "en" || saved === "zh") return saved;
    var pageLang = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    return pageLang.indexOf("zh") === 0 ? "zh" : "en";
  }

  function setLanguage(lang) {
    var useLang = lang === "zh" ? "zh" : "en";
    localStorage.setItem("site_lang", useLang);
    document.documentElement.setAttribute("lang", useLang);

    document.querySelectorAll("[data-i18n-en]").forEach(function (elem) {
      var enText = elem.getAttribute("data-i18n-en");
      var zhText = elem.getAttribute("data-i18n-zh") || enText;
      elem.textContent = useLang === "zh" ? zhText : enText;
    });

    document.querySelectorAll("[data-lang]").forEach(function (elem) {
      elem.style.display = elem.getAttribute("data-lang") === useLang ? "" : "none";
    });

    var enBtn = document.getElementById("lang-en");
    var zhBtn = document.getElementById("lang-zh");
    if (enBtn && zhBtn) {
      enBtn.style.fontWeight = useLang === "en" ? "700" : "500";
      enBtn.style.opacity = useLang === "en" ? "1" : "0.65";
      zhBtn.style.fontWeight = useLang === "zh" ? "700" : "500";
      zhBtn.style.opacity = useLang === "zh" ? "1" : "0.65";
    }

    window.dispatchEvent(new CustomEvent("site-language-change", {
      detail: { language: useLang }
    }));
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(initialLanguage());

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        setLanguage(localStorage.getItem("site_lang") === "zh" ? "en" : "zh");
      });
    }
  });
})();
