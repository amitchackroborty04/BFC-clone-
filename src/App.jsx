import React from 'react'
import Navbar from './coponents/navbar'
import Banner from './coponents/Banner'
import About from './coponents/About'
import Foods from './coponents/Foods'
import Gallary from './coponents/Gallary'
import Comment from './coponents/Comment'
import Contact from './coponents/Contact'
import Fotter from './coponents/Fotter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Foods/>
      <Gallary/>
      <Comment/>
      <Contact/>
      <Fotter/>
    </div>
  )
}

export default App