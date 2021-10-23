import React from "react";
import Topbar from "../components/Topbar";
import SideBar from '../components/SideBar';
import DetailTransactions from '../components/DetailedTransactions';
import Dashboard from '../components/Dashboard'
import '../styles/Homepage.scss';

const Homepage = () => {

    return (
        <>
            <div className='app'>
                <Topbar />
                <div className='wrapper d-flex'>
                    <SideBar />
                    <Dashboard />
                    <DetailTransactions />
                </div>
            </div>
        </>
    );
}

export default Homepage;
