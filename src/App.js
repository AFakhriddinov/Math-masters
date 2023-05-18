import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';
import Nav from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
