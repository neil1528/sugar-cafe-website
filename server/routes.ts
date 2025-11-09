import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with Zod schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: message,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          error: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Get all contact messages (for potential admin view later)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({
        success: true,
        data: messages,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve messages",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
