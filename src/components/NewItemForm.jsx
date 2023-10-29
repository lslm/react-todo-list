import { Button, TextField } from "@mui/material"

import './NewItemForm.css'
import { useState } from "react"

function NewItemForm({ addNewItemCallback }) {
  const [newItemDescription, setNewItemDescription] = useState("")

  const handleChangeDescription = (event) => {
    setNewItemDescription(event.target.value)
  }

  const handleAddNewItem = () => {
    addNewItemCallback(newItemDescription)
    setNewItemDescription("")
  }

  return (
    <div className="new-item-form">
      <div className="new-item-input">
        <TextField
          label="O que você vai fazer?"
          variant="outlined"
          size="small"
          fullWidth
          value={newItemDescription}
          onChange={handleChangeDescription}
        />
      </div>


      <Button
        variant="contained"
        onClick={handleAddNewItem}>
        Adicionar
      </Button>
    </div>
  )
}

export default NewItemForm
