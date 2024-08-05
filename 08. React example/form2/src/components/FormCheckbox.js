import React from 'react';

function FormCheckbox({name, checked, handleChange, label}) {
    return (
        <>
            <input
                type='checkbox'
                name={name}
                checked={checked}
                onChange={handleChange}
            />
            {label}
        </>
    );
}

export default FormCheckbox;