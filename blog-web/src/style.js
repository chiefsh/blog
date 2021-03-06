import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle  = createGlobalStyle `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background: #f5f7f9;
  color: #555;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const Header = styled.div`
  height: 3px;
  background: #222;
`;

export const BodyWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 70%;
`;

export const BodyLeft = styled.div`
  float: left;
  width: 28%;
  height: 100%;
`;

export const BodyRight = styled.div`
  float: right;
  width: 72%;
  background: #fff;
`;

export const Footer = styled.div`
  height: 100px;
  text-align: center;
`;