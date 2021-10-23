import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Withdraw',
            data: [2000, 2200, 3000, 1000, 3700, 3000, 2500, 2000, 2500, 3000],
            fill: false,
            backgroundColor: 'red',
            borderColor: '#ffbdc4',
        },
        {
            label: 'Deposit',
            data: [1000, 2500, 2000, 3500, 3000, 1500, 2000, 3000, 1500, 2000],
            fill: false,
            backgroundColor: 'green',
            borderColor: '#acc2ac',
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const Chart = () => (
    <>
        <div className='header'>
            <div className='links' />
        </div>
        <Line data={data} options={options} />
    </>
);

export default Chart;