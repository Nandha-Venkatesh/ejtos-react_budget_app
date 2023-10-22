import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {expenses, budget, currency, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const total_expenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        var budget = event.target.value;
        if(budget > 20000){
            alert("You can not have a budget exceeding " + currency + "20,000");
            return;
        }
        if(budget < total_expenses){
            alert("You can not reduce the budget below the total spending value, which is currently " + currency + total_expenses);
            return;
        }

        // Must write a dispatch statement to handle the event. Must also set the new budget.
        // See AppContext.js to understand how actions are processed

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });

        setNewBudget(budget);

    }

    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} 
            onChange={handleBudgetChange}>
            </input>
        </div>
    );
};

export default Budget;