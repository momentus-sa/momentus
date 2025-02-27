
"use client";

import React, { useState } from 'react'
import Image, { StaticImageData } from "next/image";
import { IoIosArrowDropdownCircle } from "react-icons/io";


interface AccordionProps {
    title: string;
    data: string;
    isExpanded: boolean;
    onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, data, isExpanded, onToggle }) => {

    return (
    <div className={`bg-secondary-color border-primary-color border-l-[10px] rounded-[16px] my-4 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "md:max-h-16 max-h-24"}`}>
        <div className="flex justify-between items-center md:p-5 p-3 cursor-pointer" onClick={onToggle}>
            <div className=' md:text-xl text-base font-bold text-primary-color'>
                {title}
            </div>
            <div>
                <IoIosArrowDropdownCircle className={`text-2xl text-primary-color transition-all duration-300  ${isExpanded ? "" : "-rotate-90"}`}/>
            </div>
        </div>
        <div className={`md:px-5 px-3  pb-5 text-primary-color overflow-hidden transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
            <div>
                {data}
            </div>

        </div>
    </div>
  )
}

export default Accordion;