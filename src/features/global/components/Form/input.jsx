// src/components/InputField.jsx
import React from "react";

const InputField = ({ label, error, as:Components = "input", ...rest }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Components
        {...rest}
        className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
          error ? "ring-2 ring-red-500" : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
        }`}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default InputField;
