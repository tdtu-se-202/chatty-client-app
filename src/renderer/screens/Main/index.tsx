import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Container, Button } from 'renderer/components'
import { useWindowStore } from 'renderer/store'
import { Welcome } from 'renderer/components/Welcome'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  const navigate = useNavigate()
  const store = useWindowStore().about

  useEffect(() => {
    App.sayHelloFromBridge()

    App.whenAboutWindowClose(({ message }) => {
      console.log(message)

      store.setAboutWindowState(false)
    })
  }, [])

  function openAboutWindow() {
    App.createAboutWindow()
    store.setAboutWindowState(true)
  }

  return (
    // <Container>
    //   <Heading>Hi, there! 👋</Heading>
    //
    //   <h2>It's time to build something awesome! ✨</h2>
    //
    //   <nav>
    //     <Button
    //       className={store.isOpen ? 'disabled' : ''}
    //       onClick={openAboutWindow}
    //     >
    //       Open About Window
    //     </Button>
    //
    //     <Button onClick={() => navigate('login')}>Go to Login Page</Button>
    //     <Button onClick={() => navigate('registry')}>
    //       Go to Registration Page
    //     </Button>
    //
    //     <Button onClick={() => navigate('anotherScreen')}>
    //       Go to Another screen
    //     </Button>
    //   </nav>
    // </Container>
    <Container>
      <Welcome></Welcome>

      <Button onClick={() => navigate('login')}>Go to Login Page</Button>
    </Container>
  )
}
