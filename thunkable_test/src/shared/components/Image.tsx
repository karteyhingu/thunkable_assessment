import React, {CSSProperties, useState} from "react";

type Props = {
  src: string,
  alt?:string,
  onClick?: (e) => void,
  onMouseEnter?: (e) => void,
  onMouseLeave?: (e) => void,
  hoverSrc?: string,
  hoverStyle?: CSSProperties
  style?: CSSProperties
}

const Image = (props: Props) => {
  const {src,alt ,onClick, style, hoverSrc, hoverStyle} = props;
  const [hover, setHover] = useState<boolean>(false)

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return (
    <img
      src={hover ? hoverSrc : src}
      alt={alt}
      onClick={onClick}
      style={hover ? hoverStyle : style}
      onMouseEnter={hoverSrc || hoverStyle ? onMouseEnter : undefined}
      onMouseLeave={hoverSrc || hoverStyle ? onMouseLeave : undefined}/>
  )
}

export default Image;
