import React from 'react';

interface TextDisplayProps {
  text: string;
  userInput: string;
  currentPosition: number;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({
  text,
  userInput,
  currentPosition
}) => {
  if (!text) return <div className="h-32 flex items-center justify-center text-gray-400">Loading text...</div>;

  // Split text into characters for rendering
  const characters = text.split('').map((char, index) => {
    let className = 'text-gray-400'; // Default - not typed yet

    if (index < userInput.length) {
      // Already typed
      className = userInput[index] === char ? 'text-gray-800' : 'text-red-500 bg-red-100';
    } else if (index === currentPosition) {
      // Current position
      className = 'text-blue-600 bg-blue-100 animate-pulse';
    }

    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  });

  return (
    <div className="relative mb-8">
      <div className="font-mono text-lg leading-relaxed tracking-wide p-4 bg-gray-50 rounded border border-gray-200 min-h-32">
        {characters}
      </div>
    </div>
  );
};