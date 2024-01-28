import React from "react";

const Inputbox = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        className="border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputbox;
