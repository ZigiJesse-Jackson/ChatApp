import { useState } from "react";
import Alert from "./Alert";

interface ButtonProp {
	buttonClass: string;
	buttonText: string;
}

const BootstrapButton = ({ buttonClass, buttonText }: ButtonProp) => {
	const [alertVisible, setAlertVisibility] = useState(false);
	return (
		<>
			{alertVisible && (
				<Alert
					onClose={() => {
						setAlertVisibility(false);
					}}
				>
					My Alert
				</Alert>
			)}
			<button
				className={"btn " + buttonClass}
				onClick={() => {
					setAlertVisibility(true);
				}}
			>
				{buttonText}
			</button>
		</>
	);
};

export default BootstrapButton;
