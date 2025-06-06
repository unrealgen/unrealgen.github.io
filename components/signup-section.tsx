"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, User, CheckCircle, Sparkles } from "lucide-react"

export default function SignupSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!email.trim() || !name.trim()) return

      setIsLoading(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitted(true)
      } catch (error) {
        console.error("Signup error:", error)
      } finally {
        setIsLoading(false)
      }
    },
    [email, name],
  )

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  if (isSubmitted) {
    return (
      <section id="signup" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">{"You're In!"}</h2>
              <p className="text-xl text-gray-300 mb-6">
                Welcome to the future of Blueprint development. {"We'll"} notify you as soon as early access is
                available.
              </p>
              <p className="text-gray-400">Expected launch: Q2 2024 • Limited spots available</p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="py-24 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-yellow-400 font-semibold">Early Access</span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be among the first developers to experience the power of AI-assisted Blueprint creation. Limited early
            access spots available.
          </p>
        </div>

        {/* Signup Form */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleNameChange}
                  className="pl-12 h-14 bg-white/5 border-white/20 text-white placeholder-gray-400 text-lg focus:border-purple-500 focus:ring-purple-500/20"
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  placeholder="your.email@domain.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="pl-12 h-14 bg-white/5 border-white/20 text-white placeholder-gray-400 text-lg focus:border-purple-500 focus:ring-purple-500/20"
                  required
                  autoComplete="email"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !email.trim() || !name.trim()}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Securing Your Spot...</span>
                  </div>
                ) : (
                  "Get Early Access"
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-gray-400 mb-4">Early Access Benefits:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-green-400 font-semibold">Free License</div>
                  <div className="text-gray-500">Worth $199</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-semibold">Priority Support</div>
                  <div className="text-gray-500">Direct access to devs</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-semibold">Exclusive Features</div>
                  <div className="text-gray-500">Beta testing access</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
