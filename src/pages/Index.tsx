
import React from "react";
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { RatingForm } from "@/components/shop-review/RatingForm";

const Index = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-none w-full min-h-screen bg-[#F0F0F0] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <MainLayout>
          <div className="mt-5 max-w-[50%] mx-auto max-md:max-w-[70%] max-sm:max-w-full">
            <div
              className="rounded border text-[#0771D0] text-sm font-medium cursor-pointer mb-5 px-3 py-2 border-solid border-[#0771D0] hover:bg-[#0771D0] hover:text-white transition-colors w-fit"
              onClick={() => window.history.back()}
            >
              Zurück zum Shop
            </div>
            <h1 className="text-[#2D2D2D] text-2xl mb-5">
              Bitte bewerte den Shop Computeruniverse.de
            </h1>
            <RatingForm />
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Index;

