import React from 'react';
import Chart from './Chart';
import '../styles/Analytics.scss'

const Analytics = () => {
    return (
        <>
            <div className='analytics-container'>

                <div className='analytics-list-heading'>
                    Analytics
                </div>

                <div className='analytics-horizontal-line' />

                <div className='analytics-graph'>
                    <Chart />
                </div>
            </div>
        </>
    )
}

export default Analytics;

