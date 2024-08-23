import React from 'react';

const Remaining = ({ expenses }) => {
    const fixedBudget = 2000; //  fixed budget sample
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.cost, 0);
    const remaining = fixedBudget - totalSpent;

    return (
        <div>
            <div id="remainingBudget">Remaining Budget</div>
            <div id="remainingAmt">₱{remaining.toFixed(2)}</div>
        </div>
    );
};

export default Remaining;
