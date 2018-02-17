import React from 'react';
import { ExpensesSummary } from '../../componenets/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={234345} />);
  expect(wrapper).toMatchSnapshot();
});