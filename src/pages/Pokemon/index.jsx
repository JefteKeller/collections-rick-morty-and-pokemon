import { useState } from "react";
import { Card } from "antd";

const Pokemon = () => {
	const [charList, setCharList] = useState([]);

	if (!!charList) {
		return (
			<div>
				<h2>Pokemon</h2>
				<h3>Loading</h3>
			</div>
		);
	} else {
		return <h2>Pokemon</h2>;
	}
};
export default Pokemon;
