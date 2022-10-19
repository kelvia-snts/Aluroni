import RestaurantMenu from 'pages/RestaurantMenu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Cardapio" element={<RestaurantMenu />} />
      </Routes>
    </Router>
  );
}
