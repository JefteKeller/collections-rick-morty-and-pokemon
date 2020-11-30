import "./styles.css";
import { Button, Input } from "antd";

import { useState } from "react";

const SearchBar = ({ setUrl, url, searchUrl }) => {
	const [searchParam, setSearchParam] = useState("");

	const handleSearch = () => {
		const searchText = searchParam.trim().replace(/\s/g, "+");
		setUrl({
			...url,
			baseUrl: `${searchUrl}${searchText}`,
		});
	};

	return (
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
	);
};

export default SearchBar;