'use client'

import { ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-insurge text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce-subtle">
            <Sparkles className="w-4 h-4" />
            <span>✨ Introducing the Future of Web Interaction</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform Your Website Into An{' '}
            <span className="gradient-text">Intelligent Assistant</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-slide-up">
            Insurge AI delivers 24/7 AI agents for voice, chat, and live demo delivery — turning static websites into intelligent, interactive experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button 
              onClick={() => scrollToSection('ai-assistant')}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>See It In Action</span>
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="btn-secondary flex items-center space-x-2 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Technology Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full pulse-indicator"></span>
            <span>✨ Powered by EM-CAN Technology</span>
          </div>
        </div>

        {/* Hero Visual - Chat Interface Preview */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl mx-auto border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-insurge text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Insurge AI Assistant</h3>
                  <p className="text-sm opacity-90">Your entrepreneurial journey companion</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full pulse-indicator"></div>
                <span className="text-sm">Live Assistant</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 bg-gray-50 min-h-[300px]">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-insurge rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm chat-bubble">
                  <p className="text-gray-800">
                    👋 Welcome! I'm your AI assistant. I can help you explore our autonomous sales agents and personalized demo technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-insurge rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm chat-bubble">
                  <p className="text-gray-800">
                    🎯 <strong>What would you like to know about?</strong>
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-2 rounded-lg text-sm transition-colors">
                      EM-CAN Technology
                    </button>
                    <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 p-2 rounded-lg text-sm transition-colors">
                      Live Demos
                    </button>
                    <button className="bg-green-50 hover:bg-green-100 text-green-700 p-2 rounded-lg text-sm transition-colors">
                      Voice Interface
                    </button>
                    <button className="bg-orange-50 hover:bg-orange-100 text-orange-700 p-2 rounded-lg text-sm transition-colors">
                      Integration
                    </button>
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-gradient-insurge text-white rounded-lg p-3 max-w-xs chat-bubble">
                  <p>Tell me about EM-CAN technology</p>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-insurge rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurge-blue focus:border-transparent"
                  disabled
                />
                <button className="bg-gradient-insurge text-white p-3 rounded-lg hover:shadow-lg transition-shadow">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
