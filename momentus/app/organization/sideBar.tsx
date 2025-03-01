"use client";

import Link from "next/link";

import Image from 'next/image';
import Logo from '../../public/Logo-momentus-extendida.svg'
import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { FaClock, FaMoneyBills, FaTicketSimple } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { IoIosExit } from "react-icons/io";


import CustomButton from "./button"


const Sidebar = () => {
  return (
    <aside className="w-[26rem] bg-background text-primary-color h-full p-5 rounded-r-3xl border-r-4 border-secondary-color flex flex-col items-center">
        <div>
            <Image 
                    src={Logo} 
                    alt="Logo" 
                    className="md:w-[18rem] w-[14rem] pl-2 pb-2 md:text-left text-center md:mx-0 mx-auto"
            />
        </div>
        <div className="flex flex-col justify-between h-full py-[2rem]">
            <div className="">
                <h4 className="text-black">Geral</h4>
                <nav className="flex flex-col gap-2 items-start w-[18rem]">
                    <CustomButton icon={<AiFillHome />} name="Home" to="#" />
                    <CustomButton icon={<RxDashboard />} name="Dashboard" to="#" />
                </nav>
            </div>

            <div className="">
                <h4 className="text-black">Gerencie seu evento</h4>
                <nav className="flex flex-col gap-2 items-start w-[18rem]">
                    <CustomButton icon={<FaTicketSimple />} name="Ingresso" to="#" />
                    <CustomButton icon={<RiTeamFill />} name="Time" to="#" />
                    <CustomButton icon={<FaMoneyBills />} name="Finanças" to="#" />
                    <CustomButton icon={<FaClock />} name="Cronograma" to="#" />
                </nav>
            </div>

            <div className="">
                <h4 className="text-black">Ferramentas</h4>
                <nav className="flex flex-col gap-2 items-start w-[18rem]">
                    <CustomButton icon={<FaUser />} name="Perfil" to="#" />
                    <CustomButton icon={<BsGearFill />} name="Configurações" to="#" />
                </nav>
            </div>
        </div>
        <CustomButton icon={<IoIosExit />} name="Sair" to="#" />

    </aside>
  );
};

export default Sidebar;
