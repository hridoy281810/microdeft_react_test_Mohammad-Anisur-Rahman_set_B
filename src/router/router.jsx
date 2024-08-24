import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "../pages/CreateProduct";
import AllProductPage from "../pages/products";

const router = createBrowserRouter([
    {
      
          path: "/", 
          element:<CreateProduct />,
      
    },
    {
      path: "all-product", 
      element:<AllProductPage />,
    },
  ]);

  export default router