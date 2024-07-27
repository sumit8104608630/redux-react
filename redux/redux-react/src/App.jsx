

import './App.css'
import Cake from './component/Cake'
import Cake2 from './component/Cake2'
import Fetch from './component/Fetch'
import IceCream from './component/IceCream'
import IceCream2 from './component/IceCream2'
import Item from './component/Item'
import store from './redux/combine'
import {Provider} from "react-redux"
function App() {

  return (
  <>
  <Provider store={store}>
    <Cake/>
    <Cake2/>
    <IceCream/>
    <IceCream2/>
    <Item cake/>
    <Item/>
    <Fetch/>
  </Provider>
  
  </>
  )
}

export default App
