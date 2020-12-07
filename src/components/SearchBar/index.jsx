import "./styles.css";
import { Button, Input } from "antd";

import { useState } from "react";

const SearchBar = ({ setUrl, url, searchUrl }) => {
	const [searchParam, setSearchParam] = useState("");

	const handleSearch = () => {
		const searchText = searchParam.toLowerCase().trim().replace(/\s/g, "+");
		setUrl({
			...url,
			baseUrl: `${searchUrl}${searchText}`,
		});
	};

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			setSearchParam(e.target.value);
			handleSearch();
		}
	};

	return (
		<div className="searchBar">
			<Input
				type="text"
				value={searchParam}
				onChange={e => setSearchParam(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<Button type="primary" onClick={handleSearch}>
				Pesquisar
			</Button>
		</div>
	);
};

export default SearchBar;
