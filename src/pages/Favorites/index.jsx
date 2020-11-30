import { useLocation } from "react-router-dom";

import "../../components/CharList/styles.css";
import { Card } from "antd";

import CharContainer from "../../components/CharContainer";

const Favorites = ({ favoritesList, setFavorites }) => {
	const location = useLocation();

	const imageRick = {
		url:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png",
		alt: "Rick and Morty Logo",
	};

	const iconRickFavorite =
		"https://live.staticflickr.com/65535/50664039138_944f2d2c71_b.jpg";

	const imagePokemon = {
		url:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png",
		alt: "Pokemon Logo",
	};

	const iconPokeFavorite =
		"https://live.staticflickr.com/65535/50664039158_8c0c07364f_b.jpg";

	const setImage = () => {
		if (location.pathname === "/rick-and-morty/favorites") {
			return imageRick;
		}

		if (location.pathname === "/pokemon/favorites") {
			return imagePokemon;
		}
	};

	const setIcon = () => {
		if (location.pathname === "/rick-and-morty/favorites") {
			return iconRickFavorite;
		}

		if (location.pathname === "/pokemon/favorites") {
			return iconPokeFavorite;
		}
	};

	return (
		<CharContainer charList={favoritesList} image={setImage()}>
			<div className="divTitle">
				<h3 className="favTitle">Favoritos</h3>
			</div>
			<div
				className="charList"
				onClick={e => {
					const filteredList = favoritesList.filter(
						({ name }) => name !== e.target.dataset.name
					);
					setFavorites([filteredList]);
				}}
			>
				{favoritesList.map(({ name, image }, index) => (
					<div
						key={index}
						className="charCard"
						data-name={name}
						data-image={image}
					>
						<Card cover={<img alt={name} src={image} />}>
							<Card.Meta title={name} />
						</Card>
						<div className="favoriteIcon">
							<img alt="Icon" src={setIcon()} />
						</div>
					</div>
				))}
			</div>
		</CharContainer>
	);
};

export default Favorites;
