import React, { useState } from 'react';
import styled from 'styled-components';
//MUI Imports
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { tarotButtonProps } from '../style';
import FramerShake from '../../../libs/framer-motion/FramerShake';
import { useTheme } from '@mui/material';
import { useSelectReading } from '../hook/useSelectReading';
import useDebounce from '../../../hooks/useDebounce';

const Form = () => {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(false);
	const errorTheme = useTheme().palette.error;
	const handleSelectReading = useSelectReading(formData, setError);
	const debounceReading = useDebounce(handleSelectReading);

	const MenuProps = {
		PaperProps: {
			style: {
				backdropFilter: 'blur(5px)',
				backgroundColor: 'rgb(84,90,167,1)',
			},
		},

		sx: {
			// '& .Mui-selected': {
			// 	backgroundColor: 'unset!important',
			// },
		},
	};
	return (
		<StyledForm
			onSubmit={(e) => {
				e.preventDefault();
				debounceReading();
			}}
			error={error}
			errorTheme={errorTheme}
		>
			<h3>Please select a spread</h3>
			<label>{!error ? 'required*' : 'try again'}</label>
			<FramerShake error={error}>
				<Box sx={{ minWidth: 120 }}>
					<FormControl fullWidth error={error}>
						<Select
							displayEmpty
							placeholder='Which will it be?'
							defaultValue={''}
							onChange={(e) => {
								setFormData({ ...formData, spread: e.target.value });
								setError(false);
							}}
							input={<OutlinedInput />}
							MenuProps={MenuProps}
						>
							<StyledMenuItem disabled value=''>
								<em>Choose your tarot spread wisely </em>
							</StyledMenuItem>
							<StyledMenuItem value='single'>
								<StyledCard>1 Card</StyledCard>: For instant clarity (yes or no)
							</StyledMenuItem>
							<StyledMenuItem value='three-card'>
								<StyledCard>3 Card</StyledCard>: Insight to Past, Present &
								Future
							</StyledMenuItem>
							<StyledMenuItem value='five-card'>
								<StyledCard>5 Card</StyledCard>: Determine a course of action
							</StyledMenuItem>
							<StyledMenuItem value='seven-card'>
								<StyledCard>7 Card</StyledCard>: A detailed overview
							</StyledMenuItem>
						</Select>
						<Button type='submit' {...tarotButtonProps}>
							Let's Begin !
						</Button>
					</FormControl>
				</Box>
			</FramerShake>
		</StyledForm>
	);
};

export default Form;
const StyledMenuItem = styled(MenuItem)`
	color: white !important;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2) !important;
	}
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
	text-align: center;

	${(props) => {
		if (props.error) return 'color:' + props.errorTheme.main + ';';
	}}
	em,
		svg {
		${(props) => {
			if (props.error) return 'color:' + props.errorTheme.main + ';';
		}}
	}
`;
const StyledCard = styled.span`
	font-weight: bold;
`;
