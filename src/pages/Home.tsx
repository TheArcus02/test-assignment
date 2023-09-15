import Button from '../components/Button'
import GetInspired from '../components/Home/GetInspired'
import Heading from '../components/Home/Heading'
import SearchBar from '../components/Home/SearchBar'
import Steps from '../components/Home/Steps'
import StylePreview from '../components/Home/StylePreview'
import headingBackground from '../assets/heading-background.png'

const Home = () => {
  return (
    <div>
      <img
        src={headingBackground}
        alt='heading background'
        className='absolute top-0 right-0 -z-10'
      />

      <Heading />

      <div className='mt-10'>
        <Steps />
      </div>

      <div className='mt-12'>
        <SearchBar />
      </div>

      <div className='flex w-full  justify-center gap-4 mt-6'>
        <Button variant='secondary' className='w-full'>
          <h3 className='text-black font-semibold'>High Quality</h3>
        </Button>
        <Button variant='secondary' className='w-full'>
          <h3 className='text-black font-semibold'>Pop Art</h3>
        </Button>
        <Button variant='secondary' className='w-full'>
          <h3 className='text-black font-semibold'>Realistic Look</h3>
        </Button>
      </div>

      <div className='mt-6'>
        <StylePreview />
      </div>

      <div className='mt-6'>
        <GetInspired />
      </div>
    </div>
  )
}

export default Home
