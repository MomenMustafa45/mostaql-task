import React from "react";
import { GoBrowser } from "react-icons/go";

interface Props {
  name: string;
  number: number;
  unit: string;
}

const StatsIcon = ({ name, number, unit }: Props) => {
  const ConvertToArabicNumbers = (num: number) => {
    const arabicNumbers =
      "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
    // eslint-disable-next-line no-new-wrappers
    return new String(num).replace(/[0123456789]/g, (d: any) => {
      return arabicNumbers[d];
    });
  };
  return (
    <div className="flex flex-row-reverse bg-[#f3eeee] items-center px-4 py-2 rounded shadow-md">
      <div className="rounded-full h-min p-2 bg-[#cbdad5]">
        <GoBrowser size={30} />
      </div>
      <div className="flex flex-col start font-serif mr-3">
        <p className="text-md text-[#395B64]">{name}</p>
        <p className="self-end text-[#395B64] font-bold text-lg">
          {ConvertToArabicNumbers(number)} {unit}
        </p>
      </div>
    </div>
  );
};

export default StatsIcon;
