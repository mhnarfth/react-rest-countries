import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    
  const [countries, setCountries] =  useState([]);
  useEffect(()=> {
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[]);

  return (
    <div>
      <h1>Travelling Around the World</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
      
      {
        countries.map(country=><Country country={country}></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;