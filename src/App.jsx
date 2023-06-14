// import { useState } from 'react'
import Navbar from './components/Navbar'
import travelData from './data.js'
import Card from './components/Card'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import { ArrowRight } from 'react-bootstrap-icons'

function App() {
  // const [count, setCount] = useState(0)

  const TravelElements = travelData.map((travel) => {
    return <Card key={travel.id} travel={travel} />
  })

  return (
    <>
      <Navbar />

      <section className='cards--container'>{TravelElements}</section>

      <Footer />
    </>
  )
}

export default App
