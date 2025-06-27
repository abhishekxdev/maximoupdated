import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Edit, Target, Zap, Users, Clock, ExternalLink, FileText, Database, Shield, BarChart3, Layers, Search } from 'lucide-react'
import Link from 'next/link'

export default function DataEntry() {
  const keyFeatures = [
    {
      number: "1",
      title: "Accurate Manual Data Entry",
      description: "Our skilled data entry specialists provide precise manual entry services for various document types including forms, surveys, invoices, and business records. We ensure 99.9% accuracy through double verification and quality control processes.",
      icon: Edit,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Document Digitization & Processing",
      description: "We transform physical documents into digital formats through scanning, OCR processing, and manual verification. Our comprehensive digitization services include data extraction, formatting, and database integration.",
      icon: FileText,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Database Management & Organization", 
      description: "Our data entry services include database creation, maintenance, and organization. We structure your data for optimal accessibility, searchability, and integration with your existing business systems and workflows.",
      icon: Database,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const entryServices = [
    {
      title: "Form & Survey Data Entry",
      description: "Accurate entry of survey responses, application forms, registration data, and questionnaire results with proper validation and error checking.",
      applications: ["Survey Research", "Application Processing", "Registration Data", "Market Research"],
      icon: FileText
    },
    {
      title: "Financial Data Entry",
      description: "Precise entry of financial records including invoices, receipts, expense reports, and accounting data with attention to numerical accuracy and compliance.",
      applications: ["Invoice Processing", "Expense Reports", "Accounting Records", "Financial Analysis"],
      icon: BarChart3
    },
    {
      title: "Healthcare Data Entry",
      description: "Specialized entry of medical records, patient information, insurance claims, and healthcare documentation with HIPAA compliance and accuracy standards.",
      applications: ["Medical Records", "Patient Information", "Insurance Claims", "Clinical Data"],
      icon: Shield
    },
    {
      title: "E-commerce Data Entry",
      description: "Product catalog entry including descriptions, specifications, pricing, and inventory data for online stores and marketplaces with SEO optimization.",
      applications: ["Product Catalogs", "Inventory Management", "Pricing Data", "SEO Optimization"],
      icon: Search
    }
  ]

  const useCases = [
    {
      title: "Healthcare Records Management",
      description: "Comprehensive medical data entry including patient records, insurance claims, clinical trial data, and healthcare documentation with strict compliance standards.",
      icon: Shield,
      applications: ["Patient Records", "Insurance Claims", "Clinical Trials", "Medical Billing", "HIPAA Compliance", "Electronic Health Records"]
    },
    {
      title: "Financial Services",
      description: "Accurate financial data entry for banking, insurance, and investment firms including transaction records, client information, and regulatory documentation.",
      icon: BarChart3,
      applications: ["Transaction Records", "Client Information", "Regulatory Documentation", "Risk Assessment", "Compliance Reporting", "Financial Analysis"]
    },
    {
      title: "E-commerce & Retail",
      description: "Product data entry for online stores including catalog management, inventory tracking, pricing updates, and customer information processing.",
      icon: Search,
      applications: ["Product Catalogs", "Inventory Tracking", "Pricing Management", "Customer Data", "Order Processing", "Marketplace Integration"]
    },
    {
      title: "Legal & Compliance",
      description: "Legal document processing including case files, contracts, compliance documentation, and regulatory filings with attention to detail and confidentiality.",
      icon: FileText,
      applications: ["Case Files", "Contract Processing", "Compliance Documentation", "Regulatory Filings", "Legal Research", "Document Management"]
    },
    {
      title: "Real Estate",
      description: "Property data entry including listings, client information, transaction records, and market analysis data for real estate agencies and property management.",
      icon: Database,
      applications: ["Property Listings", "Client Information", "Transaction Records", "Market Analysis", "Property Management", "MLS Data Entry"]
    },
    {
      title: "Education & Research",
      description: "Academic data entry including student records, research data, survey responses, and educational documentation for institutions and research organizations.",
      icon: Layers,
      applications: ["Student Records", "Research Data", "Survey Responses", "Academic Documentation", "Statistical Analysis", "Educational Reports"]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Data Entry Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Professional <span className="text-primary">Data Entry</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your documents into organized digital data with our accurate and efficient data entry services. From manual entry to document digitization, we deliver precision and reliability for your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Data Entry Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Precision in Every Entry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering accurate manual entry, document digitization, and database management for comprehensive data processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">#{feature.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                    <feature.icon className="h-8 w-8 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Services Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Data Entry Services</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Specialized Entry Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of data entry services for every business document and data processing need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {entryServices.map((service, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industry Applications</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Data Entry Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with accurate data entry and comprehensive document processing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Key Applications</h4>
                    <div className="space-y-2">
                      {useCase.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">How We Deliver Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures accurate data entry with quality validation and timely delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Document Analysis",
                description: "We analyze your documents and define entry requirements for optimal accuracy and data structure organization."
              },
              {
                step: "02", 
                title: "Entry Strategy",
                description: "Design the most appropriate data entry approach based on document type, volume, and accuracy requirements."
              },
              {
                step: "03",
                title: "Accurate Entry",
                description: "Our skilled specialists perform precise data entry with continuous quality monitoring and validation."
              },
              {
                step: "04",
                title: "Quality Verification",
                description: "Multi-level verification ensures 99.9% accuracy through double-checking and automated validation processes."
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Performance</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Proven Data Entry Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering accurate and reliable data entry services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "10M+", 
                label: "Records Processed", 
                description: "Accurate data entry completed",
                icon: Database 
              },
              { 
                number: "99.9%", 
                label: "Entry Accuracy", 
                description: "Precision in data processing",
                icon: Target 
              },
              { 
                number: "50+", 
                label: "Document Types", 
                description: "Comprehensive format support",
                icon: FileText 
              },
              { 
                number: "24hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery for entry projects",
                icon: Clock 
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-6" />
                <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
                <div className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-0 bg-white/60 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Ready to Get Started?</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Digitize Your Documents Today
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your data entry needs and create a custom solution that transforms your documents into organized, accessible digital data.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Edit className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Accurate Entry</h3>
                  </div>
                  <p className="text-sm text-gray-600">99.9% accuracy with double verification</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Fast Turnaround</h3>
                  </div>
                  <p className="text-sm text-gray-600">24-hour average delivery time</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Data Entry Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                  <Link href="/services/data-services">
                    Explore All Data Services
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}