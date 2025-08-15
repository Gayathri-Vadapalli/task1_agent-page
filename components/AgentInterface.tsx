'use client'

import { useState } from 'react'
import { Settings, MessageCircle, Send, Mic, MoreVertical, Sparkles, ArrowDown } from 'lucide-react'

export default function AgentInterface() {
  const [messageInput, setMessageInput] = useState('')

  const stats = [
    { number: '650+', label: 'Startups Supported' },
    { number: '95+', label: 'Startup Raised Funding' },
    { number: '3.2k cr+', label: 'Funding Raised by Startups' },
    { number: '3k+', label: 'Jobs Created' }
  ]

  const incubationPrograms = [
    {
      title: "Pre-Incubation Program:",
      subtitle: "ISPROUTE 4.0",
      description: "A flagship program for aspiring entrepreneurs, exclusive for ISB PGP Co '25.",
      link: "Learn more"
    },
    {
      title: "Incubation Programs:",
      subtitle: "Sector-Agnostic Incubation Program",
      description: "Offers comprehensive support including mentorship, funding, and resources for early-stage startups."
    }
  ]

  const workspaceOptions = [
    "Tell me about your incubation programs",
    "What funding opportunities are available?", 
    "How can I apply for the accelerator program?",
    "What industries do you focus on?"
  ]

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex overflow-hidden">
      {/* Left Side - Content Area */}
      <div className="flex-1 p-8 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 flex-shrink-0">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-14 h-14 bg-gradient-insurge rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">I-Venture Assistant</h1>
              <div className="flex items-center space-x-2 text-lg text-gray-500 mt-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Live Assistant</span>
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-600 font-medium">Your entrepreneurial journey companion</p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex-1 flex flex-col overflow-hidden">
          <div className="mb-6 flex-shrink-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Startup Resources & Information</h2>
            <p className="text-gray-600 text-xl">Explore programs, events, and opportunities for your venture</p>
          </div>
          
          {/* Description */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-6 border border-purple-100">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                I-Venture @ ISB fosters entrepreneurship and nurtures start-ups. It administers business incubators that provide 'Start-to-Scale' support for entrepreneurship and facilitates the conversion of start-ups into profitable entrepreneurial ventures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                We have very specific programs that will help entrepreneurs and ventures of all stages. I-Venture @ ISB is constantly working towards creating a strong ecosystem of mentors, VC's and Academicians.
              </p>
              <button className="inline-flex items-center text-insurge-primary hover:text-insurge-darkBlue font-bold text-lg transition-colors group">
                MORE ABOUT I-VENTURE @ ISB 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Statistics Grid */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-insurge bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Chat Interface */}
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full shadow-xl">
        {/* Chat Header */}
        <div className="bg-gradient-insurge text-white p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">I-Venture Assistant</h3>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-base">Speaking...</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-base text-gray-600 px-6 py-3 bg-gray-50 border-b border-gray-200 flex-shrink-0">
          Your entrepreneurial companion
        </div>

        {/* Chat Content - Simplified */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold text-blue-700">Quick Actions</span>
            </div>
            <div className="space-y-3">
              {workspaceOptions.slice(0, 3).map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left p-4 bg-white hover:bg-blue-50 rounded-lg text-base text-gray-700 border border-gray-200 transition-all duration-200 hover:shadow-md font-medium"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Program */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <h4 className="font-bold text-xl text-purple-800 mb-3">
              Featured Program
            </h4>
            <div className="border-l-4 border-insurge-primary pl-4">
              <h5 className="font-semibold text-gray-900 text-lg">
                ISPROUTE 4.0
              </h5>
              <p className="text-purple-700 text-base font-medium mb-2">
                Pre-Incubation Program
              </p>
              <p className="text-gray-600 text-base">
                A flagship program for aspiring entrepreneurs, exclusive for ISB PGP Co '25.
              </p>
              <button className="text-insurge-primary text-base font-semibold mt-3 hover:text-insurge-darkBlue transition-colors">
                Learn more →
              </button>
            </div>
          </div>
        </div>

        {/* Chat Input - Enhanced */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
          <div className="flex items-center space-x-3 mb-3">
            <button className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 rounded-xl flex items-center justify-center transition-all duration-200 border border-purple-200">
              <Mic className="w-6 h-6 text-purple-600" />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-insurge-primary focus:border-transparent text-base text-black"
            />
            <button className="bg-gradient-insurge text-white p-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center">
            <span className="text-sm text-gray-500">Press Enter to send your message</span>
          </div>
        </div>
      </div>
    </div>
  )
}
