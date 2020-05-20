import { createStore } from 'redux';
import { reducer } from './state/state-reducer'
import { Provider } from 'reactive-react-redux';
import React from 'react';
import Landing from "./pages/Landing";

const App = () => {
  const store = createStore(reducer)
  return (
      <Provider store={store}>
        <Landing />
      </Provider>
  );
}

export default App;
