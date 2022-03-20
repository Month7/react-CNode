import { combineReducers, Action } from 'redux';
import home, { HomeStore } from './home'

export interface Store {
  home: HomeStore
}

const reducer = combineReducers({
  home
})

export default reducer