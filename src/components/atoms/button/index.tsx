import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleDate: string;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  styleDate,
  ...props
}) => (
  <button type={type} className={`w-full ${styleDate}`} {...props}>
    {children}
  </button>
);
