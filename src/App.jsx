import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';

function App() {
	return (
		<div>
			<Navbar />
			<Intro />
			<AboutMe />
			<MyProjects />
			<MyContact />
		</div>
	);
}

export default App;
