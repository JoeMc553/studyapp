import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', className = '', onClick }) => {
    return (
        <button
            type={type}
            className={`overflow-hidden px-6 pt-2 pb-3.5 text-lg text-black bg-blue-400 rounded-[40px] ${className}`}
            onClick={onClick}
        >
            <span className="font-bold">{children}</span>
        </button>
    );
};

export default Button;