import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import './CoffeeApp.css';

function CoffeeApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beans/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CoffeeApp;
