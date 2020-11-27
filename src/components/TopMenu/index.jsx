import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";

const TopMenu = () => {
	const history = useHistory();
	const location = useLocation();

	return (
		<Menu selectedKeys={[location.pathname]} mode="horizontal">
			<Menu.Item key="/" onClick={() => history.push("/")}>
				Home
			</Menu.Item>
			<Menu.Item
				key="/rick-and-morty"
				onClick={() => history.push("/rick-and-morty")}
			>
				Rick And Morty
			</Menu.Item>
			<Menu.Item key="/pokemon" onClick={() => history.push("/pokemon")}>
				Pokemon
			</Menu.Item>
		</Menu>
	);
};

export default TopMenu;
