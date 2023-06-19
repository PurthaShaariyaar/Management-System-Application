import './index.css'
import Navbar from './homePageComponents/Navbar/Navbar'
import { useState } from 'react'

enum SelectedPage {
  Home = 'home',
  Features = 'features',
  Pricing = 'pricing',
  Contact = 'contact'
}

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
