'use client'

import { MessageSquare, Monitor, Play, Clock, Plug, Code } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Voice + Chat Interface",
      problem: "Static websites frustrate users with endless scrolling and searching",
      solution: "Natural, voice-first conversations that understand context and intent",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Monitor,
      title: "EM-CAN (Embedded Canvas)",
      problem: "Users don't engage with text-heavy pages and miss key information",
      solution: "AI visually demonstrates, explains, and guides users in real-time",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Play,
      title: "Live Demo Delivery",
      problem: "Most users never see your product in action before leaving",
      solution: "AI delivers personalized demos instantly, tailored to user needs",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "24/7 Engagement",
      problem: "Missed queries during off-hours equal lost revenue and opportunities",
      solution: "AI is always on, always responsive, capturing every potential lead",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Plug,
      title: "Plug-and-Play Integration",
      problem: "Legacy AI solutions take weeks to deploy and require technical expertise",
      solution: "API-first architecture integrates within hours, not weeks",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Code,
      title: "Developer-Friendly APIs",
      problem: "Complex implementations that require extensive development resources",
      solution: "Clean, well-documented APIs that developers love to work with",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your website with intelligent features that solve real user problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-red-600 mb-2">The Problem</h4>
                <p className="text-gray-600 text-sm">
                  {feature.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-sm font-semibold text-green-600 mb-2">The Fix</h4>
                <p className="text-gray-600 text-sm">
                  {feature.solution}
                </p>
              </div>

              {/* Learn More Link */}
              <button className="mt-6 text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:underline transition-colors">
                Learn more →
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your website's user experience?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of companies already using Insurge AI to revolutionize their customer engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                See It In Action
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
