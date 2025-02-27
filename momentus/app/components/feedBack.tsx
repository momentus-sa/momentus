"use client";

import React from 'react'
import Image from 'next/image';
import userPic1 from '../../public/feedback-ballons/user1.svg'
import userPic2 from '../../public/feedback-ballons/user2.svg'
import userPic3 from '../../public/feedback-ballons/user3.svg'

const Feedback: React.FC = () => {


  return (
    <div className="h-fit w-full bg-[#FFEBD6] flex flex-col text-black  md:px-20 px-5">
        
            <div className="flex flex-col md:w-[80%] w-full gap-10 py-[3rem] items-center mx-auto">
                <h1 className="md:text-6xl text-3xl text-center  font-bold text-secondary-color">O que nossos clientes têm a dizer</h1>
            </div>

           
            <div className='flex w-full justify-center gap-[8rem] items-center py-[2rem]'>
                
                <div className='bg-ballon1 h-[14rem] w-[40rem] flex '>
                    <div className='h-[10rem] flex items-center'>
                        <div className="w-[85%] pb-4">
                            <h1 className="text-black text-sm font-bold p-2 px-6">Eduardo Almeida - Diretor de Eventos</h1>
                            <h4 className='className="text-black font-light text-sm p-2 px-6'>”Utilizar a abordagem Momentus foi um divisor de águas para nós. A clareza no planejamento e a execução precisa permitiram que otimizássemos recursos e reduzíssemos imprevistos, tornando nosso evento não apenas bem-sucedido, mas memorável para todos os envolvidos."</h4>
                        </div>
                        <div>
                        <Image 
                            src={userPic1} 
                            alt="Foto do usuário" 
                            width={80} 
                            height={80} 
                            className="rounded-full"
                        />
                        </div>
                    </div>
                </div>
                
                <div className='w-[25rem] bg-text1 h-[12rem] '>
                    <h2 className='text-primary-color font-bold text-sm p-2 px-12'>
                    "Eduardo precisava organizar uma festa de gala para uma cerimônia internacional de premiação. Utilizando a abordagem Momentus, cada etapa foi planejada minuciosamente – desde o tapete vermelho até o serviço de jantar requintado – garantindo uma noite repleta de elegância, sofisticação e surpresas memoráveis para todos os participantes."
                    </h2>
                </div> 
            
            </div> 


            <div className='flex w-full justify-center gap-[8rem] items-center py-[2rem]'>
                <div className='w-[25rem] bg-text2 h-[12rem] '>
                    <h2 className='text-primary-color font-bold text-sm p-2 px-12'>
                    "Gabriela precisava organizar um evento de networking corporativo para celebrar o 10º aniversário de uma empresa de tecnologia. Com a metodologia Momentus, o evento contou com painéis interativos, sessões dinâmicas de networking e experiências inovadoras, encantando os convidados e destacando cada detalhe com criatividade e excelência."                    </h2>
                </div> 

                <div className='bg-ballon2 h-[14rem] w-[40rem] flex '>
                    <div className='h-[10rem] flex items-center justify-end'>
                        <div>
                            <Image 
                                src={userPic2} 
                                alt="Foto do usuário" 
                                width={80} 
                                height={80} 
                                className="rounded-full"
                            />
                        </div>
                        <div className="w-[85%] pb-4 text-right text-white ">
                            <h1 className="text-sm font-bold p-2 px-6">Eduardo Almeida - Diretor de Eventos</h1>
                            <h4 className='className=" font-light text-sm p-2 px-6 '>”Utilizar a abordagem Momentus foi um divisor de águas para nós. A clareza no planejamento e a execução precisa permitiram que otimizássemos recursos e reduzíssemos imprevistos, tornando nosso evento não apenas bem-sucedido, mas memorável para todos os envolvidos."</h4>
                        </div>
                        
                    </div>
                </div>
                    
            </div> 

            <div className='flex w-full justify-center gap-[8rem] items-center py-[2rem]'>
                <div className='bg-ballon3 h-[14rem] w-[40rem] flex '>
                    <div className='h-[10rem] flex items-center'>
                        <div className="w-[85%] pb-4">
                            <h1 className="text-white text-sm font-bold p-2 px-6">Renato Silva – Empresário e Organizador de Eventos</h1>
                            <h4 className='className=" text-white font-light text-sm p-2 px-6'>”Utilizar a abordagem Momentus foi um divisor de águas para nós. A clareza no planejamento e a execução precisa permitiram que otimizássemos recursos e reduzíssemos imprevistos, tornando nosso evento não apenas bem-sucedido, mas memorável para todos os envolvidos."</h4>
                        </div>
                        <div>
                        <Image 
                            src={userPic3} 
                            alt="Foto do usuário" 
                            width={80} 
                            height={80} 
                            className="rounded-full"
                        />
                        </div>
                    </div>
                </div>
                <div className='w-[25rem] bg-text3 h-[12rem] '>
                    <h2 className='text-primary-color font-bold text-sm p-2 px-12'>
                    "Renato precisava organizar um congresso empresarial que reunisse grandes líderes e empreendedores. Através da abordagem integrada da Momentus, o evento foi cuidadosamente planejado com palestras inspiradoras, sessões de breakout e experiências imersivas, elevando o padrão de qualidade e deixando uma impressão duradoura em todos os participantes."
                    </h2>
                </div> 
            </div> 
          
    </div>
  );
}

export default Feedback;