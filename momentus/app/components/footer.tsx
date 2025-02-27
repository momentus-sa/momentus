"use client";

import React from "react";
import Image from 'next/image';

import Logo from '../../public/feedback-ballons/Logo.svg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";


const Footer: React.FC = () => {
  
  return (
    <div className="h-full w-full bg-primary-color flex-col justify-center mx-auto  md:px-20 px-5">
        <div className="md:flex-row flex flex-col md:pt-[4rem] pt-[2rem] pb-[2rem] justify-between mx-auto items-center">

            <div className="md:w-[50%] w-full text-center justify-center mx-auto">
                <div>
                <Image 
                    src={Logo} 
                    alt="Logo" 
                    className="md:w-[20rem] w-[14rem] pl-2 pb-2 md:text-left text-center md:mx-0 mx-auto"
                />
                </div>
                
                <div className="flex flex-col font-light gap-4 md:text-base  text-sm">
                    <div className="flex justify-start items-center text-left">
                        <FaLocationDot className={`md:text-2xl text-lg  transition-all duration-300 mx-4`}/>
                        <h4>Avenida Engenheiro Humberto Monte, Campus do Pici, Bloco ICA, sala EA 202. CEP: 60440-593, Bairro Pici, Fortaleza, Ceará</h4>
                    </div>
                    <div className="flex justify-start items-center text-left">
                        <FaPhoneAlt className={`md:text-2xl text-lg  transition-all duration-300 mx-4`}/>
                        <h4>(85) 99190-9205</h4>
                    </div>
                    <div className="flex justify-start items-center text-left">
                        <MdEmail className={`md:text-2xl text-lg  transition-all duration-300 mx-4`}/>
                        <h4>terceiracaixaempresa@gmail.com</h4>
                    </div>
                    <div className="flex justify-start items-center text-left">
                        <FaClock className={`md:text-2xl text-lg  transition-all duration-300 mx-4`}/>
                        <h4>Seg - Sex (08:00 - 18:00) e Sáb (09:00 - 12:00)</h4>
                    </div>
                </div>
            </div>

            <div className="rounded-lg">
                <iframe
                    className="hidden md:block rounded-lg"
                    width="645"
                    height="260"
                    style={{ border: "0" }} // Substitui frameborder
                    scrolling="no"
                    src="https://maps.google.com/maps?width=645&amp;height=260&amp;hl=en&amp;q=Sobral+(momentus)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                
                <iframe
                    className="md:hidden block rounded-lg mt-[1rem]"
                    width="371"
                    height="200"
                    style={{ border: "0" }} // Substitui frameborder
                    scrolling="no"
                    src="https://maps.google.com/maps?width=645&amp;height=260&amp;hl=en&amp;q=Sobral+(momentus)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
        
        <hr className="border-t border-gray-400 " />

        <div></div>

        <div className="flex w-full justify-center gap-10 items-center">
            <a  href="https://facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer" >
                <FaInstagram className="text-primary-color bg-slate-100  my-8 text-2xl p-1 w-10 h-10 rounded-full"/>
            </a>
            <a  href="https://facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer" >
                <CiLinkedin className="text-primary-color bg-slate-100  my-8 text-2xl p-1 w-10 h-10 rounded-full"/>
            </a>
            <a  href="https://facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer" >
                <FaFacebookF className="text-primary-color bg-slate-100  my-8 text-2xl p-1 w-10 h-10 rounded-full"/>
            </a>
        </div>
      
    </div>
  );
};

export default Footer;
