import React from 'react';

const Budget = ({ expenses }) => {
    const totalBudget = expenses.reduce((sum, expense) => sum + expense.cost, 0);

    return (
        <div>
            <div id="totalBudget">Total Budget</div>
            <div id="budget">₱{totalBudget.toFixed(2)}</div>
        </div>

    );
};

export default Budget;
