import './App.css';
import Home from './Home';
import Register from './Register'
import SignIn from './SignIn'
import Recom from './Recom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Example from './Example';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/recom" element={<Recom />} />
      </Routes>
    </Router>
  );
}

export default App;


