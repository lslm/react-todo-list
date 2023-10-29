import { Button, Checkbox, Typography } from "@mui/material"

import './Item.css'
import { useEffect, useState, useRef } from "react"


function Item({item, changeDone, deleteItem}) {
  console.log(item)
  const [done, setDone] = useState(item.done)

  function handleToggleDone() {
    console.log(!done)
    setDone(!done)
  }

  function handleDeleteItemClick() {
    deleteItem(item.id)
  }

  useEffect(() => {
    changeDone(item.id, done)
  }, [done])

  return (
    <div className="item">
      <Typography variant="body1" className={`${item.done ? 'done': ''}`}>
        {item.description}
      </Typography>

      <Checkbox checked={item.done} onChange={handleToggleDone}/>

      <Button onClick={handleDeleteItemClick}>Delete</Button>
    </div>
  )
}

export default Item
