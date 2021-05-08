import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
	// const categories = ["Dragon Ball", "Messi"];
	const [categories, setCategories] = useState(["Dragon Ball"]);

	// const handleAdd = () => {
	// 	setCategories([...categories, "Cristiano"]);
	// setCategories(["Cristiano", ...categories]);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			

			<ol>
				{categories.map((category) => (
					<GifGrid category={category} key={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
