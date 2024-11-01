import React from 'react';

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, placeholder }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={label} className="text-lg text-black">
                {label}
            </label>
            <input
                id={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="gap-2.5 self-stretch py-3.5 pr-5 pl-6 w-full text-base font-medium bg-white border border-solid border-stone-300 min-h-[45px] rounded-[45px] text-stone-300"
            />
        </div>
    );
};

export default InputField;