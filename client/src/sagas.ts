import { call, put, takeEvery } from 'redux-saga/effects';
import { searchSkills, receiveSkills, searchFailed } from './actions';

async function fetchSkills(query: string) {
    const response = await fetch(`/api/search?q=${query}`);
    if (!response.ok) throw new Error("Server responded with an error");
    return await response.json();
}

function* workerSaga(action) {
    try {
        const result = yield call(fetchSkills, action.payload);
        yield put(receiveSkills(result));
    } catch (error) {
        yield put(searchFailed(error.message));
    }
}

export function* rootSaga() {
    yield takeEvery(searchSkills.type, workerSaga);
}