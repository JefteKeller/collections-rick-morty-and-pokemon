import { useLocation, useHistory } from "react-router-dom";

import { Card, Button } from "antd";
import { MinusCircleTwoTone } from "@ant-design/icons";

import "../../components/CharList/styles.css";

import CharContainer from "../../components/CharContainer";

import { setImages } from "./helper";

const Favorites = () => {
	const location = useLocation();
	const history = useHistory();

	const pageImages = setImages(location);
	const {
		logo,
		icon,
		backgroundClass,
		favoritesToken,
		returnPath,
	} = pageImages;

	const favoritesList = JSON.parse(localStorage.getItem(favoritesToken)) || [];

	const handleFavorites = e => {
		if (!e.target.dataset.name) {
			return;
		}

		const filteredList = favoritesList.filter(
			({ name }) => name !== e.target.dataset.name
		);

		localStorage.setItem(favoritesToken, JSON.stringify(filteredList));
		history.push([location.pathname]);
	};

	return (
		<CharContainer
			className={backgroundClass}
			charList={favoritesList}
			image={logo}
		>
			<div className="divTitle">
				<h3 className="favTitle">Favoritos</h3>
			</div>
			<div>
				<Button type="primary" onClick={() => history.push(returnPath)}>
					Retornar
				</Button>
			</div>
			<div className="charList" onClick={handleFavorites}>
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
							<MinusCircleTwoTone />
							<img alt="Icon" src={icon} />
						</div>
					</div>
				))}
			</div>
		</CharContainer>
	);
};

export default Favorites;
