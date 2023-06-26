import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SuccessfulLogin from './components/login/SuccessfulLogin';
import FruitList from './components/login/FruitList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FruitList />} />
        <Route path="/SuccessfulLogin" element={<SuccessfulLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

