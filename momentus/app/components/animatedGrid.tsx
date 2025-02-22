"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const colors = ["#f4a258", "#00cc7b", "#e15753", "#013C5A"]; // Cores dos retângulos

// Define os retângulos com posições personalizadas dentro da grid
const rectangles = [
  { id: 1, color: colors[0], colSpan: 3, rowSpan: 1, isFixed: false, animateHeight: false },
  { id: 2, color: colors[1], colSpan: 2, rowSpan: 1, isFixed: false, animateHeight: false },
  { id: 3, color: colors[2], colSpan: 1, rowSpan: 2, isFixed: false, animateHeight: true },
  { id: 4, color: colors[3], colSpan: 3, rowSpan: 2, isFixed: false, animateHeight: false },
  { id: 5, color: colors[1], colSpan: 2, rowSpan: 2, isFixed: false, animateHeight: false },
  { id: 6, color: colors[2], colSpan: 3, rowSpan: 1, isFixed: false, animateHeight: false },
  { id: 7, color: colors[0], colSpan: 3, rowSpan: 2, isFixed: true, animateHeight: false },
];

// Define os SVGs e suas posições dentro da grid
const svgs = [
  { id: "svg1", src: "/animated-grid/card1.svg", colSpan: 2, rowSpan: 1 },
  { id: "svg2", src: "/animated-grid/card2.svg", colSpan: 2, rowSpan: 3 },
  { id: "svg3", src: "/animated-grid/card3.svg", colSpan: 1, rowSpan: 1 },
  { id: "svg4", src: "/animated-grid/card4.svg", colSpan: 2, rowSpan: 3 },
];

const AnimatedGrid: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto p-4 h-3/4">
      {/* Grid dos SVGs acima */}
      <div className="absolute z-20 grid grid-cols-5 grid-rows-2 gap-2 w-full h-full">
        {svgs.map(({ id, src, colSpan, rowSpan }) => (
          <motion.div
            key={id}
            className="flex justify-center items-center cursor-grab"
            style={{
              gridColumn: `span ${colSpan} / span ${colSpan}`,
              gridRow: `span ${rowSpan} / span ${rowSpan}`,
            }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }} // Limite de movimento
            dragElastic={0.3} // Efeito elástico no arrasto
          >
            <Image src={src} alt={`SVG ${id}`} width={100} height={40} draggable={false} />
          </motion.div>
        ))}
      </div>

      {/* Grid dos retângulos */}
      <div className="grid grid-cols-5 grid-rows-5 gap-2 w-full h-full relative">
        {rectangles.map(({ id, color, colSpan, rowSpan, isFixed, animateHeight }) => (
          <motion.div
            key={id}
            className="rounded-lg"
            style={{
              backgroundColor: color,
              gridColumn: `span ${colSpan} / span ${colSpan}`,
              gridRow: `span ${rowSpan} / span ${rowSpan}`,
            }}
            initial={{ width: "100%", height: "100%" }}
            animate={
              isFixed
                ? {}
                : animateHeight
                ? { height: ["100%", "70%", "100%"] }
                : { width: ["100%", "70%", "100%"] }
            }
            transition={
              isFixed
                ? {}
                : {
                    duration: 2 + Math.random() * 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
            }
            drag={!isFixed} // Apenas elementos móveis podem ser arrastados
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }} // Restrições de movimento
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedGrid;
