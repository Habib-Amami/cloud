require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(process.env.PORT, () => {
  console.log(`API running on port ${process.env.PORT}`);
});