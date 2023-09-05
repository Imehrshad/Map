import { useState } from 'react'
import './App.css'
import MapWithMarkers from './Components/MapWithMarkers'
import { MyContext } from './Context/MyContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContext>
      <MapWithMarkers />
    </MyContext>
  )
}

export default App
