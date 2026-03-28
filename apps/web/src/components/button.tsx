"use client";
interface Button {
  onClick?: () => void;
  children: string;
  size: "sm" | "lg";
  type?: "button" | "submit" | "reset"
}

export const Button = ({ onClick, children, size,type }: Button) => {

  const sizeStyles = {
    sm: "xl:px-6 xl:py-3 px-3 py-2 text-md font-medium",
    lg: "xl:px-32 xl:py-6 xl:text-3xl px-12 py-2 text-lg font-semibold",
  };

  return (
    <>
      <button
        className={`${sizeStyles[size]} text-white bg-blue-500 hover:scale-102 hover:bg-blue-600 flex items-center justify-center  rounded-md  transition-all duration-100 cursor-pointer`}
        onClick={onClick} type={type}
      >
        {children}
      </button>
    </>
  );
};
