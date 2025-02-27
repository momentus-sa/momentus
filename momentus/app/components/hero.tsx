import Button from "../components/button";
import AnimatedGrid from "./animatedGrid";
import Image from 'next/image';
import StaticGrid from "../../public/animated-grid/Grid-static.svg"

const Hero: React.FC = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-t from-[#FFEBD6] to-[#FFFFFF] flex md:flex-row flex-col text-black mt-[4.5rem] px-20">
            <div className="flex flex-col md:w-1/2 w-full md:gap-10 gap-4 justify-center items-star md:mt-0 mt-[3rem]">
                <h1 className="md:text-6xl text-4xl font-bold text-secondary-color">Organize seu evento e crie <span className="text-primary-color">momentus</span> inesquecíveis!</h1>
                <p className="font-light text-lg">Simplifique a organização de eventos cristãos: crie, publique e venda em uma única plataforma</p>
                <Button text="Começar" color="#f4a258" className="hidden md:flex" />
            </div>
            <div className=" flex-col w-1/2 justify-center hidden md:flex">
                <AnimatedGrid />
            </div>
            <div className="md:hidden block my-[2rem]">
                <Image 
                    src={StaticGrid} 
                    alt="Foto do usuário" 
                    
                    className=" w-[22rem] "
                />
            </div>
            <div className="flex justify-center mx-auto">
            <Button text="Começar" color="#f4a258" className="md:hidden flex text-center" />
            </div>
        </div>
    );
}

export default Hero;