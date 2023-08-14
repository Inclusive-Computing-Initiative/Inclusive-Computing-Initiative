import Navigationbar from './components/Navigationbar.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import ClassesPage from './components/ClassesPage.js';
import Footer from './components/Footer.js'
import { HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTop from './ScrollToTop.js';

function App() {
  return (
	<div className="App">
		<HashRouter>
			<ScrollToTop/>
			<Navigationbar/>
			<Routes>
				<Route index element = {<HomePage/>}/>
				<Route path='/about' element = {<AboutPage/>}/>
				<Route path='/classes' element = {<ClassesPage/>}/>
				<Route path='/contact' element = {<ContactPage/>}/>
			</Routes>
			{/* <Footer/> */}
		</HashRouter>
   	</div>
  );
}

export default App;
