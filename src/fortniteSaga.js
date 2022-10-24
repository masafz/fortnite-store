import { call, put, takeEvery } from "redux-saga/effects";
import fortniteState, { getFortniteSuccess } from "./fortniteState";

function* workGetFortniteFetch() {
  const fortnite = yield call(() =>
    fetch("https://fortnite-api.theapinetwork.com/store/get")
  );

  const formattedFortnite = yield fortnite.json();
  yield put(getFortniteSuccess(formattedFortnite));
}

function* fortniteSaga() {
  yield takeEvery("fortnite/getFortniteFetch", workGetFortniteFetch);
}

export default fortniteSaga;
