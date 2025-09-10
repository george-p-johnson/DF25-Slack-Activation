// src/utils/logger.js
export async function startSession() {
  try {
    await fetch("http://localhost:3001/start-session", { method: "POST" });
    console.log("🚀 Session started");
  } catch (err) {
    console.error("Error starting session:", err);
  }
}

export async function logClick(action) {
  try {
    await fetch("http://localhost:3001/log-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    console.log("📥 Logged:", action);
  } catch (err) {
    console.error("Error logging click:", err);
  }
}

export async function endSession() {
  try {
    await fetch("http://localhost:3001/end-session", { method: "POST" });
    console.log("✅ Session ended");
  } catch (err) {
    console.error("Error ending session:", err);
  }
}


