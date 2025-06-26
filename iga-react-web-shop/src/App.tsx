import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Main pages
import Home from './pages/Home';
import Shop from './pages/Shop';

//Information pages
import AcercaDeIGA  from './pages/submenu_pages/AcercaDeIGA';
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


// Not found page
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import CookieConsent from './components/CookieConsent';

// Test pages
import PaginationTest from './pages/test/PaginationTest';

const App: React.FC = () => {

  return (
    // Define the routers here
    <Router>
      <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />

          {/* Product detail */}
          <Route path="/tienda/:sku" element={<ProductDetail/>} />

          {/* Information Pages */}
          <Route path='/acerca-de-iga' element={<AcercaDeIGA/>}/>
          <Route path='/certificaciones' element={<Certificaciones/>}/>
          <Route path='/cobertura' element={<Cobertura/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/distribuidores' element={<Distribuidores/>}/>
          <Route path='/bolsa-de-trabajo' element={<BolsaDeTrabajo/>}/>
          <Route path='/directorio-de-pie-de-pagina' element={<FooterDirectory/>}/>
          <Route path='/politica-de-devolucion' element={<PoliticaDevolucion/>}/>
          <Route path='/politica-de-privacidad' element={<PoliticaPrivacidad/>}/>


          {/* Registration pages */}
          <Route path='/crear-cuenta' element={<CreateAcount/>}/>
          <Route path='/recuperar-cuenta' element={<ForgotPassword/>}/>
          <Route path='/cambiar-contraseña' element={<RestorePassword/>}/>
          <Route path='/login' element={<Login/>}/>

          {/* User pages */}
          <Route path='/tu-cuenta/direcciones-de-envio' element={<ShippingAddresses/>}/>
          <Route path='/tu-cuenta/informacion-personal' element={<PersonalInfo/>}/>
          <Route path='/tu-cuenta/mis-compras' element={<UserOrders/>}/>

          {/* Test pages */}
          <Route path='/test-pagination' element={<PaginationTest/>}/>
          
          {/* Not found page */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
      <CookieConsent/>
    </Router>

  );
};
export default App;
