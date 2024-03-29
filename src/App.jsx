import Navbar from "./componentes/layout/navbar/Navbar"
import {Grid, Typography} from "@mui/material"
import ItemListContainer from "./componentes/common/itemlistcontainer/ItemListContainer"

function App() {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a nuestro e-commerce!"} />
           
  </>
  )
}

export default App
