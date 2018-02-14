import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyDashboardPage from '../../componenets/ExpensifyDashboardPage';

test('should render ExpensifyDashboardPage correctly', () => {
  const wrapper = shallow(<ExpensifyDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});