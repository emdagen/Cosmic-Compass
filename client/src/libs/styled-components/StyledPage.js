import styled from 'styled-components';

export const StyledPage = styled.div`
  ${({ location }) => {
    const pathnameArray = location.pathname.split('/');
    console.log(pathnameArray);
    const legitCheck = pathnameArray.includes('tarot');
    if (legitCheck && pathnameArray.length > 3) {
      return `max-width:none;
      padding: 0px 0px`;
    }
    return `max-width:var(--width-limit);
    padding: var(--layout-padding);`;
  }};
  width: 100%;
  min-height: var(--container-height);

  margin: auto;
`;
