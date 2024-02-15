import React from "react";
import "./intro.css";
import bg from "../../assets/Barmikey.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
	return (
		<section id="intro">
			<div className="IntroContent">
				<span className="hello">Hello,</span>
				<span className="introText">
					I'm <span className="introName">Michele</span> <br />
					Front-end Developer
				</span>
				<p className="introPara">
					I'm a junior web designer passionate about crafting visually <br></br>{" "}
					appealing and user-friendly websites. Eager to learn and <br></br>I am
					looking to expand my knowledge of front-end development.
				</p>
				<Link>
					<button className="btn">
						<img src={btnImg} alt="Hire me" className="bntImg" /> Hire me
					</button>
				</Link>
			</div>
			<img src={bg} alt="profile" className="bg" />
		</section>
	);
};

export default Intro;
