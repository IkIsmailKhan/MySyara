import React from 'react';
import '../styles/Modal.scss'


const ModalSuccessful = ({ heading }) => {

    return (
        <>
            <div className='modal-successful'>
                <div className='modal-title-sucess'>
                    Amount {heading}
                </div>
            </div>
        </>
    )
}

export default ModalSuccessful;

