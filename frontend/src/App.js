import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeliveryPartnerAuth from "./Pages/DeliveryPartner/DeliveryPartnerAuth";
import ShopAuth from "./Pages/Shop/ShopAuth";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import CustomerAuth from "./Pages/Customer/CustomerAuth";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
import Offer from "./Pages/Offer/Offer";
import Cart from "./Pages/Cart/Cart";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LogOut from "./Pages/LogOut/LogOut";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ProductByCategory from "./Pages/ProductByCategory/ProductByCategory";
import Orders from "./Pages/Orders/Orders";
import Account from "./Pages/Customer/Account";
import AddProduct from "./Pages/Shop/AddProducts";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      {!user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer-auth" element={<CustomerAuth />} />
          <Route path="/del-partner-auth" element={<DeliveryPartnerAuth />} />
          <Route path="/shop-auth" element={<ShopAuth />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/product/:category" element={<ProductByCategory />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer-auth" element={<CustomerAuth />} />
          <Route path="/del-partner-auth" element={<DeliveryPartnerAuth />} />
          <Route path="/shop-auth" element={<ShopAuth />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:category" element={<ProductByCategory />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/account" element={<Account />} />
          <Route path="/dashboard/add-products" element={<AddProduct />} />
          <Route path="/dashboard/complete-profile" element={<LogOut />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
