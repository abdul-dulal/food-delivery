import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import AddtoCart from "./pages/AddtoCart";
import Blogs from "./pages/Blogs";
import CheckOut from "./pages/CheckOut";
import Deliver from "./pages/Deliver";
import Breakfirst from "./pages/home/Breakfirst";
import Dinner from "./pages/home/Dinner";
import Home from "./pages/home/Home";
import Lunch from "./pages/home/Lunch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Order from "./pages/Order";
// google map key AIzaSyDjwVR5XBFSDWWwR38tv9JSqbu7Et2gyC8

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="breakfast" element={<Breakfirst />} />
            <Route index element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          </Route>
          <Route path="/order/:id" element={<Order />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/deliver/:id" element={<Deliver />} />
          <Route path="/checkout" element={<CheckOut />} />

          <Route path="/cart" element={<AddtoCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
