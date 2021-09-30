import PublicationEditor from './PublicationEditor';

function App() {
	const savedContent = [];
	return (
		<div className="container">
			<PublicationEditor content={ savedContent } />
		</div>
	);
}

export default App;
