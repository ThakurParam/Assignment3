import logo from './logo.svg';
import './App.css';
import Crud from './Crud';
import Read from './Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Update';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Crud/>}/>
<Route path="/read" element={<Read/>}/>
<Route path="/upate" element={<Update/>}/>
</Routes>
</BrowserRouter>


   </>
  );
}

export default App;
