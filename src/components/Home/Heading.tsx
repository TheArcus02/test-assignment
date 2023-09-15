import logo from '../../assets/logo.svg'

const Heading = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={logo} alt='Give ME ART' />
      <h2 className='font-openSans shrink-0 leading-6 text-[#141414] max-w-[349px] mt-6 text-xl text-center'>
        Generate your ART
        <br />
        by typing in field below any words that comes to your mind!
      </h2>
    </div>
  )
}

export default Heading
