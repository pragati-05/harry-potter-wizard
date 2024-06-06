import React from 'react'

interface IInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
}

const Input = ({
    label,
    name,
    value,
    onChange
}: IInputProps) => {
  return (
    <div className="input-container">
        <label htmlFor={name}>{label}</label>
        <input className='input-box' type="text" id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)}/>
    </div>
  )
}

export default Input