import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../../hooks/context/useUserContext';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import postHandler from '../../../utils/http-requests/postHandler';
import { useNavigate } from 'react-router';
// import FormInput from '../../../components/form/FormInput';
//MUI Imports
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { tarotButtonProps } from '../style';

const Form = () => {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(false);
	const { setSpreadData } = useTarotContext();
	const {
		userData: { _id },
	} = useUserContext();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			if (formData.spread) {
				const response = await postHandler('/api/tarot/spread', {
					...formData,
					_id,
				});
				console.log(response);
				if (response.status === 200) {
					setSpreadData(response.data);
					navigate('/tarot/spread');
					setError(false);
				} else {
					console.log('nooooo', response.message);
				}

				return;
			}
			setError(true);
			console.log(formData);
		} catch (err) {
			setError(true);
			console.log('unable to add spread data');
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<h3>Please select a spread</h3>
			<label>{!error ? 'required*' : 'try again'}</label>

			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<Select
						displayEmpty
						placeholder='Which will it be?'
						defaultValue={''}
						onChange={(e) => {
							setFormData({ ...formData, spread: e.target.value });
							setError(false);
						}}
						input={<OutlinedInput />}
					>
						<MenuItem disabled value=''>
							<em>Choose your tarot spread wisely </em>
						</MenuItem>
						<MenuItem value='single'>
							<StyledCard>1 Card</StyledCard>: For instant clarity (yes or no)
						</MenuItem>
						<MenuItem value='three-card'>
							<StyledCard>3 Card</StyledCard>: Insight to Past, Present & Future
						</MenuItem>
						<MenuItem value='five-card'>
							<StyledCard>5 Card</StyledCard>: Determine a course of action
						</MenuItem>
						<MenuItem value='seven-card'>
							<StyledCard>7 Card</StyledCard>: A detailed overview
						</MenuItem>
					</Select>
					<Button type='submit' {...tarotButtonProps}>
						Let's Begin !
					</Button>
				</FormControl>
			</Box>
		</StyledForm>
	);
};

export default Form;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
	text-align: center;
`;
const StyledCard = styled.span`
	font-weight: bold;
`;
