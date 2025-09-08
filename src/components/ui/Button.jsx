'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-bg-button-bg-primary text-text-button-text-primary hover:bg-gray-800 hover:text-white focus:ring-gray-500',
        secondary: 'bg-bg-button-bg-secondary text-text-button-text-secondary border border-border-button-bg-primary hover:bg-gray-50 focus:ring-gray-500',
        brand: 'bg-bg-primary-brand text-text-text-inverse hover:bg-bg-primary-light focus:ring-bg-primary-brand',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

const Button = ({
  text = "GET STARTED",
  text_font_size = "text-base",
  text_font_family = "Poppins",
  text_font_weight = "font-medium",
  text_line_height = "leading-base",
  text_text_align = "left",
  text_color = "text-text-inverse",
  fill_background_color = "bg-background-secondary",
  border_border_radius = "rounded-2xl",
  effect_box_shadow,
  border_border,
  layout_width,
  padding,
  position,
  margin,
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== ''
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidBorder ? `border-[${border_border}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  const customStyles = {
    ...(text_font_family && !text_font_family?.startsWith('font-') && { '--custom-font-family': text_font_family }),
  }

  const styleClasses = [
    text_font_size,
    text_font_family?.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    !variant ? fill_background_color : '',
    border_border_radius,
  ]?.filter(Boolean)?.join(' ')

  const handleClick = (event) => {
    if (disabled) {
      event?.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        text_font_family && !text_font_family?.startsWith('font-') ? 'button-custom-font' : '',
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button