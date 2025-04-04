import React from "react";
import { RatingStars } from "@/components/ui/RatingStars";

interface OptionalRatingsProps {
  onChange: (aspect: string, rating: number) => void;
  values: Record<string, number>;
}

export const OptionalRatings: React.FC<OptionalRatingsProps> = ({
  onChange,
  values,
}) => {
  const aspects = [
    { key: "ordering", label: "Bestellvorgang" },
    { key: "delivery", label: "Lieferung Verpackung" },
    { key: "service", label: "Service/Gewährleistung" },
  ];

  return (
    <div className="mb-5">
      <div className="text-[#2D2D2D] text-sm font-bold mb-[15px]">
        Optionale Bewertungen
      </div>
      {aspects.map(({ key, label }) => (
        <div
          key={key}
          className="flex justify-between items-center mb-2.5 max-sm:flex-col max-sm:items-start max-sm:gap-2.5"
        >
          <div className="text-[#2D2D2D] text-sm">{label}</div>
          <RatingStars
            size="sm"
            onChange={(rating) => onChange(key, rating)}
            value={values[key]}
          />
        </div>
      ))}
    </div>
  );
};
