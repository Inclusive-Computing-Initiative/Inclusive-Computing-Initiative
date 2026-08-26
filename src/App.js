import Navigationbar from './components/Navigationbar.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import ClassesPage from './components/ClassesPage.js';
import TeamPage from './components/TeamPage.js';
import TOC from './components/TOC.js';
import Footer from './components/Footer.js';
import Hackathon from './components/Hackathon.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';

function App() {
  return (
	<div className="App">
		<BrowserRouter>
			<ScrollToTop/>
			<Navigationbar/>
			<Routes>
				<Route index element = {<HomePage/>}/>
				<Route path='/about' element = {<AboutPage/>}/>
				<Route path='/classes' element = {<ClassesPage/>}/>
				<Route path='/team' element = {<TeamPage/>}/>
				<Route path='/contact' element = {<ContactPage/>}/>
		        <Route path='/privacy-policy' element = {<TOC/>}/>
	  			<Route path='/hackathon' element = {<Hackathon/>}/>
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
