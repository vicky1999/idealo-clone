import React from 'react';
import './styles/Trending.css';

const res=[
    {"id":"1","value": "Video games"},
    {"id":"2","value": "Choppers"},
    {"id":"3","value": "Power Supplies"},
    {"id":"4","value": "Slippers"},
    {"id":"5","value": "Winter Tires"},
    {"id":"6","value": "Video games"},
    {"id":"7","value": "Choppers"},
    {"id":"8","value": "Power Supplies"},
    {"id":"9","value": "Slippers"},
    {"id":"10","value": "Winter Tires"},
    {"id":"11","value": "Video games"},
    {"id":"12","value": "Choppers"},
    {"id":"13","value": "Power Supplies"},
    {"id":"14","value": "Slippers"},
    {"id":"15","value": "Winter Tires"},
    {"id":"16","value": "Video games"},
    {"id":"17","value": "Choppers"},
    {"id":"18","value": "Power Supplies"},
    {"id":"19","value": "Slippers"},
    {"id":"20","value": "Winter Tires"}
]

function display(value) {
    return (
        <div className="result" key={value.id}><p>{value.value}</p></div>
    );
}
 
const Trending= () => {
    return (
        <div className="trending">
            <div className="scroller">
                <div className="title">
                    <p>Currently trending: </p>
                </div>
                {res.map(display)}
            </div>
        </div>
    )
}

export default Trending;