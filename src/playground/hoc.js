// Higher order components (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// const Info = (props) => (
//   <div>
//     <h1>Info</h1>
//     <p>The info is: {props.info}</p>
//   </div>
// );

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <p>This is private info!</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// const requireAutentication = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAutenticated ? <WrappedComponent {...props} /> : 'You need to log in to see this info'}
//     </div>
//   );
// }

// const AdminInfo = withAdminWarning(Info);
// const AuthInfo = requireAutentication(Info);

// //ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details' />, document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAutenticated={true} info='These are the details' />, document.getElementById('app'));


const Info = (props) => (
  <div>
    <h1>This is INFO</h1>
    <p>This is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is Admin</p>}
      <WrappedComponent {...props} />
    </div>
  );
}

const withAdminAuthetication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : <p>Please log in</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAdminAuthetication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='private info, please do not share' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='private info, please do not share' />, document.getElementById('app'));