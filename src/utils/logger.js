// src/utils/logger.js
export async function logClick(action, page = '') {
  try {
    await fetch("http://localhost:3001/log-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, page })
    });
    console.log(`Logged: ${action} ${page ? 'on ' + page : ''}`);
  } catch (err) {
    console.error("Error logging click:", err);
  }
}
