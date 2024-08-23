import React, { useState } from 'react';
import Budget from '../components/Budget';
import Remaining from '../components/Remaining';
import ExpenseTotal from '../components/ExpenseTotal';
import ExpenseList from '../components/ExpenseList';
import './budgetApp.css';

function BudgetApp() {
    const [expenses, setExpenses] = useState([
        { id: 123123, name: 'Transpo', cost: 1000 },
        { id: 123124, name: 'Allowance', cost: 500 },
        { id: 123125, name: 'Grab', cost: 500 },
    ]);

    const handleAddExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div>
            <div id="BudgetAllocation">Budget Allocation</div>
                <div id="budgetAppCOntainer">
                    <Budget expenses={expenses} />
                    <Remaining expenses={expenses} />
                    <ExpenseTotal expenses={expenses} />
                    <ExpenseList
                    expenses={expenses}
                    onAddExpense={handleAddExpense}
                    onDeleteExpense={handleDeleteExpense}
            />
                </div>
        </div>
    );
}

export default BudgetApp;
