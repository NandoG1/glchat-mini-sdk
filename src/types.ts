/**
 * Configuration options for initializing the GLChat client
 */
export interface GLChatConfig {
  /**
   * Google Gemini API key for authentication
   */
  apiKey: string;

  /**
   * The AI model to use for chat completions
   * @default "gemini-2.5-flash"
   */
  model?: string;

  /**
   * Maximum tokens for the response
   * @default 1000
   */
  maxTokens?: number;

  /**
   * Temperature for response randomness (0-1)
   * @default 0.7
   */
  temperature?: number;
}

/**
 * Message structure for chat completions
 */
export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}
