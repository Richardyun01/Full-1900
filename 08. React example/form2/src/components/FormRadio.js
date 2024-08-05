import React from 'react';

function FormRadio({name, value, checked, handleChange, label}) {
    return(
        <>
            <input
                type='radio'
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => handleChange(name, e.target.value)}
            />
            {label}
        </>
    );
}

export default FormRadio;