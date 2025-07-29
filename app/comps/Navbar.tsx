'use client'
import React, { useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from './Container';

const Navbar = () => {
  const pathname= usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems =[
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Projects", path: "/projects"}
  ];


  return (
    <nav className='topnav'>
      <Container>
        <div className='mx-auto px-4 '>
          <div className='flex items-center justify-between h-16'>
            <Link href="/" className='namegradient'>
              Daisy Wangenga
            </Link>
          
          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={pathname === item.path ? "myblue" : "text-black hover:text-gray-500" } 
                >
                  {item.name}
                </Link>
              ))}
                <Button variant="default" size="sm" className='my-gradient-button'>
                  <a href="mailto:daisyimg65@gmail.com">Contact</a>
                </Button>
            </div>


            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={pathname === item.path ? "myblue" : "text-black hover:text-gray-500" }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="default" size="sm" asChild className="w-fit my-gradient-button">
                  <a href="mailto:daisyimg65@gmail.com">Contact</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Navbar