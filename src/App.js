import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Breakfirst from "./pages/home/Breakfirst";
import Dinner from "./pages/home/Dinner";
import Footer from "./pages/home/Footer";
import Home from "./pages/home/Home";
import Lunch from "./pages/home/Lunch";
import Order from "./pages/Order";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Breakfirst />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          </Route>
          <Route path="order/:id" element={<Order />} />
          <Route path="/blog" element={<Blogs />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
