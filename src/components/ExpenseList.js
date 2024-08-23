import React, { useState } from 'react';
import ExpenseItem from '../components/ExpenseItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ExpenseList = ({ expenses, onAddExpense, onDeleteExpense }) => {
    const [newExpenseName, setNewExpenseName] = useState('');
    const [newExpenseCost, setNewExpenseCost] = useState('');

        // NaN - Not-a-Number //
    const handleAddExpense = () => {
        if (newExpenseName.trim() && !isNaN(newExpenseCost) && newExpenseCost.trim()) {     
            const newExpense = {
                id: Date.now(),
                name: newExpenseName,
                cost: parseFloat(newExpenseCost),
            };
            onAddExpense(newExpense);
            setNewExpenseName('');
            setNewExpenseCost('');
        } else {
            alert('Please enter a valid description and amount.');
        }
    };

    return (
<div>
    <div id="input-container">
        <input
            type="text"
            id="expense-description"
            value={newExpenseName}
            onChange={(e) => setNewExpenseName(e.target.value)}
            placeholder="Description"
        />
        <input
            type="number"
            id="expense-amount"
            value={newExpenseCost}
            onChange={(e) => setNewExpenseCost(e.target.value)}
            placeholder="Amount"
        />
    </div>

    <button id="add-expense-button" onClick={handleAddExpense}>
        <FontAwesomeIcon icon={faPlus} />
        Add Expense
    </button>

    <div id="expenseListahan-container">
        <ul id="expenseListahan">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                    onDelete={onDeleteExpense}
                />
            ))}
        </ul>
    </div>  
</div>






        );
};

export default ExpenseList;
