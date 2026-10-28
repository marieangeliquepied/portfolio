/* ============================================================
   LANGUAGE — bilingue FR / EN
   ============================================================
   - Langue initiale : choix mémorisé, sinon langue du navigateur,
     sinon français.
   - Les textes par défaut dans le HTML sont en français : si le
     chargement du JSON échoue (ex. ouverture en file://), la page
     reste lisible en FR.
   ============================================================ */

(function () {
    const STORAGE_KEY = "lang";
    const SUPPORTED = ["fr", "en"];
    const DEFAULT = "fr";

    const btn = document.getElementById("lang-toggle");
    const label = btn ? btn.querySelector("[data-lang-label]") : null;

    const cache = {};
    let current = null;

    // Langue à utiliser au premier chargement
    function pickInitial() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;
        const nav = (navigator.language || DEFAULT).slice(0, 2).toLowerCase();
        return SUPPORTED.includes(nav) ? nav : DEFAULT;
    }

    // Résout une clé "a.b.c" dans l'objet de traductions
    function resolve(dict, key) {
        return key.split(".").reduce(
            (o, k) => (o && o[k] !== undefined ? o[k] : undefined),
            dict
        );
    }

    // Applique un dictionnaire au DOM
    function apply(dict) {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const v = resolve(dict, el.getAttribute("data-i18n"));
            if (typeof v === "string") el.textContent = v;
        });

        const title = resolve(dict, "meta.title");
        if (typeof title === "string") document.title = title;

        const desc = resolve(dict, "meta.description");
        const metaDesc = document.querySelector('meta[name="description"]');
        if (typeof desc === "string" && metaDesc) {
            metaDesc.setAttribute("content", desc);
        }
    }

    // Charge (avec cache) puis applique la langue
    function load(lang) {
        if (cache[lang]) {
            apply(cache[lang]);
            return;
        }
        fetch("lang/" + lang + ".json")
            .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
            .then((dict) => {
                cache[lang] = dict;
                apply(dict);
            })
            .catch(() => {
                /* On garde le texte HTML par défaut (FR) */
            });
    }

    function setLang(lang, persist) {
        current = lang;
        document.documentElement.setAttribute("lang", lang);
        if (persist) {
            try {
                localStorage.setItem(STORAGE_KEY, lang);
            } catch (e) {}
        }
        if (label) label.textContent = lang === "fr" ? "EN" : "FR";
        if (btn) {
            btn.setAttribute(
                "aria-label",
                lang === "fr" ? "Switch to English" : "Passer en français"
            );
        }
        load(lang);
    }

    // Initialisation
    setLang(pickInitial(), false);

    if (btn) {
        btn.addEventListener("click", function () {
            setLang(current === "fr" ? "en" : "fr", true);
        });
    }
})();
