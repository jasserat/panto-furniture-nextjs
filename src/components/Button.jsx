const Button = ({ text }) => {
  return (
    <button className='text-sm text-primary flex items-center gap-1'>
      {text}
      <img src="/images/button-icon.png" alt="" />
    </button>
  )
}

export default Button
