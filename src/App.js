import React from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
