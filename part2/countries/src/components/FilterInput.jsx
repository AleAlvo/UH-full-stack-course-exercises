import { useState } from "react";

const FilterInput = ({ onSearch }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		onSearch(newValue);
	};

	return (
		<div>
			<label htmlFor="country-filter">Find countries:</label>
			<input
				id="country-filter"
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter country name..."
			/>
		</div>
	);
};

export default FilterInput;
