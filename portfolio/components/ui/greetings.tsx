"use client";

import Typed from 'typed.js';
import React from "react";

export default function Greetings() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Hello!',
        '¡Hola!',
        'Bonjour!',
        'Hallo!',
        'Ciao!',
        'Olá!',
        'Hallo!',
        'Привет!',
        '你好！',
        'こんにちは！',
        '안녕하세요!',
        'مرحبا!',
        'नमस्ते!',
        'হ্যালো!',
        'Merhaba!',
        'Γεια σας!',
        'Hej!',
        'Hei!',
        'Hej!',
        'Hei!',
        'Cześć!',
        'Ahoj!',
        'สวัสดี!',
        'Xin chào!',
        'Halo!',
        'Hai!',
        'Kumusta!',
        'Hujambo!',
        'שלום!',
        'Helló!',
        'Salut!',
        'Привіт!',
        'Здравейте!',
        'Zdravo!',
        'Здраво!',
        'Zdravo!',
        'Ahoj!',
        'Tere!',
        'Sveiki!',
        'Sveiki!',
        'Përshëndetje!',
        'გამარჯობა!',
        'Բարև!',
        'سلام!',
        'ہیلو!',
        'سلام!',
        'سڵاو!',
        'வணக்கம்!',
        'హలో!',
        'ಹಲೋ!',
        'ഹലോ!',
        'හෙලෝ!',
        'नमस्कार!',
        'হ্যালো!',
        'નમસ્તે!',
        'नमस्कार!',
        'ਸਤ ਸ੍ਰੀ ਅਕਾਲ!',
        'Dia dhuit!',
        'Halò!',
        'Helô!',
        'Kaixo!',
        'Hola!',
        'Ola!',
        'Alo!',
        'Halló!',
        'Hello!',
        'Moien!',
        'Pele!',
        'Ndewo!',
        'Sannu!',
        'Sawubona!',
        'Molo!',
        'Hallo!',
        'ሰላም!',
        'Maalimow!',
        'Akkam!',
        'ሰላም!',
        'Moni!',
        'Mhoroi!',
        'Manao ahoana!',
        'Lumela!',
        'Dumela!',
        'Dumela!',
        'Muraho!',
        'Amakuru!',
        'Nanga def!',
        'Ndalaama!',
        'Maakye!',
        'Woezo!',
        'Dumela!',
        'Wakũria!',
        'Oli otya!',
        'Munshimu!',
        'Mbote!',
        'Muli bwanji!',
        'Moni!',
        'Mwapya?',
        'Shani?',
        'Moni!',
        'Amakuru!'
    ],
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
    <div className='w-full max-w-screen-sm items-center h-12 m-5'>
      <span ref={el} className='block w-full overflow-hidden m-0 p-0 overflow-ellipsis text-size' style={{ caretColor: 'transparent' }}/>
      <style jsx>{`
        .text-size {
          font-size: 4vw;
        }
        @media (max-width: 640px) {
          .text-size {
            font-size: 10vw;
          }
        }
        @media (min-width: 640px) {
          .text-size {
            font-size: 3vw;
          }
        }
        @media (min-width: 768px) {
          .text-size {
            font-size: 2vw;
          }
        }
      `}</style>
    </div>
  );
};