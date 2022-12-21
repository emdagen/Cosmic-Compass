import React from 'react';

import styled from 'styled-components';
import ButtonList from './ButtonList';

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledTitle>Brand Name</StyledTitle>
			<ButtonList />
		</StyledNavbar>
	);
};

export default Navbar;

const StyledNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	border: 1px solid green;
	height: var(--nav-height);
	padding: 8px 16px;
`;

const StyledTitle = styled.h2``;
