'use client'

import { Globe, GraduationCap, ShoppingCart, DollarSign, Home, BarChart3 } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      icon: Globe,
      title: "SaaS",
      description: "Reduce churn with interactive product demos",
      benefit: "87% faster user onboarding",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Personalized learning assistance",
      benefit: "92% student engagement increase",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "AI shopping assistants that convert",
      benefit: "45% higher conversion rates",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Compliant financial guidance",
      benefit: "78% faster loan processing",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Virtual property tours and guidance",
      benefit: "60% more qualified leads",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Data-driven insights and recommendations",
      benefit: "55% better decision making",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    }
  ]

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored AI solutions for every industry vertical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${industry.bgColor} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {industry.description}
              </p>

              {/* Key Benefit */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-1">Key Benefit</div>
                <div className="text-lg font-bold text-gray-900">
                  {industry.benefit}
                </div>
              </div>

              {/* Learn More Button */}
              <button className="mt-6 w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-lg border border-gray-200 transition-colors group-hover:border-gray-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-insurge rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't see your industry?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our flexible platform adapts to any business model. Let's discuss your specific needs.
            </p>
            <button className="bg-white text-insurge-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
