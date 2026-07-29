/* SAVEN Core — apply stored theme before paint (D-0244). */
(function () {
  try {
    var t = localStorage.getItem("savencore-theme");
    if (t === "dark" || t === "light") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
})();
