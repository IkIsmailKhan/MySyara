import React, { useState } from 'react';
import '../styles/Modal.scss'

const AddAmount = ({ amount, setAmount, transactions, setTransactions, setAmountDeposit, setOpenDeposit }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [addAmount, setAddAmount] = useState(0);

    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    const [errorAmount, setErrorAmount] = useState(false);


    const handleTitle = (e) => {
        setTitle(e.target.value);
        setErrorTitle(false);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
        setErrorDescription(false);
    }

    const handleAmount = (e) => {
        setAddAmount(e.target.value);
        setErrorAmount(false);
    }

    const handleAddTransaction = () => {
        if (title == "") {
            return setErrorTitle(true);
        }
        if (description == "") {
            return setErrorDescription(true);
        }
        if (addAmount < 1) {
            return setErrorAmount(true);
        }

        setAmount(amount + parseInt(addAmount));

        setTransactions([{
            title: title,
            description: description,
            amount: addAmount,
            symbol: "+",
        }, ...transactions]);

        setAddAmount(0);
        setTitle("");
        setDescription("");

        setAmountDeposit(true);

        setTimeout(() => {
            setOpenDeposit(false)
        }, 1500);
    }

    return (
        <>
            <div className='modal-container'>
                <div className='modal-title'>
                    DEPOSIT
                </div>


                <div className='modal-section'>
                    <label className='modal-label'>Title</label><br />
                    <input
                        type='text'
                        className='modal-input'
                        value={title}
                        onChange={handleTitle}
                    />
                    {
                        errorTitle ? <><br /><label className='modal-label-error'>Please Enter Title</label><br /></> : null
                    }
                </div>


                <div className='modal-section'>
                    <label className='modal-label'>Description</label><br />
                    <input
                        type='text'
                        className='modal-input'
                        value={description}
                        onChange={handleDescription}
                    />
                    {
                        errorDescription ? <><br /><label className='modal-label-error'>Please Enter Description</label><br /></> : null
                    }
                </div>


                <div >
                    <label className='modal-label'>Amount</label><br />
                    <input
                        type='number'
                        className='modal-input'
                        value={addAmount === 0 ? "" : addAmount}
                        onChange={handleAmount}
                    />
                    {
                        errorAmount ? <><br /><label className='modal-label-error'>Invalid Amount</label><br /></> : null
                    }
                </div>


                <button
                    className='modal-button'
                    onClick={handleAddTransaction}
                >
                    CONFIRM
                </button>
            </div>
        </>
    )
}

export default AddAmount;