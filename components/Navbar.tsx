'use client'

import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-insurge rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text transition-all duration-300 group-hover:scale-105">Insurge AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-insurge-blue transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-insurge-blue transition-colors duration-300"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-insurge-blue transition-colors duration-300"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('ai-assistant')}
              className="text-gray-700 hover:text-insurge-blue transition-colors duration-300"
            >
              EM-CAN
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-insurge-blue p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu-enter">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-insurge-blue hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-insurge-blue hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-insurge-blue hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('ai-assistant')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-insurge-blue hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                EM-CAN
              </button>
              <button className="w-full mt-2 btn-primary">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
