'use client'

import { User, MessageCircle, Brain, Monitor, Target } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      icon: User,
      title: "User Visit",
      description: "Visitor lands on your website",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "Step 2",
      icon: MessageCircle,
      title: "Voice/Chat",
      description: "AI engages through natural conversation",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "Step 3",
      icon: Brain,
      title: "AI Agent",
      description: "Intelligent agent understands user needs",
      color: "from-green-500 to-green-600"
    },
    {
      step: "Step 4",
      icon: Monitor,
      title: "EM-CAN Demo",
      description: "Visual demonstration via Embedded Canvas",
      color: "from-orange-500 to-orange-600"
    },
    {
      step: "Step 5",
      icon: Target,
      title: "Lead Captured",
      description: "Qualified lead generated and nurtured",
      color: "from-red-500 to-red-600"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From visitor to qualified lead in five seamless steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg text-center relative z-10">
                  {/* Step Number */}
                  <div className="text-sm font-semibold text-blue-600 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to transform your website's user experience?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See how Insurge AI can increase your conversion rates and provide 24/7 customer engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2">
                <span>See It In Action</span>
                <span>✨</span>
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              ✨ Powered by EM-CAN Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
