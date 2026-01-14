require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Votre route existante
app.get("/api/message", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT content FROM messages LIMIT 1"
    );
    res.json({ message: result.rows[0].content });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
});