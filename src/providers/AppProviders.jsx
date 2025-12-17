'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { CartProvider } from '@/context/CartContext'

export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ThemeProvider>
  )
}
