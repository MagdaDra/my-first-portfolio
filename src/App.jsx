import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';
import Technologies from './components/Technologies';

function App() {
	return (
		<div>
			<Navbar />
			<Intro />
			<AboutMe />
			<Technologies />
			<MyProjects />
			<MyContact />
		</div>
	);
}

export default App;
