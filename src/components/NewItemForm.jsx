import { Button, TextField } from "@mui/material"

import './NewItemForm.css'
import { useState } from "react"

function NewItemForm({addItem}) {
  const [description, setDescription] = useState('')

  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }

  function handleAddItem() {
    addItem(description)
    setDescription('')
  }

  return (
    <div>
      <div className="new-item-form">
        <div className="new-item-input">
          <TextField
            label="O que você vai fazer?"
            variant="outlined"
            size="small"
            fullWidth
            value={description}
            onChange={handleChangeDescription}
          />
        </div>

        <Button variant="contained" onClick={handleAddItem}>Adicionar</Button>
      </div>
    </div>
  )
}

export default NewItemForm
