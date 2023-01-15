import React, {CSSProperties} from "react";

type Props = {
  name: string,
  type: string,
  value?: string | number | undefined;
  onChange: (e) => void;
  placeholder:string
  onEnterPressed?: (e) => void;
  onEscapePressed?: (e) => void;
  inputStyle?: CSSProperties,
}

const InputText = (props: Props) => {
  const {name, type, value, onChange, onEnterPressed, onEscapePressed, inputStyle, placeholder} = props

  const onKeyDown = (e: { key: string }) => {
    switch (e.key) {
      case "Enter":
        onEnterPressed?.(e);
        break;
      case "Escape":
        onEscapePressed?.(e);
        break;
    }
  }

  return (
    <input type={type || "text"} style={(inputStyle ? inputStyle : {})} name={name} value={value} placeholder={placeholder}
           onChange={onChange} onKeyDown={onEnterPressed || onEscapePressed ? onKeyDown : undefined}/>
  )
}

export default InputText;
