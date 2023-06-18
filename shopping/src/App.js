import { useEffect } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
  useLocation
 } from 'react-router-dom';
import ItemDetails from './scences/itemDetails/itemDetails';
import Checkout from './scences/checkout/Checkout';
import Profile from './scences/profile/Profile';
import Confirmation from './scences/checkout/Confirmation';
import Navbar from './scences/global/Navbar';
import HomePage from './scences/home/HomePage';
import CartMenu from './scences/global/CartMenu';
import Footer from './scences/global/Footer';
import Register from './scences/register/Register';
import Login from './scences/login/Login';

 const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
 }

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
