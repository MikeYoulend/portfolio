import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import JavascriptIcon from "../../assets/JavascriptIcon.png";
import Css3Icon from "../../assets/Css3Icon.png";
import Html5Icon from "../../assets/Html5Icon.png";
import ReactIcon from "../../assets/ReactIcon.png";
import BootstrapIcon from "../../assets/BootstrapIcon.png";

const Skills = () => {
	return (
		<section id="skills">
			<span className="skillTitle">What I do</span>

			<div id="Software">
				<img src={Html5Icon} alt="Linkedin" className="SoftwareImg" />
				<img src={Css3Icon} alt="Whatsapp" className="SoftwareImg" />
				<img src={JavascriptIcon} alt="Email" className="SoftwareImg" />
				<img src={BootstrapIcon} alt="Email" className="SoftwareImg" />
				<img src={ReactIcon} alt="Email" className="SoftwareImg" />
			</div>

			<div className="skillBars">
				<div className="skillBar">
					<img src={UIDesign} alt="UIDesign" className="skillBarImg" />
					<div className="skillBarText">
						<h2>UI/UX Design</h2>
						<p>
							Passionate about creating visually stunning and user-centered
							digital experiences. Aiming for interfaces that not only look
							great but also provide intuitive and delightful user interactions.
						</p>
					</div>
				</div>
				<div className="skillBar">
					<img src={WebDesign} alt="WebDesign" className="skillBarImg" />
					<div className="skillBarText">
						<h2>Website Design</h2>
						<p>
							Dedicated to crafting websites that seamlessly blend aesthetics
							with functionality. Striving for clean and responsive designs that
							enhance user engagement and satisfaction.
						</p>
					</div>
				</div>
				<div className="skillBar">
					<img src={AppDesign} alt="AppDesign" className="skillBarImg" />
					<div className="skillBarText">
						<h2>Mobile-Friendly Design</h2>
						<p>
							Passionate about crafting visually appealing and mobile-friendly
							websites, ensuring seamless user experiences across devices. I
							prioritize accessibility and usability in my designs.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
