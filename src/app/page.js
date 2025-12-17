import Hero from '@/components/home/Hero'
import ChooseUs from '@/components/home/ChooseUs'
import Products from '@/components/shop/Products'
import Expricences from '@/components/home/Expricences'
import Materials from '@/components/home/Materials'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <Products headline="Best Selling Product" />
      <Expricences />
      <Materials />
      <Testimonials />
    </>
  )
}
