import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio1.png";
import Portfolio2 from "../../assets/portfolio2.png";
import Portfolio3 from "../../assets/portfolio3.png";
import Portfolio4 from "../../assets/portfolio4.png";
import Portfolio5 from "../../assets/portfolio5.png";
import Portfolio6 from "../../assets/portfolio6.png";

const Works = () => {
	return (
		<section id="works">
			<h2 className="workstitle">My Portfolio</h2>
			<span className="worksDesc">
				Explore my portfolio to discover a collection of my projects.
			</span>
			<div className="worksImgs">
				<a
					href="https://github.com/MikeYoulend/Capstone-Project"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Portfolio1} alt="" className="worksImg" />
				</a>
				<a
					href="https://github.com/MikeYoulend/M5-verify"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Portfolio2} alt="" className="worksImg" />
				</a>
				<a
					href="https://github.com/MikeYoulend/Stopwatch"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Portfolio3} alt="" className="worksImg" />
				</a>
				<a
					href="https://github.com/MikeYoulend/QR-Code-Generator"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Portfolio4} alt="" className="worksImg" />
				</a>
				<a
					href="https://github.com/MikeYoulend/Modulo-3-Test"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Portfolio5} alt="" className="worksImg" />
				</a>
				<a
					href="https://github.com/MikeYoulend/Modulo-1-Test"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Portfolio6} alt="" className="worksImg" />
				</a>
			</div>
			<a href="https://github.com/MikeYoulend" target="_blank" rel="noreferrer">
				<button className="workBtn">My Github</button>
			</a>
		</section>
	);
};

export default Works;
