import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { types, signInSuccesss, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;

    yield put(signInSuccesss(token, user));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );

    yield put(signFailure());
  }
}

export default all([takeLatest(types.SIGN_IN_REQUEST, signIn)]);
