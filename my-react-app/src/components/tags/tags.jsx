import React from 'react'
import "../tags/tags.scss"
import '../../style/global.scss'

function Tags({ tag }) {
  return (
    <div>
      <ul className="tags">
        {tag.map((tag, index) => (
          <li className="tags__text" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags