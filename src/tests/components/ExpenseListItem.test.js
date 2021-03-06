import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../componenets/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});