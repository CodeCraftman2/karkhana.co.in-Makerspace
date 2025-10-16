import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import path from "path";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Serve index.html for all non-API GET requests (SPA fallback) only in production
  if (process.env.NODE_ENV === "production") {
    app.get("/*", (req, res, next) => {
      if (req.path.startsWith("/api")) return next();
      res.sendFile("index.html", { root: path.resolve(__dirname, "../client") });
    });
  }

  return app;
}
