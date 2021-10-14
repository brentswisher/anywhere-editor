import PublicationEditor from './PublicationEditor';

function App() {
	const testData = [
		{ id: '3766', type: 'Heading', data: { text: 'Apple', level: 1 } },
		{ id: '4891', type: 'Heading', data: { text: 'Kiwi', level: 1 } },
		{ id: '5638', type: 'Heading', data: { text: 'Banana', level: 1 } },
		{ id: '433', type: 'Heading', data: { text: 'Grape', level: 1 } },
	];

	return (
		<div className="container">
			<PublicationEditor content={ testData } />
		</div>
	);
}

export default App;
