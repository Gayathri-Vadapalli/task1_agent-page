'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Mic, Send, Sparkles, Settings, Maximize2 } from 'lucide-react'

export default function AIAssistant() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "We have several incubation programs designed to support startups at various stages. These programs offer mentorship, resources, and networking opportunities to help you succeed. Here are a few options:",
      time: '01:07 AM'
    }
  ])
  const [inputValue, setInputValue] = useState('')

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
      description: "Offers comprehensive support including mentorship, funding, and resources for early-stage startups.",
    }
  ]

  const workspaceOptions = [
    "Tell me about your incubation programs",
    "What funding opportunities are available?",
    "How can I apply for the accelerator program?",
    "What industries do you focus on?"
  ]

  return (
    <section id="ai-assistant" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is{' '}
            <span className="gradient-text">Insurge AI?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insurge AI transforms static websites into intelligent assistants that engage visitors through natural conversation, visual demonstrations, and personalized experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-insurge rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice + Chat Interface</h3>
                <p className="text-gray-600">Natural conversations that feel human, not robotic</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-insurge rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">EM-CAN Technology</h3>
                <p className="text-gray-600">Embedded Canvas for live visual demonstrations and guidance</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-insurge rounded-xl flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Always-on engagement that never misses an opportunity</p>
              </div>
            </div>
          </div>

          {/* AI Assistant Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
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
                  <span className="text-sm">Speaking...</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {/* Explore workspace options */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Settings className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">Explore workspace options</span>
                  </div>
                  <div className="grid gap-2">
                    {workspaceOptions.map((option, index) => (
                      <button
                        key={index}
                        className="text-left p-2 bg-white hover:bg-blue-50 rounded-lg text-sm text-gray-700 border border-gray-200 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-insurge rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                    <p className="text-gray-800 mb-4">
                      {messages[0].content}
                    </p>
                    
                    {/* Incubation Programs */}
                    <div className="space-y-4">
                      {incubationPrograms.map((program, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-gray-900">
                            {program.title}
                          </h4>
                          <p className="font-medium text-blue-600 text-sm">
                            {program.subtitle}
                          </p>
                          <p className="text-gray-600 text-sm mt-1">
                            {program.description}
                          </p>
                          {program.link && (
                            <button className="text-blue-600 text-sm underline mt-1">
                              {program.link}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500 mt-4">
                      {messages[0].time}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-3">
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                    <Mic className="w-5 h-5 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurge-blue focus:border-transparent"
                  />
                  <button className="bg-gradient-insurge text-white p-3 rounded-lg hover:shadow-lg transition-shadow">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">Press Enter to send</span>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating action button */}
            <div className="absolute -bottom-4 -right-4">
              <button className="w-12 h-12 bg-gradient-insurge text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center pulse-glow">
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
