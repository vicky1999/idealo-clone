import React from 'react';
import Slider from 'react-smart-slider';
import './styles/Slides.css';

const Caption = ({caption}) => {
    return (
    <div className="captions"><h2>{caption}</h2></div>
    )
}

const slides_arr = [
    {
        url: "https://cmsplatform.blob.core.windows.net/wwwgeniebathsystemscom/blog-images/7982d2f5-cf3e-4380-b18d-e891924ecefb.jpg",
 
        // (Optional) Set if you want to add any content on your slide
        childrenElem: <Caption caption="Autumn cleaning in the garden" />
      },
      {
        url: "https://images.theconversation.com/files/350436/original/file-20200730-21-letoor.jpg",
        childrenElem: <Caption caption="There quickly" />
      },
      {
        url: "https://images.squarespace-cdn.com/content/v1/55bea2d1e4b0d20d8d3022a6/1517258479495-ZV9IYKC22WB7L4O0XY98/ke17ZwdGBToddI8pDm48kKktH62YepJawavMaMounbsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxwjyQPSh49jwrvoCUT9sbJAU6Aiz1K3vWAUPpgMXGAcipHLeemgYLDA4uKe8VB2Y/photo-1427805371062-cacdd21273f1.jpg?format=2500w",
        childrenElem: <Caption caption="Equipped for any weather" />
      }
]

const Slides= () => {
    return (
        <div className="Slides">
            <Slider
                className="slide"
                autoSlide={true}
                slides={slides_arr}
                buttonShape="square"
            />
        </div>
    )
}

export default Slides;