import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AddAmount from './AddMount';
import SubtractionAmount from './SubtractionAmount';
import ModalSuccessful from './ModalSucessful';
import '../styles/HandleTansactions.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid grey',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
};

const HandleTansactions = ({ amount, setAmount, transactions, setTransactions }) => {

    const [openWithdraw, setOpenWithdraw] = React.useState(false);
    const [openDeposit, setOpenDeposit] = React.useState(false);

    const [amountWithdraw, setAmountWithdraw] = React.useState(false);
    const [amountDeposit, setAmountDeposit] = React.useState(false);

    const handleOpenWithdraw = () => {
        setAmountWithdraw(false);
        setOpenWithdraw(true)
    }

    const handleOpenDeposit = () => {
        setAmountDeposit(false);
        setOpenDeposit(true);
    };

    const handleCloseWithdraw = () => setOpenWithdraw(false);
    const handleCloseDeposit = () => setOpenDeposit(false);

    return (
        <>
            <div className='actions-container' >

                <div className='actions-list-heading'>
                    Actions
                </div>

                <div className='horizontal-line' />

                <div className='d-flex actions-row '>
                    <div
                        className='actions-section actions-section-red'
                        onClick={handleOpenWithdraw}
                    >
                        WITHDRAW
                    </div>
                    <div
                        className='actions-section actions-section-green'
                        onClick={handleOpenDeposit}
                    >
                        DEPOSIT
                    </div>
                </div>
            </div>

            <Modal
                open={openWithdraw}
                onClose={handleCloseWithdraw}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openWithdraw}>
                    <Box sx={style}>
                        {
                            amountWithdraw ?
                                <ModalSuccessful
                                    heading="Withdrawn"
                                />
                                :
                                <SubtractionAmount
                                    amount={amount}
                                    setAmount={setAmount}
                                    transactions={transactions}
                                    setTransactions={setTransactions}
                                    setAmountWithdraw={setAmountWithdraw}
                                    setOpenWithdraw={setOpenWithdraw}
                                />
                        }
                    </Box>
                </Fade>
            </Modal>


            <Modal
                open={openDeposit}
                onClose={handleCloseDeposit}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openDeposit}>
                    <Box sx={style}>
                        {
                            amountDeposit ?
                                <ModalSuccessful
                                    heading="Deposited"
                                />
                                :
                                <AddAmount
                                    amount={amount}
                                    setAmount={setAmount}
                                    transactions={transactions}
                                    setTransactions={setTransactions}
                                    amountDeposit={amountDeposit}
                                    setAmountDeposit={setAmountDeposit}
                                    setOpenDeposit={setOpenDeposit}
                                />
                        }

                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default HandleTansactions;

