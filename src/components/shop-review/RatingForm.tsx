
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopRating } from "./ShopRating";
import { OptionalRatings } from "./OptionalRatings";
import { ReviewInput } from "./ReviewInput";
import { UserInfoInputs } from "./UserInfoInputs";
import { TermsAndSubmit } from "./TermsAndSubmit";
import { useToast } from "@/hooks/use-toast";

export const RatingForm: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [overallRating, setOverallRating] = useState(0);
  const [optionalRatings, setOptionalRatings] = useState({
    ordering: 0,
    delivery: 0,
    service: 0,
  });
  const [review, setReview] = useState({
    title: "",
    text: "",
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    orderNumber: "",
  });
  const [errors, setErrors] = useState({
    rating: "",
    title: "",
    text: "",
    name: "",
    email: "",
    orderNumber: "",
  });

  const handleOptionalRatingChange = (aspect: string, rating: number) => {
    setOptionalRatings((prev) => ({
      ...prev,
      [aspect]: rating,
    }));
  };

  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate overall rating
    if (overallRating === 0) {
      newErrors.rating = "Bitte geben Sie eine Gesamtbewertung ab";
      isValid = false;
    } else {
      newErrors.rating = "";
    }

    // Validate review title
    if (!review.title.trim()) {
      newErrors.title = "Bitte geben Sie einen Titel ein";
      isValid = false;
    } else {
      newErrors.title = "";
    }

    // Validate review text
    if (!review.text.trim()) {
      newErrors.text = "Bitte geben Sie eine Bewertung ein";
      isValid = false;
    } else {
      newErrors.text = "";
    }

    // Validate user info
    if (!userInfo.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!userInfo.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein";
      isValid = false;
    } else if (!userInfo.email.includes('@')) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!userInfo.orderNumber.trim()) {
      newErrors.orderNumber = "Bitte geben Sie Ihre Bestellnummer ein";
      isValid = false;
    } else {
      newErrors.orderNumber = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, navigate to success page
      toast({
        title: "Erfolg",
        description: "Ihre Bewertung wurde erfolgreich abgeschickt.",
      });
      navigate("/success");
    } else {
      // Show error toast
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle erforderlichen Felder aus.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="border bg-white mt-5 p-[30px] rounded-md border-solid border-[#E6E6E6] max-sm:p-5">
      <ShopRating onChange={setOverallRating} value={overallRating} />
      {errors.rating && (
        <div className="text-red-500 text-xs mt-[5px] mb-4">{errors.rating}</div>
      )}
      
      <ReviewInput
        onTitleChange={(title) => {
          setReview((prev) => ({ ...prev, title }));
          if (errors.title) {
            setErrors((prev) => ({ ...prev, title: "" }));
          }
        }}
        onReviewChange={(text) => {
          setReview((prev) => ({ ...prev, text }));
          if (errors.text) {
            setErrors((prev) => ({ ...prev, text: "" }));
          }
        }}
        title={review.title}
        review={review.text}
        errors={{
          title: errors.title,
          text: errors.text
        }}
      />
      
      <OptionalRatings
        onChange={handleOptionalRatingChange}
        values={optionalRatings}
      />
      
      <UserInfoInputs 
        onChange={handleUserInfoChange} 
        values={userInfo} 
        errors={{
          name: errors.name,
          email: errors.email,
          orderNumber: errors.orderNumber
        }}
      />
      
      <TermsAndSubmit onSubmit={handleSubmit} />
    </div>
  );
};
