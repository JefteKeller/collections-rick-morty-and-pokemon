import axios from "axios";
import { useState, useEffect } from "react";

import { rickUrl, rickImages } from "../../components/helper";

import CharContainer from "../../components/CharContainer";
import CharList from "../../components/CharList";

import SearchBar from "../../components/SearchBar";
import NavButtons from "../../components/NavButtons";

const RickAndMorty = () => {
	const { rickBaseUrl, rickSearchUrl } = rickUrl;
	const { rickLogo, rickIconDefault } = rickImages;

	const [charList, setCharList] = useState(null);
	const [url, setUrl] = useState({
		baseUrl: rickBaseUrl,
		prevPage: "",
		nextPage: "",
	});
	const { baseUrl, prevPage, nextPage } = url;

	const handleCharList = res => {
		setCharList(res.data.results);
		setUrl({ prevPage: res.data.info.prev, nextPage: res.data.info.next });
	};

	useEffect(() => {
		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err));
	}, [baseUrl]);

	const handleFavorites = e => {
		if (!e.target.dataset.name) {
			return;
		}
		const favoritesList =
			JSON.parse(localStorage.getItem("rickFavorites")) || [];

		if (favoritesList.some(({ name }) => name === e.target.dataset.name)) {
			return;
		}

		const newFavorite = {
			name: e.target.dataset.name,
			image: e.target.dataset.image,
		};

		const newFavoritesList = [...favoritesList, newFavorite];
		localStorage.setItem("rickFavorites", JSON.stringify(newFavoritesList));
	};

	return (
		<CharContainer
			className={"rickBG"}
			image={rickLogo}
			alt={"Rick And Morty Logo"}
			charList={charList}
		>
			<SearchBar setUrl={setUrl} url={url} searchUrl={rickSearchUrl} />
			<NavButtons setUrl={setUrl} prevPage={prevPage} nextPage={nextPage} />

			<CharList
				charList={charList}
				iconDefault={rickIconDefault}
				handleFavorites={handleFavorites}
			/>
		</CharContainer>
	);
};

export default RickAndMorty;
