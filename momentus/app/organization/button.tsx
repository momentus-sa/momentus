"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface CustomButtonProps {
  icon: ReactNode;
  name: string;
  to: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, name, to }) => {
  const pathname = usePathname(); // Obtém a rota atual

  const isActive = pathname === to; // Verifica se o botão está ativo

  return (
    <Link
      href={to}
      className={`flex items-center gap-2 py-1 transition text-lg justify-start text-left hover:text-secondary-color
        ${isActive ? "font-bold text-secondary-color border-l-4 border-secondary-color " : "text-black"}
      `}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default CustomButton;
