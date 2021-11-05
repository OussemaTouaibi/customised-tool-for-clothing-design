import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PrototypesContextProvider, { PrototypesContext } from './context/Prototypes-context'
import MydesignsContextProvider , { MydesignsContext } from './context/mydesigns-context'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<PrototypesContextProvider>
<MydesignsContextProvider>
    <App />
</MydesignsContextProvider>
</PrototypesContextProvider>
</Provider>
</BrowserRouter>
,
 document.getElementById('root')
 );