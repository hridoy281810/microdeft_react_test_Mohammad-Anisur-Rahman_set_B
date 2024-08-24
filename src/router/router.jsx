import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "../pages/CreateProduct";
import AllProductPage from "../pages/products";

const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      children:[
        {
          path: "create-product", 
          element:<CreateProduct />,
        },
        {
          path: "app-product", 
          element:<AllProductPage />,
        },
      ]
    },
  ]);

  export default router