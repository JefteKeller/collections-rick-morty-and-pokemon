import { useHistory, useLocation } from "react-router-dom";
import { homeIcon, rickImages, pokeImages } from "../helper";

import { Menu } from "antd";
import "./styles.css";

import { motion } from "framer-motion";

const TopMenu = () => {
	const history = useHistory();
	const location = useLocation();

	const sendTo = url => {
		return history.push(url);
	};

	const { rickLogo } = rickImages;
	const { pokeLogo } = pokeImages;

	return (
		<Menu
			selectedKeys={[location.pathname]}
			mode="horizontal"
			className="topMenu"
		>
			<Menu.Item key="/" onClick={() => sendTo("/")}>
				<motion.img
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
					className="homeIcon"
					alt="Rick and Morty Logo"
					src={homeIcon}
				/>
			</Menu.Item>
			<Menu.Item
				key="/rick-and-morty"
				onClick={() => sendTo("/rick-and-morty")}
			>
				<motion.img
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
					className="iconImage"
					alt="Rick and Morty Logo"
					src={rickLogo}
				/>
			</Menu.Item>

			<Menu.Item key="/pokemon" onClick={() => sendTo("/pokemon")}>
				<motion.img
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
					className="iconImage"
					alt="Pokemon Logo"
					src={pokeLogo}
				/>
			</Menu.Item>
		</Menu>
	);
};

export default TopMenu;
