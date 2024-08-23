import React, { useState } from 'react';
import './home.css';
import desktopLogo from "../assets/images/Desktop-Laptop_Background 2.png";


//static page lang.
function Home() {
    const [userData] = useState({ //,setUserData - pang toggle/option, BUT NO TOGGLE OPTION YET.
        name: 'Maya Main Angko',
        accountNumber: '1234567890',
        balance: '₱1,000.00',
        transactions: [
            'Deposit: ₱5,000.00',
            'Withdrawal: ₱100.00',
            'Transfer: ₱200.00',
            'Grab: ₱590.36',
            'GCash Loan: ₱600'
        ]
    });


    return (
        <div>
            <div id="MyAcct">My Account</div>
            
            <div>
                <div id="name">Name: {userData.name} </div>
                <div id="HomeAcct">Account Number: {userData.accountNumber}</div>
                <div id="HomeBal">Balance: {userData.balance}</div>
            </div>
            
            <div>
                <div id="transaction">Transactions</div>
                <ul id="transListahan">
                    {userData.transactions.map((transaction, index) => (
                        <li  key={index}>{transaction}</li>
                    ))}
                </ul>
            </div>

            <div id="BGsaKANAN">
                <img src={desktopLogo} alt="desktopLogo"/>
            </div> 




        </div>
    );
}

export default Home;
