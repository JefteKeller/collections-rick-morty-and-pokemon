import axios from "axios";
import { useState, useEffect } from "react";

import { Card, Button, Input } from "antd";
import {
	LeftCircleTwoTone,
	RightCircleTwoTone,
	LoadingOutlined,
} from "@ant-design/icons";

const RickAndMorty = () => {
	const [charList, setCharList] = useState(null);
	const [url, setUrl] = useState({
		baseUrl: "https://rickandmortyapi.com/api/character/?page=1",
		prevPage: "",
		nextPage: "",
	});
	const [pageNum, setPageNum] = useState(0);
	const [searchParam, setSearchParam] = useState("");

	const { baseUrl, prevPage, nextPage } = url;

	const handleCharList = res => {
		setCharList(res.data.results);
		setUrl({ prevPage: res.data.info?.prev, nextPage: res.data.info?.next });
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
		console.log(searchText);
		setUrl({
			...url,
			baseUrl: `https://rickandmortyapi.com/api/character/?page=1&name=${searchText}`,
		});
	};

	useEffect(() => {
		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err.response));
	}, [baseUrl, charList]);

	if (!charList) {
		return (
			<div className="charTitle">
				<h2>Rick And Morty</h2>
				<h3>Loading</h3>
				<LoadingOutlined />
			</div>
		);
	} else {
		return (
			<div className="charContainer">
				<h2 className="charTitle">Personagens de Rick And Morty</h2>
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
						charList.map(({ name, image }, index) => (
							<div
								key={index}
								className="charCard"
								data-name={name}
								data-image={image}
							>
								<Card hoverable cover={<img alt={name} src={image} />}>
									<Card.Meta title={name} />
								</Card>
							</div>
						))}
				</div>
			</div>
		);
	}
};

export default RickAndMorty;
