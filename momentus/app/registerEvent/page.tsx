import Image from "next/image";
import Navbar from "../components/navbar"
import RegisterEvent from "./registerEvent";

export default function Home() {
  return (
    <div>
      <RegisterEvent />
    </div>
  );
}