import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';
// import './MaterialUI.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import MobileDrawer from './MobileDrawer';

const ToggleDrawer = () => {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const debounceOpenDrawer = useDebounce(() =>
		setState({ ...state, left: true })
	);
	const debounceCloseDrawer = useDebounce(() =>
		setState({ ...state, left: false })
	);

	return (
		<>
			<IconButton
				onClick={debounceOpenDrawer}
				size='medium'
				edge='start'
				color='inherit'
				aria-label='open drawer'
				sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
			>
				<GiHamburgerMenu />
			</IconButton>
			<StyledDrawer
				PaperProps={{
					sx: { width: '100vw', backgroundColor: 'transparent' },
				}}
				anchor={'left'}
				open={state['left']}
				onClose={debounceCloseDrawer}
			>
				<MobileDrawer
					anchor={'left'}
					debounceCloseDrawer={debounceCloseDrawer}
				/>
			</StyledDrawer>
		</>
	);
};

export default ToggleDrawer;

const StyledDrawer = styled(Drawer)`
	background-color: transparent;
`;
