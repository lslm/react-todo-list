import { Button, TextField } from "@mui/material"

import './NewItemForm.css'

function NewItemForm() {
  return (
    <div className="new-item-form">
      <div className="new-item-input">
        <TextField
          label="O que você vai fazer?"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>


      <Button variant="contained">Adicionar</Button>
    </div>
  )
}

export default NewItemForm
