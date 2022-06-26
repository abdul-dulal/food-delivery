import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import AddtoCart from "./pages/AddtoCart";
import Blogs from "./pages/Blogs";

import Payment from "./pages/Payment";
import Breakfirst from "./pages/home/Breakfirst";
import Dinner from "./pages/home/Dinner";
import Home from "./pages/home/Home";
import Lunch from "./pages/home/Lunch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Order from "./pages/Order";
import PrivateRoute from "./component/PrivateRoute";
import Myorder from "./pages/Myorder";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />}>
            <Route path="breakfast" element={<Breakfirst />} />
            <Route index element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          </Route>
          <Route
            path="/order/:id"
            element={<PrivateRoute>{<Order />}</PrivateRoute>}
          />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/payment/:id" element={<Payment />} />

          <Route path="/cart" element={<AddtoCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-order" element={<Myorder />} />
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
