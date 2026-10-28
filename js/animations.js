/* ============================================================
   ANIMATIONS — apparitions douces au défilement
   ============================================================
   - Les éléments à révéler sont masqués via CSS sous la classe
     racine « anim » (posée par un script en ligne dans le <head>).
   - Ce script ajoute « is-visible » quand l'élément entre dans le
     viewport (IntersectionObserver).
   - Si prefers-reduced-motion est actif ou l'API absente, on retire
     « anim » pour tout afficher immédiatement (aucune animation).
   ============================================================ */

(function () {
    const root = document.documentElement;

    const reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pas d'animation : on s'assure que tout est visible
    if (reduce || !("IntersectionObserver" in window)) {
        root.classList.remove("anim");
        return;
    }

    // Signale que le script est bien actif (désamorce le filet de sécurité)
    root.classList.add("anim-ready");

    const selectors = [
        ".hero__text",
        ".hero__portrait",
        ".about h2",
        ".about__content",
        ".skills h2",
        ".skill-group",
        ".projects h2",
        ".project-card",
        ".experience h2",
        ".experience-item",
        ".education h2",
        ".education-item",
        ".contact h2",
        ".contact > p",
        ".contact__links"
    ];

    const targets = [];
    selectors.forEach((sel) =>
        document.querySelectorAll(sel).forEach((el) => targets.push(el))
    );

    // Léger décalage en cascade pour les éléments d'une même grille/liste
    document
        .querySelectorAll(
            ".skills__groups, .projects__grid, .experience__list, .education__list"
        )
        .forEach((container) => {
            Array.from(container.children).forEach((child, i) => {
                child.style.transitionDelay = i * 80 + "ms";
            });
        });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
})();
