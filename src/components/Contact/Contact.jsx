import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";

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
			<div id="contact"></div>
		</section>
	);
};

export default Contact;
