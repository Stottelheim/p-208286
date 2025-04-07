
import React from "react";
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  
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
              onClick={() => navigate("/")}
            >
              Zurück zur Bewertung
            </div>
            <div className="border bg-white mt-5 p-[30px] rounded-md border-solid border-[#E6E6E6] max-sm:p-5 text-center">
              <h1 className="text-3xl font-bold text-[#2D2D2D] mb-4">Success :D</h1>
              <p className="text-lg text-[#767676] mb-6">Vielen Dank für Ihre Bewertung!</p>
              <button 
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-[#0771D0] text-white rounded hover:bg-[#0556A0] transition-colors"
              >
                Neue Bewertung abgeben
              </button>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Success;
