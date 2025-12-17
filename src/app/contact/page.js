import Materials from '@/components/home/Materials'
import Testimonials from '@/components/home/Testimonials'

export const metadata = {
  title: 'Contact Us - Panto Furniture',
  description: 'Get in touch with Panto Furniture. We are here to help you transform your living spaces.',
}

export default function ContactPage() {
  return (
    <section>
      {/* banner */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(/images/contact-background.jpg)` }}
      >
        <div className=''>
          <h1 className="text-5xl font-bold">Contact</h1>
        </div>
      </div>
      <Materials />
      <Testimonials />
    </section>
  )
}
