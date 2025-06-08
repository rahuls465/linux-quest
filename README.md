# 🧙‍♂️ Linux Quest - A Game to Master the Command Line

Welcome to **Linux Quest**, an interactive 15-level adventure game that teaches Linux concepts in a fun and immersive way. Each level is a "day" with quests, tools, and monster battles—perfect for beginners and CS students.

## 🔒 Recent Security Updates

The following security enhancements have been implemented:
- Moved sensitive configuration to environment variables
- Added password hashing using Werkzeug
- Configured CORS protection for frontend-backend communication
- Added session-based authentication
- Set up SQLite database for secure data persistence

### Server Configuration
Create a `.env` file in the server directory with:
```
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///database.db
FRONTEND_URL=http://localhost:5173
```

To generate a secure secret key:
```bash
python3 -c "import secrets; print(secrets.token_hex(32))"
```

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

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher
- Python 3.x and pip (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rahuls465/linux-quest.git
cd linux-quest
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

3. Install backend dependencies:
```bash
cd server
python3 -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

4. Start the development servers:
```bash
# Terminal 1 - Frontend
cd client
npm run dev

# Terminal 2 - Backend
cd server
source venv/bin/activate
python app.py
```

Visit: [http://localhost:5173](http://localhost:5173)

### Project Dependencies
Key dependencies and their versions:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.4"
  }
}
```

### Configuration Files
The project requires several configuration files:

1. `vite.config.js` - Vite configuration:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

2. `tailwind.config.js` - Tailwind CSS configuration:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. `postcss.config.js` - PostCSS configuration:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🗂 File Structure

```
/src
  /pages
    Login.jsx    # Login page component
    Home.jsx     # Home/hub world component
    Quest.jsx    # Quest page component
  /data
    quests.json  # Quest data and content
  /components    # Reusable components
  App.jsx        # Main app component
  main.jsx       # Application entry point
  index.css      # Global styles and Tailwind imports
/public          # Static assets
  /assets
    /audio       # Quest briefing audio files
.gitignore
README.md
index.html
vite.config.js
tailwind.config.js
postcss.config.js
```

## 🛠 Tech Stack

- **Frontend:** 
  - React 18 with Vite
  - React Router v6 for navigation
  - Tailwind CSS for styling
- **State Management:** React hooks and context
- **Backend:** Flask with SQLAlchemy
- **Database:** SQLite
- **Authentication:** Session-based with password hashing
- **Deployment:** Vercel / GitHub Pages (TBD)

## 🚧 Implementation Roadmap

- Terminal emulator (mimic shell)
- Dynamic feedback and hints
- Game-style design (fonts, sound FX)
- Daily rewards & unlockables
- Quest briefing audios (podcast-style)

## ⚠️ Troubleshooting

### Blank Page Issues
If you encounter a blank page:
1. Ensure all dependencies are installed with correct versions
2. Verify all configuration files are present
3. Check if CSS imports are properly set up in `main.jsx`
4. Clear browser cache and node_modules, then reinstall

### Common Issues
1. **Missing styles**: Ensure Tailwind CSS is properly imported in `index.css`
2. **Routing issues**: Check React Router setup in `App.jsx`
3. **Build errors**: Verify Vite configuration in `vite.config.js`
4. **Backend connection**: Verify `.env` configuration and CORS settings

## 🤝 Contributing

Contributions are welcome!
