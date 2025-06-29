# 👑 Quiz Bíblic Súper Genial per a Nens

Un quiz bíblic interactiu i colorit dissenyat especialment per a nens, amb un sistema de nivells adaptatiu que fa l'aprenentatge divertit i emocionant!

## ✨ Característiques

- 🎮 **Sistema de Nivells Dinàmic**: 5 nivells que s'adapten automàticament segons les respostes
- 👑 **Tema de Corona Reial**: Colors d'or, joies precioses i majestat celestial
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
   - `styles.css` (estils CSS amb tema de corona reial)
   - `script.js` (lògica JavaScript/React)
   - `preguntes.json` (base de dades de preguntes)
3. Escriu un missatge de commit com "Afegir Quiz Bíblic amb tema de corona"
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
quiz-biblic/
├── index.html          # Estructura HTML de l'aplicació
├── styles.css          # Estils CSS amb tema de corona reial
├── script.js           # Lògica JavaScript/React
├── preguntes.json      # Base de dades de preguntes
└── readme.md          # Aquest fitxer
```

## 👑 La Corona de Glòria

Aquest quiz utilitza el tema de la **Corona Reial** amb joies precioses:

1. **💛 Or** - Color principal de la corona de glòria
2. **❤️ Robí** - Joies vermelles que representen l'amor
3. **💚 Maragda** - Joies verdes que simbolitzen la vida eterna
4. **💙 Safir** - Joies blaves que representen el cel
5. **💜 Ametista** - Joies violetes que simbolitzen la realesa

Aquests colors apareixen per tota l'aplicació creant una experiència visual majestuosa que recorda la corona de glòria que Déu promet als seus fills!

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
- **Colors de la corona**: Canvia les variables del gradient `.bg-crown`
- **Joies precioses**: Modifica els colors de les partícules (or, robí, maragda, safir, ametista)
- **Animacions**: Modifica les animacions a la secció `@keyframes`
- **Efectes especials**: Personalitza les classes `.shadow-crown`, `.border-crown`, etc.

### Modificar la lògica
El fitxer `script.js` conté tota la lògica de React. Pots canviar:
- **Sistema de puntuació**: Modifica la fórmula `nivell * 10`
- **Condicions de nivell**: Ajusta quan pujar/baixar de nivell
- **Missatges i emojis**: Personalitza els textos i emojis de corona

## 🎨 Funcionalitats tècniques

- **React 18**: Framework per la interfície d'usuari
- **CSS3 Personalitzat**: Estils amb tema de corona i joies precioses amb animacions avançades
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

Fet amb ❤️ per a l'educació bíblica dels més petits. Que s'ho passin genial aprenent mentre descobreixen la corona de glòria! 👑✨