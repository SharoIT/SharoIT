import React from 'react';
import { Button, Wrapper } from '../components/styled';
import { Link } from 'react-router-dom';
// components
import Introduction from '../components/layout/introduction';

function Home() {
	return (
		<Wrapper>
			<Introduction />
			<Link to="/new">
				<Button style={{ margin: '25px auto' }}>New document</Button>
			</Link>
		</Wrapper>
	);
}

export default Home;
