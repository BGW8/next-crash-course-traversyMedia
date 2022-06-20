import headerStyles from "../styles/Header.module.css";
// import { useEffect, useState } from "react";

const Header = () => {
	// const [randomNumber, setRandomNumber] = useState(undefined);

	// useEffect(() => {
	// 	setRandomNumber(Math.floor(Math.random() * 100));
	// }, []);

	return (
		<div>
			{/* <h1 className='title'>
				<span>WebDev</span> News
			</h1> */}
			<h1 className={headerStyles.title}>
				<span>WebDev</span> News
			</h1>
			<p className={headerStyles.description}>
				Keep up to date with the lastest web dev news
			</p>
			{/* <style jsx>
				{`
					.title {
						color: ${randomNumber < 50 ? "red" : "blue"};
					}
				`}
			</style> */}
		</div>
	);
};

export default Header;
