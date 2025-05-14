import React from 'react';
import { Keyboard } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Keyboard className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">TypeMaster</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Practice
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Stats
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};