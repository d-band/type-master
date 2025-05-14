/**
 * Calculate typing statistics
 * @param charsTyped Total characters typed
 * @param errors Total errors made
 * @param seconds Total time in seconds
 * @returns Object containing WPM and accuracy
 */
export const calculateStats = (
  charsTyped: number,
  errors: number,
  seconds: number
): { wpm: number; accuracy: number } => {
  // Calculate words (1 word = 5 characters)
  const words = charsTyped / 5;
  
  // Calculate words per minute
  // If less than 1 second has passed, return 0 to avoid division by zero
  const minutes = seconds / 60;
  const wpm = minutes > 0 ? words / minutes : 0;
  
  // Calculate accuracy
  const accuracy = charsTyped > 0 ? ((charsTyped - errors) / charsTyped) * 100 : 100;
  
  // Ensure accuracy is between 0 and 100
  const clampedAccuracy = Math.max(0, Math.min(100, accuracy));
  
  return {
    wpm,
    accuracy: clampedAccuracy,
  };
};

/**
 * Get performance feedback based on WPM and accuracy
 * @param wpm Words per minute
 * @param accuracy Accuracy percentage
 * @returns Feedback message and level
 */
export const getPerformanceFeedback = (
  wpm: number,
  accuracy: number
): { message: string; level: 'beginner' | 'intermediate' | 'advanced' | 'expert' } => {
  let level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  let message: string;
  
  if (wpm < 30) {
    level = 'beginner';
    message = 'Keep practicing to improve your speed!';
  } else if (wpm < 50) {
    level = 'intermediate';
    message = 'Good job! You\'re making progress.';
  } else if (wpm < 80) {
    level = 'advanced';
    message = 'Excellent typing speed!';
  } else {
    level = 'expert';
    message = 'Outstanding! You have professional-level typing skills.';
  }
  
  // Add accuracy feedback
  if (accuracy < 90) {
    message += ' Focus on accuracy over speed.';
  } else if (accuracy > 97) {
    message += ' Your accuracy is impressive!';
  }
  
  return { message, level };
};