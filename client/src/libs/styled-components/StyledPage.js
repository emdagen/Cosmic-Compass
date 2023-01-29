import styled from 'styled-components';

export const StyledPage = styled.div`
	max-width: ${({ location }) => {
		const pathnameArray = location.pathname.split('/');
		console.log(pathnameArray);
		const legitCheck = pathnameArray.includes('tarot');
		if (legitCheck && pathnameArray.length > 2) {
			return 'none';
		}
		return 'var(--width-limit)';
	}};
	width: 100%;
	min-height: var(--container-height);
	/* max-width: var(--width-limit); */
	margin: auto;
	padding: var(--layout-padding);
	border: 1px solid purple;
`;
