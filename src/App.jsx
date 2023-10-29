import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import Header from './components/Header'
import Item from './components/Item'
import NewItemForm from './components/NewItemForm'
import { useEffect, useState, useRef } from 'react';

function App() {
  const persistedItems = localStorage.getItem('items') || "[]"
  const [items, setItems] = useState(JSON.parse(persistedItems))
  const isInitialMount = useRef(true)

  const addNewItem = (description) => {
    const item = {
      id: items.length + 1,
      description: description,
      done: false
    }

    setItems([...items, item])
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    console.log("Carregado")
  }, [])

  const changeDone = (itemId, done) => {
    console.log(`Updating item id ${itemId} to done = ${done}`)

    setItems(
      items.map(item => {
        if (item.id === itemId) {
          return {...item, done: done}
        } else {
          return item
        }
      })
    )
  }

  const deleteItem = (itemId) => {
    console.log(`Deleting item id ${itemId}`)
    setItems(items.filter(item => item.id !== itemId))
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      localStorage.setItem('items', JSON.stringify(items))
    }
  }, [items])

  return (
    <div>
      <Header />

      <div className='todo-list'>
        <NewItemForm addItem={addNewItem}/>

        <div className="items">
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              changeDone={changeDone}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
