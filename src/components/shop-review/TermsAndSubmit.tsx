import React from "react";

interface TermsAndSubmitProps {
  onSubmit: () => void;
}

export const TermsAndSubmit: React.FC<TermsAndSubmitProps> = ({ onSubmit }) => {
  return (
    <div>
      <div className="text-[#767676] text-xs leading-[18px] mb-[15px]">
        <span>Es gelten die </span>
        <a href="#" className="text-[#767676] underline">
          Nutzungsbedingungen, Bewertungsrichtline
        </a>
        <span> und </span>
        <a href="#" className="text-[#767676] underline">
          Datenschutzbestimmungen
        </a>
        <span> von idealo.de</span>
      </div>
      <button
        onClick={onSubmit}
        className="w-full h-[50px] text-white rounded text-base font-medium cursor-pointer bg-[#0771D0] border-[none] hover:bg-[#0556A0]"
      >
        Bewertung abgeben
      </button>
    </div>
  );
};
