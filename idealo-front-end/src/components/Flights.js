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
                <Banner country="Mallorca" price="21"/>
                <Banner country="Bangkok" price="328"/>
                <Banner country="Antalya" price="35"/>
                <Banner country="Istanbul" price="60"/>
                <Banner country="New York" price="185"/>
                <Banner country="Barcelona" price="21"/>
                <Banner country="Vienna" price="21"/>
                
            </div>
        </div>
    )
}

export default Flights;