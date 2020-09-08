import React from 'react';
import FlightIcon from '@material-ui/icons/Flight';
import EuroIcon from '@material-ui/icons/Euro';

import './styles/Banner.css';

const Banner = (props) => {
    return ( 
        <div className="Banner">
            <FlightIcon className="icon"/>
            <p className="text">FLIGHTS TO </p>
            <p className="country">{props.country}</p>
            <div className="price">
                <EuroIcon className="euro"/>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}
export default Banner;