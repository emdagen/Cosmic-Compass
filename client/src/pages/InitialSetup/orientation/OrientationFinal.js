import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../../components/form/FormInput';
import { slideProps } from '../../../libs/framer-motion';
import FramerShake from '../../../libs/framer-motion/FramerShake';
import { useAddZodiac } from '../hooks/useAddZodiac';
import DynamicTitle from './components/DynamicTitle';
import StepNumber from './components/StepNumber';
import { birthdayArray } from './data';
import { buttonProps } from './styles';

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
		<motion.div {...slideProps}>
			<StepNumber step={3} />
			<DynamicTitle strArray={birthdayArray} />
			<FramerShake error={error}>
				<StyledForm onSubmit={handleSubmit} error={error}>
					<FormInput
						setFormData={setFormData}
						formData={formData}
						name={'Birthday'}
						type={'date'}
						errorData={[error, 'Enter birthday']}
						label={''}
					/>
					<Button {...buttonProps} sx={{ mt: 1 }} type='submit'>
						Save
					</Button>
				</StyledForm>
			</FramerShake>
		</motion.div>
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
