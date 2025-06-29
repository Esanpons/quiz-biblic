# 🌈 Quiz Bíblic Súper Genial per a Nens

Un quiz bíblic interactiu i colorit dissenyat especialment per a nens, amb un sistema de nivells adaptatiu que fa l'aprenentatge divertit i emocionant!

## ✨ Característiques

- 🎮 **Sistema de Nivells Dinàmic**: 5 nivells que s'adapten automàticament segons les respostes
- 🌈 **Arc Iris de 7 Colors**: Com Déu el va crear (Vermell, Taronja, Groc, Verd, Blau, Indi, Violeta)
- 🌟 **Disseny Súper Animat**: Colors brillants, emojis i animacions que captiven l'atenció dels nens
- 📚 **30 Preguntes Bíbliques**: Distribuïdes en 5 nivells de dificultat progressiva
- 🎯 **Feedback Instantani**: Explicacions educatives amb cada resposta
- 🏆 **Sistema de Puntuació**: Motivació amb punts màgics i seguiment del progres
- 📱 **Responsiu**: Funciona perfectament en mòbils, tauletes i ordinadors
- 🗂️ **Codi Organitzat**: HTML, CSS i JavaScript en fitxers separats per fàcil manteniment

## 🚀 Com pujar-ho a GitHub Pages

### Pas 1: Crear el repositori
1. Ves a [GitHub](https://github.com) i crea un compte si no en tens
2. Clica "New repository" (botó verd)
3. Dona-li un nom al teu repositori (ex: `quiz-biblic-nens`)
4. Assegura't que sigui **Public**
5. Marca "Add a README file"
6. Clica "Create repository"

### Pas 2: Pujar els fitxers
1. Al teu repositori, clica "Add file" > "Upload files"
2. Arrossega aquests 4 fitxers a la pàgina:
   - `index.html` (estructura HTML de l'aplicació)
   - `styles.css` (estils CSS amb l'arc iris de 7 colors)
   - `script.js` (lògica JavaScript/React)
   - `preguntes.json` (base de dades de preguntes)
3. Escriu un missatge de commit com "Afegir Quiz Bíblic amb arc iris de 7 colors"
4. Clica "Commit changes"

### Pas 3: Activar GitHub Pages
1. Al teu repositori, ves a **Settings** (pestanya superior)
2. Desplaça't cap avall fins trobar **Pages** al menú lateral
3. A "Source", selecciona **Deploy from a branch**
4. A "Branch", selecciona **main** (o master)
5. Deixa la carpeta com **/ (root)**
6. Clica **Save**

### Pas 4: Accedir a la teva web
- En uns minuts, la teva web estarà disponible a:
  `https://[el-teu-usuari].github.io/[nom-del-repositori]`
- Per exemple: `https://usuari123.github.io/quiz-biblic-nens`

## 📁 Estructura del projecte

```
quiz-biblic-nens/
├── index.html          # Estructura HTML de l'aplicació
├── styles.css          # Estils CSS amb arc iris de 7 colors
├── script.js           # Lògica JavaScript/React
├── preguntes.json      # Base de dades de preguntes
└── README.md          # Aquest fitxer
```

## 🌈 L'Arc Iris de 7 Colors

Aquest quiz utilitza l'arc iris tradicional de **7 colors** com Déu el va crear:

1. **🔴 Vermell** (Red)
2. **🟠 Taronja** (Orange)  
3. **🟡 Groc** (Yellow)
4. **🟢 Verd** (Green)
5. **🔵 Blau** (Blue)
6. **🟣 Indi** (Indigo)
7. **🟪 Violeta** (Violet)

Aquests colors apareixen per tota l'aplicació creant una experiència visual meravellosa que recorda la promesa de Déu a Noè!

## 🎯 Nivells del Quiz

1. **🌱 Petit Explorer**: Preguntes bàsiques sobre personatges famosos
2. **🦋 Jove Aventurer**: Històries conegudes amb més detalls
3. **🌟 Savi Descobridor**: Esdeveniments específics i geografia bíblica
4. **👑 Mestre Bíblic**: Coneixement avançat i cronologia
5. **✨ Llegenda Sagrada**: Preguntes de nivell expert

## 🛠 Personalització

### Afegir més preguntes
Edita el fitxer `preguntes.json` i afegeix preguntes següint aquest format:

```json
{
  "pregunta": "La teva pregunta aquí?",
  "opcions": ["A) Opció 1", "B) Opció 2", "C) Opció 3", "D) Opció 4"],
  "resposta_correcta": "B",
  "explicacio": "Explicació educativa de la resposta correcta"
}
```

### Canviar colors o estil
Els estils estan organitzats al fitxer `styles.css`. Pots modificar:
- **Colors de l'arc iris**: Canvia les variables del gradient `.bg-rainbow`
- **Animacions**: Modifica les animacions a la secció `@keyframes`
- **Efectes especials**: Personalitza les classes `.shadow-rainbow`, `.border-rainbow`, etc.

### Modificar la lògica
El fitxer `script.js` conté tota la lògica de React. Pots canviar:
- **Sistema de puntuació**: Modifica la fórmula `nivell * 10`
- **Condicions de nivell**: Ajusta quan pujar/baixar de nivell
- **Missatges i emojis**: Personalitza els textos i emojis

## 🎨 Funcionalitats tècniques

- **React 18**: Framework per la interfície d'usuari
- **CSS3 Personalitzat**: Estils amb arc iris de 7 colors i animacions avançades
- **Tailwind CSS**: Classes d'utilitat per responsive design
- **Vanilla JavaScript**: Compatible amb qualsevol navegador modern
- **100% client-side**: Funciona completament al navegador
- **GitHub Pages compatible**: Llest per pujar i usar
- **Codi modular**: HTML, CSS i JS en fitxers separats per fàcil manteniment

## 📱 Compatibilitat

✅ Chrome, Firefox, Safari, Edge  
✅ Dispositius mòbils i tauletes  
✅ Qualsevol mida de pantalla  

## 🤝 Contribucions

Si vols afegir més preguntes o millorar l'aplicació:
1. Fes un fork del repositori
2. Crea una nova branch (`git checkout -b millora-nova`)
3. Fes els teus canvis
4. Commit (`git commit -am 'Afegir nova funcionalitat'`)
5. Push (`git push origin millora-nova`)
6. Obre un Pull Request

## 📄 Llicència

Aquest projecte és de domini públic. Úsa'l lliurement per educar i entretenir nens!

---

## 🎉 Gaudeix del Quiz!

Fet amb ❤️ per a l'educació bíblica dels més petits. Que s'ho passin genial aprenent!