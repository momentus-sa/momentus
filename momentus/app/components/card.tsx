"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    location: string;
    imageUrl: string;
    cost: string;
}

const Card: React.FC<CardProps> = ({ title, location, imageUrl, cost }) => {
    const colors = ["#f4a258", "#00cc7b", "#e15753", "#013C5A"];

    const [bgColor, setBgColor] = useState("#f4a258");

    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    }, []);

    return (
        <div className="w-auto h-fit rounded-2xl image-full"
            style={{ backgroundColor: bgColor }}>
                <figure><Image className="w-full rounded-t-2xl" src={imageUrl} alt="event" width={200} height={120} /></figure>
                <div className="flex flex-col gap-2 ml-5 mr-5 mt-2 pb-2 text-background">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <div className="flex gap-14 font-raleway font-light">
                        <div className="flex gap-1 items-center">
                            <Image src={"/place-maker.svg"} alt="location" width={20} height={20}></Image>
                            <p>{location}</p>
                        </div>
                        <p className="flex justify-end">{cost}</p>
                    </div>
                </div>
        </div>
    );
}
export default Card;