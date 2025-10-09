# MiniGe – React AI Assistant

MiniGe is a mini AI assistant powered by **Google Gemini**.  
It lets users enter prompts and receive dynamic responses, with styled output and a smooth typing effect.

🎓 This project was built while following [this YouTube tutorial](https://www.youtube.com/watch?v=0yboGn8errU&t=2479s), to learn the fundamentals of **React**. This project is based on that tutorial with some personal tweaks & improvements.

## 🛠️ Tech Stack

- **React**
- **Google Gemini API**
- **Context API** (for state management)
- **Marked.js** (to parse markdown responses)
- **CSS Grid / Flexbox** (for layout)

## 🚀 Features

- Prompt input with Google Gemini API integration
- Dynamic response display with markdown rendering
- Word-by-word typing effect for added UX
- Clean, modern UI layout

## 📦 Getting Started – Run the Project Locally

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/minige.git
cd minige
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Gemini API key

Create a file called .env at the root of the project, and add your API key:

```bash
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

💡 Don’t have one? You can get a Gemini API key from Google AI Studio

### 4. Start the app

```bash
npm run dev
```

Open your browser at http://localhost:5173 and try it out 🚀