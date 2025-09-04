"use client";

import type React from "react";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  User,
  CheckCircle,
  Sparkles,
  ShoppingBasketIcon,
} from "lucide-react";
import Script from "next/script";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim() || !name.trim()) return;

      setIsLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitted(true);
      } catch (error) {
        console.error("Signup error:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [email, name]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

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
              <h2 className="text-4xl font-bold mb-4 text-white">
                {"You're In!"}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Welcome to the future of Blueprint development. {"We'll"} notify
                you as soon as early access is available.
              </p>
              <p className="text-gray-400">
                Expected launch: Q2 2024 • Limited spots available
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-24 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col justify-center items-center text-center mb-16 ">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be among the first developers to experience the power of AI-assisted
            Blueprint creation.
          </p>
          <Script
            type="text/javascript"
            src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
            data-name="bmc-button"
            data-slug="minddrive"
            data-color="#BD5FFF"
            data-emoji="☕"
            data-font="Lato"
            data-text="my buymeacoffee shop"
            data-outline-color="#000000"
            data-font-color="#ffffff"
            data-coffee-color="#FFDD00"
          ></Script>
          <div className="mt-4">
            <a
              href="https://fab.com/s/8b32b1eee2c3"
              className="flex items-center justify-center gap-3 w-[560px] h-[175px] bg-[#222222] border-[5px] border-[#363636] text-[#ffd900] hover:text-[#5bb8fa] transition-colors duration-200 rounded-sm text-lg font-medium hover:bg-[#2a2a2a]"
            >
              <ShoppingBasketIcon className="w-8 h-8" />
              Available at the Fab Marketplace
            </a>
          </div>
          <a
            href="https://discord.gg/cpqkGHfzAa"
            className="text-2xl font-bold my-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300 flex items-center justify-center gap-3 w-[560px] h-[175px] bg-[#5865F2] border-[5px] border-[#4752C4] text-white hover:text-[#00e1ff] transition-colors duration-200 rounded-sm  hover:bg-[#4752C4]"
          >
            Join us on DISCORD
          </a>
        </div>

        {/* Signup Form */}
        {/* <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <Script
              async
              src="https://subscribe-forms.beehiiv.com/embed.js"
            ></Script>
            <iframe
              src="https://subscribe-forms.beehiiv.com/5129d2f9-6bc8-478b-9fa1-256d0669654c"
              className="beehiiv-embed"
              data-test-id="beehiiv-embed"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0px 0px 0px 0px",
                backgroundColor: "transparent",
                boxShadow: "0 0 #0000",
              }}
            ></iframe>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
