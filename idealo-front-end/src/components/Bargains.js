import React from 'react';
import Product from './Products';
import './styles/Bargains.css';

import {gql,useQuery} from '@apollo/client';

import Carousel from 'react-elastic-carousel';

// const results= [
//     {"id":"1","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"2","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"3","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"4","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"5","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"6","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"7","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"8","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"9","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"},
//     {"id":"10","image":'Bargains/office_professional_2019.jpg', "price":"$ 1000", "name": "Microsoft Office Professional 2019"}
// ]

const BargainQuery=gql`
    {
        bargain {
            id
            name
            price
            imageUrl
        }
    }
`;

const breakPoints = [
    {width: 1,itemsToShow:1},
    {width: 360,itemsToShow:2},
    {width: 542,itemsToShow:3},
    {width: 724,itemsToShow:4},
    {width: 910,itemsToShow:5}
];

const display = (item) => {
    console.log(item);
    return (<div className="products"><Product key={item.id} image={item.imageUrl} price={item.price} name={item.name} /></div>)
}

const Bargain = () => {
    const {loading,err,data}=useQuery(BargainQuery);
    if(loading) return <p>Loading...</p>;
    if(err) return <p>Error!</p>;
    if(data)    
        return (
            <div className="Bargain">
                <p>Receive idealo bargains, promotions & news by email 
                    <button className="loginBtn">Log In</button>
                </p>
                <Carousel breakPoints={breakPoints}>
                    {data.bargain.map(display)}
                </Carousel>           
            </div>
    )
}

export default Bargain;