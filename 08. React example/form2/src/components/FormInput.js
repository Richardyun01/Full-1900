import React from 'react';

function FormInput({label, type, name, value, handleChange, placeholder, required}) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => handleChange(name, e.target.value)}
                placeholder={placeholder}
                required={required}
            />
        </>
    );
}

export default FormInput;