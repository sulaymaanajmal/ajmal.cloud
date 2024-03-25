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
        I&#39;m web developer and I love to build things.
      </p>
      <button className="bg-primary hover:bg-secondary font-bold py-2 px-4 m-5 rounded inline-flex items-center transform transition-transform ease duration-200 translate-y-0 hover:-translate-y-1 hover:shadow-lg">
  <a href="mailto:sulaymaan@ajmal.cloud" className="mr-2">Say Hi!</a>
  <i className='bx bxs-envelope text-xl'></i>
</button>
    </main>
  );
};
