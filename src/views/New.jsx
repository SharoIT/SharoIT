import React, { useState } from 'react';
import { Wrapper } from '../components/styled';
import CodeArea from '../components/CodeArea/';

function New() {
    const [code, setCode] = useState() 
	return (
		<div className="new">
			<Wrapper style={{ padding: '10px' }}>
				<CodeArea onChange={(({ target }) => setCode(target.value))} code={code} />
			</Wrapper>
		</div>
	);
}

export default New;
