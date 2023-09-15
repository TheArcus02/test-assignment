import guitar from '../../assets/guitar.svg'
import scrolling from '../../assets/scrolling-icon.svg'
import padlock from '../../assets/padlock-icon.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import Button from '../Button'

const StylePreview = () => {
  return (
    <div className='rounded-lg shadow-preview grid grid-cols-2'>
      <div className='flex'>
        <div className='ml-3 mt-5 cursor-pointer'>
          <img src={arrowLeft} alt='arrow left' />
        </div>
        <div className='ml-5 flex flex-col jusify-center items-center'>
          <div className='mt-1  text-[#2E2727] font-semibold text-[13px]'>
            Style preview
          </div>

          <div className='mt-3'>
            <img src={guitar} alt='guitar' />
          </div>
        </div>
      </div>

      <div>
        <div className='bg-[#e3e4e738] flex'>
          <div className=' grid grid-rows-3 text-center flex-1'>
            <div className='text-[14px] font-semibold flex items-center justify-center'>
              MINIMALISTIC
            </div>
            <div className='flex pr-6 pl-1 gap-1'>
              <img src={scrolling} alt='scrolling' />
              <Button className='shadow-custom w-full font-semibold text-[16px] leading-normal'>
                CARTOON
              </Button>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <img src={padlock} alt='padlock' />
              <div className='text-artistic font-semibold text-[14px]'>
                ARTISTIC
              </div>
            </div>
          </div>
          <div className='mr-3 mt-5 cursor-pointer'>
            <img src={arrowRight} alt='arrow right' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StylePreview
