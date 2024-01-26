import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

const Intro = () => {
	return (
		<section id="intro">
			<div className="IntroContent">
				<span className="hello">Hello,</span>
				<span className="introText">
					I'm <span className="introName">Smith</span> <br />
					Website Designer
				</span>
			</div>
			<img src={bg} alt="profile" className="bg" />
		</section>
	);
};

export default Intro;
