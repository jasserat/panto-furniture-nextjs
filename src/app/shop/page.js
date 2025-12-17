import Products from '@/components/shop/Products'

export const metadata = {
  title: 'Shop - Panto Furniture',
  description: 'Browse our collection of premium furniture including chairs, beds, sofas, and lamps.',
}

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* banner */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(/images/banner.png)` }}
      >
        <h1 className="text-5xl font-bold">Shop Our Products</h1>
      </div>

      {/* product page */}
      <Products headline="What's Your Choice" />
    </div>
  )
}
