import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Clicker from 'components/Clicker/Clicker';
import reducers from 'reducers';

const store = createStore(reducers, {counter: 0});

ReactDOM.render(<Provider store={store}><Clicker /></Provider>, document.getElementById('root'));