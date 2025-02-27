"use client";

import React, { useState } from "react";
import CustomInput from "../components/input"
import Button from "../components/button"
import Link from "next/link"
import Logo from "../../public/Logo-momentus.png"
import Image from "next/image";

const SignUp: React.FC = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birth: "",
    });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode enviar os dados para uma API ou backend
  };


  return (
    <div className="w-full bg-singUp h-screen flex ">

        <div className="w-[45rem] h-full bg-background  rounded-r-3xl py-[1rem] flex items-center ">

            <div className="flex flex-col w-full md:gap-3 gap-1 justify-center items-center text-center md:mt-0 mt-[1rem]">

              <Image src={Logo} alt="Calendário" className="w-[3rem] h-full" />

                <h1 className="md:text-4xl text-2xl font-bold text-black">Crie sua conta</h1>
                
                <p className="font-light text-lg text-black">Junte-se a nós para criar <span className="text-secondary-color">momentus</span> inesquecíveis!</p>
                
                <form
                    id="signIn" // Adicionamos um ID ao formulário
                    onSubmit={handleSubmit}
                    className="md:w-[50%] w-full flex flex-col gap-2 "
                >
                    <CustomInput label="Nome" name="nome" />
                    <CustomInput label="E-mail" type="email" name="email" />
                    <CustomInput label="Senha" type="password" name="senha" />
                    <CustomInput label="Data de Nascimento" type="date" name="dataNascimento" />
                </form>

                <Button         
                onClick={() => (document.getElementById("signIn") as HTMLFormElement)?.requestSubmit()}
                text="Cadastro" 
                color="#f4a258"
                className="" />

                <p className="font-light text-xl text-black">Já é um membro? <Link href="signIn" className="text-secondary-color">Clique aqui </Link> para fazer login!   </p>

            </div>
        </div>
        <div>
             {/* Formulário */}
          
        </div>
      
    </div>
  );
};

export default SignUp;
