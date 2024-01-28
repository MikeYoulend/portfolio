import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import EmailIcon from "../../assets/EmailIcon.png";

import LinkedinIcon from "../../assets/LinkedinIcon.png";
import WhatsappIcon from "../../assets/WhatsappIcon.png";

const Contact = () => {
	return (
		<section id="contactPage">
			<div id="clients">
				<h1 className="contactPageTitle">My Clients</h1>
				<p className="clientDesc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
					possimus corporis ut ea doloribus numquam mollitia quia maxime?
					Exercitationem quasi alias nemo nisi eaque asperiores dicta sunt
					minima omnis vel!
				</p>
				<div className="clientImgs">
					<img src={Walmart} alt="Client" className="clientImg" />
					<img src={Adobe} alt="Client" className="clientImg" />
					<img src={Microsoft} alt="Client" className="clientImg" />
					<img src={Facebook} alt="Client" className="clientImg" />
				</div>
			</div>

			<div id="contact">
				<h1>Contact Me</h1>
				<a
					href="https://www.linkedin.com/in/michele-lo-presti-88954b1b7/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={LinkedinIcon} alt="Linkedin" className="link" type="link" />
				</a>

				<a
					href="https://wa.me/3519485657"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={WhatsappIcon} alt="Whatsapp" className="link" />
				</a>

				<a href="mailto:michelelopresti9717@gmail.com">
					<img src={EmailIcon} alt="Email" className="link" />
				</a>
			</div>
		</section>
	);
};

export default Contact;
