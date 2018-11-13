import styled from 'styled-components';

const Wrapper = styled.section`
	background: #19171c;
	height: 100vh;
	width: 100%;
	padding: 50px;
	box-sizing: border-box;
`;

const Button = styled.button`
	background: #6574cd;
	color: white;
	padding: 13px 25px;
	border: none;
	font-size: 1rem;
	font-weigth: 600;
	outline: none;
	cursor: pointer;
	border-radius: 3px;
	display: block;
`;

export { Button, Wrapper };
