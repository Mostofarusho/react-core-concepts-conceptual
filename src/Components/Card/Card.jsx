import React from 'react';
import Image from './Image';
import Title from './Title';
import Price from './Price';
import "./Card.css"

const Card = (props) => {
    console.log(props.item);
    const {action,img,name,price}=props.item;
    return (
        <div>
            <img className='w-64' src={img} alt=""  />
            <h2>{name}</h2>
            <p>{action}</p>
            <p>{price}</p>
        </div>
    );
};

export default Card;