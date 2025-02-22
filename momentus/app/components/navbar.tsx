"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-main-color text-primary-color">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-1">
            <Image
              src="/Logo-momentus.png"
              alt="Momentus Logo"
              width={40}
              height={40}
              priority
            />
            <p className="text-4xl font-semibold">momentus</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-raleway gap-10">
          <div className="flex gap-10 items-center">
            <Link href="#organization" className="hover:text-secondary-color transition">
              Organização
            </Link>
            <Link href="#events" className="hover:text-secondary-color transition">
              Eventos
            </Link>
            <Link href="#contacts" className="hover:text-secondary-color transition">
              Contatos
            </Link></div>
          <Link href="#login" className="hover:text-secondary-color transition border-l-2 border-primary-color ml-8 pl-8">
            Iniciar Sessão
          </Link>
          <Link
            href="#more"
            className="bg-primary-color text-background px-4 py-2 rounded-full font-semibold hover:bg-secondary-color transition"
          >
            Conheça mais!
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          <Image src={isMobileMenuOpen ? "/variant-cube.png" : "/default-cube.png"}
            alt="Menu"
            width={30}
            height={30}>
          </Image>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#F1EBE4] py-4 space-y-4 shadow-lg">
          <Link href="#organization" className="hover:text-[#f4a258] transition">
            Organização
          </Link>
          <Link href="#events" className="hover:text-[#f4a258] transition">
            Eventos
          </Link>
          <Link href="#contacts" className="hover:text-[#f4a258] transition">
            Contatos
          </Link>
          <Link href="#login" className="hover:text-[#f4a258] transition">
            Iniciar Sessão
          </Link>
          <Link
            href="#more"
            className="bg-[#013c5a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#f4a258] transition"
          >
            Conheça mais!
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
