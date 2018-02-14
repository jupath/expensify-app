// import React from 'react';
// import { shallow } from 'enzyme';
// // import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../componenets/Header';

// // test('should render Header correctly', () => {
// //   const renderer = new ReactShallowRenderer();
// //   renderer.render(<Header />);

// //   expect(renderer.getRenderOutput()).toMatchSnapshot();

// //   console.log(renderer.getRenderOutput());
// // });

// test('should render Header correctly', () => {
//   const wrapper = shallow(<Header />);
//   expect(wrapper).toMatchSnapshot();


//   //expect(wrapper.find('h1').text()).toBe('Expensify');
// });

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../componenets/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
