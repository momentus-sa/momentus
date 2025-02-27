// components/Sidebar.tsx
"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-[26rem] bg-background text-primary-color h-full p-5 rounded-r-3xl border-r-4 border-secondary-color">
      <h2 className="text-xl font-bold mb-4">Gerenciar Evento</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/evento">🏠 Visão Geral</Link>
        <Link href="/evento/ingressos">🎟️ Ingressos</Link>
        <Link href="/evento/cronograma">📅 Cronograma</Link>
        <Link href="/evento/configuracoes">⚙️ Configurações</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
