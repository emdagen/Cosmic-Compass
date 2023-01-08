import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { GiAries } from 'react-icons/gi';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { zodiacIcons } from '../../data/zodiacIcons';
import { useUserContext } from '../../hooks/context/useUserContext';
import { capitalizeFirstLetter } from '../../utils/capFirstLetter';

const options = zodiacIcons;

const ITEM_HEIGHT = 48;

export default function ZodiacDropdown() {
	const { userData } = useUserContext();

	const userZodiac = zodiacIcons.filter((zodiac) => {
		return capitalizeFirstLetter(userData.data.zodiac) === zodiac.sign;
	})[0];

	const [anchorEl, setAnchorEl] = React.useState(null);
	const navigate = useNavigate();
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (zodiac) => {
		navigate(`/zodiac/${zodiac.sign.toLowerCase()}`);
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				aria-label='more'
				id='long-button'
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup='true'
				onClick={handleClick}
				size='medium'
				edge='start'
				color='inherit'
				sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
			>
				{userZodiac.icon()}
			</IconButton>
			<Menu
				id='long-menu'
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}
			>
				{options.map((option) => (
					<StyledMenuItem key={option.sign} onClick={() => handleClose(option)}>
						{option.icon()}
						<h4>{option.sign}</h4>
					</StyledMenuItem>
				))}
			</Menu>
		</div>
	);
}

const StyledMenuItem = styled.li`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 8px 4px;

	cursor: pointer;
	:hover {
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;
