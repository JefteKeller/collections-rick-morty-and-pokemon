import "./styles.css";

import { motion } from "framer-motion";

const CharContainer = ({
	className,
	isPokemon,
	isRick,
	charList,
	image,
	alt,
	children,
}) => {
	if (!charList) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				exit={{ opacity: 0 }}
				className={className}
			>
				<div className="titleImage">
					<img alt={alt} src={image} />
				</div>
				{isRick && (
					<div className="rickLoading">
						<img
							alt="rickLoading"
							src={
								"https://pa1.narvii.com/6755/1fa0cec06f695cd9c243f879cea43a4650fde78d_hq.gif"
							}
						/>
					</div>
				)}
				{isPokemon && (
					<div className="pokeLoading">
						<img
							alt="pokeLoading"
							src={
								"https://cdn.dribbble.com/users/1505511/screenshots/3374551/___.gif"
							}
						/>
					</div>
				)}
			</motion.div>
		);
	} else {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				exit={{ opacity: 0 }}
				className={className}
			>
				<div className="titleImage">
					<img alt={alt} src={image} />
				</div>
				{children}
			</motion.div>
		);
	}
};

export default CharContainer;
