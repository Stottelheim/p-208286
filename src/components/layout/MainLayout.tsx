import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-none w-full min-h-screen bg-[#F0F0F0] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <div className="max-w-[1200px] mx-auto my-0 p-5 max-sm:p-2.5">
        {children}
      </div>
    </div>
  );
};
