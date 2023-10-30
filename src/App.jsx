import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import Header from './components/Header'
import Item from './components/Item'
import NewItemForm from './components/NewItemForm'
import { useState, useEffect } from 'react';

function App() {
  const persistedItems = localStorage.getItem('items') || '[]'

  const [items, setItems] = useState(JSON.parse(persistedItems))

  const addNewItem = (newItem) => {
    setItems([...items, newItem])
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <div>
      <Header />

      <div className='todo-list'>
        <NewItemForm addNewItemCallback={addNewItem} />

        <div className='items'>
          { items.map(item => {
            return <Item key={item} description={item} />
          }) }
        </div>
      </div>
    </div>
  )
}

export default App
