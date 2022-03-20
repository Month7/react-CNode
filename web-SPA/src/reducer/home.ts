import { Reducer, Action } from 'redux';

interface Article {
  id: string,
  author_id: string,
  tab: string,
  content: string,
  title: string,
  last_reply_at: string,
  good: boolean,
  top: boolean,
  reply_count: number,
  visit_count: number,
  create_at: string,
  author: {
    loginname: string,
    avatar_url: string
  }
}

export interface HomeStore {
  list: Article [],
  loading: boolean
}

const initialState : HomeStore = {
  list: [],
  loading: true,
}

interface homeAction extends Action<string> {
  payload: Article [],
  
}

const home: Reducer<HomeStore, homeAction> = (state = initialState, action) => {
  switch(action.type) {
    case 'fetch':
      return {
        list: [],
        loading: true
      }
    case 'fetch_success': {
      return {
        list: action.payload,
        loading: false,
      }
    }
    default: return state
  }
}

export default home