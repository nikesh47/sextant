import React,{Component} from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="I'm a First Exhibit"></Exhibit>
      <Exhibit name="I'm a Second Exhibit"></Exhibit>
      <Exhibit name="I'm a Third Exhitbit"></Exhibit>
      
     
    </div>
  );
}

export default App;
