import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

const Intro = () => {
	return (
		<section id="intro">
			<div className="IntroContent"></div>
			<img src={bg} alt="profile" className="bg" />
		</section>
	);
};

export default Intro;
