import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onSelectedItem: (selectedItem: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 ? <p>No Item found</p> : null}
			<ul className="list-group">
				{items.map((item, idx) => (
					<li
						className={
							selectedIndex === idx
								? "list-group-item active"
								: "list-group-item"
						}
						key={idx}
						onClick={() => {
							setSelectedIndex(idx);
							onSelectedItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
