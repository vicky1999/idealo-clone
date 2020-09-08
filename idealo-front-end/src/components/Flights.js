import React from 'react';
import './styles/Flights.css';
import Banner from './Banner';

const Flights = () => {
    return (
        <div className="Flights">
            <div className="details">
                <img src='https://cdn.idealo.com/storage/ipc/i18n/de/rwd/img/logo-idealo-flight.svg' alt="idealo flug" />
                <p> Simply compare good flight offers from numerous airlines worldwide</p>
            </div>
            <div className="flightBanners">
                <Banner country="Mallorca" price="33"/>
                <Banner country="abcd" price="25"/>
                <Banner country="Mallorca" price="33"/>
                <Banner country="abcd" price="25"/>
                <Banner country="Mallorca" price="33"/>
                <Banner country="abcd" price="25"/>
                <Banner country="Mallorca" price="33"/>
                <Banner country="abcd" price="25"/>
                
            </div>
        </div>
    )
}

export default Flights;