import React, { useState } from 'react';
import WithdrawChart from './WithdrawChart';
import DepositChart from './DepositChart';
import transactionData from '../assets/last-month-transaction-data';
import '../styles/DetailTransactions.scss';

const DetailTransactions = () => {

    const [transaction, setTransaction] = useState(transactionData)

    return (
        <>
            <div className='detail-wrapper'>
                <div className='detail-container'>
                    <div className='detail-section'>
                        <div className='detail-search-bar'>
                            <input
                                type='text'
                                placeholder='Search'
                                className='detail-search-input'
                            />
                        </div>
                    </div>
                    <div className='detail-section'>
                        <div className='detail-title'>
                            Last Month Withdrawl
                        </div>
                        <div className='detail-line' />
                        <div className='detail-chart'>
                            <div className='detail-transaction-log-list'>
                                {
                                    transaction.map((item) => (
                                        <div className='detail-transaction-log'>
                                            <div className='detail-transaction-log-title'>
                                                {item.title}
                                            </div>

                                            <div className={item.symbol == '+' ? 'detail-transaction-log-price detail-green' : 'detail-transaction-log-price detail-red'}>
                                                {item.symbol} ${item.amount}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='detail-section'>
                        <div className='detail-title'>
                            Detail Withdraw
                        </div>
                        <div className='detail-line' />
                        <div className='detail-chart'>
                            <WithdrawChart />
                        </div>
                    </div>
                    <div className='detail-section'>
                        <div className='detail-title'>
                            Detail Deposit
                        </div>
                        <div className='detail-line' />

                        <div className='detail-chart'>
                            <DepositChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailTransactions;