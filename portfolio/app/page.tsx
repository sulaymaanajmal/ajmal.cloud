import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import Greetings from "@/components/ui/greetings";

export default function Home() {
return (
    <main className="flex min-h-screen flex-col items-center p-24 text-text">
      <h1 className="text-4xl font-bold"><Greetings /></h1>
      <h1 className="text-4xl font-bold">My name is Sulaymaan Ajmal.</h1>
      <Separator />
      <p className="text-lg">
        I'm web developer and I love to build things.
      </p>
    </main>
  );
};
