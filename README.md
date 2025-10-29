# GLChat Mini SDK

## Features

- **Simple & Intuitive API** - Easy to integrate into any TypeScript/JavaScript project
- **Conversation History** - Automatic context management for multi-turn conversations
- **System Prompts** - Guide AI behavior with custom instructions
- **Full TypeScript Support** - Type-safe with comprehensive type definitions
- **Configurable** - Adjust model, temperature, max tokens, and more
- **Google Gemini Powered** - Built on Google's powerful Gemini 2.5 Flash model

## Installation

```bash
git clone <your-repo-url>
cd glchat-mini-sdk
npm install
npm run build
```

## Quick Start

### Get Your API Key

Get a free Google Gemini API key at: [https://ai.google.dev/](https://ai.google.dev/)

### Basic Usage

```typescript
import { GLChatClient } from "glchat-mini-sdk";

// Initialize the client with your API key
const client = new GLChatClient({ 
  apiKey: process.env.GEMINI_API_KEY 
});

// Set a system prompt (optional)
client.setPrompt("You are a helpful assistant.");

// Send a message and get a response
const reply = await client.sendMessage("Hello!");
console.log(reply);
```

### Multi-turn Conversation

```typescript
const client = new GLChatClient({ 
  apiKey: process.env.GEMINI_API_KEY 
});

client.setPrompt("You are a coding mentor.");

// First message
const response1 = await client.sendMessage("What is TypeScript?");
console.log(response1);

// Follow-up (context is automatically maintained)
const response2 = await client.sendMessage("How do I use it with React?");
console.log(response2);

// Clear history when starting a new conversation
client.clearHistory();
```

### Types

```typescript
interface GLChatConfig {
  apiKey: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}
```


## Web Demo

This project includes a web demo built with:
- **React** - Modern UI framework
- **Vite** - Fast build tool
- **TailwindCSS** - Beautiful styling

### Running the Demo

```bash
cd examples/web-demo
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Demo Features

- Secure API key input
- Real-time chat interface
- Message history display
- Loading states
