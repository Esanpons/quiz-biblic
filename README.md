# 🌈 Quiz Bíblic Súper Genial per a Nens

Un quiz bíblic interactiu i colorit dissenyat especialment per a nens, amb un sistema de nivells adaptatiu que fa l'aprenentatge divertit i emocionant!

## ✨ Característiques

- 🎮 **Sistema de Nivells Dinàmic**: 5 nivells que s'adapten automàticament segons les respostes
- 🌟 **Disseny Súper Animat**: Colors brillants, emojis i animacions que captiven l'atenció dels nens
- 📚 **30 Preguntes Bíbliques**: Distribuïdes en 5 nivells de dificultat progressiva
- 🎯 **Feedback Instantani**: Explicacions educatives amb cada resposta
- 🏆 **Sistema de Puntuació**: Motivació amb punts màgics i seguiment del progres
- 📱 **Responsiu**: Funciona perfectament en mòbils, tauletes i ordinadors

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
2. Arrossega aquests fitxers a la pàgina:
   - `index.html` (el fitxer principal de l'aplicació)
   - `preguntes.json` (la base de dades de preguntes)
3. Escriu un missatge de commit com "Afegir Quiz Bíblic"
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
├── index.html          # Aplicació principal
├── preguntes.json      # Base de dades de preguntes
└── README.md          # Aquest fitxer
```

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

El fitxer `index.html` utilitza **Tailwind CSS**. Pots modificar les classes CSS per personalitzar colors i estils.

## 🎨 Funcionalitats tècniques

- **React 18**: Framework per la interfície d'usuari
- **Tailwind CSS**: Estils moderns i responsnius
- **Vanilla JavaScript**: No requereix compilació
- **100% client-side**: Funciona completament al navegador
- **GitHub Pages compatible**: Llest per pujar i usar

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
