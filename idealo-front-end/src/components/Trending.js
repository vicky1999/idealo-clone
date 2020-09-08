import React from 'react';
import './styles/Trending.css';
import client from '../Client';
import {gql, useQuery} from '@apollo/client';

// const res=[
//     {"id":"1","value": "Video games"},
//     {"id":"2","value": "Choppers"},
//     {"id":"3","value": "Power Supplies"},
//     {"id":"4","value": "Slippers"},
//     {"id":"5","value": "Winter Tires"},
//     {"id":"6","value": "Video games"},
//     {"id":"7","value": "Choppers"},
//     {"id":"8","value": "Power Supplies"},
//     {"id":"9","value": "Slippers"},
//     {"id":"10","value": "Winter Tires"},
//     {"id":"11","value": "Video games"},
//     {"id":"12","value": "Choppers"},
//     {"id":"13","value": "Power Supplies"},
//     {"id":"14","value": "Slippers"},
//     {"id":"15","value": "Winter Tires"},
//     {"id":"16","value": "Video games"},
//     {"id":"17","value": "Choppers"},
//     {"id":"18","value": "Power Supplies"},
//     {"id":"19","value": "Slippers"},
//     {"id":"20","value": "Winter Tires"}
// ]

const TrendingQuery=gql`
    {
        trending {
            name
        }
    }
`;
const res=client.query({
    query:TrendingQuery
});

function display(value,index) {
    return (
        <div className="result" key={index}><p>{value.name}</p></div>
    );
}
 
const Trending= () => {
    const {loading,err,data}=useQuery(TrendingQuery);
    if(loading) return <div className="loaderr"><p>loading...</p></div>;
    if(err) return <div className="loaderr"><p>Error!</p></div>;        
    if(data) 
        return (
            <div className="trending">
                <div className="scroller">
                    <div className="title">
                        <p>Currently trending: </p>
                    </div>
                    {data.trending.slice(0,15).map(display)}
                </div>
            </div>
        )
}

export default Trending;