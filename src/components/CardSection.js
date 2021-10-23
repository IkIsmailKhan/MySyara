import React from 'react';
import Card from '../assets/card-svg';
import '../styles/CardSection.scss'

const CardSection = () => {

    return (
        <>
            <div className='card-container'>
                <div>
                    {Card}
                </div>
            </div>
        </>
    )
}

export default CardSection;