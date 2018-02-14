import { createStore } from 'redux';

// Action generators/creators


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = (count) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducer

const countReducer = (state = { count: 0 }, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state
  }
};

const store = createStore(countReducer);


/*store.subscribe(() => {
  console.log(store.getState());
});*/

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// }




store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(setCount(100));

store.dispatch(resetCount());

console.log(store.getState());

// // Increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// //unsubscribe();

// store.dispatch({
//   type: 'INCREMENT'
// });

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: 'INCREMENT',
//   incrementBy
// });

// const store = createStore((state = {count: 0}, action) => {
//   switch(action.type) {
//     case ('INCREMENT'):
//       return {
//         count: state.count + action.incrementBy
//       };
//     default:
//       return state;
//   }
// });

// store.dispatch(incrementCount());

// console.log(store.getState());