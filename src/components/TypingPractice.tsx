import React, { useState, useEffect, useRef } from 'react';
import { TextDisplay } from './TextDisplay';
import { KeyboardDisplay } from './KeyboardDisplay';
import { TypingStats } from './TypingStats';
import { getRandomText } from '../utils/textLibrary';
import { calculateStats } from '../utils/typingStats';

export const TypingPractice: React.FC = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [currentKey, setCurrentKey] = useState('');
  const [errors, setErrors] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    loadText();
  }, [difficulty]);

  useEffect(() => {
    if (isActive) {
      timerRef.current = window.setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive]);

  useEffect(() => {
    if (text && userInput === text) {
      setIsActive(false);
      setCompleted(true);
    }

    if (text && userInput.length > 0) {
      setCurrentKey(text.charAt(userInput.length));
    }
  }, [text, userInput]);

  const loadText = () => {
    const newText = getRandomText(difficulty);
    setText(newText);
    setUserInput('');
    setTime(0);
    setErrors(0);
    setCompleted(false);
    setIsActive(false);
    setCurrentKey(newText.charAt(0));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!isActive && value.length > 0) {
      setIsActive(true);
    }
    
    // Check for errors
    if (value.length > 0 && value.length <= text.length) {
      if (value[value.length - 1] !== text[value.length - 1]) {
        setErrors(prev => prev + 1);
      }
    }
    
    setUserInput(value);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const { wpm, accuracy } = calculateStats(userInput.length, errors, time);

  return (
    <div 
      className="flex flex-col gap-8 max-w-4xl mx-auto" 
      onClick={handleFocus}
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Typing Practice</h2>
          <div className="flex gap-2">
            <button 
              onClick={loadText}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              New Text
            </button>
            <select
              value={difficulty}
              onClick={e => e.stopPropagation()}
              onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        
        <TextDisplay 
          text={text} 
          userInput={userInput} 
          currentPosition={userInput.length}
        />
        
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="opacity-0 absolute top-0 left-0 h-1 w-1"
          autoFocus
        />
        
        <TypingStats
          wpm={wpm} 
          accuracy={accuracy} 
          time={time} 
          completed={completed}
          progress={text ? (userInput.length / text.length) * 100 : 0}
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <KeyboardDisplay 
          currentKey={currentKey} 
          lastInputCorrect={
            userInput.length > 0 ? 
            userInput[userInput.length - 1] === text[userInput.length - 1] : 
            true
          }
        />
      </div>
    </div>
  );
};