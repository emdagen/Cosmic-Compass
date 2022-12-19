import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
}
:root {
  --primary: #6C9A8B;
  --secondary: #A1683A;
  --vivid-pink: #E8998D;
  --misty-rose: #EED2CC;
  --off-white: #1e1e1e;
  --error: #e7195a;
  --eggshell: #eae2ce;
}

body{
  font-family: 'Poppins';
  background-color:var(--off-white) ;
  color: var(--eggshell);
}
`;

export default GlobalStyle;
