import React from 'react';

import './styles/Options.css';

const Options = () => {
    return (
        <div className="Options">
            <div className="block">
                <h3>idealo</h3><br/>
                <p>about us</p>
                <p>Press</p>
                <p>Jobs</p>
                <p>Friends</p>
                <p>All shops</p>
            </div>
            <div className="block">
                <h3>travel</h3><br/>
                <p>Flight price comparison</p>
                <p>Hotel price comparison</p>
                <p>Apartment price comparison</p>
                <p>Rental car price comparison</p>
            </div>
            <div className="block">
                <h3>Business</h3><br/>
                <p>Dealers</p>
                <p>service providers</p>
                <p>Manufacturers</p>
                <p>Shop registration</p>
                <p>Affiliate partner program</p>
                <p>idealo partner magazine</p>
            </div>
            <div className="block">
                <h3>follow us</h3><br/>
                <p>Newsletter</p>
                <p>idealo magazine</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}

export default Options;