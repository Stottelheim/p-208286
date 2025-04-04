import React from "react";

interface ReviewInputProps {
  onTitleChange: (value: string) => void;
  onReviewChange: (value: string) => void;
  title: string;
  review: string;
}

export const ReviewInput: React.FC<ReviewInputProps> = ({
  onTitleChange,
  onReviewChange,
  title,
  review,
}) => {
  const maxChars = 2000;
  const remainingChars = maxChars - review.length;

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Dein Titel zur Bewertung"
        className="w-full h-[50px] border rounded text-sm mb-2.5 px-2.5 py-[15px] border-solid border-[#B4B4B4]"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <textarea
        placeholder="Deine Bewertung"
        className="w-full h-[120px] border rounded text-sm resize-none px-2.5 py-[15px] border-solid border-[#B4B4B4]"
        value={review}
        onChange={(e) => onReviewChange(e.target.value)}
        maxLength={maxChars}
      />
      <div className="text-[#787878] text-xs mt-[5px]">
        Noch {remainingChars} Zeichen
      </div>
    </div>
  );
};
