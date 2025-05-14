import React from 'react';
import { TypingPractice } from './components/TypingPractice';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <TypingPractice />
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Typing Practice App</p>
      </footer>
    </div>
  );
}

export default App;