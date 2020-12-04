import axios from "axios";
import { useState, useEffect } from "react";

import { pokeUrl, pokeImages } from "../../components/helper";

import CharContainer from "../../components/CharContainer";
import CharList from "../../components/CharList";

import SearchBar from "../../components/SearchBar";
import NavButtons from "../../components/NavButtons";

const Pokemon = ({ favoritesList, setFavorites }) => {
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
			setCharList(res.data.results);
			setUrl({ prevPage: res.data.previous, nextPage: res.data.next });
		}
	};

	useEffect(() => {
		console.log("Loop");

		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err));
	}, [baseUrl]);

	return (
		<CharContainer
			className={"pokeBG"}
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
				favoritesList={favoritesList}
				setFavorites={setFavorites}
			/>
		</CharContainer>
	);
};

export default Pokemon;
