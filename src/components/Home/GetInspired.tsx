import rightArrow from '../../assets/arrow-right-2.svg'
import demonIcon from '../../assets/demon-icon.svg'
import Button from '../Button'

const GetInspired = () => {
  return (
    <div className='bg-[#e3e4e742] rounded-lg flex flex-col items-center'>
      <h4 className='pt-2 text-center text-[20px] font-bold text-[#CB2B28] uppercase'>
        GET INSPIRED!
      </h4>
      <h5 className='text-black text-center text-[20px] font-medium'>
        BEST USERS DESIGNS
      </h5>
      <div className='flex items-center gap-2'>
        <div className='text-[#1E1E1E] text-center font-semibold text-[18px]'>
          See More
        </div>
        <div>
          <img src={rightArrow} alt='right arrow' />
        </div>
      </div>
      <div>
        <img src={demonIcon} alt='demon icon' />
      </div>
      <div className='flex w-full px-3'>
        <input
          type='text'
          placeholder='punk heart, gothic'
          className='p-4 bg-[#E5E5E7] rounded-l-lg w-full placeholder-black text-[16px]'
        />
        <Button
          variant='gradient'
          size='icon'
          className='rounded-tl-none rounded-bl-none'
        >
          ARTISTIC
        </Button>
      </div>
      <div className='my-6'>
        <Button className='w-[178px] text-white font-semibold text-[20px] py-2'>
          BUY
        </Button>
      </div>
    </div>
  )
}

export default GetInspired
