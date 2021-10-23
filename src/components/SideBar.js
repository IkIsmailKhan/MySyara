import React from 'react';
import Profile from '../assets/profile-icon';
import '../styles/SideBar.scss'

const SideBar = () => {
    return (
        <div className='sidebar-container'>

            <div >
                {Profile}
            </div>

            <div>
                <div className='sidebar-item mb-3'>
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Transactions
                    </div>
                </div>

                <div className='sidebar-item sidebar-item-active mb-3'>
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Dashboard
                    </div>
                </div>

                <div className='sidebar-item mb-3'>
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Stastistic
                    </div>
                </div>
                <div className='sidebar-item mb-3'>
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Card
                    </div>
                </div>

                <div className='sidebar-item mb-3' >
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Profile
                    </div>
                </div>

                <div className='sidebar-item mb-3'>
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Settings
                    </div>
                </div>
            </div>



            <div>
                <div className='sidebar-item mr-2'>
                    <div className='sidebar-item-logo'>
                        -
                    </div>
                    <div>
                        Logout
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideBar;

