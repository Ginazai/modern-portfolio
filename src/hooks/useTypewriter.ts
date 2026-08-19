import { useEffect, useState } from 'react';

/** Types out `text` one character at a time, `speedMs` per character. */
export function useTypewriter(text: string, speedMs = 28) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let position = 0;
    const timer = window.setInterval(() => {
      setTypedText(text.slice(0, position + 1));
      position += 1;
      if (position >= text.length) window.clearInterval(timer);
    }, speedMs);
    return () => window.clearInterval(timer);
  }, [text, speedMs]);

  return typedText;
}
