import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Category from "./Pages/Category"
import AllProducts from "./Pages/AllProducts"
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import ApproveProducts from "./Pages/ApproveProducts";
import Error from "./Pages/Error";
import Statistics from "./Pages/Statistics";
import AdminDash from "./Pages/AdminDash";
import AllSellers from "./Pages/AllSellers";
function App() {
  return (
    <Router>

      <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/Cart" element={< Cart/>} />
      <Route path="/Profile" element={< Profile/>} />
      <Route path="/ApproveProducts" element={< ApproveProducts/>} />
      <Route path="/Statistics" element={< Statistics/>} />
      <Route path="/AdminDash" element={< AdminDash/>} />
      <Route path="/AllSellers" element={< AllSellers/>} />


      

      
        
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute adminOnly={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute adminOnly={false}>
              <Home />
            </ProtectedRoute>
          }
        />
              <Route path="/Error" element={< Error/>} />

      </Routes>
    </Router>
  );
}

export default App;
