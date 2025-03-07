// src/components/molecules/CheckboxWithLabel.tsx

import React from "react";
import { Checkbox } from "../../atoms";

interface CheckboxWithLabelProps {
  id: string;
  label: string;
  className?: string;
  register?: any;
}

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  id,
  label,
  className = "",
  register,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} className={className} register={register} />
      <label htmlFor={id} className="text-sm text-black">
        {label}
      </label>
    </div>
  );
};
