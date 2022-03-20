import { Action } from 'redux'
import axios from 'axios'
import { AsyncAction } from '../store'


export function getArticleList(tabLab = '', index?: number): AsyncAction {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'fetch'
      })
      const { data } = await axios.request({
        url:`https://cnodejs.org/api/v1/topics/?tab=${tabLab}`,
      })
      dispatch({
        type: 'fetch_success',
        payload: data.data
      })
    } catch (error) {
      dispatch({
        type: 'fetch_fail',
        error: ''
      })
    }
  }
}