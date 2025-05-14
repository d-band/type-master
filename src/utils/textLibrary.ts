// Collection of practice texts of different difficulty levels

import easy from "./easy";

type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface TextLibrary {
  easy: string[];
  medium: string[];
  hard: string[];
}

const texts: TextLibrary = {
  easy: easy.map(v => v.en),
  medium: [
    "The ability to type without looking at the keyboard is known as touch typing. This skill can significantly increase your typing speed and productivity.",
    "According to research, the average typing speed is around 40 words per minute. Professional typists can reach speeds of 65 to 75 words per minute.",
    "The QWERTY keyboard layout was designed in the 1870s for mechanical typewriters. Despite the evolution of technology, this layout remains standard today.",
    "Efficient typing is not just about speed; accuracy is equally important. A fast typist who makes many errors may be less productive than a slower, more accurate one.",
    "Regular breaks are essential when typing for extended periods. They help prevent repetitive strain injuries and maintain concentration levels."
  ],
  hard: [
    "The acquisition of typing proficiency necessitates consistent practice with proper technique. Expert typists utilize all fingers, maintaining them on the home row (ASDF for left hand, JKL; for right hand) and striking keys without visual confirmation.",
    "The ergonomics of your workspace significantly impact typing efficiency and physical well-being. Ensure your chair height positions your elbows at 90 degrees when typing, with wrists slightly elevated and feet flat on the floor.",
    "Psychological studies indicate that typing speed correlates with cognitive processing ability. As vocabulary and language comprehension improve, typing speed naturally increases due to enhanced prediction and finger-memory pathways.",
    "The evolution of keyboard technology spans centuries, from mechanical typewriters with their distinctive tactile feedback to modern membrane keyboards. Many professional typists prefer mechanical keyboards with specific switch types that provide auditory and physical feedback upon actuation.",
    "Implementing advanced typing techniques such as proper finger placement, rhythm development, and mindful practice can exponentially improve both speed and accuracy. Focus on problematic letter combinations and challenging words to systematically eliminate weaknesses in your typing pattern."
  ]
};

export const getRandomText = (difficulty: DifficultyLevel = 'medium'): string => {
  const textList = texts[difficulty];
  const randomIndex = Math.floor(Math.random() * textList.length);
  return textList[randomIndex];
};

export const getAllTexts = (): TextLibrary => {
  return texts;
};