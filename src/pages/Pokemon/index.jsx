import axios from "axios";
import { useState, useEffect } from "react";

import { Card, Button } from "antd";
import {
	LeftCircleTwoTone,
	RightCircleTwoTone,
	LoadingOutlined,
} from "@ant-design/icons";

const Pokemon = () => {
	const [charList, setCharList] = useState(null);
	const [url, setUrl] = useState({
		baseUrl: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
		prevPage: "",
		nextPage: "",
	});
	const [pageNum, setPageNum] = useState(0);

	const { baseUrl, prevPage, nextPage } = url;

	const handleCharList = res => {
		setCharList(res.data.results);
		setUrl({ prevPage: res.data?.previous, nextPage: res.data?.next });
	};

	const handleSetPrevUrl = () => {
		if (prevPage) {
			setPageNum(pageNum - 1);
			setUrl({ baseUrl: prevPage });
		}
	};

	const handleSetNextUrl = () => {
		if (nextPage) {
			setPageNum(pageNum + 1);
			setUrl({ baseUrl: nextPage });
		}
	};

	useEffect(() => {
		axios.get(baseUrl).then(res => handleCharList(res));
	}, [baseUrl, charList]);

	if (!charList) {
		return (
			<div>
				<h2>Pokemon</h2>
				<h3>Loading</h3>
				<LoadingOutlined />
			</div>
		);
	} else {
		return (
			<div>
				<h2 className="charTitle">Pokemon</h2>
				<div className="navButtons">
					<Button onClick={handleSetPrevUrl}>
						<LeftCircleTwoTone />
						Anterior
					</Button>{" "}
					<span>{pageNum}</span>{" "}
					<Button onClick={handleSetNextUrl}>
						Proximo
						<RightCircleTwoTone />
					</Button>
				</div>
				<div className="charList">
					{charList &&
						charList.map(({ name, url }, index) => {
							const brokenUrl = url.split("/");
							const id = brokenUrl[brokenUrl.length - 2];
							return (
								<Card
									key={index}
									hoverable
									cover={
										<img
											alt={name}
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
											onClick={e => console.log(e)}
										/>
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

export default Pokemon;
