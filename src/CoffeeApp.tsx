import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { OrderModal } from './components/OrderModal/OrderModal';
import Navbar from './components/Navbar/Navbar';
import type { CoffeeBeanApi } from './types/coffeeBean';
import type { OrderItem } from './types/orderItem';
import useSessionStorage from './hooks/useSessionStorage';
import './CoffeeApp.css';

function CoffeeApp() {
  const [orderItems, setOrderItems] = useSessionStorage<OrderItem[]>("orderItems", []);
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

  const removeFromOrder = (bean: CoffeeBeanApi, remove: boolean = false) => {
    setOrderItems(prev => { return prev.map(item =>
          item._id === bean._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
          ).filter(item => {
              if (remove && item._id === bean._id) return false; 
              if (item.quantity <= 0) return false;
              return true;            
            } 
          )
        }
      )
  };


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
        onAddToOrder={addToOrder}
        onRemoveFromOrder={removeFromOrder}
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
