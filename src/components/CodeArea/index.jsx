import React from 'react';

import './style.css'




function CodeArea({ onChange, code }) {
	return (
		<div className="code-area">
            <textarea onChange={(e) => onChange(e)} cols="30" rows="10" className="code__textarea" />
		</div>
	);
}

export default CodeArea;
