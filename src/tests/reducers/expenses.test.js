import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
});

test('should add an expense', () => {
  const expense = {
    id: uuid(),
    description: 'Test description',
    note: 'Test note',
    amount: '2000',
    createdAt: 0
  };
  const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense });
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
  const description = 'Updated description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
});

test('should NOT edit an expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'Updated description'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses[1]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses[1]);
});