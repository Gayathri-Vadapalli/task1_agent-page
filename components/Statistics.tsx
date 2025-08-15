'use client'

import { TrendingUp, Users, Zap, Target } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      number: '650+',
      label: 'Startups Supported',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      number: '95+',
      label: 'Startup Raised Funding',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      number: '3.2k cr+',
      label: 'Funding Raised by Startups',
      icon: Target,
      color: 'text-purple-600'
    },
    {
      number: '3k+',
      label: 'Jobs Created',
      icon: Zap,
      color: 'text-orange-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Businesses with{' '}
            <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of companies already using Insurge AI to revolutionize their customer engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Organizations */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">Supported by</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 w-24 h-12 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Partner 1</span>
            </div>
            <div className="bg-gray-200 w-24 h-12 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Partner 2</span>
            </div>
            <div className="bg-gray-200 w-24 h-12 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Partner 3</span>
            </div>
            <div className="bg-gray-200 w-24 h-12 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Partner 4</span>
            </div>
            <div className="bg-gray-200 w-24 h-12 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Partner 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
