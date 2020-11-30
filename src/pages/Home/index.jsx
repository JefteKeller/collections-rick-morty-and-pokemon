import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<Link to="/rick-and-morty">
				<img
					className="homeImage"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png"
					alt="Rick and Morty Logo"
				/>
			</Link>
			<Link to="pokemon">
				<img
					className="homeImage"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
					alt="Pokemon Logo"
				/>
			</Link>
		</div>
	);
};

export default Home;
