import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleDate?: string;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  styleDate,
  ...props
}) => (
  <button
    type={type}
    className={`p-0 leading-none  ${styleDate}`} // Added focus:outline-none and focus:ring-0
    {...props}
  >
    {children}
  </button>
);
