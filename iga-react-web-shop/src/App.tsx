import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Main pages
import Home from './pages/Home';
import Shop from './pages/Shop';

//Information pages
import AcercaDeIGA from './pages/submenu_pages/AcercaDeIGA';
import Certificaciones from './pages/submenu_pages/Certificaciones';
import Cobertura from './pages/submenu_pages/Cobertura';
import Contacto from './pages/submenu_pages/Contacto';
import Distribuidores from './pages/submenu_pages/Distribuidores';
import BolsaDeTrabajo from './pages/submenu_pages/BolsaDeTrabajo';
import PoliticaPrivacidad from './pages/submenu_pages/PoliticaPrivacidad';
import PoliticaDevolucion from './pages/submenu_pages/PoliticaDevolucion';
import FooterDirectory from './pages/FooterDirectory';

// Registration pages
import CreateAcount from './pages/registration_pages/CreateAcount';
import Login from './pages/registration_pages/Login';
import ForgotPassword from './pages/registration_pages/ForgotPassword';
import RestorePassword from './pages/registration_pages/RestorePassword';

// User pages
import ShippingAddresses from './pages/profile_pages/ShippingAddresses';
import PersonalInfo from './pages/profile_pages/PersonalInfo';
import UserOrders from './pages/profile_pages/UserOrders';
import Favorites from './pages/profile_pages/Favorites';

// Shopping cart
import ShoppingCart from './pages/ShoppingCart';

// Pay products
import PayProducts from './pages/pay_pages/PayProducts';
import ExitingPayInformation from './pages/pay_pages/ExitingPayInformation';


// Not found page
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import CookieConsent from './components/CookieConsent';

// Context
import { AppProvider } from './hooks/AppProvider';

// Test pages
import PaginationTest from './pages/test/PaginationTest';
import CategoryTreeTest from './pages/test/CategoryTreeTest';
import MercadoPagoPaymentBrickTest from './components/MercadoPagoPaymentBrickTest';
import ExitingPay from './pages/test/ExitingPay';
import PendingPay from './pages/test/PendingPay';
import FailedPay from './pages/test/FailedPay';

const App: React.FC = () => {

  return (
    // Define the routers here
    <Router>
      {/* App Context for alerts and handle shopping cart*/}
      <AppProvider>
        {/* Navbar */}
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />

          {/* Product detail */}
          <Route path="/tienda/:sku" element={<ProductDetail />} />

          {/* Information Pages */}
          <Route path='/acerca-de-iga' element={<AcercaDeIGA />} />
          <Route path='/certificaciones' element={<Certificaciones />} />
          <Route path='/cobertura' element={<Cobertura />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/distribuidores' element={<Distribuidores />} />
          <Route path='/bolsa-de-trabajo' element={<BolsaDeTrabajo />} />
          <Route path='/directorio-de-pie-de-pagina' element={<FooterDirectory />} />
          <Route path='/politica-de-devolucion' element={<PoliticaDevolucion />} />
          <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />} />


          {/* Registration pages */}
          <Route path='/crear-cuenta' element={<CreateAcount />} />
          <Route path='/recuperar-cuenta' element={<ForgotPassword />} />
          <Route path='/cambiar-contraseña' element={<RestorePassword />} />
          <Route path='/login' element={<Login />} />

          {/* User pages */}
          <Route path='/tu-cuenta/direcciones-de-envio' element={<ShippingAddresses />} />
          <Route path='/tu-cuenta/informacion-personal' element={<PersonalInfo />} />
          <Route path='/tu-cuenta/mis-compras' element={<UserOrders />} />
          <Route path="/tu-cuenta/mis-favoritos" element={<Favorites />} />

          {/* Shopping cart */}
          <Route path="/carrito-de-compras" element={<ShoppingCart />} />

          {/* Pay products */}
          <Route path="/pagar-productos" element={<PayProducts />} />
          <Route path="/pagar-productos/informacion-de-pago/:folio" element={<ExitingPayInformation  />} />


          {/* Footer pages */}
          {/* Test pages */}
          <Route path='/test-pagination' element={<PaginationTest />} />
          <Route path='/category-tree' element={<CategoryTreeTest />} />
          <Route path='/mercado-pago-test' element={<MercadoPagoPaymentBrickTest allAmount={407} orderPreferenceId='358310292-d32c597f-c642-4932-a6f8-2d09c485f62f'/>} />
          <Route path='/exiting-pay' element={<ExitingPay/>}/>
          <Route path='/pending-pay' element={<PendingPay/>}/>
          <Route path='/failed-pay' element={<FailedPay/>}/>

          {/* Not found page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* Footer */}
        <Footer />
        {/* Form cookie consent */}
        <CookieConsent />
      </AppProvider>
    </Router>

  );
};
export default App;
