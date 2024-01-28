import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
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
				<h1 className="contactPageTitle">Contact Me</h1>
				<span className="contactDesc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quos
					quia necessitatibus facere incidunt, aliquid harum facilis at delectus
					earum consequuntur fugit minima optio ipsam illum quo velit dolore
					hic!
				</span>
				<form action="" className="contactForm">
					<input type="text" className="name" placeholder="Your Name" />
					<input type="email" className="email" placeholder="Your Email" />
					<textarea
						className="msg"
						name="message"
						rows="5"
						placeholder="Your Message"
					></textarea>
					<button type="submit" value="Send" className="submitBtn">
						Submit
					</button>
					<div className="links">
						<img src={FacebookIcon} alt="Facebook" className="link" />
						<img src={InstagramIcon} alt="Instragram" className="link" />
						<img src={LinkedinIcon} alt="Linkedin" className="link" />
						<img src={WhatsappIcon} alt="Whatsapp" className="link" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
