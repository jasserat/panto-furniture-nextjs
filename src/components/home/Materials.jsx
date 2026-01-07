import Button from '@/components/Button'

const Materials = () => {
  return (
    <section className='my-24 mb-32 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
      <div className='md:w-1/2 mx-auto'>
        <h3 className='text-lg font-gilroy font-semibold text-primary mb-4'>MATERIALS</h3>
        <h2 className='text-4xl font-gilroy font-bold mb-4 capitalize lg:w-1/2'>Very Serious Saterials For Making Furniture</h2>
        <p className='text-secondary font-gilroy font-regular dark:text-white mb-5 lg:w-2/3'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <button className='text-sm text-primary flex items-center gap-1 font-gilroy font-medium'>
          More Info
          <img src="/images/button-icon.png" alt="" />
        </button>
      </div>

      <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center '>
        <div className=''>
          <img src="/images/material1.png" alt="" className='' />
          <img src="/images/material2.png" alt="" className='' />
        </div>
        <div className='md:col-span-2 col-span-1'>
          <img src="/images/material3.png" alt="" className='w-full md:h-[547px]' />
        </div>
      </div>
    </section>
  )
}

export default Materials
