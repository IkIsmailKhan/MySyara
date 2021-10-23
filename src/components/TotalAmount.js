import React, { useEffect, useState } from 'react';
import '../styles/TotalAmount.scss'

const TotalAmount = ({ amount }) => {

    const locale = 'en';
    const [today, setDate] = useState(new Date());

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const hour = today.getHours();
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });


    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
            <div className='total-amount-container' >
                <div className='total-amount'>
                    <div className='amount'>
                        $ {amount}
                    </div>
                    <div className='date'>
                        {date}- {time}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalAmount;