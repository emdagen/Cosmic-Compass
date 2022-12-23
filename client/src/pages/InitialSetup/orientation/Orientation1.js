import React, { useState } from 'react';
import FormInput from '../../../components/form/FormInput';
import { useUserContext } from '../../../hooks/context/useUserContext';
import patchHandler from '../../../utils/http-requests/patchHandler';

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

	return (
		<div>
			<p>Step 1</p>
			<h1>Welcome to the App</h1>
			<form onSubmit={handleSubmit}>
				{error && <p>Please add a user</p>}
				<FormInput
					formData={formData}
					setFormData={setFormData}
					name={'username'}
					type={'text'}
				/>
				<button>Next Step</button>
			</form>
		</div>
	);
};

export default OrientationOne;
