import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  removeExpense = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }

  editExpense = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <button onClick={() => this.removeExpense()}>remove</button>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={(expense) => this.editExpense(expense)} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
