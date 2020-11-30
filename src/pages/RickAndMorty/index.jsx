import axios from "axios";
import { useState, useEffect } from "react";

import CharContainer from "../../components/CharContainer";
import CharList from "../../components/CharList";

import SearchBar from "../../components/SearchBar";
import NavButtons from "../../components/NavButtons";

const RickAndMorty = ({ favoritesList, setFavorites }) => {
	const [charList, setCharList] = useState(null);
	const [url, setUrl] = useState({
		baseUrl: "https://rickandmortyapi.com/api/character/?page=1",
		prevPage: "",
		nextPage: "",
	});
	const { baseUrl, prevPage, nextPage } = url;

	const handleCharList = res => {
		setCharList(res.data.results);
		setUrl({ prevPage: res.data.info?.prev, nextPage: res.data.info?.next });
	};

	useEffect(() => {
		console.log("loop");
		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err));
	}, [baseUrl, charList]);

	const image = {
		url:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png",
		alt: "Rick and Morty Logo",
	};

	const iconRickDefault =
		"https://live.staticflickr.com/65535/50664861007_910aa74ab2_b.jpg";

	const searchUrl = "https://rickandmortyapi.com/api/character/?page=1&name=";

	return (
		<CharContainer image={image} charList={charList}>
			<SearchBar setUrl={setUrl} url={url} searchUrl={searchUrl} />
			<NavButtons setUrl={setUrl} prevPage={prevPage} nextPage={nextPage} />

			<CharList
				charList={charList}
				iconDefault={iconRickDefault}
				favoritesList={favoritesList}
				setFavorites={setFavorites}
			/>
		</CharContainer>
	);
};

export default RickAndMorty;
