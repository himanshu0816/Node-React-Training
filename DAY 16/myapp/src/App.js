import React from 'react';
import logo from './logo.svg'
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Home from './component/Home';
import About from './component/About';
import{BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Contact' component={Contact}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
