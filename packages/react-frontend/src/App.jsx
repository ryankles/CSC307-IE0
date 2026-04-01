import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <main className="card">
        <p className="eyebrow">CSC 307</p>
        <h1>My first React app</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Count is {count}
        </button>
      </main>
    </div>
  )
}

export default App
