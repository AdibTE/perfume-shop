import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Collections from './components/Collections'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartModal from './components/CartModal'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev
      return [...prev, product]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }, [])

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Features />
      <Products onAddToCart={addToCart} />
      <Collections />
      <Testimonials />
      <Newsletter />
      <Footer />
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
      />
    </div>
  )
}
