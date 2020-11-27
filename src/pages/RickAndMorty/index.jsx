import axios from "axios";
import { useState, useEffect } from "react";

import { Card } from "antd";

const RickAndMorty = () => {
	const [charList, setCharList] = useState([]);

	const url = "https://rickandmortyapi.com/api/character/";

	useEffect(() => {
		axios.get(url).then(res => setCharList(res.data.results));
	}, []);

	if (!charList) {
		return (
			<div>
				<h2>Rick And Morty</h2>
				<h3>Loading</h3>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Rick And Morty</h2>
				<div>
					{charList.map(({ name, image }, index) => {
						return (
							<Card
								key={index}
								hoverable
								cover={
									<img alt={name} src={image} onClick={e => console.log(e)} />
								}
							>
								<Card.Meta title={name} />
							</Card>
						);
					})}
				</div>
			</div>
		);
	}
};

export default RickAndMorty;
