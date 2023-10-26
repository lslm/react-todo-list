import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import Header from './components/Header'
import Item from './components/Item'
import NewItemForm from './components/NewItemForm'

function App() {

  return (
    <div>
      <Header />

      <div className='todo-list'>
        <NewItemForm />

        <div className='items'>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}

export default App
