import React from 'react';
import { Provider } from 'react-redux';
import { UsersMain } from './components/UsersMain';
import {store} from './store/store'

export const UsersApp = () => {
  return (
    <Provider store={store}>
      <UsersMain />
    </Provider>
  )
}
