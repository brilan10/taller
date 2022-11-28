import logo from './logo.svg';
import './App.css';
import {Footer} from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Header } from './Components/Header';

{/*es importante importar bien las librerias para poder llamar a los comonentes que en este caso son los aparatados unicos que cambiaran*/}

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/section1' element={<Section1/>}/> 
        <Route path='/section2' element={<Section2/>}/>   
      </Routes>     
      
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
