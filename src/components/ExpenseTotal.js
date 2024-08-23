import React from 'react';

const ExpenseTotal = ({ expenses }) => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.cost, 0);

    return (
        <div>
            <div id="totalExpense">Total Expenses</div>
            <div id="totalExpValue">₱{totalExpenses.toFixed(2)}</div>
        </div>
    );
};

export default ExpenseTotal;
