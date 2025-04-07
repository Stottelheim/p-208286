
import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface UserInfoInputsProps {
  onChange: (field: string, value: string) => void;
  values: {
    name: string;
    email: string;
    orderNumber: string;
  };
}

export const UserInfoInputs: React.FC<UserInfoInputsProps> = ({
  onChange,
  values,
}) => {
  const [emailTooltipOpen, setEmailTooltipOpen] = useState(false);
  const [orderTooltipOpen, setOrderTooltipOpen] = useState(false);

  return (
    <div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name oder Pseudonym (Wird veröffentlicht)"
          className="w-full h-[50px] border rounded text-sm px-2.5 py-[15px] border-solid border-[#B4B4B4]"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
        <div className="text-[#767676] text-xs mt-[5px]">
          Der Name wird neben Deiner Bewertung angezeigt.
        </div>
      </div>
      <div className="mb-5">
        <div className="relative flex items-center">
          <input
            type="email"
            placeholder="E-Mail Addresse (Wird nicht veröffentlicht)"
            className="w-full h-[50px] border rounded text-sm px-2.5 py-[15px] border-solid border-[#B4B4B4]"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <div className="absolute right-[10px]">
            <Tooltip open={emailTooltipOpen} onOpenChange={setEmailTooltipOpen}>
              <TooltipTrigger asChild>
                <button 
                  type="button" 
                  onClick={() => setEmailTooltipOpen(!emailTooltipOpen)}
                  className="bg-transparent border-0 cursor-pointer p-0"
                >
                  <HelpCircle className="w-6 h-6 text-[#B4B4B4]" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="max-w-[160px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Kunden- oder Bestellnummer (Wird nicht veröffentlicht)"
            className="w-full h-[50px] border rounded text-sm px-2.5 py-[15px] border-solid border-[#B4B4B4]"
            value={values.orderNumber}
            onChange={(e) => onChange("orderNumber", e.target.value)}
          />
          <div className="absolute right-[10px]">
            <Tooltip open={orderTooltipOpen} onOpenChange={setOrderTooltipOpen}>
              <TooltipTrigger asChild>
                <button 
                  type="button" 
                  onClick={() => setOrderTooltipOpen(!orderTooltipOpen)}
                  className="bg-transparent border-0 cursor-pointer p-0"
                >
                  <HelpCircle className="w-6 h-6 text-[#B4B4B4]" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="max-w-[160px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
