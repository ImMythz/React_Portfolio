import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Route exact path="/Home" component={Home} />
    </Router>
  );
}

export default App;
