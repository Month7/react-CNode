import './App.css';
import './index.css'
import RootRouter from './router'
import { Provider } from 'react-redux'
import store from './store'


const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <RootRouter />  
    </div>
    </Provider>
  )
}

export default App;
