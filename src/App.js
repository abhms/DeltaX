import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/src/components/Form.js" element={<Form />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;