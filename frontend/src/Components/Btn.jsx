import React from "react";

const Btn = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full bg-black text-white rounded-md h-10"
    >
      {label}
    </button>
  );
};

export default Btn;
