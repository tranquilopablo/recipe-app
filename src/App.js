import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          |<Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
