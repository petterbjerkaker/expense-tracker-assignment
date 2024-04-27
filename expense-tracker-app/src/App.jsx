import React from "react";
import './App.css';

function App() {
  

  return (
   <>
    <div className="main-container">
      <form className="expense-form">
        <h2>Add your expenses 📝</h2>
        <label htmlFor="expense-title"><b>Expense title:</b></label>
        <input type="text" name="title" required />

        <label htmlFor="expense-amount"><b>Expense amount:</b></label>
        <input type="text" name="amount" required />

        <label htmlFor="expense-date"><b>Date of purchase:</b></label>
        <input type="date" name="date" required />

        <label htmlFor="expense-category"><b>Expense category:</b></label>
        <select name="category" >
        <option value="-">-</option>
          <option value="Housing">Housing</option>
          <option value="Grocery">Grocery</option>
          <option value="Transportation">Transportation</option>
          <option value="Clothes">Clothes</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" className="submit-button">Add ➕</button>
      </form>

      <section className="expense-list">
        <div className="display-expense-container">
          
        </div>
      </section>
    </div>
    </>
  );
}


export default App
