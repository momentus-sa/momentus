"use client";

import Card from "./card";

const Highlight: React.FC = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-t from-[#FFFFFF] to-[#FFEBD6] flex flex-col text-secondary-color px-20 gap-12">
            <h1 className="text-6xl font-bold text-secondary-color">Destaques da semana</h1>
            <div className="md:grid md:grid-cols-3 md:gap-6 flex flex-col gap-6">
                <Card title="Computaria 2000" location="localização do evento 1" imageUrl="/example.png" cost="R$ 00,00"></Card>
                <Card title="Evento 1" location="localização do evento 1" imageUrl="/example.png" cost="R$ 00,00"></Card>
                <Card title="Computaria 2000" location="localização do evento 1" imageUrl="/example.png" cost="R$ 00,00"></Card>
                <Card title="Computaria 2000" location="localização do evento 1" imageUrl="/example.png" cost="R$ 00,00"></Card>
                <Card title="Computaria 2000" location="localização do evento 1" imageUrl="/example.png" cost="R$ 00,00"></Card>
                <Card title="Computaria 2000" location="localização do evento 1" imageUrl="/example.png" cost="R$ 00,00"></Card>
            </div>
        </div>
    );
};

export default Highlight;