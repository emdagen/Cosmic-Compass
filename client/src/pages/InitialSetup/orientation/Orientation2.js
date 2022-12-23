import React, { useState } from 'react';
import styled from 'styled-components';
import patchHandler from '../../../utils/http-requests/patchHandler';
import { useUserContext } from '../../../hooks/context/useUserContext';

const Orientation2 = () => {
	const { userData, setUserData } = useUserContext();
	const { _id, setup } = userData;
	const [imageData, setImageData] = useState(null);
	const [error, setError] = useState(false);
	//convert image to base64 string
	const handleFileUpload = (e) => {
		const fr = new FileReader();
		// const file = e.target.files[0];
		fr.readAsDataURL(e.target.files[0]);
		fr.onloadend = async (e) => {
			const dataUrl = e.currentTarget.result;
			setImageData(dataUrl);
			setError(false);
		};
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			if (imageData) {
				const uploadResponse = await patchHandler('/api/user/profile-image', {
					_id,
					imageData,
					setup,
				});
				const { data, status, message } = uploadResponse;

				if (status === 200) {
					setUserData({
						...userData,
						data: { ...userData.data, profileImg: data.profileImg },
						setup: data.setup,
					});
					console.log(message);
				} else {
					console.log(message);
				}
			} else {
				console.log('no image was added');
				setError(true);
			}
		} catch (err) {
			console.log('oops');
		}
	};

	return (
		<StyledOrientationPage>
			<img src={imageData} alt='user image' />
			<form onSubmit={handleSubmit}>
				{error && <p>Must select an image</p>}
				<h2>Add profile</h2>
				{!imageData ? (
					<input
						type='file'
						accept='image/*'
						id='file'
						placeholder='Upload file'
						onChange={(e) => handleFileUpload(e)}
					/>
				) : (
					<button
						type='reset'
						onClick={(e) => {
							e.preventDefault();
							setImageData(null);
						}}
					>
						Remove
					</button>
				)}
				<button type='submit'>Next Step</button>
			</form>
		</StyledOrientationPage>
	);
};

export default Orientation2;

const StyledOrientationPage = styled.div`
	img {
		width: 100%;
	}
`;
