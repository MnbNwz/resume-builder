// src/components/atoms/Checkbox.tsx

import React from "react";

interface CheckboxProps {
  id: string;
  className?: string;
  register?: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  className = "",
  register,
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      className={`h-4 w-4 border border-gray-300 rounded-sm ${className}`}
      {...(register ? register(id) : {})}
    />
  );
};
