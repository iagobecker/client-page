'use client';
import { ReactNode } from 'react';

type StatusCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  value: string;
  borderColor: string;
  textColor: string;
};

export function StatusCard({
  icon,
  title,
  description,
  value,
  borderColor,
  textColor,
}: StatusCardProps) {
  return (
    <div className={`relative border ${borderColor} bg-white p-4 rounded-md shadow`}>
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <span className={`absolute bottom-2 right-4 text-xl font-bold ${textColor}`}>
        {value}
      </span>
    </div>
  );
}
