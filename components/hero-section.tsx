'use client'
import React, { Suspense, lazy } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "@/components/header"
import Image from 'next/image'

// Lazy load heavy components
const DataDashboard = lazy(() => import('@/components/data-dashboard').then(module => ({ default: module.DataDashboard })))

// Helper component for gradient text
const GradientText = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
        {children}
    </span>
)

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Simplified background effects */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-30 contain-strict lg:block pointer-events-none">
                    <div className="w-96 h-96 absolute left-0 top-0 -rotate-45 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
                    <div className="w-64 h-64 absolute right-0 top-1/4 rotate-45 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl" />
                </div>
                
                <section className="pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 section-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Text Content - Mobile First */}
                            <div className="text-center lg:text-left order-2 lg:order-1">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight mb-4 sm:mb-6">
                                    <span className="block">
                                        Empowering Growth
                                    </span>
                                    <span className="block">
                                        Through <GradientText>Smart Data</GradientText>
                                    </span>
                                    <span className="block">
                                        & <GradientText>Scalable Operations</GradientText>
                                    </span>
                                </h1>
                                
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Delivering high-quality, cost-effective solutions across data services, AI, and back-office operations — so you can focus on what matters most.


                                </p>

                                {/* CTA Buttons - Mobile Optimized */}
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                                    <Link href="/services" className="w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-purple-900 text-white font-medium flex items-center justify-center group hover:from-purple-900 hover:to-gray-900 transition-all shadow-lg text-sm sm:text-base min-h-[48px]">
                                            Explore Services
                                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    
                                    <Link href="/contact" className="w-full sm:w-auto">
                                        <Button variant="ghost" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/80 backdrop-blur-sm font-medium flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg text-sm sm:text-base min-h-[48px]">
                                            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-900" /> 
                                            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Request Quote</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Robot Image - Mobile Optimized */}
                            <div className="relative order-1 lg:order-2 flex justify-center">
                                <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] mx-auto">
                                    <Image
                                        src="/robot3.png"
                                        alt="AI Robot"
                                        width={500}
                                        height={500}
                                        className="w-full h-auto object-contain"
                                        priority
                                        sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, 500px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Section - Mobile Responsive */}
                    <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl">
                            <Suspense fallback={
                                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-64 bg-white/30 backdrop-blur-lg rounded-xl sm:rounded-2xl border flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div>
                                </div>
                            }>
                                <DataDashboard />
                            </Suspense>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}