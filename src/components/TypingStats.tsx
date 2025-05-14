import React from 'react';

interface TypingStatsProps {
  wpm: number;
  accuracy: number;
  time: number;
  completed: boolean;
  progress: number;
}

export const TypingStats: React.FC<TypingStatsProps> = ({
  wpm,
  accuracy,
  time,
  completed,
  progress
}) => {
  // Format time as mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-6">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 overflow-hidden">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard
          title="WPM"
          value={wpm.toFixed(0)}
          icon="⚡"
          color="text-amber-500"
          completed={completed}
        />
        <StatCard
          title="Accuracy"
          value={`${accuracy.toFixed(1)}%`}
          icon="🎯"
          color="text-green-500"
          completed={completed}
        />
        <StatCard
          title="Time"
          value={formatTime(time)}
          icon="⏱️"
          color="text-blue-500"
          completed={completed}
        />
      </div>

      {completed && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center animate-fadeIn">
          <h3 className="text-xl font-bold text-green-700 mb-2">
            Congratulations!
          </h3>
          <p className="text-green-600">
            You completed the typing test with {wpm.toFixed(0)} WPM and {accuracy.toFixed(1)}% accuracy.
          </p>
        </div>
      )}
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
  completed: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, completed }) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-3 text-center ${completed ? 'animate-pulse' : ''}`}>
      <div className="flex items-center justify-center mb-1">
        <span className={`text-lg ${color} mr-1`}>{icon}</span>
        <h3 className="text-gray-700 font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};