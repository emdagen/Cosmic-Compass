import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../../components/form/FormInput';
import Loading from '../../../components/Loading';
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
	const [isLoading, setIsLoading] = useState(false);
	const handleAddZodiac = useAddZodiac();

	const handleSubmit = async (e) => {
		console.log(error);
		e.preventDefault();
		console.log(formData);
		setIsLoading(true);
		try {
			if (formData === null) {
				setError(true);
				setIsLoading(false);
			} else {
				handleAddZodiac(formData);
				setIsLoading(false);
			}
		} catch (err) {
			setError(true);
			console.log(err);
			setIsLoading(false);
		}
	};

	return (
		<>
			<StyledOrientationPage {...slideProps}>
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
			</StyledOrientationPage>
			{isLoading && <Loading />}
		</>
	);
};

export default OrientationFinal;

const StyledOrientationPage = styled(motion.div)`
	padding: var(--layout-padding);
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	/* align-items: center; */

	gap: 16px;

	input {
		${(props) => props.error && 'color: #d32f2f'};
		::-webkit-calendar-picker-indicator {
			${(props) =>
				props.error
					? 'filter: invert(30%) sepia(96%) saturate(1710%) hue-rotate(340deg) brightness(82%) contrast(102%);'
					: 'filter: invert(87%) sepia(15%) saturate(8%) hue-rotate(201deg) brightness(108%) contrast(94%)'};
		}
	}

	button {
		padding: 12px 16px;
		width: 100%;
	}
	div {
		width: 100%;
	}
`;
