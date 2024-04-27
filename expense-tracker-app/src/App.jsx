import React from "react";
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      expenses:[]
    };
  }

  addExpense = (newExpense) =>{
    this.setState({
      expenses: [...this.state.expenses, newExpense]
    });
  };

  handleDeleteExpense = (updatedExpenses)=>{
    this.setState({ expenses: updatedExpenses });
  };


  render(){
    return (
      <>
        <div className="main-container">
          <ExpenseForm addExpense={this.addExpense} />
          <ExpenseList expenses={this.state.expenses} onDelete={this.handleDeleteExpense} />
        </div>
      </>
    );
  }
}

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      amount: "",
      date: "",
      category: "-"
    };
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    const { title, amount, date, category } = this.state;
    const newExpense = {
      title,
      amount,
      date,
      category
    };

    this.props.addExpense(newExpense);

    this.setState({
      title: "",
      amount: "",
      date: "",
      category:"-"
    });
  };


  render(){
    const { title, amount, date, category } = this.state;
    return(
      <form className="expense-form" onSubmit={this.handleSubmit}>
      <h2>Add your expenses 📝</h2>
      <label htmlFor="expense-title"><b>Expense title:</b></label>
      <input type="text" name="title" value={title} onChange={this.handleChange} required />

      <label htmlFor="expense-amount"><b>Expense amount:</b></label>
      <input type="text" name="amount" value={amount} onChange={this.handleChange} required />

      <label htmlFor="expense-date"><b>Date of purchase:</b></label>
      <input type="date" name="date" value={date} onChange={this.handleChange} required />

      <label htmlFor="expense-category"><b>Expense category:</b></label>
      <select name="category" value={category} onChange={this.handleChange} >
      <option value="-">-</option>
        <option value="Housing">Housing</option>
        <option value="Grocery">Grocery</option>
        <option value="Transportation">Transportation</option>
        <option value="Clothes">Clothes</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" className="submit-button">Add ➕</button>
    </form>
    );
  }
}

class ExpenseList extends React.Component{
  handleDeleteExpense = (index) => {
    const updatedExpenses = [...this.props.expenses];
    updatedExpenses.splice(index, 1);
    this.props.onDelete(updatedExpenses);
  };

  render(){
    const { expenses } = this.props;
    return(
      <section className="expense-list">
        <div className="display-expense-container">
          <DisplayExpenses expenses={expenses} onDelete={this.handleDeleteExpense} />
        </div>
      </section>
    );
  }
}

class DisplayExpenses extends React.Component{
  handleDelete = (index)=>{
    this.props.onDelete(index);
  };

  render(){
    const { expenses } = this.props;
    return(
      <div className="display-expense">
        <h2>Overview of expenses:</h2>
        <ul>
          {expenses.map((expense, index)=>(
           <li key={index}>
              <span><b>Title:</b>{expense.title}</span>
              <span><b>Amount:</b>{expense.amount}</span>
              <span><b>Date:</b>{expense.date}</span>
              <span><b>Category:</b>{expense.category}</span>
              <button 
                className="delete-button" 
                onClick={()=> 
                this.handleDelete(index)}>Delete ❌
              </button>
           </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
