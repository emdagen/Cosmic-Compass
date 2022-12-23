import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../../components/form/FormInput';
import { useAddZodiac } from '../hooks/useAddZodiac';

const OrientationFinal = () => {
	const [formData, setFormData] = useState(null);
	const [error, setError] = useState(false);

	const handleAddZodiac = useAddZodiac();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			if (formData === null) {
				setError(true);
			} else {
				handleAddZodiac(formData);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<h1>When's your birthday?</h1>
			<h2>Lorem ipsum ...</h2>
			<StyledForm onSubmit={handleSubmit}>
				{error && <h1>Try again</h1>}
				<FormInput
					setFormData={setFormData}
					formData={formData}
					name={'Birthday'}
					type={'date'}
				/>
				<button type='submit'>Save</button>
			</StyledForm>
		</>
	);
};

export default OrientationFinal;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 16px;
	button {
		padding: 12px 16px;
		width: 100%;
	}
	div {
		width: 100%;
	}
`;
