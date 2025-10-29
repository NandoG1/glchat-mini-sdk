import { useState } from 'react';
import { GLChatClient } from '../../../src';
import ChatInterface from './components/ChatInterface';
import ApiKeyInput from './components/ApiKeyInput';

function App() {
  const [client, setClient] = useState<GLChatClient | null>(null);
  const [apiKey, setApiKey] = useState('');

  const handleApiKeySubmit = (key: string) => {
    try {
      const newClient = new GLChatClient({ apiKey: key });
      newClient.setPrompt("You are a helpful AI assistant.");
      setClient(newClient);
      setApiKey(key);
    } catch (error) {
      alert('Failed to initialize client. Please check your API key.');
    }
  };

  const handleReset = () => {
    setClient(null);
    setApiKey('');
    console.log(apiKey)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            GLChat Mini SDK Demo
          </h1>
          <p className="text-gray-600">
            A lightweight AI chat interface powered by GLChat Mini SDK
          </p>
        </header>

        {!client ? (
          <ApiKeyInput onSubmit={handleApiKeySubmit} />
        ) : (
          <ChatInterface client={client} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}

export default App;
