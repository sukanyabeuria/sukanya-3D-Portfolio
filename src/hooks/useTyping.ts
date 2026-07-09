import { useEffect, useState } from "react";

type TypingOptions = {
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
};

export function useTyping(words: string[], options: TypingOptions = {}) {
  const { typingSpeed = 72, deletingSpeed = 38, holdTime = 1100 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    const isComplete = letterIndex === currentWord.length;
    const isEmpty = letterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && isEmpty) {
          setIsDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        setLetterIndex((index) => index + (isDeleting ? -1 : 1));
      },
      isComplete && !isDeleting ? holdTime : isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, holdTime, isDeleting, letterIndex, typingSpeed, wordIndex, words]);

  return words[wordIndex]?.slice(0, letterIndex) ?? "";
}