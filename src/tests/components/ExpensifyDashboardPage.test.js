import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyDashboardPage from '../../componenets/ExpensifyDashboardPage';
import expenses from '../fixtures/expenses';

test('should render ExpensifyDashboardPage correctly', () => {
  const wrapper = shallow(<ExpensifyDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});