import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Countries></Countries>
    </div>
  );
}

export default App;







/*
function Countries () {

  const [countries, setCountries] =  useState([]);
  useEffect(()=> {
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[]);

  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
      
      {
        countries.map(country=><Country name={country.name} capital={country.capital} flag={country.flag}></Country>)
      }
    </div>
  );
}

function Country(props) {
  return (

    <div style={{backgroundColor: 'skyblue', margin: '10px', padding: '10px', border: '3px solid red', borderRadius: '10px'}}>
      <h2>Name: {props.name}</h2>
      <h3>Capital: {props.capital} </h3>
      <img style={{width:'200px'}} src={props.flag}></img>
    </div>

  );
}

*/