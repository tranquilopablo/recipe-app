import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
