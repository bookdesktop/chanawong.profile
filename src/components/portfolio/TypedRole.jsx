"use client";

import { useEffect, useState } from "react";

export default function TypedRole({ words }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let i = 0;
    let len = words[0].length;
    let deleting = true;
    let timer;
    const tick = () => {
      const word = words[i];
      if (deleting) {
        len--;
        if (len <= 0) {
          deleting = false;
          i = (i + 1) % words.length;
        }
      } else {
        len++;
        if (len >= words[i].length) {
          deleting = true;
          setText(words[i]);
          timer = setTimeout(tick, 1800);
          return;
        }
      }
      setText((deleting ? word : words[i]).slice(0, Math.max(len, 0)));
      timer = setTimeout(tick, deleting ? 45 : 85);
    };
    timer = setTimeout(tick, 2000);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className="role-typed" aria-hidden="true">
      {text}
      <span className="caret" />
    </span>
  );
}
