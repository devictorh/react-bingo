// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body,
  h1, h2, h3, h4, h5, h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  figure,
  hr {
    margin: 0;
    padding: 0;    
  }  
  /* Adicione outras regras de reset conforme necessário */
`;

export default GlobalStyles;