import Button from '../Button'
import penIcon from '../../assets/pen-icon.svg'

const SearchBar = () => {
  return (
    <div className='flex w-full'>
      <input
        type='text'
        placeholder='What do you want to create?'
        className='p-4 bg-[#F5F5F6] rounded-l-lg w-full placeholder-[#C0C1C9] text-[1.0625rem]'
      />
      <Button variant='primary' size='icon'>
        <img src={penIcon} alt='pen' />
      </Button>
    </div>
  )
}

export default SearchBar
