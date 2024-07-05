import { useEffect, useState } from "react";

interface SpeechBubbleType {
  children: string;
}

function SpeechBubble({ children: text }: SpeechBubbleType) {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    let chars: string[] = [];
    for (let i = 0; i < text.length; i++) {
      chars.push(text[i]);
    }
    setCharacters(chars);
  }, []);

  return (
    <div className="px-7 py-2 shadow-pixel">
      {characters.map((char, index) => (
        <span
          key={index}
          className="opacity-0 animate-appear [animation-fill-mode:forwards]"
          style={{
            animationDelay: `${0.5 + index * 0.15}s`, // index로 각자 다른 타이밍의 애니메이션 처리
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default SpeechBubble;
