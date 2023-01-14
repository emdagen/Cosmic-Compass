import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../../hooks/context/useUserContext';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import postHandler from '../../../utils/http-requests/postHandler';
import { useNavigate } from 'react-router';
// import FormInput from '../../../components/form/FormInput';

const Form = () => {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(false);
	const { setSpreadData } = useTarotContext();
	const {
		userData: { _id },
	} = useUserContext();
	const navigate = useNavigate();
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await patchHandler('/api/user/username', {
	// 			...formData,
	// 			_id,
	// 			setup,
	// 		});
	// 		const { username } = response.data;
	// 		if (response.status === 200) {
	// 			setUserData({
	// 				...userData,
	// 				setup: response.data.setup,
	// 				data: { ...userData.data, username },
	// 			});
	// 			setError(false);
	// 		} else {
	// 			console.log('nooooo', response.message);
	// 		}
	// 	} catch (err) {
	// 		setError(true);
	// 		console.log('oof, a username was not included');
	// 	}
	// };

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
			<h3>Select Spread</h3>
			<label>{!error ? 'required*' : 'try again'}</label>
			<select
				name='spread'
				onChange={(e) => {
					setFormData({ ...formData, spread: e.target.value });
					setError(false);
				}}
				defaultValue={'Select'}
			>
				<option>Select</option>
				<option value='single'>Single</option>
				<option value='three-card'>3 Card</option>
				<option value='five-card'>5 Card</option>
				<option value='seven-card'>7 Card</option>
			</select>
			<button type='submit'>Submit</button>
		</StyledForm>
	);
};

export default Form;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
