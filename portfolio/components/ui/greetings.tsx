"use client";

import Typed from 'typed.js';
import React from "react";

export default function Greetings() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hey!', 'Hello!', 'Hi!', 'Greetings!'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      // typed.destroy();
    };
  }, []);

  return (
    <div className='items-center'>
      <span ref={el} className='block max-w-min overflow-hidden m-0 p-0' style={{ caretColor: 'transparent' }}/>
    </div>
  );
};