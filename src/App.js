import PublicationEditor from './PublicationEditor';

function App() {
	const testData = [
		{
			id: '11111',
			innerContent: [
				{
					id: '3766',
					type: 'Heading',
					data: { text: 'Apple', level: 1 },
				}, //Block level data, array to eventually allow rows
			],
		},
		{
			id: '22222',
			innerContent: [
				{
					id: '4891',
					type: 'Heading',
					data: { text: 'Kiwi', level: 1 },
				},
				{
					id: '48931',
					type: 'Heading',
					data: { text: 'Kiwi Berry', level: 1 },
				},
			],
		},
		{
			id: '33333',
			innerContent: [
				{
					id: '5638',
					type: 'Heading',
					data: { text: 'Banana', level: 1 },
				},
			],
		},
		{
			id: '44444',
			innerContent: [
				{
					id: '433',
					type: 'Heading',
					data: { text: 'Grape', level: 1 },
				},
			],
		},
	];

	return (
		<div>
			<PublicationEditor content={ testData } template={ testData } />
		</div>
	);
}

export default App;
