// "use client";

// import Link from "next/link";
// import { ReactNode } from "react";

// interface CardProps {
//   title: string;
//   description: string;
//   icon: ReactNode;
//   bgColor: string;
//   borderColor: string;
//   href?: string;
//   onClick?: () => void;
//   footerRightValue?: string;
//   valueColor?: string;
// }

// export function Card({
//   title,
//   description,
//   icon,
//   bgColor,
//   borderColor,
//   href,
//   onClick,
//   footerRightValue,
//   valueColor = "text-gray-800",
// }: CardProps) {
//   const isLink = !!href;
//   const Wrapper = isLink ? Link : "button";
//   const wrapperProps = isLink ? { href } : { onClick, type: "button" };

//   return (
//     <Wrapper {...(wrapperProps as any)} className="block w-full">
//       <div className={`relative border-2 ${borderColor} pt-5 pb-10 pl-3 pr-2 rounded-lg shadow-sm text-start transition bg-white flex flex-col gap-3 group cursor-pointer`}>
        
//         {/* Header: ícone + título */}
//         <div className="flex items-center gap-3 pb-8">
//           <div className={`p-3 rounded-lg ${bgColor} flex items-center justify-center transition-transform`}>
//             {icon}
//           </div>
//           <h3 className="font-semibold text-[18px] text-gray-900">{title}</h3>
//         </div>

//         {/* Descrição */}
//         <p className="text-gray-600 text-[18px] max-w-[75%]">{description}</p>

//         {/* Valor no canto inferior direito */}
//         {footerRightValue && (
//           <span className={`absolute bottom-3 right-4  text-5xl font-semibold ${valueColor}`}>
//             {footerRightValue}
//           </span>
//         )}
//       </div>
//     </Wrapper>
//   );
// }


"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
  borderColor: string;
  href?: string;
  onClick?: () => void;
  footerRightValue?: string;
  valueColor?: string;
}

export function Card({
  title,
  description,
  icon,
  bgColor,
  borderColor,
  href,
  onClick,
  footerRightValue,
  valueColor = "text-gray-800",
}: CardProps) {
  const isLink = !!href;
  const Wrapper = isLink ? Link : "button";
  const wrapperProps = isLink ? { href } : { onClick, type: "button" };

  return (
    <Wrapper {...(wrapperProps as any)} className="block w-full">
      <div
        className={`border-2 ${borderColor} rounded-lg shadow-sm bg-white  pt-5 pb-10 pl-3 pr-8 text-start flex justify-between items-center gap-4`}
      >
        {/* Conteúdo principal (esquerda) */}
        <div className="flex flex-col gap-3 max-w-[80%]">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${bgColor} flex items-center justify-center`}>
              {icon}
            </div>
            <h3 className="font-semibold text-[18px] text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600 text-[18px] max-w-[100%]">{description}</p>
        </div>

        {/* Valor alinhado verticalmente ao centro */}
        {footerRightValue && (
          <div className={`text-4xl font-semibold ${valueColor} whitespace-nowrap`}>
            {footerRightValue}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
