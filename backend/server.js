// import express from "express";
// import cors from "cors";
// import { createObjectCsvWriter } from "csv-writer";
// import fs from "fs";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const filePath = "clicks.csv";

// // Ensure file exists with headers
// if (!fs.existsSync(filePath)) {
//   fs.writeFileSync(filePath, "action,timestamp\n");
// }

// const csvWriter = createObjectCsvWriter({
//   path: filePath,
//   header: [
//     { id: "action", title: "action" },
//     { id: "timestamp", title: "timestamp" },
//   ],
//   append: true,
// });

// app.post("/log-click", async (req, res) => {
//   const { action } = req.body;
//   const timestamp = new Date().toISOString();
//   try {
//     await csvWriter.writeRecords([{ action, timestamp }]);
//     res.json({ message: "Logged" });
//   } catch (err) {
//     console.error("Error writing to CSV:", err);
//     res.status(500).json({ error: "Failed to log click" });
//   }
// });

// app.listen(3001, () => {
//   console.log("Server running on http://localhost:3001");
// });



import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createObjectCsvWriter } from "csv-writer";
import path from "path";
import { fileURLToPath } from "url";

// Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "clicks.csv");

// Setup Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure CSV writer
const csvWriter = createObjectCsvWriter({
  path: filePath,
  header: [
    { id: "action", title: "action" },
    { id: "timestamp", title: "timestamp" },
  ],
  append: true, // don’t overwrite file
  alwaysQuote: true,
});

// POST endpoint
app.post("/log-click", async (req, res) => {
  const { action } = req.body;
  const timestamp = new Date().toISOString();

  console.log("📥 Incoming log:", { action, timestamp });

  try {
    await csvWriter.writeRecords([{ action, timestamp }]);
    console.log("✅ Logged successfully");
    res.json({ message: "Logged" });
  } catch (err) {
    console.error("❌ Error writing to CSV:", err);
    res.status(500).json({ error: "Failed to log click" });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
