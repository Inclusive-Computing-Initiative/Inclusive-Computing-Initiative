import Navigationbar from './components/Navigationbar.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import ClassesPage from './components/ClassesPage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
	<div className="App">
		<BrowserRouter>
			<Navigationbar/>
			<Routes>
				<Route index element = {<HomePage/>}/>
				<Route path='/about' element = {<AboutPage/>}/>
				<Route path='/classes' element = {<ClassesPage/>}/>
				<Route path='/contact' element = {<ContactPage/>}/>
			</Routes>
			
		</BrowserRouter>
		
   	</div>
  );
}

export default App;
