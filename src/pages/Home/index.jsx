import "./styles.css";
import {
	getQueryStrings,
	rickImages,
	pokeImages,
} from "../../components/helper";

import { useLocation, useHistory, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	const location = useLocation();
	const history = useHistory();

	getQueryStrings(location, history);

	const handleAddImage = page => {
		document.getElementById("home").classList.add(page);
	};

	const handleRemoveImage = page => {
		document.getElementById("home").classList.remove(page);
	};

	const { pokeLogo } = pokeImages;
	const { rickLogo } = rickImages;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			exit={{ opacity: 0 }}
			id="home"
		>
			<Link
				to="/rick-and-morty"
				onMouseEnter={() => handleAddImage("rickHomeHovered")}
				onMouseLeave={() => handleRemoveImage("rickHomeHovered")}
			>
				<motion.img
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
					className="homeImage"
					src={rickLogo}
					alt="Rick and Morty Logo"
				/>
			</Link>

			<Link
				to="/pokemon"
				onMouseEnter={() => handleAddImage("pokeHomeHovered")}
				onMouseLeave={() => handleRemoveImage("pokeHomeHovered")}
			>
				<motion.img
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
					className="homeImage"
					src={pokeLogo}
					alt="Pokemon Logo"
				/>
			</Link>
		</motion.div>
	);
};

export default Home;
