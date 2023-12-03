// client/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test/test.js';  // Test 컴포넌트 import
import NewComponent from './components/NewComponent.js';  // NewComponent 컴포넌트 import
import AComponent from './components/a.js';


ReactDOM.render(
  <NewComponent />,
  document.getElementById('root')
);
