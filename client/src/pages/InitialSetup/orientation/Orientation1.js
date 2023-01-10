import React, { useState } from 'react';
import FormInput from '../../../components/form/FormInput';
import { useUserContext } from '../../../hooks/context/useUserContext';
import patchHandler from '../../../utils/http-requests/patchHandler';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import styled from 'styled-components';

const OrientationOne = () => {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(false);
	const { userData, setUserData } = useUserContext();
	const { _id, setup } = userData;
	const theme = useTheme();
	console.log(theme);

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

	return (
		<StyledContainer>
			<Typography variant='h6' component='h6'>
				Step 1
			</Typography>
			<Typography variant='h3' component='h2'>
				Welcome <br />
				to the App
			</Typography>
			<StyledForm onSubmit={handleSubmit}>
				<FormInput
					formData={formData}
					setFormData={setFormData}
					name={'username'}
					type={'text'}
					errorData={[error, 'Please add a user']}
				/>
				<Button type='submit' variant='outlined'>
					Next Step
				</Button>
			</StyledForm>
		</StyledContainer>
	);
};

export default OrientationOne;

const StyledContainer = styled.div`
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
	width: 100%;

	label {
		width: 100%;
	}
	button {
		width: 100%;
	}
`;
