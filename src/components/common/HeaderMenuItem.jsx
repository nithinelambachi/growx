'use client';
const HeaderMenuItem = ({ 
  label, 
  href = '#', 
  isActive = false, 
  onClick,
  className = '' 
}) => {
  const handleClick = (event) => {
    event?.preventDefault()
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      role="menuitem"
      onClick={handleClick}
      className={`
        text-lg font-normal font-['Poppins'] leading-lg transition-colors duration-200 hover:scale-105 active:scale-95
        ${isActive 
          ? 'text-text-header-text-active' :'text-text-header-text hover:text-text-primary-brand'
        }
        ${className}
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  )
}

export default HeaderMenuItem