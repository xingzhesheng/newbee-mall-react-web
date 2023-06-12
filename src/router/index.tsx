import { createBrowserRouter as createRouter } from "react-router-dom";
import Home from "@/views/Home.tsx";
import Login from "@/views/Login.tsx";
import User from "@/views/User.tsx";
import ProductList from "@/views/ProductList.tsx";
import Category from "@/views/Category.tsx";
import ProductDetail from "@/views/ProductDetail.tsx";
import Cart from "@/views/Cart.tsx";
import CreateOrder from "@/views/CreateOrder.tsx";
import Address from "@/views/Address.tsx";
import AddressEdit from "@/views/AddressEdit.tsx";
import Order from "@/views/Order.tsx";
import OrderDetail from "@/views/OrderDetail.tsx";
import Setting from "@/views/Setting.tsx";
import About from "@/views/About.tsx";
const router = createRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/create-order",
    element: <CreateOrder />,
  },
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/address-edit",
    element: <AddressEdit />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/order-detail",
    element: <OrderDetail />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
