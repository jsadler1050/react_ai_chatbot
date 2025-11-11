import { useEffect } from 'react'
import MainLayout from './components/mainLayout'
import { socketServer } from './socket/socketClient'

function App() {

  useEffect(() => {
    socketServer()
  }, [])

  return (
    <>
      <MainLayout/>
    </>

  )
}

export default App
