// app/evento/layout.tsx
"use client";

import React from "react";
import Sidebar from "./sideBar"; // Importa o componente da sidebar

const EventoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen rounded-r-3xl">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo dinâmico das páginas do evento */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default EventoLayout;
