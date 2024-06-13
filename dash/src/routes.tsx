import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashBoardLayout from "./layout/DashboardLayout";
import BooksPage from "./pages/BooksPage";
import AuthLayout from "./layout/AuthLayout";
import CreateBook from "./pages/CreateBook";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "book",
        element: <BooksPage />,
      },
      {
        path:'books/create',
        element:<CreateBook/>
      }
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
