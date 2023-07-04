import { RouterProvider } from "react-router-dom"
import { MainRoute } from "./Route/MainRoute"




const App = ()=>{
  return(
    <div>
      <RouterProvider router={MainRoute}/>
    </div>
  )
}

export default App