# GLChat Mini SDK - Web Demo

A minimal chat interface built with React, Vite, and TailwindCSS to demonstrate the GLChat Mini SDK.

## Features

- 🎨 Clean, modern UI with TailwindCSS
- 💬 Real-time chat interface
- 🔐 Secure API key input
- 📱 Responsive design
- ⚡ Fast development with Vite

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (typically http://localhost:5173)

4. Get a free Google Gemini API key at: https://makersuite.google.com/app/apikey

5. Enter your Gemini API key in the UI to start chatting

## Usage

1. Enter your OpenAI API key when prompted
2. Start chatting with the AI assistant
3. Use the "Clear" button to reset the conversation
4. Use the "Reset" button to change your API key

## Building for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **GLChat Mini SDK** - AI chat functionality

## Note

This is a demo application. Your API key is stored only in memory and is never sent anywhere except to Google's Gemini API through the GLChat Mini SDK.
