import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SearchRecipe from "./pages/SearchRecipe"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          |<Route path="/" element={<Home />} />
          |<Route path="/search/:recipe" element={<SearchRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
