import { useLocation } from "react-router-dom";

import { Card } from "antd";
import { MinusCircleTwoTone, PlusCircleTwoTone } from "@ant-design/icons";

import "../../components/CharList/styles.css";

import CharContainer from "../../components/CharContainer";

import { setImages } from "./helper";

const Favorites = ({ favoritesList, setFavorites }) => {
	const location = useLocation();

	const pageImages = setImages(location);

	const { logo, icon, backgroundClass } = pageImages;

	const handleFavorite = e => {
		const filteredList = favoritesList.filter(
			({ name }) => name !== e.target.dataset.name
		);
		setFavorites(filteredList);
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
			<div className="charList" onClick={handleFavorite}>
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
							<PlusCircleTwoTone />
							<img alt="Icon" src={icon} />
						</div>
					</div>
				))}
			</div>
		</CharContainer>
	);
};

export default Favorites;
