const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// Security & compression headers
app.disable("x-powered-by");

// Static files with cache headers
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "1d",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

// Health check endpoint for Traefik / Docker health checks
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "sheik-redes",
    timestamp: new Date().toISOString(),
  });
});

// Fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`[Sheik Redes] Server running on http://${HOST}:${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("[Sheik Redes] SIGTERM received, shutting down gracefully...");
  server.close(() => process.exit(0));
});

process.on("SIGINT", () => {
  console.log("[Sheik Redes] SIGINT received, shutting down gracefully...");
  server.close(() => process.exit(0));
});
