import './index.css'
import Navbar from './homePageComponents/Navbar/Navbar'
import { useState } from 'react'
import { SelectedPage } from './homePageComponents/Shared/types'

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  )
}

export default App
