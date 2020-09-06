import React from 'react';
import './styles/Header.css'
import logo from './Images/logo.png';

const Header = ({props}) => {
        return (
            <div className="header">
                <img src={logo} alt="logo"/>
                <p>Germany's great price comparison</p>
                <div className="options">
                    <div className="option">
						<a href="localhost:3000">SHOPPING</a>
						{/* Create a Pointer */}
					</div> 
					<div className="option">
						<a href="localhost:3000">FLIGHTS</a>
                    </div>
					<div className="option">
						<a href="localhost:3000">HOTEL</a>
                    </div>
					<div className="option">
						<a href="localhost:3000">APARTMENT</a>
					</div>
				</div>
            </div>
        )
    }

export default Header;