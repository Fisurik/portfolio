import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Skills</h2>
							<p>
							    HTML, CSS, JavaScript, TypeScript, ReactJS, Redux, Wordpress,
								BootStrap, MaterialUI, Yarn,
								TailwindCSS
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;