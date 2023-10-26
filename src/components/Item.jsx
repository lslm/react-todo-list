import { Checkbox, Typography } from "@mui/material"

import './Item.css'

function Item() {
  return (
    <div className="item">
      <Typography variant="body1">
        Item para ser completado
      </Typography>
      <Checkbox />
    </div>
  )
}

export default Item
