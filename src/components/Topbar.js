import React from 'react';
import '../styles/TopBar.scss'

const TopBar = () => {
    return (
        <div className='bar'>
            <div className='bar-content'>
                {/* <img src={Logo} className='app-logo' /> */}
                <div className='bar-logo-title'>MySyara</div>

            </div>

            <div className='bar-content'>
                <div className='top-bar-dropdown'>
                    ...
                </div>
            </div>
        </div>
    )
}

export default TopBar;

