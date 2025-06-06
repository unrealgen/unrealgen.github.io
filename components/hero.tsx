"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Zap, Bot, Code } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  const scrollToSignup = useCallback(() => {
    const element = document.getElementById("signup")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
          UnrealGenPlugin
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4">The Future of Blueprint Development</p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Revolutionary AI-powered chat assistant that transforms how you create and manage Unreal Engine Blueprints.
          Generate complex logic, debug issues, and accelerate your game development workflow with natural language
          commands.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Code className="w-4 h-4 text-green-400" />
            <span className="text-sm">Blueprint Generation</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Bot className="w-4 h-4 text-blue-400" />
            <span className="text-sm">Chat Interface</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToSignup}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Get Early Access
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
