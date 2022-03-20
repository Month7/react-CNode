import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, Action } from 'redux'
import reducer, { Store } from '../reducer/index'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
const loggerMiddleware = createLogger()

const root = createStore<Store, any, any, any>(reducer, applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
  loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))

export interface SimpleAction extends Action<string> {
  payload?: any;
  error?: string;
}

export type AsyncAction = ThunkAction<any | void, Store, undefined, SimpleAction>;

export default root