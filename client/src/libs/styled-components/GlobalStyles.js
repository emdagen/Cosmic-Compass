import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
}

:root {
  --nav-height: 56px;
  --container-height: calc(100vh - 68.5px);
  /* --mobile-width: 500px; */
  --layout-padding: 32px 32px;
  --primary: #6C9A8B;
  --secondary: #A1683A;
  --error: #e7195a;
  --desktop-spacing: 0 32px;
  --mobile-spacing: 0 24px;
  --width-limit: 1024px;
  ${(props) => props.theme}
  /* --wave-primary: #C7D3dd;
  --wave-text: #012a4a;
  --wave-color-1: #468faf;//top outer, button, bottom inner //dark color with light text
  --wave-color-2:   #CEE5F2; // inner top and text ring
  --wave-color-6:   #FFFFFF; // inner top and text ring
  --wave-color-3: #37393A;// button
  --wave-color-4: #61a5c2;//bottom outer
  --wave-color-5: #a9d6e5;//background //dark color with light text
  --wave-color-6:   #FFFFFF; // inner top and text ring
  --settings-bg: #CEE5F2; */
}

body{
  font-family: 'Poppins';
  background-color:var(--wave-color-5) ;
  color: var(--wave-text);
}
img{
  width: 100%;
}
`;

export default GlobalStyle;
