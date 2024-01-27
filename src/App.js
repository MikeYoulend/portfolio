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
		</div>
	);
}

export default App;
