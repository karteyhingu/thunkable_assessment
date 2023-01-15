import React, {CSSProperties} from "react";
import {Divider} from "antd";
import {ReactElementChildren} from "../../app-types";

type Props = {
  children: ReactElementChildren,
  style?: CSSProperties,
  hoverStyle?: CSSProperties
}

const DividerBorder = (props:Props) =>{
  const {children,style} = props;

  return(
    <Divider orientation="right" style={style} plain={true} >{children}</Divider>
  )
}

export default DividerBorder;
