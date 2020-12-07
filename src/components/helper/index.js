export const getQueryStrings = (location, history) => {
	if (location.search) {
		const queryString = location.search.split("=");
		const queryParam = queryString[0].slice(1);
		const searchQuery = queryString[1];

		if (queryParam === "list") {
			if (searchQuery === "pokemon") {
				history.push("/pokemon");
			}
			if (searchQuery === "rick") {
				history.push("/rick-and-morty");
			}
		}
	}
};

export const homeIcon =
	"https://live.staticflickr.com/65535/50687806797_09fe861702_b.jpg";

export const rickImages = {
	rickLogo:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png",
	rickIconDefault:
		"https://live.staticflickr.com/65535/50688190866_1c1ff75471_s.jpg",
	rickIconFavorite:
		"https://live.staticflickr.com/65535/50687442703_a02c313c47_n.jpg",
};

export const rickUrl = {
	rickBaseUrl: "https://rickandmortyapi.com/api/character/?page=1",
	rickSearchUrl: "https://rickandmortyapi.com/api/character/?page=1&name=",
};

export const pokeImages = {
	pokeLogo:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png",
	pokeIconDefault:
		"https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif",
	pokeIconFavorite:
		"https://live.staticflickr.com/65535/50687414293_304dfb1be4_c.jpg",
};

export const pokeUrl = {
	pokeBaseUrl: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
	pokeSearchUrl: "https://pokeapi.co/api/v2/pokemon/",
};
