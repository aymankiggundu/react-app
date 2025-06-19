import React, { Children } from 'react'

interface Props {
    children: string;
    color?:"react" | "angular" | "vue" | "svelte" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
     onClick: () => void;
     onClock?: () => void;
}

const Button = ({children,onClick,color='react'}: Props) => {
  return (
    <button className ={"btn btn- "+ color} onClick={onClick}>{children}</button>
  )
}

export default Button