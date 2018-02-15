import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {

  console.log(props.expenses)

  return (
    <div>
    <h1>ExpenseList</h1>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
      )
    }
  </div>
  )
};

const mapStateToProps = (state) => {

  console.log(state)
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);