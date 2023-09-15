/* eslint-disable @typescript-eslint/no-unused-vars */

import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/utils'

const buttonVariants = cva('rounded-lg', {
  variants: {
    variant: {
      primary: 'bg-[#CB2B28] text-[#F5F5F6]',
      secondary: 'bg-[#F5F5F6]',
      gradient: 'gray-gradient',
    },
    size: {
      icon: 'px-4',
      default: 'px-4 py-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    ></button>
  )
}

export default Button
