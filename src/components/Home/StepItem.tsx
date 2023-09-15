import { cn } from '../../utils/utils'

interface StepItemProps {
  number: number
  title: string | React.ReactNode
  fullfilled: boolean
  first?: boolean
  last?: boolean
}

const StepItem: React.FC<StepItemProps> = ({
  number,
  title,
  fullfilled,
  first = false,
  last = false,
}) => {
  return (
    <div className='flex flex-col items-center relative'>
      <div
        className={cn(
          'rounded-full w-[24px] h-[24px] text-center  text[16px] font-medium',
          fullfilled
            ? 'bg-[#CB2B28] text-white'
            : 'bg-[#E5E5E7] text-[#9C9C9C]',
        )}
      >
        {number}
      </div>
      <div
        className={cn(
          'text-center  font-semibold text-[14px] mt-1',
          fullfilled ? 'text-[#CE2B28]' : 'text-[#C0C1C9]',
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          'absolute w-full py-1 -z-10 top-2',
          first && 'rounded-l-lg',
          last && 'rounded-r-lg',
          fullfilled ? 'bg-[#CB2B28]' : 'bg-[#E5E5E7]',
        )}
      ></div>
    </div>
  )
}

export default StepItem
