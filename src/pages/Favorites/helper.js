import { rickImages, pokeImages } from "../../components/helper";

const { rickLogo, rickIconFavorite } = rickImages;
const { pokeLogo, pokeIconFavorite } = pokeImages;

export const setImages = location => {
	if (location.pathname === "/rick-and-morty/favorites") {
		const rickImages = {
			logo: rickLogo,
			icon: rickIconFavorite,
			noFavImage:
				"https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif",
			backgroundClass: "rickMainBG",
			favoritesToken: "rickFavorites",
			returnPath: "/rick-and-morty",
		};

		return rickImages;
	}

	if (location.pathname === "/pokemon/favorites") {
		const pokeImages = {
			logo: pokeLogo,
			icon: pokeIconFavorite,
			noFavImage:
				"https://i.pinimg.com/originals/6e/4e/03/6e4e030b11b113f046a2a0be16f9c9ee.gif",
			backgroundClass: "pokeMainBG",
			favoritesToken: "pokeFavorites",
			returnPath: "/pokemon",
		};

		return pokeImages;
	}
};
