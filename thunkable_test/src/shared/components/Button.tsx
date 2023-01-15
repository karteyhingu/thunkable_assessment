import React, {CSSProperties} from "react";
import {ReactElementChildren} from "../../app-types";
// import {Button as MaterialButton} from "@mui/material"

type Props = {
  onClick: (e) => void,
  children: ReactElementChildren,
  onMouseLeave?: (e) => void,
  onMouseEnter?: (e) => void,
  style?: CSSProperties,
  hoverStyle?: CSSProperties
}

const Button = (props: Props) => {
  const {children, onClick} = props;
  return (
    <></>
    // <MaterialButton onClick={onClick}>
    //   {children}
    // </MaterialButton>
  )
}

export default Button;
