"use client"

import { useEffect, useRef, useCallback } from "react"
import { MessageSquare, Lightbulb, Wrench, Rocket, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Describe what you want to build in plain English and watch as UnrealGenPlugin creates the Blueprint logic for you.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Code Generation",
    description:
      "Generate complex Blueprint networks, state machines, and gameplay mechanics with AI-powered suggestions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Real-time Debugging",
    description:
      "Get instant help identifying and fixing Blueprint issues with contextual AI assistance and optimization tips.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Workflow Acceleration",
    description: "Reduce development time by 70% with automated Blueprint creation and intelligent code completion.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Best Practice Enforcement",
    description: "Ensure your Blueprints follow Unreal Engine conventions with built-in validation and suggestions.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Clock,
    title: "24/7 AI Assistant",
    description: "Never get stuck again with round-the-clock AI support for all your Blueprint development needs.",
    color: "from-teal-500 to-blue-500",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0")
        entry.target.classList.remove("opacity-0", "translate-y-8")
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px",
    })

    const cards = sectionRef.current?.querySelectorAll(".feature-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Revolutionize Your Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of Blueprint development with cutting-edge AI technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card opacity-0 translate-y-8 transition-all duration-700 group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:transform hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:animate-pulse`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
