import React from 'react';
import './Country.css'

const Country = (props) => {
   const {name,area,capital,flags} =props.country;
    return (
        <div className='country'>
            <h1>{name}</h1>
            <h2>{area}</h2>
            <h3>{capital}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;