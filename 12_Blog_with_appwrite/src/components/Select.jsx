import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}></label>}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`${className} px-3 py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-500 duration-200 border border-gray-200 w-full`}
      >
        {options?.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
