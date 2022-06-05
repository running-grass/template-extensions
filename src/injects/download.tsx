import ReactDOM from "react-dom";
import React, { useCallback } from 'react'

const contailerId = `container-${Date.now()}`

const section = document.createElement("section")
section.id = contailerId
document.body.appendChild(section)


function App() {

  const onClick = useCallback(() => {
    alert('已下载……')
  })

  return (
    <div id="downloadBtn" style={{
      position: 'fixed', left: 0, bottom: 0, padding: "5px 10px",
      background: 'pink',
      'borderRadius': '5px',
      'zIndex': 10000,
    }}>
      开始时间： <input type="date" id="grass-start-time" />
      <br />
      结束时间： <input type="date" id="grass-end-time" />
      <br />
      <button id="grass-down-resume" onClick={onClick}>下载</button>
    </div>
  )
}

const domContainer = document.querySelector(`#${contailerId}`);
ReactDOM.render(<App />, domContainer);