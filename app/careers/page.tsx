'use client'
import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, Send, Briefcase } from 'lucide-react'
import { useState } from 'react'

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    experience: '',
    expectedSalary: '',
    resumeLink: '',
    coverLetter: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          department: '',
          experience: '',
          expectedSalary: '',
          resumeLink: '',
          coverLetter: ''
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

  const departments = [
    {
      name: "HR (HR Executive)",
      roles: [
        "HR Generalist",
        "Payroll and Compliance Officer",
        "Employee Relations Executive",
        "HR Operations Coordinator",
        "Onboarding Specialist",
        "HRMS Administrator"
      ]
    },
    {
      name: "HR (Talent Acquisition)",
      roles: [
        "Recruitment Specialist",
        "Technical Recruiter",
        "Sourcing Executive",
        "Candidate Screening Specialist",
        "Employer Branding Coordinator"
      ]
    },
    {
      name: "IT Administrative",
      roles: [
        "IT Support Executive",
        "Systems Administrator",
        "Network & Security Officer",
        "Application Support Analyst",
        "Cloud Operations Assistant",
        "Software License Coordinator",
        "Junior Project Manager (IT Ops)",
        "Senior Project Manager (Infrastructure)"
      ]
    },
    {
      name: "L&D (Trainer)",
      roles: [
        "Annotation Process Trainer",
        "Tele Sales Coach",
        "Customer Support Trainer",
        "Soft Skills Trainer",
        "Surveillance System Trainer",
        "L&D Coordinator",
        "Team Lead – Training",
        "Associate Director – Learning & Development"
      ]
    },
    {
      name: "Project Management",
      roles: [
        "Junior Project Manager",
        "Senior Project Manager",
        "Team Lead – Projects",
        "Associate Director – Projects"
      ]
    }
  ]

  // Get all unique positions from all departments
  const getAllPositions = () => {
    const allPositions: string[] = []
    departments.forEach(dept => {
      allPositions.push(...dept.roles)
    })
    return allPositions.sort()
  }

  // Get positions for selected department
  const getPositionsForDepartment = (departmentName: string) => {
    const department = departments.find(dept => dept.name === departmentName)
    return department ? department.roles : []
  }

  const positions = getAllPositions()

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

                  {/* Department and Position Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department *</Label>
                      <Select 
                        value={formData.department} 
                        onValueChange={(value) => {
                          handleInputChange('department', value)
                          // Clear position when department changes
                          handleInputChange('position', '')
                        }}
                      >
                        <SelectTrigger className="bg-white/80">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept, index) => (
                            <SelectItem key={index} value={dept.name}>{dept.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Select 
                        value={formData.position} 
                        onValueChange={(value) => handleInputChange('position', value)}
                        disabled={!formData.department}
                      >
                        <SelectTrigger className="bg-white/80">
                          <SelectValue placeholder={formData.department ? "Select position" : "Select department first"} />
                        </SelectTrigger>
                        <SelectContent>
                          {formData.department && getPositionsForDepartment(formData.department).map((pos, index) => (
                            <SelectItem key={index} value={pos}>{pos}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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

                  {/* Resume Link */}
                  <div className="space-y-2">
                    <Label htmlFor="resumeLink">Resume Google Drive Link *</Label>
                    <Input
                      id="resumeLink"
                      type="url"
                      value={formData.resumeLink}
                      onChange={(e) => handleInputChange('resumeLink', e.target.value)}
                      placeholder="https://drive.google.com/file/d/..."
                      required
                      className="bg-white/80"
                    />
                    <p className="text-xs text-gray-500">Please ensure the Google Drive link is publicly accessible</p>
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
                      disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone || !formData.position || !formData.department || !formData.experience || !formData.coverLetter || !formData.resumeLink}
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