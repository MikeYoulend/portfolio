import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
			<Skills />
		</div>
	);
}

export default App;
