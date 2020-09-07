import React from 'react';
import './styles/Popular.css';
import Product from './Products';

import Carousel from 'react-elastic-carousel';

const results= [
    {"id":"1","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"2","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"3","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"4","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"5","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"6","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"7","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"8","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"9","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"10","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"1","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"2","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"3","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"4","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"5","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"6","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"7","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"8","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"9","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"},
    {"id":"10","image":'./Images/logo.png', "price":"$ 660", "name": "Phone"}
]

const display = (item) => {
    return (<div className="products"><Product key={item.id} image={item.image} price={item.price} name={item.name} /></div>)
}

const breakPoints = [
    {width: 1,itemsToShow:1},
    {width: 360,itemsToShow:2},
    {width: 542,itemsToShow:3},
    {width: 724,itemsToShow:4},
    {width: 950,itemsToShow:6}    
];

const Popular = () => {
    return (
        <div className="Popular">
            <p>Most popular products</p> <hr/>
            <Carousel breakPoints={breakPoints}>
                {results.map(display)}
            </Carousel>
        </div>
    )
}

export default Popular;