import Image from "next/image";
import Typed from 'typed.js';
import { Separator } from "@/components/ui/separator"
import React from "react";

export default function Home() {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-text">
      <h1 className="text-4xl font-bold">Welcome to my Portfolio</h1>
      <Separator />
      <p className="text-lg">
        I am a web developer and I love to build things.
      </p>
    </main>
  );
};
