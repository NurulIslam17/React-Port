import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import DetailsMenber from './pages/DetailsMenber';
import WeatherPage from './pages/WeatherPage';
import Crud from './pages/Crud';
import CreatePage from './pages/CreatePage';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/about/:name' element={<DetailsMenber/>}/>
        <Route path='/weather' element={<WeatherPage/>}/>
        <Route path='/crud' element={<Crud/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </>
  );
}

export default App;
