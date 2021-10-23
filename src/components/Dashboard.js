import React, { useState } from 'react';
import TotalAmount from './TotalAmount';
import Transactions from './Transactions';
import TransactionData from '../assets/transaction-data';
import CardSection from './CardSection';
import HandleTansactions from './HanldeTransactions';
import Analytics from './Analytics';
import '../styles/Dashboard.scss'

const Dashboard = () => {

    const [amount, setAmount] = useState(1000);
    const [transactions, setTransactions] = useState(TransactionData);

    return (
        <div className='dashboard'>
            <div className='d-flex flex-grow-1'>
                <div className='dashboard-section '>
                    <TotalAmount
                        amount={amount}
                    />
                </div>
                <div className='dashboard-section'>
                    <CardSection />
                </div>
            </div>
            <div className='d-flex flex-grow-2'>
                <div className='dashboard-section'>
                    <Transactions
                        transactions={transactions}
                    />
                </div>
                <div className='dashboard-section'>
                    <div className='handle-transactions-analytics'>
                        <div>
                            <HandleTansactions
                                amount={amount}
                                setAmount={setAmount}
                                transactions={transactions}
                                setTransactions={setTransactions}
                            />
                        </div>
                        <div>
                            <Analytics />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

