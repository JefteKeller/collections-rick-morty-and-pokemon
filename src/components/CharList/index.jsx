import "./styles.css";
import { Card } from "antd";

const CharList = ({
	charList,
	isPokemon,
	iconDefault,
	favoritesList,
	setFavorites,
}) => {
	const getImageID = url => {
		const brokenUrl = url.split("/");
		const id = brokenUrl[brokenUrl.length - 2];
		return id;
	};

	return (
		<div
			className="charList"
			onClick={e => {
				if (e.target.dataset.name) {
					setFavorites([
						...favoritesList,
						{ name: e.target.dataset.name, image: e.target.dataset.image },
					]);
				}
			}}
		>
			{charList.map(({ name, image, url, id }, index) => {
				if (isPokemon) {
					if (url) id = getImageID(url);

					image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
				}

				return (
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
							<img alt="Icon" src={iconDefault} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CharList;
