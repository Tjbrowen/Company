import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Website from "./pages/Website";
import { Suspense } from 'react';
import Services from './pages/Products/Services';
import Layout from "./components/Layout/Layout";
import Values from './pages/Ourvalues/Values'
import Projects from './pages/Projects/Projects';



function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Website/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/values' element={<Values/>}/>
      <Route path='/projects' element={<Projects/>}/>
      

      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
