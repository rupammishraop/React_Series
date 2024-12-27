import React from 'react'
import './grid.css'
function Grid() {
  return (
    <div className="container">
        <div className="items header">header</div>
        <div className="items sideBar">sideBar</div>
        <div className="items contentOne">content1</div>
        <div className="items">content2</div>
        <div className="items">content3</div>
        <div className="items footer">footer</div>
    </div>
  )
}

export default Grid