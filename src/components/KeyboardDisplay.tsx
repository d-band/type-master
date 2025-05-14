import React from 'react';

interface KeyboardDisplayProps {
  currentKey: string;
  lastInputCorrect: boolean;
}

interface KeyProps {
  char: string;
  width?: string;
  isActive?: boolean;
  isError?: boolean;
}

const Key: React.FC<KeyProps> = ({
  char,
  width = 'w-10',
  isActive = false,
  isError = false
}) => {
  let bgColor = 'bg-white';
  let textColor = 'text-gray-700';
  let borderColor = 'border-gray-300';
  let transform = '';

  if (isActive && isError) {
    bgColor = 'bg-red-100';
    borderColor = 'border-red-400';
    textColor = 'text-red-700';
    transform = 'scale-105';
  } else if (isActive) {
    bgColor = 'bg-blue-100';
    borderColor = 'border-blue-400';
    textColor = 'text-blue-700';
    transform = 'scale-105';
  }

  return (
    <div
      className={`${width} h-10 flex items-center justify-center rounded ${bgColor} border ${borderColor} ${textColor} font-medium shadow-sm transition-all transform ${transform}`}
    >
      {char}
    </div>
  );
};

export const KeyboardDisplay: React.FC<KeyboardDisplayProps> = ({
  currentKey,
  lastInputCorrect
}) => {
  // Convert to lowercase for case-insensitive matching
  const activeKey = currentKey ? currentKey.toLowerCase() : '';

  const keyboardRows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl']
  ];

  return (
    <div className="select-none">
      <div className="flex flex-col gap-1.5 max-w-[800px] mx-auto">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1.5 justify-center">
            {row.map((key, keyIndex) => {
              let width = 'w-10';
              if (key === 'Backspace') width = 'w-24';
              if (key === 'Tab') width = 'w-14';
              if (key === 'Caps') width = 'w-16';
              if (key === 'Enter') width = 'w-16';
              if (key === 'Shift') width = row.length === 12 ? 'w-20' : 'w-16';
              if (key === 'Space') width = 'w-64';
              if (key === 'Ctrl' || key === 'Alt') width = 'w-12';

              const isActive = key.toLowerCase() === activeKey;

              return (
                <Key
                  key={`${rowIndex}-${keyIndex}`}
                  char={key === 'Space' ? '' : key}
                  width={width}
                  isActive={isActive}
                  isError={isActive && !lastInputCorrect}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};