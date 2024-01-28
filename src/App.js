import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
