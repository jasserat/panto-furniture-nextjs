const Expricences = () => {
  return (
    <section className='my-24 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
      <div className='md:w-1/2 md:h-[547px]'>
        <img src="/images/expricences.png" alt="" className='h-full w-full' />
      </div>
      <div className='md:w-1/2 mx-auto'>
        <h3 className='text-lg font-gilroy font-semibold text-primary mb-4'>EXPERIENCES</h3>
        <h2 className='text-4xl font-gilroy font-bold mb-4 capitalize lg:w-1/2'>We Provide You The Best Experience</h2>
        <p className='text-secondary font-gilroy font-regular dark:text-white mb-5 lg:w-2/3'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        <button className='text-sm text-primary flex items-center gap-1 font-gilroy font-medium'>
          More Info
          <img src="/images/button-icon.png" alt="" />
        </button>
      </div>
    </section>
  )
}

export default Expricences
