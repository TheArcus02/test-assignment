import cartIcon from '../assets/cart-icon.svg'
import heartIcon from '../assets/heart-icon.svg'
import userIcon from '../assets/user-icon.svg'

const Nav = () => {
  return (
    <div className='flex justify-between'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='26'
        height='21'
        viewBox='0 0 26 21'
        fill='none'
        cursor={'pointer'}
      >
        <path d='M0.75 0H25.75V3.5H0.75V0Z' fill='#172B4D' />
        <path
          d='M0.75 8.75003H25.75V12.25H0.75V8.75003Z'
          fill='#172B4D'
        />
        <path d='M0.75 17.5H25.75V21H0.75V17.5Z' fill='#172B4D' />
      </svg>
      <div className='flex gap-4'>
        <div className='cursor-pointer'>
          <img src={heartIcon} alt='heart' />
        </div>
        <div className='cursor-pointer'>
          <img src={cartIcon} alt='cart' />
        </div>
        <div className='cursor-pointer'>
          <img src={userIcon} alt='user' />
        </div>
      </div>
    </div>
  )
}

export default Nav
