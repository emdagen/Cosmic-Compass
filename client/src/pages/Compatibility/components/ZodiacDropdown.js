import React, { useState } from 'react';
import { zodiacSignsArray } from '../../../data/zodiacSignsArray';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 200,
			color: 'white',
			backdropFilter: 'blur(5px)',
			backgroundColor: 'rgb(84,90,167,1)',
		},
	},
};

const names = zodiacSignsArray;

const ZodiacDropdown = ({ signState, setSignState }) => {
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;

		setSignState(value);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, width: 200, mt: 3 }}>
				<StyledSelect
					displayEmpty
					value={signState}
					onChange={handleChange}
					input={<OutlinedInput />}
					MenuProps={MenuProps}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem disabled value=''>
						<em>Select a Sign</em>
					</MenuItem>
					{names.map((name) => (
						<MenuItem key={name} value={name}>
							{name.toUpperCase()}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
		</div>
	);
};

export default ZodiacDropdown;

const StyledSelect = styled(Select)`
	li:hover {
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;
