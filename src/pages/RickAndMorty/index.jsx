import axios from "axios";
import { useState, useEffect } from "react";

import { rickUrl, rickImages } from "../../components/helper";

import CharContainer from "../../components/CharContainer";
import CharList from "../../components/CharList";

import SearchBar from "../../components/SearchBar";
import NavButtons from "../../components/NavButtons";

const RickAndMorty = ({ favoritesList, setFavorites }) => {
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
		console.log("Loop");
		axios
			.get(baseUrl)
			.then(res => handleCharList(res))
			.catch(err => console.log(err));
	}, [baseUrl]);

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
				favoritesList={favoritesList}
				setFavorites={setFavorites}
			/>
		</CharContainer>
	);
};

export default RickAndMorty;
