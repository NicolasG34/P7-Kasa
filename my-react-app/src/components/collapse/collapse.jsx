import React, { useState } from 'react'
import ArrowDown from '../../assets/arrowdown.svg'
import './collapse.scss'
import '../../style/global.scss'

function Collapse({ title, text, className }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className={className}>
      <button className="collapse__button" onClick={toggle}>
        <h2 className="collapse__button--title">{title}</h2>
        <img
          className={!open ? 'arrowDown_icon' : 'arrowDown_icon arrowDown_icon--opened'}
          src={ArrowDown}
          alt="Description du site à dérouler"
        />
      </button>
      {open && <div className="collapse__button--text">{text}</div>}
    </div>
  )
}

export default Collapse