import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

interface FormTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full bg-white">
      <div className="p-4 rounded-md border border-gray-300">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <p className="text-sm font-medium text-gray-700">{title}</p>

          <FaChevronUp
            className="text-gray-600"
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          {isOpen && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};
