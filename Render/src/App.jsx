//import { useState } from 'react'

import './App.css'
import  {Cont, ContA } from './Cont'
import {Context} from './Context'
import Parent from './Parent'

function App() {

  return (
    <><Parent/>
    <Context>
    <ContA/>
    </Context>
    </>
  )
}

export default App
