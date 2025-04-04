
import React from "react";
import { Star } from "lucide-react";

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
  const iconSize = size === "lg" ? 24 : 20;

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={iconSize}
          className={`cursor-pointer ${
            value >= star ? "fill-[#0771D0] stroke-[#0771D0]" : "fill-[#DCDCDC] stroke-[#DCDCDC]"
          } hover:fill-[#0771D0] hover:stroke-[#0771D0]`}
          onClick={() => onChange?.(star)}
          role="button"
          aria-label={`Rate ${star} stars`}
          tabIndex={0}
        />
      ))}
    </div>
  );
};
