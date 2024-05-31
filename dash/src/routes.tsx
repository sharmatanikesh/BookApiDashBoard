import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage"
import CreateBook from "./pages/CreateBook";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([

    {
        path:'home',
        element:<HomePage/>
    },
    {
        path:'books',
        element:<CreateBook/>
    },
    {
        path:'login',
        element:<LoginPage/>

    },
    {
        path:'register',
        element:<RegisterPage/>
    }
])


export default router;