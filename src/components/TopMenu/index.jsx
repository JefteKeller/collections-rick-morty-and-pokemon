import { useHistory, useLocation } from "react-router-dom";

import { Menu } from "antd";
import { HomeFilled } from "@ant-design/icons";
import "./styles.css";

const TopMenu = () => {
	const history = useHistory();
	const location = useLocation();

	const sendTo = url => {
		return history.push(url);
	};

	return (
		<Menu
			selectedKeys={[location.pathname]}
			mode="horizontal"
			className="topMenu"
		>
			<Menu.Item key="/" onClick={() => sendTo("/")}>
				<HomeFilled />
			</Menu.Item>
			<Menu.Item
				key="/rick-and-morty"
				onClick={() => sendTo("/rick-and-morty")}
			>
				<img
					className="iconImage"
					alt="Rick and Morty Logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png"
				/>
			</Menu.Item>

			<Menu.Item key="/pokemon" onClick={() => sendTo("/pokemon")}>
				<img
					className="iconImage"
					alt="Pokemon Logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
				/>
			</Menu.Item>
		</Menu>
	);
};

export default TopMenu;
