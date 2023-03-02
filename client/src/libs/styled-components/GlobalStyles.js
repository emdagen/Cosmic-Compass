import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;

    /* ::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 5px;

}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
} */

}
::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}

:root {
  --nav-height: 56px;
  --container-height: calc(100vh - 56px);
  /* --mobile-width: 500px; */
  --layout-padding: 32px 32px 64px 32px;
  --primary: #6C9A8B;
  --secondary: #A1683A;
  --error: #e7195a;
  --desktop-spacing: 0 32px;
  --mobile-spacing: 0 24px;
  --sm-padding: 16px;
  --md-padding: 24px;
  --lg-padding: 32px;
  --container-width-limit: 500px;
  --width-limit: 1024px;
  ${(props) => props.theme}


}
h1, h2{
  font-family: 'Playfair Display', serif;
}
a{
  font-family: 'Playfair Display', serif;
}
body{
  /* font-family: 'Poppins'; */
  background-color:var(--wave-color-5) ;
  color: var(--wave-text);
}
img{
  width: 100%;
}
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: '500px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default GlobalStyle;
