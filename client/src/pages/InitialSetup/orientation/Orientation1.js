import React, { useEffect, useRef, useState } from 'react';
import FormInput from '../../../components/form/FormInput';
import { useUserContext } from '../../../hooks/context/useUserContext';
import patchHandler from '../../../utils/http-requests/patchHandler';

import Button from '@mui/material/Button';

import styled from 'styled-components';
import StepNumber from './components/StepNumber';
import { greetingsArray } from './data';
import DynamicTitle from './components/DynamicTitle';
import { motion } from 'framer-motion';
import { slideProps } from '../../../libs/framer-motion';
import FramerShake from '../../../libs/framer-motion/FramerShake';

const OrientationOne = () => {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(false);
	const { userData, setUserData } = useUserContext();
	const { _id, setup } = userData;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await patchHandler('/api/user/username', {
				...formData,
				_id,
				setup,
			});
			const { username } = response.data;
			if (response.status === 200) {
				setUserData({
					...userData,
					setup: response.data.setup,
					data: { ...userData.data, username },
				});
				setError(false);
			} else {
				console.log('nooooo', response.message);
			}
		} catch (err) {
			setError(true);
			console.log('oof, a username was not included');
		}
	};
	useEffect(() => {
		if (error) setError(true);
	}, [error]);

	return (
		<StyledContainer {...slideProps}>
			<StepNumber step={1} />
			<DynamicTitle strArray={greetingsArray} />
			<FramerShake error={error}>
				<StyledForm onSubmit={handleSubmit}>
					<FormInput
						formData={formData}
						setFormData={setFormData}
						name={'username'}
						type={'text'}
						label={'Please add a username'}
						errorData={[error, 'New phone who dis?']}
					/>
					<Button
						size='large'
						type='submit'
						variant='outlined'
						sx={{ mt: 1 }}
						onClick={() => {
							error && setError(true);
						}}
					>
						Next Step
					</Button>
				</StyledForm>
			</FramerShake>
		</StyledContainer>
	);
};

export default OrientationOne;

const StyledContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;

	margin-top: 8px;
	width: 100%;

	label {
		width: 100%;
	}
	button {
		width: 100%;
	}
`;
