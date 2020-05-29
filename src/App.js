import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux'
import { createStore } from 'redux'



const initiaState = {
  count: 0
}

function reducer(state = initiaState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>

    </div>
  );
}

export default App;
