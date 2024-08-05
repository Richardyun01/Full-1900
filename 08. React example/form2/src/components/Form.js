import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRadio from './FormRadio';
import FormCheckbox from './FormCheckbox';
import FormTextArea from './FormTextArea';

function Form({formData, handleChange, handleSubjectChange, handleReset, handleSubmit}) {
    return (
        <fieldset>
            <form action='#' method='get'>
                <FormInput
                    label="First Name*"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    handleChange={handleChange}
                    placeholder="Enter First Name"
                    required
                />
                <FormInput
                    label="Last Name*"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    handleChange={handleChange}
                    placeholder="Enter Last Name"
                    required
                />
                <FormInput
                    label="Enter Email*"
                    type="email"
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                    placeholder="Enter Email"
                    required
                />
                <FormInput
                    label="Contact*"
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    handleChange={handleChange}
                    placeholder="Enter Mobile number"
                    required
                />
                <label>Gender*</label>
                <FormRadio
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    handleChange={handleChange}
                    label="Male"
                />
                <FormRadio
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    handleChange={handleChange}
                    label="Feale"
                />
                <FormRadio
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    handleChange={handleChange}
                    label="Other"
                />
                <label>Your best Subject*</label>
                <FormCheckbox
                    name="english"
                    checked={formData.subjects.english}
                    handleChange={() => handleSubjectChange("english")}
                    label="English"
                />
                <FormCheckbox
                    name="maths"
                    checked={formData.subjects.maths}
                    handleChange={() => handleSubjectChange("maths")}
                    label="Maths"
                />
                <FormCheckbox
                    name="physics"
                    checked={formData.subjects.physics}
                    handleChange={() => handleSubjectChange("physics")}
                    label="Physics"
                />
                <FormInput
                    label="Upload Resume*"
                    type="file"
                    name="resume"
                    handleChange={(e) => handleChange("resume", e.target.files[0])}
                    placeholder="Upload File"
                    required
                />
                <FormInput
                    label="Enter URL*"
                    type="url"
                    name="url"
                    value={formData.url}
                    handleChange={handleChange}
                    placeholder="Enter URL"
                    required
                />
                <FormSelect
                    name="selectedOption"
                    value={formData.selectedOption}
                    handleChange={handleChange}
                    label="Select your choice"
                    options={[
                        {label: "Beginers", options: [{value: "1", text: "HTML:"}, {value: "2", text: "CSS:"}, {value: "3", text: "JavaScript:"}]},
                        {label: "Advance", options: [{value: "4", text: "React:"}, {value: "5", text: "Node:"}, {value: "6", text: "Express:"}, {value: "7", text: "MongoDB:"}]}
                    ]}
                />
                <FormTextArea
                    label="About*"
                    name="about"
                    value={formData.about}
                    handleChange={handleChange}
                    placeholder="About yourself"
                    required
                />
                <button type='reset' value='reset' onClick={() => handleReset()}>
                    Reset
                </button>
                <button type='submit' value='Submit' onClick={() => handleSubmit()}>
                    Submit
                </button>
            </form>
        </fieldset>
    );
}
export default Form;