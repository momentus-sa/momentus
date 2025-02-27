"use client";

import React, { useState } from "react";
import Image from "next/image";
import Calendar from "../../public/aboutOrganization/calendar.svg";

const AboutOrganizarion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="h-fit w-full bg-gradient-to-b from-[#FAFCFC] to-[#D7F0FD] flex-col justify-center mx-auto text-center text-black md:px-20 px-5 py-[4rem]">
      <div className="md:w-1/2 w-full flex justify-center mx-auto">
        <h1 className="md:text-6xl w-full text-3xl md:text-left text-center font-bold text-secondary-color">
          Conta pra gente: Qual a sua ideia de evento?
        </h1>
      </div>
      <div className="flex">
        <div className="md:flex-row flex flex-col justify-center py-[4rem] items-center mx-auto">
          {/* Texto com animação */}
          <div className="flex flex-col md:w-[30%] w-full md:gap-10 gap-4 items-start h-full mx-auto">
            <p className="font-light md:text-lg text-base md:text-justify text-center">
            Um sistema organizado é essencial para garantir que todas as etapas do planejamento de um evento ocorram de forma eficiente. Ele permite gerenciar prazos, distribuir responsabilidades e antecipar desafios, reduzindo imprevistos e aumentando a produtividade da equipe.            </p>

            {/* Texto oculto com animação */}
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                isExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
            <p className="font-light md:text-lg text-base md:text-justify text-center">
                Além disso, uma comunicação clara entre organizadores, fornecedores e clientes evita falhas e melhora a execução do evento. Com um planejamento estruturado, é possível definir metas, acompanhar o andamento das atividades e garantir que tudo esteja alinhado com as expectativas.

                Ao final, a avaliação dos resultados possibilita ajustes e melhorias contínuas, tornando cada nova produção mais eficiente e bem-sucedida.
            </p>
            </div>

            {/* "Ler mais" / "Ler menos" */}
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-secondary-color cursor-pointer font-semibold hover:underline md:py-0 py-[1rem]"
            >
              {isExpanded ? "- Ler menos" : "- Ler mais"}
            </span>
          </div>

          {/* Imagem ao lado */}
          <div className="">
            <Image src={Calendar} alt="Calendário" className="w-full h-full" />
          </div>
        </div>
      </div>
      
      <div className="flex md:flex-row   justify-between items-center  gap-[1rem] md:gap-[2rem]">

        <div className="md:w-full w-[11rem] h-[6rem] md:h-[8rem] rounded-xl md:rounded-3xl bg-[#E15753]"></div>
        <div className="md:w-full w-[11rem] h-[6rem] md:h-[8rem] rounded-xl md:rounded-3xl bg-[#E15753]"></div>
        <div className="md:w-full w-[11rem] h-[6rem] md:h-[8rem] rounded-xl md:rounded-3xl bg-[#E15753]"></div>
        <div className="md:w-full w-[11rem] h-[6rem] md:h-[8rem] rounded-xl md:rounded-3xl bg-[#E15753]"></div>
      </div>
    </div>
  );
};

export default AboutOrganizarion;
