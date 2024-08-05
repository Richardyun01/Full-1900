import React from 'react';

function FormTextArea({label, name, value, handleChange, placeholder, required}) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={(e) => handleChange(name, e.target.value)}
                placeholder={placeholder}
                required={required}
            />
        </>
    );
}

export default FormTextArea;