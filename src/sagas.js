import { takeEvery } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import * as api from './api';
import * as actions from './actions';


function* sagasInit () {
	
	console.log('sagasInit');
	let state = yield select();

	const initSagas = yield call(api.initSagasAPI);
	debugger;
	yield put({
		type: actions.SAGAS_INITIALIZATION,
		initSagas
	})
}


function* rootSaga () {

	console.log('saga initializations');
	yield sagasInit();

}

export default rootSaga;