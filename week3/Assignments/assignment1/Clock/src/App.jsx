import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(new Date().toLocaleString().split(",")[1])

  useEffect(
    () => {
     const Interval= setInterval(() => {
        const date = new Date().toLocaleString().split(",")[1]
        setDate(date)

      }, 1000);
      return () => clearInterval(Interval)
    },
    []
  )

  return (
    <>
     <p>Current time:</p>
      <p>{date}</p>
     

    </>
  )
}

export default App
