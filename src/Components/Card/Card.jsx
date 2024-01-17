import React from 'react';
import Image from './Image';
import Title from './Title';
import Price from './Price';

const Card = () => {
    return (
        <div className='bg-error'>
            <Image/>
            <Title/>
            <Price/>
        </div>
    );
};

export default Card;