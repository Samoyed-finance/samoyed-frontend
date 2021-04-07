import './App.css'
import React, { useState } from 'react'

function App() {
  const { ethereum } = window
  const [addr, setAddr] = useState('')

  if (ethereum) {
    ethereum.on('accountsChanged', (acc) => {
      setAddr(acc[0])
    })
  }
  return (
    <div>
      <div>Test</div>
      <div>{addr}</div>
    </div>
  )
}

export default App
