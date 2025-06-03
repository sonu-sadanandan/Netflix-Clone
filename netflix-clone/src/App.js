import React from 'react';
import './App.css';
import { originals, action } from './urls';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url= {originals} title="Netflix Originals" />
      <RowPost url= {action} title="Actions" isSmall />
    </div>
  );
}

export default App;
