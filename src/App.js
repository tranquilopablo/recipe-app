import {  Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SearchRecipe from './pages/SearchRecipe';
import Cuisine from './pages/Cuisine';
import Recipe from './pages/Recipe';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          |<Route path="/" element={<Home />} />
          |<Route path="/search/:recipe" element={<SearchRecipe />} />
          |<Route path="/cuisine/:type" element={<Cuisine />} />
          |<Route path="/recipe/:recipeId" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
