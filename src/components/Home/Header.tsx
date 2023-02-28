import homeStyles from "src/styles/Home.module.css";

const Header = () => {
	return (
		<header className={homeStyles.header}>
			<h1 className={homeStyles.h1}>
				Make your resume stand out with the best online resume builder.
			</h1>
			<p>
				Chasing that dream job can feel daunting. We get you one step towards
				your goal faster. Get yourself ahead and land more interviews with our
				HR-approved templates successfully used by thousands of candidates.
				Simply add your personal details. Fill in the boxes. Choose the
				industry-specific text suited to your job. Export your new professional
				resume in your preferred format.
			</p>
		</header>
	);
};

export default Header;
