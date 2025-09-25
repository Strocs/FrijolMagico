import { cn } from '@/utils/utils'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  disabled?: boolean
}

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    default: 'bg-fm-orange text-fm-white hover:bg-fm-orange/90',
    outline:
      'border border-fm-green/30 border-dashed text-fm-black/90 bg-fm-white hover:bg-fm-black/20',
    ghost: 'hover:bg-fm-orange/50 hover:text-fm-white text-fm-black/90',
    link: 'text-fm-green underline-offset-4 hover:underline',
  }

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  )
}
