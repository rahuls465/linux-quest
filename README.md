# 🧙‍♂️ Linux Quest - A Game to Master the Command Line

Welcome to **Linux Quest**, an interactive 15-level adventure game that teaches Linux concepts in a fun and immersive way. Each level is a "day" with quests, tools, and monster battles—perfect for beginners and CS students.

---

## 📚 Project Structure

This is a **React + Vite** web app with a fantasy RPG theme. Here's what we've implemented so far:

### ✅ Current Features

- 🔐 Login screen to start your journey
- 🏠 Homepage (Hub world for daily quests)
- 🧭 Quest system per day (15-day adventure)
- 🧰 JSON-based content system
- 🎧 Audio quest briefings (planned)
- 🎁 Rewards for completing theory + quests
- 🗂 Single source JSON file for all quest data

---

## 🚧 Planned Features (Phase by Phase)

### 🎮 Game Mechanics
- Tools/concepts as **"items"** to defeat challenges  
- Daily rewards & unlockables  
- Repeat previous quests  
- Optional adaptive storyline

### 💡 Learning Modules (Examples)
| Day | Concept                  | Sample Quest                                |
|-----|--------------------------|---------------------------------------------|
| 1   | Shell & Navigation       | Navigate folders, reveal hidden files       |
| 2   | File Operations          | Copy, move, rename, delete files            |
| 3   | Commands & Help          | Use `man`, `--help`, and redirection        |
| ... | ...                      | ...                                         |
| 15  | Debug & Deploy           | Write a backup script with logs and failsafes |

### 🧩 Core Components
- React Router-based navigation
- Terminal emulator / shell simulation
- Dynamic feedback + hints system
- Audio and text-based storytelling

---

## 🧾 Tech Stack

- **Frontend:** React, Vite, JavaScript
- **Routing:** React Router
- **Styling:** Tailwind CSS (optional)
- **Backend (optional):** Python (Flask) / Go
- **Database:** SQLite or localStorage
- **Deployment:** Vercel / GitHub Pages (TBD)

---

## 🗂 File Structure (So Far)


```
/src
  /pages
    Login.jsx
    Home.jsx
    Quest.jsx
  /data
    quests.json
  App.jsx
  main.jsx
  index.css
.gitignore
README.md
index.html
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

## 🛠 Tech Stack

- Frontend: React + Vite
- Routing: React Router
- Backend (optional): Flask / Go
- Database: SQLite or localStorage

## 📌 Planned Features

- Terminal emulator (mimic shell)
- Dynamic feedback and hints
- Game-style design (fonts, sound FX)
- Daily rewards & unlockables
- Quest briefing audios (podcast-style)
