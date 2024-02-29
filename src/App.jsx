import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import './App.css'

import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
// import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import CategoryPage from "./pages/category/CategoryPage";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

const App = () => {
  return (
      <Router>
        <ScrollTop />
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />  {/* category Page route  */}
          <Route path="/user-dashboard" element={
              <UserDashboard />
          } />
          <Route path="/admin-dashboard" element={
              <AdminDashboard />
          } />
          {/* <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } /> */}
        </Routes>
        <Toaster />
      </Router>
  );
}

export default App;
