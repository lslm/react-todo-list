import { Checkbox, Typography } from "@mui/material"

import './Item.css'

function Item(props) {
  return (
    <div className="item">
      <Typography variant="body1">
        { props.description }
      </Typography>
      <Checkbox />
    </div>
  )
}

export default Item
