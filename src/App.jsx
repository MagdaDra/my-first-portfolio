import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';
import Technologies from './components/Technologies';
import AboutMePage from './pages/aboutMePage';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route 
					path='/'
					element=
					{
						<>
							<Intro />
							<AboutMe />
							<Technologies />
							<MyProjects />
							<MyContact />
						</>
					}
				/>
				<Route
					path='/aboutme'
					element={<AboutMePage />}
				/>
			</Routes>
		</>	
	);
}

export default App;
