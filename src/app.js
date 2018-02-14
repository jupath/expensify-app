import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { setTimeout } from 'timers';


console.log(setTextFilter('test'))

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  //console.log(visibleExpenses)
})

store.dispatch(addExpense({description: 'Water bill', amount: 10500, createdAt: 2000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 2000, createdAt: 1000}));
//store.dispatch(addExpense({description: 'rent', amount: 109500, createdAt: 500}));
//store.dispatch(setTextFilter('gas'));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
