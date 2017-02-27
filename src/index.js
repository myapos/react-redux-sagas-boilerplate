import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/index.css';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const init = () => {

	//if you want you can make asynchronous calls here in order to get server data for initialization

	const initialState = {
		dummyData:"dummyData"
	};

	ReactDOM.render(
	  <Provider store={configureStore(initialState)}>
	      <App />
	   </Provider>,
	  document.getElementById('root')
	);


}


init();

