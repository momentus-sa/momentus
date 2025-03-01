"use client";

import React, { useState } from "react";
import CustomInput from "../components/input";
import Button from "../components/button";
import Link from "next/link";
import Logo from "../../public/Logo-momentus.png";
import Image from "next/image";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  return (
    <div className="w-full bg-singIn h-screen flex flex-row-reverse items-center">
      <div className="w-[45rem] h-full bg-background rounded-l-3xl py-[1rem] flex items-center">
        <div className="flex flex-col w-full md:gap-3 gap-1 justify-center items-center text-center md:mt-0 mt-[1rem]">
          <Image src={Logo} alt="Calendário" className="w-[3rem] h-full" />

          <h1 className="md:text-4xl text-2xl font-bold text-black">
            Bem vindo de volta!
          </h1>

          <p className="font-light text-lg text-black">
            Por favor, insira suas credenciais
          </p>

          <form id="signIn" onSubmit={handleSubmit} className="md:w-[50%] w-full flex flex-col gap-2">
            <CustomInput label="E-mail" type="email" name="email" />
            <CustomInput label="Senha" type="password" name="password" />

            {/* Opções abaixo da senha */}
            <div className="flex justify-between items-center text-sm text-black mb-10 px-4">
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  name="rememberMe" 
                  checked={formData.rememberMe} 
                  onChange={handleChange} 
                  className="w-4 h-4"
                />
                Lembrar de mim
              </label>
              <Link href="#" className="text-secondary-color hover:underline">
                Esqueceu a senha?
              </Link>
            </div>
          </form>

          <Button 
            onClick={() => (document.getElementById("signIn") as HTMLFormElement)?.requestSubmit()}
            text="Entrar" 
            color="#f4a258"
            className="mb-10" 
          />

          <p className="font-light text-xl text-black">
            Ainda não é um membro? <Link href="signUp" className="text-secondary-color">Cadastre-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
