import React from "react";
import { RatingStars } from "@/components/ui/RatingStars";

interface ShopRatingProps {
  onChange: (rating: number) => void;
  value: number;
}

export const ShopRating: React.FC<ShopRatingProps> = ({ onChange, value }) => {
  return (
    <div className="mb-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/006dbbde5d40da8183600e2feb549f80c2b96c86?placeholderIfAbsent=true"
        className="w-[137px] h-[51px] mb-5"
        alt="Computer Universe logo"
      />
      <div className="text-[#2D2D2D] text-sm font-bold mb-2.5">
        Wie ist Dein Gesamteindruck vom Shop?
      </div>
      <RatingStars onChange={onChange} value={value} />
    </div>
  );
};
