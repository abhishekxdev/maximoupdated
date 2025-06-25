'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { memo, useCallback, useState } from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
        name: 'Services', 
        href: '/services',
        hasDropdown: true,
        dropdownItems: [
            { name: 'Data Services', href: '/services/data-services' },
            { name: 'Tele Sales', href: '/services/tele-sales' },
            { name: 'Customer Support', href: '/services/customer-support' },
            { name: 'Surveillance Monitoring', href: '/services/surveillance-monitoring' }
        ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
]

// Memoized menu item component
const MenuItem = memo(({ item, isActive, onClick }: { item: any, isActive: boolean, onClick?: () => void }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    if (item.hasDropdown) {
        return (
            <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <Link
                    href={item.href}
                    onClick={onClick}
                    className={cn(
                        'font-medium transition-all duration-300 text-sm lg:text-base relative pb-1 flex items-center gap-1 px-3 py-2 md:px-0 md:py-0',
                        isActive 
                            ? 'text-purple-900' 
                            : 'text-gray-600 hover:text-purple-900'
                    )}>
                    {item.name}
                    <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isDropdownOpen ? "rotate-180" : ""
                    )} />
                    {isActive && (
                        <span className="absolute bottom-0 left-3 md:left-0 right-3 md:right-0 h-0.5 bg-purple-900 rounded-full"></span>
                    )}
                </Link>
                
                {/* Desktop Dropdown */}
                <div className={cn(
                    "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-200 hidden md:block",
                    isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                )}>
                    {item.dropdownItems.map((dropdownItem: any, index: number) => (
                        <Link
                            key={index}
                            href={dropdownItem.href}
                            onClick={onClick}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                            {dropdownItem.name}
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Link
            href={item.href}
            onClick={onClick}
            className={cn(
                'font-medium transition-all duration-300 text-sm lg:text-base relative pb-1 block px-3 py-2 md:px-0 md:py-0',
                isActive 
                    ? 'text-purple-900' 
                    : 'text-gray-600 hover:text-purple-900'
            )}>
            {item.name}
            {isActive && (
                <span className="absolute bottom-0 left-3 md:left-0 right-3 md:right-0 h-0.5 bg-purple-900 rounded-full"></span>
            )}
        </Link>
    )
})

// Mobile dropdown component
const MobileDropdown = memo(({ item, isActive, onClick }: { item: any, isActive: boolean, onClick?: () => void }) => {
    const [isOpen, setIsOpen] = useState(false)

    if (!item.hasDropdown) return null

    return (
        <div className="px-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'w-full flex items-center justify-between font-medium transition-all duration-300 text-base relative pb-1 px-0 py-3',
                    isActive 
                        ? 'text-purple-900' 
                        : 'text-gray-700 hover:text-purple-900'
                )}
            >
                {item.name}
                <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isOpen ? "rotate-180" : ""
                )} />
            </button>
            
            {isOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-purple-100 pl-4">
                    {item.dropdownItems.map((dropdownItem: any, index: number) => (
                        <Link
                            key={index}
                            href={dropdownItem.href}
                            onClick={onClick}
                            className="block py-2 text-sm text-gray-600 hover:text-purple-900 transition-colors duration-200"
                        >
                            {dropdownItem.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
})

MenuItem.displayName = 'MenuItem'
MobileDropdown.displayName = 'MobileDropdown'

export const HeroHeader = memo(() => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10)
    }, [])

    const toggleMenu = useCallback(() => {
        setMenuState(prev => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setMenuState(false)
    }, [])

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    // Close menu when clicking outside
    React.useEffect(() => {
        if (menuState) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menuState])
    
    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 py-2 sm:py-3' 
                : 'bg-white/80 backdrop-blur-sm py-3 sm:py-5'
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                        {menuItems.map((item, index) => (
                            <MenuItem 
                                key={index} 
                                item={item} 
                                isActive={pathname === item.href || !!(item.hasDropdown && item.dropdownItems?.some((dropdownItem: any) => pathname === dropdownItem.href))}
                            />
                        ))}
                    </div>
                    
                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button asChild className="px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gray-900 text-white font-medium flex items-center hover:bg-purple-900 text-sm lg:text-base transition-colors duration-300">
                            <Link href="/contact">
                                Get Started For Free <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                        </Button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-500 hover:text-gray-800 p-2 transition-colors duration-300 relative z-50"
                            aria-label="Toggle menu"
                        >
                            {menuState ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            {menuState && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-40" 
                    onClick={closeMenu} 
                />
            )}
            
            {/* Mobile Menu */}
            <div className={cn(
                "lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50",
                menuState ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b bg-white flex-shrink-0">
                        <Logo />
                        <button 
                            onClick={closeMenu}
                            className="text-gray-500 hover:text-gray-800 p-2 transition-colors duration-300"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="flex-1 bg-white">
                        <div className="py-2">
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    {item.hasDropdown ? (
                                        <MobileDropdown 
                                            item={item} 
                                            isActive={pathname === item.href || !!(item.dropdownItems?.some((dropdownItem: any) => pathname === dropdownItem.href))} 
                                            onClick={closeMenu}
                                        />
                                    ) : (
                                        <div className="px-4">
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className={cn(
                                                    'block font-medium transition-all duration-300 text-base relative py-3 border-b border-gray-100 last:border-b-0',
                                                    pathname === item.href 
                                                        ? 'text-purple-900 bg-purple-50' 
                                                        : 'text-gray-700 hover:text-purple-900 hover:bg-gray-50'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Menu Footer */}
                    <div className="p-6 border-t bg-white flex-shrink-0">
                        <Button asChild
                            onClick={closeMenu}
                            className="w-full px-4 py-3 rounded-full bg-gray-900 text-white font-medium flex items-center justify-center text-sm transition-colors duration-300 hover:bg-purple-900"
                        >
                            <Link href="/contact">
                                Get Started For Free <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
})

HeroHeader.displayName = 'HeroHeader'