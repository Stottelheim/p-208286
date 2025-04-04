import React, { useState } from "react";
import { ShopRating } from "./ShopRating";
import { OptionalRatings } from "./OptionalRatings";
import { ReviewInput } from "./ReviewInput";
import { UserInfoInputs } from "./UserInfoInputs";
import { TermsAndSubmit } from "./TermsAndSubmit";

export const RatingForm: React.FC = () => {
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
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      overallRating,
      optionalRatings,
      review,
      userInfo,
    });
  };

  return (
    <div className="border bg-white mt-5 p-[30px] rounded-md border-solid border-[#E6E6E6] max-sm:p-5">
      <ShopRating onChange={setOverallRating} value={overallRating} />
      <ReviewInput
        onTitleChange={(title) => setReview((prev) => ({ ...prev, title }))}
        onReviewChange={(text) => setReview((prev) => ({ ...prev, text }))}
        title={review.title}
        review={review.text}
      />
      <OptionalRatings
        onChange={handleOptionalRatingChange}
        values={optionalRatings}
      />
      <UserInfoInputs onChange={handleUserInfoChange} values={userInfo} />
      <TermsAndSubmit onSubmit={handleSubmit} />
    </div>
  );
};
