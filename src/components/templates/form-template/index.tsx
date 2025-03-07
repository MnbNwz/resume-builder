import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

interface FormTemplateProps {
  title: string;
  component: React.ReactNode;
}

export const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  component,
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
          <p className="text-sm font-medium text-gray-700 ">{title}</p>

          <FaChevronUp
            className={`transform rotate-${isOpen ? `180` : `0`} text-gray-600`}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          {isOpen && <div>{component}</div>}
        </div>
      </div>
    </div>
  );
};
