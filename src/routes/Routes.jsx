import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";
import Blogs from "../pages/Blogs";
import Error404 from "../pages/Error404";
import SingleProductPage from "../pages/SingleProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/single-product",
        element: <SingleProductPage />,
      },
    ],
  },
]);

export default router;
