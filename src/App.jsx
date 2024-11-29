import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import Technologies from './components/Technologies';
import AboutMePage from './pages/aboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
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
							<Footer />
						</>
					}
				/>
				<Route
					path='/aboutme'
					element={<AboutMePage />}
				/>
				<Route 
					path='/projects'
					element={<ProjectsPage />}
				/>
				<Route
					path='/contact'
					element={<ContactPage/>}
				/>
			</Routes>
			
		</>	
	);
}

export default App;
