import React, { useEffect, useState } from "react";

export interface Paragraph {
  text: string;
}

interface TypewriterBlockProps {
  paragraphs: Paragraph[];
  onFinish?: () => void;
  typingDelayMs?: number; // por char, default 8ms (antes 16ms)
}

const TypewriterBlock: React.FC<TypewriterBlockProps> = ({ paragraphs, onFinish, typingDelayMs = 8 }) => {
  const [typed, setTyped] = useState<string[]>(paragraphs.map(() => ""));
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const typeLine = (lineIdx: number) => {
      if (lineIdx >= paragraphs.length) {
        onFinish?.();
        return;
      }
      const line = paragraphs[lineIdx].text;

      const typeChar = () => {
        if (i <= line.length) {
          setTyped(prev => prev.map((t, idx) => (idx === lineIdx ? line.slice(0, i) : t)));
          i++;
          timeout = setTimeout(typeChar, typingDelayMs);
        } else {
          setCurrentLine(l => l + 1);
        }
      };

      typeChar();
    };

    if (currentLine < paragraphs.length) {
      i = typed[currentLine]?.length || 0;
      typeLine(currentLine);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLine]);

  return (
    <div>
      {paragraphs.map((_, idx) => (
        <p
          key={idx}
          className={`mb-4 text-base xs:text-lg sm:text-lg leading-relaxed text-textLight break-words${idx === paragraphs.length - 1 ? " mb-2" : ""}`}
        >
          <span dangerouslySetInnerHTML={{ __html: typed[idx] }} />
          {currentLine === idx && <span className="text-accent animate-pulse">|</span>}
        </p>
      ))}
    </div>
  );
};

export default TypewriterBlock;
