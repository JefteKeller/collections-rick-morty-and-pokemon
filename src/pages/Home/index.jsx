import "./styles.css";
import { rickImages, pokeImages } from "../../components/helper";

import { Link } from "react-router-dom";

const Home = () => {
	const { pokeLogo } = pokeImages;
	const { rickLogo } = rickImages;

	const handleAddImage = page => {
		document.getElementById("home").classList.add(page);
	};

	const handleRemoveImage = page => {
		document.getElementById("home").classList.remove(page);
	};

	return (
		<div id="home">
			<Link
				to="/rick-and-morty"
				onMouseEnter={() => handleAddImage("rickHomeBG")}
				onMouseLeave={() => handleRemoveImage("rickHomeBG")}
			>
				<img className="homeImage" src={rickLogo} alt="Rick and Morty Logo" />
			</Link>
			<Link
				to="/pokemon"
				onMouseEnter={() => handleAddImage("pokeHomeBG")}
				onMouseLeave={() => handleRemoveImage("pokeHomeBG")}
			>
				<img className="homeImage" src={pokeLogo} alt="Pokemon Logo" />
			</Link>
		</div>
	);
};

export default Home;
