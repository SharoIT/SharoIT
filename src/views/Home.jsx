import React from 'react';
import styled from 'styled-components';

// components
import Introduction from '../components/layout/introduction';

const Wrapper = styled.section`
	background: papayawhip;
	height: 100vh;
	width: 100%;
	padding: 50px 0;
`;

function Home() {
	return (
		<Wrapper>
			<Introduction />
		</Wrapper>
	);
}

export default Home;
