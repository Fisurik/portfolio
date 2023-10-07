import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Suren</em>
					</strong>
					<br />frontend developer
				</h1>
				<div className="header__text">I'm a web developer turning your ideas into reality with code and design. On my website, you'll discover my works and projects that reflect my passion for web development and creativity.</div>
			</div>
		</header>
	);
}

export default Header;