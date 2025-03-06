import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  ...props
}) => (
  <button type={type} className="bg-blue-500 text-white p-2 rounded" {...props}>
    {children}
  </button>
);
