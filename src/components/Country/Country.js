import React from 'react';

const Country = (props) => {
  const {name, capital, population, flag} = props.country;
    return (

        <div style={{backgroundColor: 'skyblue', margin: '10px', padding: '10px', border: '3px solid red', borderRadius: '10px'}}>
          <h2>Name: {name}</h2>
          <h3>Capital: {capital} </h3>
          <h3>Population: {population} </h3>
          <img style={{width:'200px'}} src={flag} alt="country flag"/>
        </div>
    );
};

export default Country;