import React from 'react'

type ButtonProps = {
    text:string,
    className:string
}

const ActionBtn = (props: ButtonProps) => {
  return (
    <button className={`${props.className} uppercase bg-red text-white`}>{props.text}</button>
  )
}

export default ActionBtn