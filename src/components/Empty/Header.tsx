import emptyStyle from "src/styles/Empty.module.css";
import cvPic from "src/assets/img/Frame 24945.png";

const Header = () => {
	return (
		<header className={emptyStyle.header}>
			<div className={emptyStyle.title_container}>
				<h1 className={emptyStyle.h1}>
					Got a recent resume or <span>CV handy</span>?
				</h1>
				<p>
					Upload your resume or CV PDF so that we can help you speed yo the
					process of building an attractive Resumedone.
				</p>
				<p>
					You can later view and modify the imported information on Dashboard.
				</p>
			</div>
			<img src={cvPic} alt="Example of CV" />
		</header>
	);
};

export default Header;
