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

  const isValid = () => {
    return newItemDescription.length > 0
  }

  return (
    <div className="new-item-form">
      <div className="new-item-input">
        <TextField
          error={ !isValid() }
          helperText={ isValid() ? "" : "Por favor escreva alguma coisa" }
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
        onClick={handleAddNewItem}
        disabled={ !isValid() }>
        Adicionar
      </Button>
    </div>
  )
}

export default NewItemForm
