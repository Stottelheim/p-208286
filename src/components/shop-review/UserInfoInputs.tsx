import React from "react";

interface UserInfoInputsProps {
  onChange: (field: string, value: string) => void;
  values: {
    name: string;
    email: string;
    orderNumber: string;
  };
}

export const UserInfoInputs: React.FC<UserInfoInputsProps> = ({
  onChange,
  values,
}) => {
  const QuestionIcon = () => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-[10px] w-6 h-6 fill-[#B4B4B4]"
    >
      <path d="M13.3 18.121C13.3 18.3781 13.2238 18.6295 13.0809 18.8433C12.9381 19.0571 12.735 19.2237 12.4975 19.3221C12.2599 19.4205 11.9986 19.4462 11.7464 19.396C11.4942 19.3459 11.2626 19.2221 11.0808 19.0403C10.899 18.8585 10.7751 18.6268 10.725 18.3746C10.6748 18.1225 10.7006 17.8611 10.799 17.6235C10.8974 17.386 11.064 17.183 11.2778 17.0401C11.4915 16.8973 11.7429 16.821 12 16.821C12.3448 16.821 12.6754 16.958 12.9192 17.2018C13.163 17.4456 13.3 17.7762 13.3 18.121ZM23 12.421C23 10.2454 22.3549 8.11869 21.1462 6.30975C19.9375 4.50081 18.2195 3.09091 16.2095 2.25835C14.1995 1.42579 11.9878 1.20795 9.85401 1.63239C7.72022 2.05682 5.76021 3.10447 4.22183 4.64285C2.68345 6.18123 1.6358 8.14124 1.21137 10.275C0.786929 12.4088 1.00477 14.6206 1.83733 16.6305C2.66989 18.6405 4.07979 20.3585 5.88873 21.5672C7.69767 22.7759 9.82441 23.421 12 23.421C14.9163 23.4176 17.7122 22.2576 19.7744 20.1954C21.8365 18.1332 22.9966 15.3374 23 12.421ZM21 12.421C21 14.2011 20.4722 15.9411 19.4832 17.4212C18.4943 18.9012 17.0887 20.0548 15.4442 20.7359C13.7996 21.4171 11.99 21.5954 10.2442 21.2481C8.49836 20.9008 6.89472 20.0437 5.63604 18.785C4.37737 17.5263 3.5202 15.9227 3.17294 14.1768C2.82567 12.431 3.0039 10.6214 3.68509 8.97687C4.36628 7.33234 5.51983 5.92673 6.99987 4.9378C8.47992 3.94887 10.22 3.42103 12 3.42103C14.3861 3.42367 16.6738 4.37273 18.361 6.05999C20.0483 7.74724 20.9974 10.0349 21 12.421ZM11.924 5.42103C11.0881 5.41694 10.2705 5.66574 9.57862 6.13476C8.8867 6.60377 8.35279 7.27107 8.047 8.04903C8.00946 8.15831 7.99428 8.27403 8.00235 8.3893C8.01043 8.50457 8.0416 8.61704 8.094 8.72003C8.17361 8.88371 8.29637 9.02256 8.44907 9.12162C8.60176 9.22068 8.7786 9.27618 8.96052 9.28215C9.14243 9.28812 9.32253 9.24432 9.48139 9.15549C9.64025 9.06665 9.77185 8.93614 9.86201 8.77803L10.139 8.40603C10.3476 8.10527 10.6257 7.85932 10.9497 7.68905C11.2737 7.51879 11.634 7.42924 12 7.42803C12.5304 7.42803 13.0391 7.63874 13.4142 8.01381C13.7893 8.38888 14 8.89759 14 9.42803C14 9.95846 13.7893 10.4672 13.4142 10.8422C13.0391 11.2173 12.5304 11.428 12 11.428L11.955 11.434C11.6955 11.441 11.4489 11.5487 11.2674 11.7341C11.0858 11.9196 10.9835 12.1685 10.982 12.428V13.721C10.982 13.9872 11.0877 14.2424 11.2759 14.4306C11.4641 14.6188 11.7194 14.7245 11.9855 14.7245C12.2516 14.7245 12.5069 14.6188 12.6951 14.4306C12.8833 14.2424 12.989 13.9872 12.989 13.721V13.264C13.9392 13.0255 14.7681 12.445 15.3172 11.6336C15.8663 10.8222 16.097 9.83688 15.9652 8.86609C15.8333 7.89529 15.3483 7.00716 14.6027 6.37157C13.8571 5.73599 12.9034 5.39756 11.924 5.42103Z" />
    </svg>
  );

  return (
    <div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name oder Pseudonym (Wird veröffentlicht)"
          className="w-full h-[50px] border rounded text-sm px-2.5 py-[15px] border-solid border-[#B4B4B4]"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
        <div className="text-[#767676] text-xs mt-[5px]">
          Der Name wird neben Deiner Bewertung angezeigt.
        </div>
      </div>
      <div className="mb-5">
        <div className="relative flex items-center">
          <input
            type="email"
            placeholder="E-Mail Addresse (Wird nicht veröffentlicht)"
            className="w-full h-[50px] border rounded text-sm px-2.5 py-[15px] border-solid border-[#B4B4B4]"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <QuestionIcon />
        </div>
      </div>
      <div className="mb-5">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Kunden- oder Bestellnummer (Wird nicht veröffentlicht)"
            className="w-full h-[50px] border rounded text-sm px-2.5 py-[15px] border-solid border-[#B4B4B4]"
            value={values.orderNumber}
            onChange={(e) => onChange("orderNumber", e.target.value)}
          />
          <QuestionIcon />
        </div>
      </div>
    </div>
  );
};
