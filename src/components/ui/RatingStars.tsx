import React from "react";

interface RatingStarsProps {
  size?: "sm" | "lg";
  onChange?: (rating: number) => void;
  value?: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  size = "lg",
  onChange,
  value = 0,
}) => {
  const starSize = size === "lg" ? "w-6 h-6" : "w-5 h-5";

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`${starSize} bg-[#DCDCDC] cursor-pointer hover:bg-[#0771D0] ${
            value >= star ? "bg-[#0771D0]" : ""
          }`}
          onClick={() => onChange?.(star)}
          role="button"
          aria-label={`Rate ${star} stars`}
          tabIndex={0}
        />
      ))}
    </div>
  );
};
