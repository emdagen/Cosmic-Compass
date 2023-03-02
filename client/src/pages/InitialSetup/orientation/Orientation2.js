import React, { useState } from 'react';
import styled from 'styled-components';
import patchHandler from '../../../utils/http-requests/patchHandler';
import { useUserContext } from '../../../hooks/context/useUserContext';
import DynamicTitle from './components/DynamicTitle';
import { pictureArray } from './data';
import { Button, Input } from '@mui/material';

import { buttonProps } from './styles';
import StepNumber from './components/StepNumber';
import { motion } from 'framer-motion';
import { slideProps } from '../../../libs/framer-motion';
import FramerShake from '../../../libs/framer-motion/FramerShake';
import Loading from '../../../components/Loading';
const { REACT_APP_BACKEND_URL } = process.env;
const Orientation2 = () => {
	const { userData, setUserData } = useUserContext();
	const { _id, setup } = userData;
	const [imageData, setImageData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
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
			setIsLoading(true);
			if (imageData) {
				const uploadResponse = await patchHandler(
					REACT_APP_BACKEND_URL + '/api/user/profile-image',
					{
						_id,
						imageData,
						setup,
					}
				);
				const { data, status, message } = uploadResponse;

				if (status === 200) {
					setUserData({
						...userData,
						data: { ...userData.data, profileImg: data.profileImg },
						setup: data.setup,
					});
					setIsLoading(false);
					console.log(message);
				} else {
					setIsLoading(false);
					console.log(message);
				}
			} else {
				console.log('no image was added');
				setError(true);
				setIsLoading(false);
			}
		} catch (err) {
			console.log('oops');
		}
	};

	return (
		<>
			<StyledOrientationPage {...slideProps}>
				<StepNumber step={2} />
				<DynamicTitle strArray={pictureArray} />
				<StyledImageContainer>
					{imageData && <img src={imageData} alt='user image' />}
				</StyledImageContainer>
				<FramerShake error={error}>
					<form onSubmit={handleSubmit} className={error ? 'error' : ''}>
						{error && <p>Must select an image</p>}
						{!imageData ? (
							<Input
								error={error}
								fullWidth
								variant='filled'
								type='file'
								accept='image/*'
								id='file'
								placeholder='Upload file'
								sx={{
									background: 'rgba(0,0,0,0.2)',
									p: 1,
									borderTopLeftRadius: 4,
									borderTopRightRadius: 4,
								}}
								onChange={(e) => handleFileUpload(e)}
							/>
						) : (
							<Button
								{...buttonProps}
								sx={{ mt: 1 }}
								type='reset'
								onClick={(e) => {
									e.preventDefault();
									setImageData(null);
								}}
							>
								Remove
							</Button>
						)}
						<Button {...buttonProps} sx={{ mt: 1 }} type='submit'>
							Upload Image
						</Button>
					</form>
				</FramerShake>
			</StyledOrientationPage>
			{isLoading && <Loading />}
		</>
	);
};

export default Orientation2;

const StyledOrientationPage = styled(motion.div)`
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: var(--layout-padding);

	img {
		width: 250px;
		transform: scale(1.1);
	}
	input {
		cursor: pointer;
	}

	.error {
		color: #d32f2f;
		input {
			color: #d32f2f;
		}
	}
`;

const StyledImageContainer = styled.div`
	border-radius: 50%;
	overflow: hidden;

	background-color: rgba(0, 0, 0, 0.6);
	margin: 24px auto;

	width: 250px;
	height: 250px;

	display: flex;
	align-items: center;
	justify-content: center;
`;
