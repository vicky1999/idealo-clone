import React from 'react';
import google from './Images/playstore.png';
import apple from './Images/app store.png';
import './styles/Bottom.css';
const Bottom = () => {
    return (
        <div className="Bottom">
            <h4>Bring the idealo price comparison to your smartphone!</h4>
            <div class="stores">
                <img src={apple} alt="apple store" />
                <img src={google} alt="google play" />
            </div>
            <div class="policies">
                <p>privacy</p>
                <ul><li><p>Imprint / Terms and Conditions</p></li></ul>
            </div>
            <div class="countries">
                <p>Austria &nbsp;</p>{"."}
                <p>&nbsp; Great Britain &nbsp;</p>{"."}
                <p>&nbsp; Spain &nbsp;</p>{"."}
                <p>&nbsp; France &nbsp;</p>{"."}
                <p>&nbsp; Italy &nbsp;</p>
            </div>
            <div class="prices"><p>* All prices are in euros including VAT, plus shipping if applicable. Changes in prices, ranking, delivery time and costs are possible in the meantime. Delivery times in days (Mon-Fri without public holidays)
**% = savings compared to the average price of the last 90 days.</p></div>
        </div>
    )
}

export default Bottom;