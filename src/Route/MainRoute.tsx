import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Common/Layout";
import HomeScreen from "../Pages/HomeScreen";
import InputScreen from "../Pages/InputScreen";


export const MainRoute = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<HomeScreen/>
                },
                {
                    path:"/input",
                    element:<InputScreen/>
                }
            ]
        }
    ]
)