import axios from "axios";
import { useState, useEffect } from "react";

const GetCharacterList = url => {
	const [charList, setCharList] = useState([]);

	useEffect(() => {
		axios.get(url).then(res => setCharList(res.data.results));
	}, [url, charList]);
	console.log(url);
	if (charList) return charList;
};

export default GetCharacterList;
