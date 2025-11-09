import { type User, type InsertUser, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

// Storage interface with CRUD methods
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: ContactMessage[];
  private messagesFilePath: string;

  constructor() {
    this.users = new Map();
    this.contactMessages = [];
    this.messagesFilePath = path.join(process.cwd(), 'data', 'messages.json');
    this.loadMessages();
  }

  // Load messages from file on initialization
  private async loadMessages() {
    try {
      await fs.mkdir(path.dirname(this.messagesFilePath), { recursive: true });
      const data = await fs.readFile(this.messagesFilePath, 'utf-8');
      this.contactMessages = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      this.contactMessages = [];
    }
  }

  // Save messages to file
  private async saveMessages() {
    await fs.mkdir(path.dirname(this.messagesFilePath), { recursive: true });
    await fs.writeFile(
      this.messagesFilePath,
      JSON.stringify(this.contactMessages, null, 2),
      'utf-8'
    );
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const message: ContactMessage = {
      id: randomUUID(),
      ...insertMessage,
      createdAt: new Date(),
    };
    this.contactMessages.push(message);
    await this.saveMessages();
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return this.contactMessages;
  }
}

export const storage = new MemStorage();
