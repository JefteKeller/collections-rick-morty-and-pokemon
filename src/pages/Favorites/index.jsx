import { useLocation, useHistory } from "react-router-dom";
import { getQueryStrings } from "../../components/helper";

import { setImages } from "./helper";

import { Card, Button } from "antd";
import { MinusCircleTwoTone } from "@ant-design/icons";

import { motion } from "framer-motion";

import CharContainer from "../../components/CharContainer";
import "../../components/CharList/styles.css";

const Favorites = () => {
	const location = useLocation();
	const history = useHistory();

	getQueryStrings(location, history);

	const pageImages = setImages(location);
	const {
		logo,
		icon,
		noFavImage,
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
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
				className="returnButton"
			>
				<Button type="primary" onClick={() => history.push(returnPath)}>
					Retornar
				</Button>
			</motion.div>
			<div className="charList" onClick={handleFavorites}>
				{favoritesList.length > 0 ? (
					favoritesList.map(({ name, image }, index) => (
						<motion.div
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
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
						</motion.div>
					))
				) : (
					<div className="noFav">
						<h5>Você não tem Favoritos</h5>
						<img alt="Nenhum Favorito" src={noFavImage} />
					</div>
				)}
			</div>
		</CharContainer>
	);
};

export default Favorites;
