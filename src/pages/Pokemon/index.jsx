import axios from "axios";
import { useState, useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { getQueryStrings, pokeUrl, pokeImages } from "../../components/helper";

import CharContainer from "../../components/CharContainer";
import CharList from "../../components/CharList";

import SearchBar from "../../components/SearchBar";
import NavButtons from "../../components/NavButtons";

const Pokemon = () => {
	const location = useLocation();
	const history = useHistory();

	getQueryStrings(location, history);

	const { pokeLogo, pokeIconDefault } = pokeImages;
	const { pokeBaseUrl, pokeSearchUrl } = pokeUrl;

	const [charList, setCharList] = useState(null);
	const [url, setUrl] = useState({
		baseUrl: pokeBaseUrl,
		prevPage: "",
		nextPage: "",
	});
	const { baseUrl, prevPage, nextPage } = url;

	const handleCharList = res => {
		if (!res.data.results) {
			setCharList([res.data]);
		} else {
			setTimeout(() => {
				setCharList(res.data.results);
				setUrl({ prevPage: res.data.previous, nextPage: res.data.next });
			}, 3000);
		}
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
			JSON.parse(localStorage.getItem("pokeFavorites")) || [];

		if (favoritesList.some(({ name }) => name === e.target.dataset.name)) {
			return;
		}

		const newFavorite = {
			name: e.target.dataset.name,
			image: e.target.dataset.image,
		};

		const newFavoritesList = [...favoritesList, newFavorite];
		localStorage.setItem("pokeFavorites", JSON.stringify(newFavoritesList));
	};

	return (
		<CharContainer
			isPokemon
			className={"pokeMainBG"}
			image={pokeLogo}
			alt={"Pokemon Logo"}
			charList={charList}
		>
			<SearchBar setUrl={setUrl} url={url} searchUrl={pokeSearchUrl} />
			<NavButtons setUrl={setUrl} prevPage={prevPage} nextPage={nextPage} />

			<CharList
				charList={charList}
				isPokemon
				iconDefault={pokeIconDefault}
				handleFavorites={handleFavorites}
			/>
		</CharContainer>
	);
};

export default Pokemon;
