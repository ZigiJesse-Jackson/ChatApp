import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
	const cities = [
		"Dakar",
		"Accra",
		"Abuja",
		"Lagos",
		"Abidjan",
		"Nairobi",
		"Kimpala",
	];

	const handleSelectedItem = (selectedItem: string) => {
		console.log(selectedItem);
	};
	return (
		<div>
			<Message />
			<ListGroup
				items={cities}
				heading="Cities in Africa"
				onSelectedItem={handleSelectedItem}
			/>
		</div>
	);
}

export default App;
