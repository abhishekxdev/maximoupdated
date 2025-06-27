'use client'
import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, ArrowRight, Users, Globe, Heart, Zap, Upload, Send, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    expectedSalary: '',
    coverLetter: '',
    resume: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value)
        }
      })

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          location: '',
          expectedSalary: '',
          coverLetter: '',
          resume: null
        })
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.error, result.details)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const openPositions = [
    {
      title: "Data Annotation Specialist",
      department: "Data Services",
      location: "Remote / Ranchi",
      type: "Full-time",
      experience: "1-3 years",
      description: "Join our data annotation team to work on cutting-edge AI projects across various industries."
    },
    {
      title: "Customer Support Representative",
      department: "Customer Success",
      location: "Remote / Ranchi",
      type: "Full-time",
      experience: "0-2 years",
      description: "Provide exceptional customer support across multiple channels and help clients achieve their goals."
    },
    {
      title: "Tele Sales Executive",
      department: "Sales",
      location: "Remote / Ranchi",
      type: "Full-time",
      experience: "1-4 years",
      description: "Drive business growth through professional telemarketing and sales support services."
    },
    {
      title: "Quality Assurance Analyst",
      department: "Quality Control",
      location: "Remote / Ranchi",
      type: "Full-time",
      experience: "2-5 years",
      description: "Ensure the highest quality standards in our data annotation and processing services."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Ranchi",
      type: "Full-time",
      experience: "3-6 years",
      description: "Lead cross-functional teams to deliver exceptional results for our global clients."
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Remote / Ranchi",
      type: "Full-time",
      experience: "2-5 years",
      description: "Identify new business opportunities and build strategic partnerships to drive company growth."
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible work arrangements with remote work options and modern collaboration tools."
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, skill development programs, and career advancement paths."
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative, inclusive work environment with team building activities and recognition programs."
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Join Our Team</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
              Build Your <span className="text-primary">Career</span> with Maximo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join a dynamic team that's transforming the future of AI and data services. We're looking for passionate individuals who want to make a meaningful impact in the world of artificial intelligence and business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Maximo</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
              More Than Just a Job
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where our team members can thrive, grow, and make a meaningful impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Open Positions</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities across different departments and find the perfect role for your skills and aspirations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {position.department}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {position.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {position.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {position.experience}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setFormData(prev => ({ ...prev, position: position.title }))}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Apply Now</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Join Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to take the next step in your career? Fill out the application form below and we'll get back to you soon.
              </p>
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Career Application Form
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Please fill out all required fields to submit your application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="bg-white/80"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="bg-white/80"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                        className="bg-white/80"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Preferred Location *</Label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger className="bg-white/80">
                          <SelectValue placeholder="Select preferred location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="ranchi">Ranchi Office</SelectItem>
                          <SelectItem value="hybrid">Hybrid (Remote + Office)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Position Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                        <SelectTrigger className="bg-white/80">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          {openPositions.map((pos, index) => (
                            <SelectItem key={index} value={pos.title}>{pos.title}</SelectItem>
                          ))}
                          <SelectItem value="other">Other Position</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                        <SelectTrigger className="bg-white/80">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years (Fresher)</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-8">5-8 years</SelectItem>
                          <SelectItem value="8+">8+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedSalary">Expected Salary (Optional)</Label>
                    <Input
                      id="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                      placeholder="e.g., 5-8 LPA or As per company standards"
                      className="bg-white/80"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="bg-white/80"
                      />
                      <Upload className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter / Why do you want to join Maximo? *</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      placeholder="Tell us about yourself, your experience, and why you're interested in joining our team..."
                      rows={6}
                      required
                      className="bg-white/80"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    {submitStatus === 'success' && (
                      <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p className="text-green-800">Thank you for your application! We'll review it and get back to you within 5-7 business days.</p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800">Sorry, there was an error submitting your application. Please try again or email us directly at careers@max-imo.com</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone || !formData.position || !formData.experience || !formData.location || !formData.coverLetter || !formData.resume}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}