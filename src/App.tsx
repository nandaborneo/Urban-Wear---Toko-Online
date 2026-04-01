import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
