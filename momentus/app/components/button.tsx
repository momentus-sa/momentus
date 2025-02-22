import React from "react";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  text?: string;
  color?: string; // Aceita valores hexadecimais
  icon?: StaticImageData | string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "Clique Aqui",
  color = "#013c5a", // Cor padrão
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-4 rounded-full outline-none 
      transition-all duration-300 ease-in-out shadow-md min-w-fit w-fit
      hover:scale-105 active:scale-95 focus:ring-2 focus:ring-opacity-50 text-white ${className}`}
      style={{ backgroundColor: color }} // Aplica a cor diretamente
    >
      {icon && (
        <span className="w-5 h-5 flex-shrink-0">
          <Image src={icon} alt="Ícone" width={20} height={20} />
        </span>
      )}
      <span className="font-medium">{text}</span>
    </button>
  );
};

export default Button;
