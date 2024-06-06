import React from 'react'

interface IButtonProps {
    label: string;
    onClick: () => void;
}

const Button = ({
    label,
    onClick
}: IButtonProps) => {
  return (
    <div>
        <button className="button" onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button