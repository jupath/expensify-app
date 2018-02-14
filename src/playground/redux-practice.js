import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  expenses: [{
    id: 'dsdssda',
    description: 'January Rent',
    note: 'This was the final paymant for that address',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// Expenses
const expensesReducerInitialState = [];

const expensesReducer = (state = expensesReducerInitialState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === action.id) {
          return ({
            ...expense,
            ...action.expense
          });
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters
const filtersReducerInitialState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerInitialState, action) => {
  switch(action.type) {
    case 'ADD_TEXT_FILTER':
      return {
        ...state,
        text: action.textFilter
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'END_START_DATE':
      return {
        ...state,
        startDate: action.endDate
      };
    default:
    return state
  }
};

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

// ADD_TEXT_FILTER
const setTextFilter = (textFilter = '') => ({
  type: 'ADD_TEXT_FILTER',
  textFilter
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate)  => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate)  => ({
  type: 'SET_END_DATE',
  endDate
});

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => (
  {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
);

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  id,
  expense
});

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const one = store.dispatch(addExpense({description: 'Rent', note: 'The last one', amount: 5000, createdAt: 1000}));

const two = store.dispatch(addExpense({description: 'Gasoil', amount: 6000, createdAt: -1000}));

const three = store.dispatch(addExpense({description: 'Others', amount: 10000, createdAt: 500}));

// store.dispatch(removeExpense(two.expense));

// store.dispatch(editExpense(one.expense.id, {amount: 4000}));

//store.dispatch(setTextFilter('gas'));

//store.dispatch(setStartDate(500));

store.dispatch(sortByAmount());

