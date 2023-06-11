// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import travelData from './data.js'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  const TravelElements = travelData.map((travel) => {
    return <Card key={travel.id} travel={travel} />
  })

  return (
    <>
      <Navbar />
      <section className='cards--container'>{TravelElements}</section>
    </>
  )
}

export default App
