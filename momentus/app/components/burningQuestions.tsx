"use client";

import React, { useState } from 'react'
import Accordion from './accordion';

const accordionData = [
    { id: 1, title: "Como faço para começar a organizar um evento?", content: "O primeiro passo é definir o objetivo do evento e seu público-alvo. Depois, escolha a data, local e orçamento. Utilize uma plataforma de gestão de eventos para facilitar o planejamento, divulgação e venda de ingressos."},
    { id: 2, title: "Consigo acompanhar a quantidade de ingressos vendidos?", content: "Sim! Nossa plataforma permite monitorar em tempo real a quantidade de ingressos vendidos, ajudando você a planejar melhor o evento e tomar decisões estratégicas."},
    { id: 3, title: "É difícil configurar um evento na plataforma?", content: "Nada disso! Nossa interface é intuitiva e fácil de usar. Em poucos minutos, você pode criar seu evento, definir ingressos e começar a vender. E se precisar de ajuda, nossa equipe de suporte está sempre disponível!"},
    { id: 4, title: "A plataforma me ajuda na divulgação do evento?", content: "Sim! Você pode criar uma página exclusiva para o seu evento e compartilhá-la com o público, facilitando o acesso às informações essenciais."},
    { id: 5, title: "O que diferencia essa plataforma de outras ferramentas de organização de eventos?", content: "Diferente de outras ferramentas, nossa plataforma foca na simplicidade e eficiência. Não somos apenas uma plataforma de venda de ingressos, mas um espaço onde você pode estruturar todo o seu evento de forma clara e organizada."}
]


const BurningQuestions: React.FC = () => {

    const [expandedId, setExpandedID] = useState<number | null>(null);

    const toggleExpanded = (id: number) => {
        setExpandedID(expandedId === id ? null : id);
    };


  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#D1EEFD] to-[#FBEAD7] flex flex-col text-black mt-[4.5rem] md:px-20 px-5">
        <div className="flex flex-col md:w-1/2 w-full gap-10 py-[3rem] items-center mx-auto">
            <h1 className="md:text-6xl text-3xl text-center  font-bold text-primary-color">Dúvidas Frequentes</h1>
            <p className="font-light md:text-lg text-sm " >Organizar um evento pode ser desafiador, mas nossa plataforma facilita tudo! Aqui estão as respostas para as principais dúvidas sobre como gerenciar sua equipe, cronograma, ingressos e divulgação.</p>
        </div>

        <div className=''>
            {accordionData.map((item) => (
                <Accordion
                key={item.id}
                title={item.title}
                data={item.content}
                isExpanded={expandedId === item.id}
                onToggle={() => toggleExpanded(item.id)}
              />
            ))}
        </div>
            
    </div>
  );
}

export default BurningQuestions;