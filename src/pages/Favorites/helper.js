import { rickImages, pokeImages } from "../../components/helper";

const { rickLogo, rickIconFavorite } = rickImages;
const { pokeLogo, pokeIconFavorite } = pokeImages;

export const setImages = location => {
	if (location.pathname === "/rick-and-morty/favorites") {
		const rickImages = {
			logo: rickLogo,
			icon: rickIconFavorite,
			backgroundClass: "rickBG",
		};

		return rickImages;
	}

	if (location.pathname === "/pokemon/favorites") {
		const pokeImages = {
			logo: pokeLogo,
			icon: pokeIconFavorite,
			backgroundClass: "pokeBG",
		};

		return pokeImages;
	}
};
