/* ============================================================
   APP — point d'entrée, petites tâches transverses
   ============================================================ */

(function () {
    // Année courante dans le pied de page
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
