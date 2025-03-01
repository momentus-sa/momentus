"use client";

import React, { useState } from "react";
import CustomInput from "../components/input";
import Button from "../components/button";
import Link from "next/link";
import Logo from "../../public/Logo-momentus.png";
import Image from "next/image";

const RegisterEvent: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    local: "",
    dataNascimento:"",
    formLink:"",
    description:"",

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
    <div className="w-full bg-registerEvent h-screen flex items-center">
      <div className="w-[45rem] h-full bg-background rounded-r-3xl py-[1rem] flex items-center">
        <div className="flex flex-col w-full md:gap-2 gap-1 justify-center items-center text-center md:mt-0 mt-[1rem]">
          <Image src={Logo} alt="Calendário" className="w-[3rem] h-full" />

          <h1 className="md:text-4xl text-2xl font-bold text-black">
            Bem vindo de volta!
          </h1>

          <p className="font-light text-lg text-black">
            Por favor, insira suas credenciais
          </p>

          <form id="signIn" onSubmit={handleSubmit} className="md:w-[50%] w-full flex flex-col gap-0">
                
                <CustomInput label="Nome do Evento" name="nome" />
                <CustomInput label="Localização" type="text" name="local" />
                <CustomInput label="Data do Evento" type="date" name="dataNascimento" />
                <CustomInput label="Link do registro" type="url" name="formLink" />
                <CustomInput label="Descrição do Evento" type="text" name="description" />


            {/* Opções abaixo da senha */}
            
          </form>

          <Button 
            onClick={() => (document.getElementById("signIn") as HTMLFormElement)?.requestSubmit()}
            text="Cadastrar" 
            color="#f4a258"
            className="" 
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;
