import React from 'react';

import './styles/Verified.css';
import image from './Images/Verified.jpg';

const Verified = () => {
    return (
        <div className="Verified">
            <img src={image} alt='verified' /> 
            <div className="verifiedTxt">
            idealo was recognized as a verified comparison portal in the price comparison category. This means that idealo is the first price comparison to be certified by TÜV Saarland according to the following criteria: quality of content, topicality, diverse search options, transparency, clarity, data protection.
            </div>
        </div>
    )
}

export default Verified;