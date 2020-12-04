import axios from "axios";
import { useState, useEffect } from "react";

import CharContainer from "../../components/CharContainer";
import CharList from "../../components/CharList";

import SearchBar from "../../components/SearchBar";
import NavButtons from "../../components/NavButtons";

const Pokemon = ({ favoritesList, setFavorites }) => {
	const [charList, setCharList] = useState(null);
	const [url, setUrl] = useState({
		baseUrl: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
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
		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err));
	}, [baseUrl, charList]);

	const image = {
		url:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png",
		alt: "Pokemon Logo",
	};

	const iconPokeDefault =
		"https://live.staticflickr.com/65535/50664861037_ee7d8a9ac5_b.jpg";

	const searchUrl = "https://pokeapi.co/api/v2/pokemon/";

	return (
		<CharContainer image={image} charList={charList}>
			<SearchBar setUrl={setUrl} url={url} searchUrl={searchUrl} />
			<NavButtons setUrl={setUrl} prevPage={prevPage} nextPage={nextPage} />

			<CharList
				charList={charList}
				isPokemon
				iconDefault={iconPokeDefault}
				favoritesList={favoritesList}
				setFavorites={setFavorites}
			/>
		</CharContainer>
	);
};

export default Pokemon;
