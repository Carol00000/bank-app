import React, { useState } from 'react';
import './fundTransfer.css';

const TransferFund = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();

    if (!fromAccount || !toAccount || !amount) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (fromAccount === toAccount) {
      setMessage('Transfer accounts cannot be the same.');
      return;
    }

    // actual transfer logic, update account balances
    setMessage(`Successfully transferred $${amount} from ${fromAccount} to ${toAccount}.`);

    // clear the form
    setFromAccount('');
    setToAccount('');
    setAmount('');
  };

  return (
    <div>
    <div id="transferFUND">Transfer Funds</div>
    <div id="fundTransferwrapper">
      <form onSubmit={handleTransfer}>
        <div>
          <label id="fromAcct">From Account:</label>
          <select value={fromAccount} onChange={(e) => setFromAccount(e.target.value)}>
            <option value="">Select Account</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
  
        <div>
          <label id="toAcct">To Account:</label>
          <select value={toAccount} onChange={(e) => setToAccount(e.target.value)}>
            <option value="">Select Account</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
  
        <div>
          <label id="amount">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
  
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  </div>
    
  
  
  
  
  
  );
};

export default TransferFund;
