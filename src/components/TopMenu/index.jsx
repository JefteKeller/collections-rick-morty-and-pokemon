import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
	HomeFilled,
	TrademarkCircleFilled,
	RedditCircleFilled,
} from "@ant-design/icons";

const TopMenu = () => {
	const history = useHistory();
	const location = useLocation();

	const sendTo = url => {
		return history.push(url);
	};

	return (
		<Menu selectedKeys={[location.pathname]} mode="horizontal">
			<Menu.Item key="/" onClick={() => sendTo("/")}>
				<HomeFilled />
				Home
			</Menu.Item>
			<Menu.Item
				key="/rick-and-morty"
				onClick={() => sendTo("/rick-and-morty")}
			>
				<TrademarkCircleFilled />
				Rick And Morty
			</Menu.Item>

			<Menu.Item key="/pokemon" onClick={() => sendTo("/pokemon")}>
				<RedditCircleFilled />
				Pokemon
			</Menu.Item>
		</Menu>
	);
};

export default TopMenu;
