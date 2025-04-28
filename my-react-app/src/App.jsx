import { useState } from 'react'
import './App.scss'
import Banner from './components/banner/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Banner></Banner>
    </div>
  )
}

export default App
