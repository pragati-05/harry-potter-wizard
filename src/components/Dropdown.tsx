import React from "react";

interface IDropdownProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Dropdown = ({
  label,
  name,
  value,
  onChange,
  options,
}: IDropdownProps) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <select className="input-box" name={name} id={name} value={value} onChange={e => onChange(e.target.value)}>
         <option value={""}>{"Select"}</option>
        {options &&
          options?.length &&
          options.map((item) => {
            return <option value={item}>{item}</option>;
          })}
      </select>
    </div>
  );
};

export default Dropdown;
