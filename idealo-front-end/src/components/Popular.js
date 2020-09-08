import React from 'react';
import './styles/Popular.css';
import Product from './Products';
import { useQuery,gql } from '@apollo/client';

import Carousel from 'react-elastic-carousel';

// const results= [
//     {"id":"1","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"3","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"2","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"4","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"5","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"6","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"7","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"8","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"9","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"10","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"11","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"12","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"13","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"14","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"15","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"16","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"17","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"18","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"19","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"},
//     {"id":"20","image":'./Images/Oppo A5.jpg', "price":"$ 660", "name": "OPPO A5"}
// ]

const PopularQuery= gql`
    {
        popular {
            id
            name
            price
            imageUrl
        }
    }
`;

const display = (item) => {
    return (<div className="products"><Product key={item.id} image={item.imageUrl} price={item.price} name={item.name} /></div>)
}

const breakPoints = [
    {width: 1,itemsToShow:1},
    {width: 360,itemsToShow:2},
    {width: 542,itemsToShow:3},
    {width: 724,itemsToShow:4},
    {width: 950,itemsToShow:6}    
];

const Popular = () => {
    const {loading,err,data} = useQuery(PopularQuery);
    if(loading) return <p>Loading...</p>;
    if(err) return <p>Error!</p>;
    if(data)
        return (
            <div className="Popular">
                <p>Most popular products</p> <hr/>
                <Carousel breakPoints={breakPoints}>
                    {data.popular.map(display)}
                </Carousel>
            </div>
        )
}

export default Popular;