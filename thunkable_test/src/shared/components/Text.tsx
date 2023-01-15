import React, {CSSProperties} from "react";

type Props = {
  children?: React.ReactNode
  style?: CSSProperties
}

const Text = (props: Props) => {
  const {children,style} = props;
  return (
    <span style={style}>{children}</span>
  )
}

export default Text;
