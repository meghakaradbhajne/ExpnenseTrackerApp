import React from "react";
//import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

    const saveExpenseDefaultHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
    props.onAddExpense(expenseData)
    }
return(
<div className="new-expense">
<ExpenseForm onSaveExpenseData={saveExpenseDefaultHandler}/>
</div>
)
};
export default NewExpense