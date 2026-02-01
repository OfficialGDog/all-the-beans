import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { OrderModal } from './components/OrderModal/OrderModal';
import Navbar from './components/Navbar/Navbar';
import type { CoffeeBeanApi } from './types/coffeeBean';
import type { OrderItem } from './types/orderItem';
import './CoffeeApp.css';

function CoffeeApp() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

  const addToOrder = (bean: CoffeeBeanApi) => {
    setOrderItems(prev => {
      const found = prev.find(item => item._id === bean._id);
      if (found) {
        return prev.map(item =>
          item._id === bean._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...bean, quantity: 1 }];
    });
    setIsOrderModalOpen(true);
  }

  const handleCheckout = () => {
    alert("Order confirmed");
  };

  return (
    <BrowserRouter>
      <Navbar cartItems={orderItems} onCartClick={() => setIsOrderModalOpen(true)} />
      <OrderModal
        open={isOrderModalOpen}
        orderItems={orderItems}
        onCheckout={handleCheckout}
        onRemoveItem={() => {}}
        onClose={() => setIsOrderModalOpen(false)}
        />
      <Routes>
        <Route path="/" element={<HomePage onAddToOrder={addToOrder}/>} />
        <Route path="/beans/:id" element={<DetailPage onAddToOrder={addToOrder}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CoffeeApp;
