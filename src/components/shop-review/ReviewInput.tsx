
import React from "react";

interface ReviewInputProps {
  onTitleChange: (value: string) => void;
  onReviewChange: (value: string) => void;
  title: string;
  review: string;
  errors?: {
    title?: string;
    text?: string;
  };
}

export const ReviewInput: React.FC<ReviewInputProps> = ({
  onTitleChange,
  onReviewChange,
  title,
  review,
  errors = {}
}) => {
  const maxChars = 2000;
  const remainingChars = maxChars - review.length;

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Dein Titel zur Bewertung"
        className={`w-full h-[50px] border rounded text-sm mb-2.5 px-2.5 py-[15px] border-solid ${
          errors.title ? "border-red-500" : "border-[#B4B4B4]"
        }`}
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      {errors.title && (
        <div className="text-red-500 text-xs mt-[-5px] mb-2.5">{errors.title}</div>
      )}
      <textarea
        placeholder="Deine Bewertung"
        className={`w-full h-[120px] border rounded text-sm resize-none px-2.5 py-[15px] border-solid ${
          errors.text ? "border-red-500" : "border-[#B4B4B4]"
        }`}
        value={review}
        onChange={(e) => onReviewChange(e.target.value)}
        maxLength={maxChars}
      />
      <div className={`text-xs mt-[5px] ${errors.text ? "text-red-500" : "text-[#787878]"}`}>
        {errors.text || `Noch ${remainingChars} Zeichen`}
      </div>
    </div>
  );
};
