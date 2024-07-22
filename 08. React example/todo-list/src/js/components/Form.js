import React from "react";
import "../../css/components/Form.css";

const Form = ({value, onChange, onCreate, onKeyDown}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyDown={onKeyDown}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;