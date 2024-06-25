import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Product from "./component/Product"
import './App.css'
//can use only one tailwind utility here it can manage all css of website

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Product></Product>
    </>
  )
}

export default App
