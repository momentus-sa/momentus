import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlight from "./components/highlight";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Highlight/>
    </div>
  );
}
