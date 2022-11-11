import DefaultPage from 'components/DefaultPage';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import About from 'pages/About';
import Dishe from 'pages/Dishe';
import NotFound from 'pages/NotFound';
import RestaurantMenu from 'pages/RestaurantMenu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Start />} />
            <Route path="cardapio" element={<RestaurantMenu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="prato/:id" element={<Dishe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
