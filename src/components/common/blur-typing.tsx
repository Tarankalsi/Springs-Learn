import React, { useEffect, useState } from "react";
import BlurFadeText from "../magicui/blur-fade-text";

interface CombinedAnimationProps {
  text: string;
  delay: number;
  className: string;
  yOffset: number;
}

const BlurTypingAnimation: React.FC<CombinedAnimationProps> = ({
  text,
  delay,
  className,
  yOffset,
}) => {
  const [displayText, setDisplayText] = useState("");

  
  useEffect(() => {

    if (!text) {
        return;
      }
      const characters = Array.from(text);
      
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < characters.length) {
        setDisplayText((prev) => {
          if (characters[index] !== undefined) {
            const newText = prev + characters[index];
            return newText;
          }
          return prev;
        });
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <BlurFadeText
      delay={delay}
      className={className}
      yOffset={yOffset}
      text={displayText}
    />
  );
};

export default BlurTypingAnimation;
