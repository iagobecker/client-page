import Image from 'next/image';
import { Users, Clock4, Hourglass } from 'lucide-react';
import { Card } from '@/components/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-blue-400 to-white items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo Restaurante"
            width={80}
            height={80}
            className="rounded-full mb-2"
          />
          <h1 className="text-xl font-bold text-gray-900">Restaurante Beira Rio</h1>
          <p className="text-sm text-gray-600">Rua Capituva, 119 Torres RS</p>
        </div>

        <div className="flex flex-col gap-4">
          <Card
            title="Sua posição na fila"
            description="Sua posição é atualizada em tempo real conforme o andamento do atendimento."
            icon={<Users className="w-6 h-6 text-green-600" />}
            bgColor="bg-green-100"
            borderColor="border-green-200"
            footerRightValue="27"
            valueColor="text-green-700 italic"
          />

          <Card
            title="Tempo estimado de espera"
            description="Estimativa de tempo até o seu atendimento com base no ritmo atual da fila. Fique atento, sua vez está chegando!"
            icon={<Hourglass className="w-6 h-6 text-orange-600" />}
            bgColor="bg-orange-100"
            borderColor="border-orange-200"
            footerRightValue="10:22"
            valueColor="text-orange-400 italic"
          />

          <Card
            title="Seu Tempo de espera"
            description="Acompanhe o tempo que você já esperou desde sua entrada na fila."
            icon={<Clock4 className="w-6 h-6 text-blue-600" />}
            bgColor="bg-blue-100"
            borderColor="border-blue-200"
            footerRightValue="02:34"
            valueColor="text-blue-500 italic"
          />
        </div>
      </div>
    </div>
  );
}
