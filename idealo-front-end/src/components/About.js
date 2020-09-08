import React from 'react';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ChatIcon from '@material-ui/icons/Chat';
import './styles/About.css';
import {FaTrophy,FaCertificate} from 'react-icons/fa';

const About = () => {
    return (

        <div className="About">
            <p>idealo - The No. 1 in price comparison</p>
            <div className="container">
                <div className="detail">   
                    <LocalOfferIcon style={{fontSize:100}} className="icons" />
                    <b><p>Transparency for you</p></b>
                    <p className="content">It is important to us that you always have a good feeling when shopping. Our job is to create transparency for you among millions of online offers. We want you to be able to decide what you really need and to make the best purchase decision for you. Our greatest concern is to help you shop. We don't have to sell you anything and we don't have a warehouse that needs to be emptied. Therefore we always advise you objectively. Incidentally, the dealers listed with us pay us a small fee for our service. The use of idealo is free of charge for you. That has always been the case and it will remain so.</p>
                </div>
                <div className="detail">
                    <FaCertificate style={{fontSize:100}} className="icons" />
                    <b><p>Infinite possibilities</p></b>
                    <p className="content">Over 350 million offers from around 50,000 retailers in our price comparison mean for you a comprehensive overview of the market. No matter what you are looking for, we have determined it. At the best price. Comprehensive filter and sorting functions help you to find your personal offer. Test reports, user opinions and our advice texts will help you with the purchase decision. Notepad, price alarm clock and idealo direct purchase make cheap shopping easy and convenient. You decide what you want to buy and from whom. You can use our app on the go.</p>
                </div>
                <div className="detail">
                    <ChatIcon style={{fontSize:100}} className="icons" />
                    <b><p>Carefree shopping</p></b>
                    <p className="content">Before we put offers online, we check the dealer. This means that not all dealers in Germany are listed in our price search engine, only those who have signed a contract with us. So you don't need to worry about things like availability and delivery. We'll do that and show you everything in a compact price comparison. If you still have any questions, please send us an email to kundenservice@idealo.de. And if something goes wrong, we are sure to find a solution. We are there for you Monday to Friday from 8 a.m. to 8 p.m. and on the weekend from 10 a.m. to 4 p.m.</p>
                </div>  
                <div className="detail">
                    <FaTrophy style={{fontSize:100}} className="icons"/>
                    <b><p>Excellent</p></b>
                    <p className="content">We're pretty good at what we do and we keep winning awards for our reliability and service. In addition, TÜV Saarland was the first price comparison to award us the seal of the "tested comparison portal" for transparency, topicality, data protection and quality (04.2016). We are very pleased that the TÜV has certified our work as a price comparison. That doesn't change the fact that over 800 employees work every day to make shopping easy, worry-free and safe for you and to continuously improve idealo.</p>
                </div>  
            </div>
        </div>
    )
}

export default About;