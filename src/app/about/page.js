import Expricences from '@/components/home/Expricences'

export const metadata = {
  title: 'About Us - Panto Furniture',
  description: 'Learn about Panto Furniture and our commitment to providing the best quality furniture for your home.',
}

export default function AboutPage() {
  return (
    <section>
      {/* banner */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(/images/about-background.jpg)` }}
      >
        <div className=''>
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
      </div>
      <Expricences />
    </section>
  )
}
