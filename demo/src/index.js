import React from 'react';
import ReactDOM from 'react-dom';
import AnywhereEditor from '../../src/';
import './index.css';
const App = () => {
	return (
		<div>
			<AnywhereEditor
				controls={ [
					'Heading',
					'Content',
					'Gallery',
					'Quote',
					'Video',
					'Image',
					'SocialShare',
					'Fact',
				] }
			/>
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
