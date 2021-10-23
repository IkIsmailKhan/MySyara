import React from 'react';
import transactionPlusIcon from '../assets/transaction-plus-icon';
import transactionMinusIcon from '../assets/transaction-minus-icon';
import '../styles/Transactions.scss'

const Transactions = ({ transactions }) => {

    let newDate = new Date()
    let date = newDate.getDate();

    return (
        <>
            <div className='transactions-container'>

                <div className='transactions-list-heading'>
                    Transaction
                </div>

                <div className='horizontal-line' />

                <div className='transactions-list'>
                    {transactions.map(item => (
                        <div className='row transactions-record' >
                            <div className='col-2 log-icon'>
                                {item.symbol == "+" ? transactionMinusIcon : transactionPlusIcon}
                            </div>
                            <div className='col-5 ' >
                                <div className='row heading'>
                                    {item.title}
                                </div>
                                <div className='row sub-heading'>
                                    {item.description}
                                </div>
                            </div>
                            <div className='col-5 d-flex flex-column'>
                                <div className={item.symbol == "+" ? "row flex-end heading green" : "row flex-end heading red"}>
                                    {item.symbol}{" $"}{item.amount}
                                </div>
                                <div className='row flex-end sub-heading' >
                                    Oct {date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Transactions;


