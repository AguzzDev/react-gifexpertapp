import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
	//Estado inputValue
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 0) {
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Busca un gif!"
			></input>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: propTypes.func.isRequired,
};
