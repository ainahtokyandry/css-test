import homeList from "src/data/homeList";
import homeStyles from "src/styles/Home.module.css";

const Main = () => {
	return (
		<main>
			<ul className={homeStyles.list}>
				{homeList.map((item, key) => (
					<li key={key}>
						<img src={item.icon} alt={item.title} />
						<div>
							<h2>{item.title}</h2>
							<p>{item.content}</p>
						</div>
					</li>
				))}
			</ul>
			<button className={homeStyles.button}>See less features</button>
		</main>
	);
};

export default Main;
