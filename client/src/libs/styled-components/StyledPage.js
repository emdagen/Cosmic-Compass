import styled from 'styled-components';

export const StyledPage = styled.div`
	${({ location, birthday }) => {
		const pathnameArray = location.pathname.split('/');

		const legitCheck = pathnameArray.includes('tarot');
		console.log(birthday);
		if (legitCheck && pathnameArray.length > 3 && birthday) {
			return `max-width:none;
      padding: 0px 0px`;
		}
		return `max-width:var(--width-limit);
    
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  
  `;
	}};
	width: 100%;
	min-height: var(--container-height);
	margin: auto;
`;
