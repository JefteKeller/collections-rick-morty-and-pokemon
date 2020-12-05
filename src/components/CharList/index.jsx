import "./styles.css";
import { Card } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

const CharList = ({ charList, isPokemon, iconDefault, handleFavorites }) => {
	const getImageID = url => {
		const brokenUrl = url.split("/");
		const id = brokenUrl[brokenUrl.length - 2];
		return id;
	};

	return (
		<div className="charList" onClick={handleFavorites}>
			{charList.map(({ name, image, url, id }, index) => {
				if (isPokemon) {
					if (url) id = getImageID(url);
					name = name.charAt(0).toUpperCase() + name.slice(1);
					image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
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
							<PlusCircleTwoTone />
							<img alt="Icon" src={iconDefault} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CharList;
