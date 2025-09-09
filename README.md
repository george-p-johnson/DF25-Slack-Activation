# Vue Experience with Backend Logging

This project is a Vue 3 app with a Node.js backend for logging button clicks to a CSV file. It includes:
- Attract screen with background video
- Subsequent pages with a different background video
- Logging of button clicks to CSV via backend
- Optional automatic page visit logging

## Project Structure
```
my-project/
├─ src/                ← Vue frontend source code
│   ├─ components/
│   ├─ views/
│   └─ utils/logger.js ← Logging utility
├─ public/             ← Assets like videos
├─ backend/            ← Node.js backend
│   ├─ server.js
│   ├─ package.json
│   └─ clicks.csv      ← Auto-created when logging
├─ package.json        ← Frontend dependencies
└─ vite.config.js
```

## Setup Instructions

### Backend
1. Navigate to backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
node server.js
```
- Runs on `http://localhost:3001`
- Logs clicks to `backend/clicks.csv`

### Frontend
1. From project root:
```bash
npm install
npm run dev
```
- Runs Vue app (default: `http://localhost:5173`)

## Logging Button Clicks
1. Import the logger in any Vue component:
```js
import { logClick } from '@/utils/logger.js'
```
2. Call it inside button handlers or navigation functions:
```js
function goNext() {
  logClick('Start Button Clicked', 'Attract')
  router.push('/page1')
}
```
- `action`: string describing the button click
- `page` (optional): current page/view

3. Example button in template:
```vue
<button @click="() => logClick('Next Button', 'Page1')">Next</button>
```

## Optional: Auto-Log Page Visits
Add a router guard in `src/router/index.js`:
```js
router.beforeEach((to, from, next) => {
  if (to.name) logClick('Visited Page', to.name)
  next()
})
```
- Logs every page visit automatically
- Buttons can still log actions individually

## Notes
- Backend must be running for logging to work
- `clicks.csv` will be created automatically in `backend/`
- Frontend and backend run independently

