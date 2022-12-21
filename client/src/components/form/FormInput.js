import React from 'react';

const FormInput = ({ formData, setFormData, name, type }) => {
	return (
		<>
			<label htmlFor={name.toLowerCase()}>{name}</label>
			<input
				onChange={(e) => {
					setFormData({ ...formData, [e.target.name]: e.target.value });
					console.log(e.target.name);
				}}
				type={type}
				id={name.toLowerCase()}
				name={name.toLowerCase()}
			></input>
		</>
	);
};

export default FormInput;
