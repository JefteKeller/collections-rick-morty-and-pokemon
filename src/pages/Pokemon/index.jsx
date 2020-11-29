import axios from "axios";
import { useState, useEffect } from "react";

import { Card, Button, Input } from "antd";
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
	const [searchParam, setSearchParam] = useState("");

	const { baseUrl, prevPage, nextPage } = url;

	const handleCharList = res => {
		if (!res.data.results) {
			setCharList([res.data]);
		} else {
			setCharList(res.data.results);
			setUrl({ prevPage: res.data?.previous, nextPage: res.data?.next });
		}
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

	const handleSearch = () => {
		const searchText = searchParam.trim().replace(/\s/g, "+");
		// console.log(searchText);
		setUrl({
			...url,
			baseUrl: `https://pokeapi.co/api/v2/pokemon/${searchText}`,
		});
	};

	const getImageID = url => {
		const brokenUrl = url.split("/");
		const id = brokenUrl[brokenUrl.length - 2];
		return id;
	};

	useEffect(() => {
		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err));
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
			<div className="charContainer">
				<h2 className="charTitle">Personagens de Pokemon</h2>
				<div className="searchBar">
					<Input
						type="text"
						value={searchParam}
						onChange={e => setSearchParam(e.target.value)}
					/>
					<Button type="primary" onClick={handleSearch}>
						Pesquisar
					</Button>
				</div>
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
				<div className="charList" onClick={e => console.log(e)}>
					{charList &&
						charList.map(({ name, url, id }, index) => {
							if (url) id = getImageID(url);

							const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

							return (
								<div
									key={index}
									className="charCard"
									data-name={name}
									data-image={image}
								>
									<Card
										key={index}
										hoverable
										cover={<img alt={name} src={image} />}
									>
										<Card.Meta title={name} />
									</Card>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
};

export default Pokemon;
