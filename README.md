# Aleix: 👑 Quiz Bíblic Súper Genial per a Nens - Versió Responsive

Un quiz bíblic interactiu i colorit dissenyat especialment per a nens, amb un sistema de nivells adaptatiu que fa l'aprenentatge divertit i emocionant! **Ara optimitzat per a mòbil, tablet i PC!**

## ✨ Característiques

- 🎮 **Sistema de Nivells Dinàmic**: 5 nivells que s'adapten automàticament segons les respostes
- 👑 **Tema de Corona Reial**: Colors d'or, joies precioses i majestat celestial
- 🌟 **Disseny Súper Animat**: Colors brillants, emojis i animacions que captiven l'atenció dels nens
- 📚 **30 Preguntes Bíbliques**: Distribuïdes en 5 nivells de dificultat progressiva
- 🎯 **Feedback Instantani**: Explicacions educatives amb cada resposta
- 🏆 **Sistema de Puntuació**: Motivació amb punts màgics i seguiment del progres
- 📱 **Completament Responsive**: S'adapta perfectament a qualsevol dispositiu
- 🗂️ **Codi Organitzat**: HTML, CSS i JavaScript en fitxers separats per fàcil manteniment

## 📱 Millores Responsive Implementades

### 🔹 **Mòbil (< 640px)**

- **Text optimitzat**: Mides ajustades per pantalla petita sense perdre llegibilitat
- **Botons táctils**: Mida adequada per dits (minimum 44px)
- **Layout adaptat**: Columna única per a tots els elements
- **Animacions optimitzades**: Reduïdes per millorar rendiment i bateria
- **Partícules ocultes**: Eliminades per estalviar recursos
- **Textos condensats**: Versions curtes per pantalles petites

### 🔹 **Tablet (640px - 1024px)**

- **Layout híbrid**: Aprofita l'espai available intel·ligentment
- **Text intermedi**: Mides equilibrades entre mòbil i desktop
- **Efectes moderats**: Animacions presents però optimitzades
- **Grid adaptatiu**: 3 columnes quan hi ha espai disponible

### 🔹 **Desktop (> 1024px)**

- **Experiència completa**: Totes les animacions i efectes visuals
- **Partícules de joies**: Elements decoratius amb animacions completes
- **Layout expandit**: Aprofita tot l'espai de pantalla gran
- **Interaccions avançades**: Hover effects i transicions suaus

### 🔹 **Funcionalitats Especials**

- **Accessibilitat**: Respecta `prefers-reduced-motion` per usuaris sensibles
- **Alto DPI**: Optimitzat per pantalles retina i alta densitat
- **Orientació**: Adaptat per landscape en dispositius mòbils
- **Viewport personalitzat**: Control de zoom per millor experiència

## 🎯 Classes Responsive Implementades

### Breakpoints Personalitzats

```css
/* Mòbil petit */
@media (max-width: 475px) {
  /* xs */
}

/* Mòbil */
@media (max-width: 640px) {
  /* sm */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* md-lg */
}

/* Desktop */
@media (min-width: 1025px) {
  /* xl+ */
}
```

### Tailwind Classes Responsive

- `text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`
- `p-1 xs:p-2 sm:p-4 lg:p-6 xl:p-8`
- `w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10`
- `hidden xs:block sm:hidden lg:block`

## 🚀 Com pujar-ho a GitHub Pages

### Pas 1: Crear el repositori

1. Ves a [GitHub](https://github.com) i crea un compte si no en tens
2. Clica "New repository" (botó verd)
3. Dona-li un nom al teu repositori (ex: `quiz-biblic-responsive`)
4. Assegura't que sigui **Public**
5. Marca "Add a README file"
6. Clica "Create repository"

### Pas 2: Pujar els fitxers actualitzats

1. Al teu repositori, clica "Add file" > "Upload files"
2. Arrossega aquests 4 fitxers actualitzats:
   - `index.html` (amb viewport millorat i Tailwind configurat)
   - `styles.css` (amb media queries completes per responsive)
   - `script.js` (amb classes Tailwind responsive)
   - `preguntes.json` (sense canvis, manté l'original)
3. Escriu un missatge de commit com "Versió responsive - optimitzat per tots els dispositius"
4. Clica "Commit changes"

### Pas 3: Activar GitHub Pages

1. Al teu repositori, ves a **Settings** (pestanya superior)
2. Desplaça't cap avall fins trobar **Pages** al menú lateral
3. A "Source", selecciona **Deploy from a branch**
4. A "Branch", selecciona **main** (o master)
5. Deixa la carpeta com **/ (root)**
6. Clica **Save**

### Pas 4: Accedir a la teva web responsive

- En uns minuts, la teva web estarà disponible a:
  `https://[el-teu-usuari].github.io/[nom-del-repositori]`
- **Prova-la en diferents dispositius!** 📱📟💻

## 📁 Estructura del projecte actualitzada

```
quiz-biblic-responsive/
├── index.html          # HTML amb viewport i Tailwind configurat
├── styles.css          # CSS amb media queries responsive completes
├── script.js           # React amb classes Tailwind responsive
├── preguntes.json      # Base de dades de preguntes (sense canvis)
└── README.md          # Documentació actualitzada
```

## 🔧 Millores Tècniques Implementades

### CSS Responsive

- **Media queries per cada dispositiu**: Optimització específica per mòbil, tablet i desktop
- **Animacions adaptatives**: Més ràpides en mòbil, completes en desktop
- **Partícules condicionals**: Només visibles quan no afecten el rendiment
- **Shadows escalables**: Intensitat ajustada segons la mida de pantalla
- **Hover effects progressius**: Més subtils en touch devices

### JavaScript/React Responsive

- **Classes Tailwind dinàmiques**: Adaptació completa per tots els breakpoints
- **Visibilitat condicional**: Elements decoratius només quan milloren l'experiència
- **Text adaptatiu**: Versions llargues i curtes segons l'espai disponible
- **Icones escalables**: Mides proporcionals per cada dispositiu

### HTML Optimitzat

- **Viewport configurat**: Control precís del zoom i escalat
- **Tailwind personalitzat**: Breakpoints addicionals per millor control
- **Meta tags responsives**: Optimització per a tots els navegadors

## 👑 La Corona de Glòria - Adaptive

El tema de la **Corona Reial** s'adapta intel·ligentment:

1. **💛 Or** - Brillantor reduïda en mòbil, completa en desktop
2. **❤️ Robí** - Animations suaus en dispositius tàctils
3. **💚 Maragda** - Partícules només quan no afecten el rendiment
4. **💙 Safir** - Shadows escalables segons la capacitat del dispositiu
5. **💜 Ametista** - Efectes hover adaptats per touch vs mouse

## 🎯 Nivells del Quiz - Responsive

Cada nivell s'adapta visualment al dispositiu:

1. **🌱 Petit Explorador**: Text gran i clara per pantalles petites
2. **🔍 Jove Aventurer**: Botons més grans per facilitar el touch
3. **⚔️ Guerrer Fort**: Animacions optimitzades per cada dispositiu
4. **📜 Savi Descobridor**: Efectes visuals progressius segons capacitat
5. **👑 Mestre Bíblic**: Experiència completa en dispositius potents

## 🛠 Personalització Responsive

### Afegir més breakpoints

Edita la configuració de Tailwind a `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      screens: {
        xs: "475px", // Mòbil gran
        xxl: "1600px", // Desktop molt gran
      },
    },
  },
};
```

### Modificar animacions per dispositiu

Edita `styles.css` per ajustar animacions:

```css
/* Exemple: Més ràpides en mòbil */
@media (max-width: 640px) {
  .animate-bounce-crown {
    animation-duration: 1s; /* Més ràpid */
  }
}
```

### Canviar visibilitat d'elements

Usa classes de Tailwind al `script.js`:

```javascript
className: "hidden sm:block lg:hidden xl:block";
// Ocultat en mòbil, visible en tablet, ocultat en desktop petit, visible en desktop gran
```

## 📊 Rendiment Optimitzat

### Mòbil

- ⚡ **Animacions reduïdes**: Millor bateria i fluidesa
- 🎯 **Partícules desactivades**: Menys càrrega de CPU/GPU
- 📱 **Touch optimitzat**: Botons de mida adequada
- 🔋 **Efectes essencials**: Només les animacions imprescindibles

### Tablet

- ⚖️ **Equilibri perfecte**: Funcionalitat i rendiment balançats
- 🎨 **Visuals moderats**: Efectes presents però optimitzats
- 📐 **Layout adaptatiu**: Aprofita l'espai intermedi

### Desktop

- 🚀 **Experiència completa**: Tots els efectes i animacions
- 💎 **Qualitat màxima**: Shadows, partícules i efectes complets
- 🖱️ **Interactivitat avançada**: Hover effects i transicions suaus

## 🧪 Com provar la responsivitat

1. **Chrome DevTools**: F12 → Toggle device toolbar → Prova diferents dispositius
2. **Dispositius reals**: Prova en el teu mòbil, tablet i ordinador
3. **Orientacions**: Prova vertical i horizontal en mòbils/tablets
4. **Navegadors**: Verifica en Chrome, Firefox, Safari, Edge

## 📱 Compatibilitat Ampliada

✅ **Mòbils**: iPhone 5+ (320px), Android phones  
✅ **Tablets**: iPad mini+, Android tablets  
✅ **Laptops**: 1024px+ resolució  
✅ **Desktops**: 1440px+ per experiència completa  
✅ **Ultrawide**: 1920px+ amb efectes expandits

## 🤝 Contribucions Responsive

Si vols millorar la responsivitat:

1. Fes un fork del repositori
2. Crea una branch (`git checkout -b millora-responsive`)
3. Prova en múltiples dispositius
4. Documenta els canvis amb screenshots
5. Fes commit amb detalls del dispositiu testat
6. Push i obre un Pull Request

## 📄 Llicència

Aquest projecte responsive és de domini públic. Úsa'l lliurement per educar i entretenir nens en qualsevol dispositiu!

---

## 🎉 Gaudeix del Quiz en Qualsevol Dispositiu!

Fet amb ❤️ per a l'educació bíblica dels més petits. Ara perfeccionat per funcionar meravellosament en mòbil 📱, tablet 📟 i PC 💻!

**Corona de glòria adaptativa per a tots! 👑✨**
