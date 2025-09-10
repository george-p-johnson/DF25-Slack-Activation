// backend/server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Helper: format Date objects to "MM/DD/YYYY HH:MM:SS"
function formatDate(date) {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// CSV setup
const csvPath = path.join(__dirname, "clicks.csv");
const csvWriter = createObjectCsvWriter({
  path: csvPath,
  header: [
    { id: "sessionId", title: "Session ID" },
    { id: "startTime", title: "Start Time" },
    { id: "actions", title: "Actions" },
  ],
  append: fs.existsSync(csvPath), // append if file exists
});

// Current session stored in memory
let currentSession = null;

// --- START SESSION ---
app.post("/start-session", (req, res) => {
  const now = new Date();
  // Session ID based on timestamp
  const sessionId = now.toISOString().replace(/[:.]/g, "-"); // e.g. 2025-09-10T19-20-39-515Z

  currentSession = {
    sessionId,
    startTime: formatDate(now),
    actions: [],
  };

  console.log("🚀 Session started:", sessionId);
  res.json({ success: true, sessionId });
});

// --- LOG CLICK ---
app.post("/log-click", (req, res) => {
  if (!currentSession) {
    return res.status(400).json({ error: "No active session" });
  }

  const { action } = req.body;
  const timestamp = formatDate(new Date());
  currentSession.actions.push(`${action} @ ${timestamp}`);

  console.log("📥 Logged:", action);
  res.json({ success: true });
});

// --- END SESSION ---
app.post("/end-session", async (req, res) => {
  if (!currentSession) {
    return res.status(400).json({ error: "No active session" });
  }

  try {
    await csvWriter.writeRecords([
      {
        sessionId: currentSession.sessionId,
        startTime: currentSession.startTime,
        actions: currentSession.actions.join(" | "),
      },
    ]);

    console.log("✅ Session saved:", currentSession.sessionId);
    currentSession = null;
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error saving session:", err);
    res.status(500).json({ error: "Failed to save session" });
  }
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
