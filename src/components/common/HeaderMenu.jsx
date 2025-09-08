'use client';
import { useState } from 'react';
 import HeaderMenuItem from'./HeaderMenuItem';

const HeaderMenu = ({ className = '' }) => {
  const [activeItem, setActiveItem] = useState('Home')

  const menuItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'service', label: 'Service', href: '#services' },
    { id: 'pagedsds', label: 'Page', href: '#page' }  ]

  return (
    <nav 
      className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-12 p-2 ${className}`}
      role="menubar"
    >
      {menuItems.map((item) => (
        <HeaderMenuItem
          key={item.id}
          label={item.label}
          href={item.href}
          isActive={activeItem === item.label}
          onClick={() => setActiveItem(item.label)}
        />
      ))}
    </nav>
  )
}

export default HeaderMenu