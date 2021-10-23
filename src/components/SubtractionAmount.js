import React, { useState } from 'react';
import '../styles/Modal.scss'

const SubtractionAmount = ({ amount, setAmount, transactions, setTransactions, setAmountWithdraw, setOpenWithdraw }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [subtractAmount, setSubtractAmount] = useState(0);

    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    const [errorAmount, setErrorAmount] = useState(false);
    const [errorAmountExceed, setErrorAmountExceed] = useState(false);


    const handleTitle = (e) => {
        setTitle(e.target.value);
        setErrorTitle(false)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
        setErrorDescription(false);
    }

    const handleSubtractAmount = (e) => {
        setSubtractAmount(e.target.value);
        setErrorAmount(false);
        setErrorAmountExceed(false);
    }

    const handleSubtractionTransaction = () => {
        if (title == "") {
            return setErrorTitle(true);
        }
        if (description == "") {
            return setErrorDescription(true);
        }
        if (subtractAmount < 1) {
            return setErrorAmount(true);
        }

        if (subtractAmount > amount) {
            return setErrorAmountExceed(true);
        }

        setAmount(amount - parseInt(subtractAmount));
        setTransactions([{
            title: title,
            description: description,
            amount: subtractAmount,
            symbol: " -",
        }, ...transactions]);
        setSubtractAmount(0);
        setTitle("");
        setDescription("");

        setAmountWithdraw(true);

        setTimeout(() => {
            setOpenWithdraw(false)
        }, 1500);
    }

    return (
        <>
            <div className='modal-container'>
                <div className='modal-title'>
                    WITHDRAW
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
                        className='modal-input'
                        type='number'
                        value={subtractAmount === 0 ? "" : subtractAmount}
                        onChange={handleSubtractAmount}
                    />
                    {
                        errorAmount ? <><br /><label className='modal-label-error'>Invalid Amount</label><br /></> : null
                    }
                    {
                        errorAmountExceed ? <><br /><label className='modal-label-error'>You Don't Have Enough Balance</label><br /></> : null
                    }

                </div>


                <button
                    className='modal-button'
                    onClick={handleSubtractionTransaction}
                >
                    CONFIRM
                </button>
            </div>
        </>
    )
}

export default SubtractionAmount;