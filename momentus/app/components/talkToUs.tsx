"use client";

import React, { useState } from "react";
import Button from "../components/button";

const TalkToUs: React.FC = () => {
  // Estados para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    description: "",
  });

  // Manipula mudanças nos campos do formulário
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
    <div className="h-fit w-full bg-[#FFEBD6] flex-col justify-center mx-auto text-center text-black  md:px-20 px-5">
      <div className="flex">
        <div className="md:flex-row flex flex-col justify-center py-[4rem] md:px-[8rem] px-0 items-center mx-auto">
          <div className="flex flex-col md:w-[50%] w-full md:gap-10 gap-4 py-[3rem] items-center mx-auto">
            <h1 className="md:text-6xl w-full text-2xl md:text-left text-center font-bold text-secondary-color">
              Conta pra gente: Qual a sua ideia de evento?
            </h1>
            <p className="font-light md:text-lg text-base md:text-left text-center">
              Somos a <strong>solução</strong> de confiança que você precisava para fazer as suas <strong>ideias</strong> se tornarem <strong>realidade</strong>!
            </p>
          </div>

          {/* Formulário */}
          <form
            id="talkToUsForm" // Adicionamos um ID ao formulário
            onSubmit={handleSubmit}
            className="md:w-[50%] w-full flex flex-col gap-4 p-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 border rounded-lg bg-secondary-color placeholder-black font-light focus:outline-none focus:ring-2 focus:ring-primary-color"
              placeholder="Seu nome*"
              required
            />

            <div className="flex w-full justify-between md:gap-4 gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-lg bg-secondary-color placeholder-black font-light focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Seu e-mail*"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-lg bg-secondary-color placeholder-black font-light focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Seu telefone*"
                required
              />
            </div>

            <input
              type="text"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="w-full px-4 py-4 border rounded-lg bg-secondary-color placeholder-black font-light focus:outline-none focus:ring-2 focus:ring-primary-color"
              placeholder="Nome do evento*"
              required
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 border rounded-lg bg-secondary-color placeholder-black font-light focus:outline-none focus:ring-2 focus:ring-primary-color"
              placeholder="Descreva sua ideia"
              required
            />
          </form>
        </div>
      </div>

      {/* Botão de Enviar FORA do <form> */}
      {/* <button
        type="button" // Evita o comportamento padrão do botão dentro de um form
        onClick={() => (document.getElementById("talkToUsForm") as HTMLFormElement)?.requestSubmit()}
        className="md:w-[22rem] w-[12rem] text-center justify-center mx-auto bg-secondary-color text-black py-4 rounded-full  hover:bg-opacity-90 transition-all mb-[4rem]"
      >
        Enviar
      </button> */}
      <Button         
      onClick={() => (document.getElementById("talkToUsForm") as HTMLFormElement)?.requestSubmit()}
      text="Começar" 
      color="#f4a258"
      className="mb-10" />

    </div>
  );
};

export default TalkToUs;
