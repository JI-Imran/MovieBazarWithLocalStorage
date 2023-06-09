import React, { useEffect, useState } from 'react';
import {ToastContainer, toast } from 'react-toastify';

const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreaktime] = useState(0);

    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        // console.log(getWatchTimeFromStorage);
        setTime(getWatchTimeFromStorage)
        const getBreakTime = localStorage.getItem("breaktime");
        setBreaktime(getBreakTime);
    }, [watchTime]);

    const handleBreakTime = (bt) => {
        localStorage.setItem("breakTime", bt)
        setBreaktime(bt);
    };
    const handleComplete = () => {
        toast("Wow so easy !");
    }

    return (
        <div>
            <h1>My Cart</h1>

            <div className="mt-5 text-center">
                <p>total watch time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className="mt-5">Add Break time</h5>
            <dutton
                onClick={() => handleBreakTime(15)}
                className="w-25 btn-circle m-1 btn btn-info"
            >
                15
            </dutton>
            <dutton className="w-25 btn-circle bg-warning btn btn-info">20</dutton>
            <dutton className="w-25 btn-circle m-1 bg-danger btn btn-info">25</dutton>
            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
                Complete
            </button>
        </div>
    );
};

export default SideCart;
