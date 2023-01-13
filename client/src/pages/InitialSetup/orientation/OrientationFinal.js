import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../../components/form/FormInput';
import { useAddZodiac } from '../hooks/useAddZodiac';
import DynamicTitle from './components/DynamicTitle';
import StepNumber from './components/StepNumber';
import { birthdayArray } from './data';

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
			<StepNumber step={3} />
			<DynamicTitle strArray={birthdayArray} />

			<StyledForm onSubmit={handleSubmit} error={error}>
				<FormInput
					setFormData={setFormData}
					formData={formData}
					name={'Birthday'}
					type={'date'}
					errorData={[error, 'Enter birthday']}
					label={''}
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
	/* align-items: center; */

	gap: 16px;

	input {
		${(props) => props.error && 'color: #d32f2f'}
	}

	button {
		padding: 12px 16px;
		width: 100%;
	}
	div {
		width: 100%;
	}
`;
