import Image from "next/image";
import Navbar from "../components/navbar"
import SignUp from "./singUp";

export default function Home() {
  return (
    <div>
     {/* <div className="mb-[4.5rem]"> <Navbar /></div> */}
      <SignUp />
    </div>
  );
}
