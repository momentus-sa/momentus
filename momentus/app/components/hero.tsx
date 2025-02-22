import Button from "../components/button";
import AnimatedGrid from "./animatedGrid";

const Hero: React.FC = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-t from-[#FFEBD6] to-[#FFFFFF] flex flex-row text-black mt-[4.5rem] px-20">
            <div className="flex flex-col w-1/2 gap-10 justify-center items-star">
                <h1 className="text-6xl font-bold text-secondary-color">Organize seu evento e crie <span className="text-primary-color">momentus</span> inesquecíveis!</h1>
                <p className="font-light text-lg">Simplifique a organização de eventos cristãos: crie, publique e venda em uma única plataforma</p>
                <Button text="Começar" color="#f4a258" />
            </div>
            <div className="flex flex-col w-1/2 justify-center">
            <AnimatedGrid/>
            </div>
        </div>
    );
}

export default Hero;