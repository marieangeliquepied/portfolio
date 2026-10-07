# Portfolio — Marie-Angélique Pied

Portfolio personnel de **Marie-Angélique Pied**, développeuse full stack.
Site statique, léger et responsive, présentant mon parcours, mes compétences et mes projets.

🔗 **En ligne : [marieangeliquepied.dev](https://marieangeliquepied.dev)**

## Aperçu

- 🎨 **Thème clair / sombre** avec préférence système et mémorisation du choix
- 📱 **Responsive** (mobile, tablette, desktop)
- 🌸 Palette rose, typographies *Manrope* et *Inter*
- 🗺️ Localisation illustrée par la carte de la Martinique
- 📄 CV téléchargeable
- ♿ Attention portée à l'accessibilité (contrastes, focus, `prefers-reduced-motion`)

## Stack

Site **100 % statique**, sans dépendance ni build :

- HTML5
- CSS3 (variables CSS, Flexbox, Grid)
- JavaScript (vanilla)
- Déployé via **GitHub Pages** sur domaine personnalisé

## Structure

```
portfolio/
├── index.html            # Page unique
├── css/
│   ├── reset.css         # Reset de base
│   ├── variables.css     # Jetons de design + thème sombre
│   ├── style.css         # Mise en forme des sections
│   └── responsive.css    # Adaptations mobile / tablette
├── js/
│   ├── theme.js          # Bascule clair / sombre
│   ├── language.js       # (à venir) système bilingue FR/EN
│   ├── animations.js     # (à venir) animations légères
│   └── app.js            # Tâches transverses
├── lang/                 # (à venir) traductions FR / EN
└── assets/               # CV, images, favicon
```

## Lancer en local

Aucune installation nécessaire. Ouvrir `index.html` dans un navigateur,
ou utiliser un petit serveur local (recommandé pour les futures fonctionnalités) :

```bash
# avec l'extension VS Code « Live Server », ou :
python3 -m http.server 5500
# puis ouvrir http://localhost:5500
```

## Projets présentés

- **Ti Moun** — plateforme de mise en relation pour la garde d'enfants *(Next.js, Supabase)*
- **Noread** — application de suivi de lecture, PWA *(React, Supabase)*
- **Trivy** — assistant de préparation de valise *(Laravel)*

## Pistes d'évolution

- [ ] Système bilingue FR / EN
- [ ] Animations légères à l'apparition des sections
- [ ] Favicon personnalisé
