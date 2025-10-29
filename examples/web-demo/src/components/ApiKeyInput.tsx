import { useState } from 'react';

interface ApiKeyInputProps {
  onSubmit: (apiKey: string) => void;
}

export default function ApiKeyInput({ onSubmit }: ApiKeyInputProps) {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSubmit(key.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Enter API Key</h2>
        <p className="text-gray-600 mt-2">
          Enter your Google Gemini API key to get started
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="apiKey"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Google Gemini API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="AIza..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            Get your free API key at:{' '}
            <a 
              href="https://makersuite.google.com/app/apikey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Google AI Studio
            </a>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          Start Chatting
        </button>
      </form>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Your API key is only stored in memory and is
          never sent to any server except Google's Gemini API.
        </p>
      </div>
    </div>
  );
}
