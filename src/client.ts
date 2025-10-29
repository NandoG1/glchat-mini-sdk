import { GoogleGenerativeAI } from "@google/generative-ai";
import { GLChatConfig, ChatMessage } from "./types";

/**
 * GLChatClient - A lightweight SDK for interacting with AI chat models
 * 
 * @example
 * ```ts
 * const client = new GLChatClient({ apiKey: process.env.GEMINI_API_KEY });
 * client.setPrompt("You are a helpful assistant.");
 * const reply = await client.sendMessage("Hello!");
 * console.log(reply);
 * ```
 */
export class GLChatClient {
  private genAI: GoogleGenerativeAI;
  private model: string;
  private maxTokens: number;
  private temperature: number;
  private systemPrompt: string | null = null;
  private conversationHistory: ChatMessage[] = [];

  /**
   * Initialize a new GLChat client
   * 
   * @param config - Configuration object with API key and optional settings
   * @throws Error if API key is missing or invalid
   */
  constructor(config: GLChatConfig) {
    if (!config.apiKey) {
      throw new Error("API key is required to initialize GLChatClient");
    }

    this.genAI = new GoogleGenerativeAI(config.apiKey);

    this.model = config.model || "gemini-2.5-flash";
    this.maxTokens = config.maxTokens || 1000;
    this.temperature = config.temperature || 0.7;
  }

  /**
   * Set the system prompt that guides the AI's behavior
   * 
   * @param prompt - The system prompt to set
   * 
   * @example
   * ```ts
   * client.setPrompt("You are a helpful coding assistant specializing in TypeScript.");
   * ```
   */
  setPrompt(prompt: string): void {
    this.systemPrompt = prompt;
  }

  /**
   * Send a message to the AI model and get a response
   * 
   * @param message - The user message to send
   * @returns Promise resolving to the AI's response text
   * @throws Error if the API call fails
   * 
   * @example
   * ```ts
   * const response = await client.sendMessage("What is TypeScript?");
   * console.log(response);
   * ```
   */
  async sendMessage(message: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ 
        model: this.model,
        generationConfig: {
          maxOutputTokens: this.maxTokens,
          temperature: this.temperature,
        },
      });

      const history: Array<{role: string; parts: Array<{text: string}>}> = [];

      for (const msg of this.conversationHistory) {
        history.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        });
      }
      const chat = model.startChat({
        history: history,
        generationConfig: {
          maxOutputTokens: this.maxTokens,
          temperature: this.temperature,
        },
      });

      let fullMessage = message;
      if (this.systemPrompt && this.conversationHistory.length === 0) {
        fullMessage = `${this.systemPrompt}\n\nUser: ${message}`;
      }

      const result = await chat.sendMessage(fullMessage);
      const response = await result.response;
      const assistantMessage = response.text();

      if (!assistantMessage) {
        throw new Error("No response received from the AI model");
      }

      this.conversationHistory.push({
        role: "user",
        content: message,
      });
      this.conversationHistory.push({
        role: "assistant",
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`GLChat API Error: ${error.message}`);
      }
      throw new Error("An unexpected error occurred while sending the message");
    }
  }

  /**
   * Clear the conversation history
   * Useful for starting a fresh conversation
   */
  clearHistory(): void {
    this.conversationHistory = [];
  }

  /**
   * Get the current conversation history
   * 
   * @returns Array of chat messages
   */
  getHistory(): ChatMessage[] {
    return [...this.conversationHistory];
  }

  /**
   * Update the model being used
   * 
   * @param model - The new model name to use
   */
  setModel(model: string): void {
    this.model = model;
  }
}
