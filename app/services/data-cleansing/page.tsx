import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Filter, Target, Zap, Users, Clock, ExternalLink, Shield, Database, BarChart3, Search, Layers, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function DataCleansing() {
  const keyFeatures = [
    {
      number: "1",
      title: "Comprehensive Data Quality Assessment",
      description: "We perform thorough analysis of your datasets to identify inconsistencies, duplicates, missing values, and quality issues. Our assessment provides detailed reports on data health and recommendations for improvement strategies.",
      icon: Search,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Advanced Data Standardization & Validation",
      description: "Our data cleansing process includes format standardization, value validation, and consistency checks across all data fields. We ensure your data follows industry standards and business rules for optimal usability.",
      icon: Shield,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Automated & Manual Data Enhancement", 
      description: "We combine automated cleansing tools with manual verification to enhance data quality. Our process includes duplicate removal, error correction, and data enrichment to maximize the value of your datasets.",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const cleansingServices = [
    {
      title: "Duplicate Detection & Removal",
      description: "Identify and eliminate duplicate records using advanced matching algorithms and fuzzy logic to maintain data integrity while preserving unique information.",
      applications: ["Customer Databases", "Product Catalogs", "Contact Lists", "Financial Records"],
      icon: Layers
    },
    {
      title: "Data Validation & Verification",
      description: "Validate data accuracy through cross-referencing, format checking, and business rule validation to ensure data meets quality standards and requirements.",
      applications: ["Address Validation", "Email Verification", "Phone Number Formatting", "Data Type Checking"],
      icon: CheckCircle
    },
    {
      title: "Missing Data Imputation",
      description: "Handle missing values through statistical imputation, predictive modeling, and domain expertise to maintain dataset completeness and analytical value.",
      applications: ["Statistical Analysis", "Machine Learning", "Business Intelligence", "Research Data"],
      icon: BarChart3
    },
    {
      title: "Format Standardization",
      description: "Standardize data formats, naming conventions, and value representations to ensure consistency across all data fields and systems integration.",
      applications: ["Date Formatting", "Address Standardization", "Name Normalization", "Currency Conversion"],
      icon: Database
    }
  ]

  const useCases = [
    {
      title: "Customer Relationship Management",
      description: "Clean and standardize customer data including contact information, purchase history, and interaction records for improved CRM performance and customer insights.",
      icon: Users,
      applications: ["Contact Deduplication", "Address Standardization", "Purchase History", "Customer Segmentation", "Lead Scoring", "Marketing Automation"]
    },
    {
      title: "Financial Data Management",
      description: "Ensure accuracy and compliance in financial datasets including transaction records, account information, and regulatory reporting data.",
      icon: BarChart3,
      applications: ["Transaction Records", "Account Information", "Regulatory Reporting", "Risk Assessment", "Fraud Detection", "Compliance Monitoring"]
    },
    {
      title: "Healthcare Data Quality",
      description: "Cleanse medical records, patient information, and clinical data while maintaining HIPAA compliance and ensuring data accuracy for healthcare analytics.",
      icon: Shield,
      applications: ["Patient Records", "Clinical Data", "Insurance Claims", "Medical Billing", "Research Data", "Compliance Reporting"]
    },
    {
      title: "E-commerce Product Data",
      description: "Standardize product catalogs, inventory data, and customer information for improved search functionality and business intelligence.",
      icon: Search,
      applications: ["Product Catalogs", "Inventory Management", "Customer Data", "Pricing Information", "SEO Optimization", "Marketplace Integration"]
    },
    {
      title: "Marketing Database Optimization",
      description: "Clean marketing databases to improve campaign effectiveness, reduce bounce rates, and enhance customer targeting and segmentation.",
      icon: Target,
      applications: ["Email Lists", "Customer Segmentation", "Campaign Data", "Lead Management", "Attribution Analysis", "ROI Tracking"]
    },
    {
      title: "Business Intelligence & Analytics",
      description: "Prepare clean, consistent datasets for business intelligence tools and analytics platforms to ensure accurate reporting and decision-making.",
      icon: Database,
      applications: ["Data Warehousing", "Reporting Systems", "Analytics Platforms", "KPI Dashboards", "Predictive Analytics", "Data Mining"]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Data Cleansing Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Professional <span className="text-primary">Data Cleansing</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your raw data into high-quality, reliable datasets with our comprehensive data cleansing services. From duplicate removal to format standardization, we ensure your data is accurate, consistent, and ready for analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Data Cleansing Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Quality Through Precision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering comprehensive quality assessment, advanced standardization, and automated enhancement for superior data quality
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

      {/* Cleansing Services Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Data Cleansing Services</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced Cleansing Techniques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of data cleansing services for every data quality improvement and standardization need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cleansingServices.map((service, index) => (
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
              Data Quality Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with superior data quality and comprehensive cleansing solutions
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
              Our proven methodology ensures comprehensive data cleansing with quality validation and enhanced usability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "We analyze your datasets and identify quality issues, inconsistencies, and improvement opportunities."
              },
              {
                step: "02", 
                title: "Cleansing Strategy",
                description: "Design the most appropriate cleansing approach based on data type, quality issues, and business requirements."
              },
              {
                step: "03",
                title: "Quality Enhancement",
                description: "Execute comprehensive cleansing including deduplication, validation, and standardization processes."
              },
              {
                step: "04",
                title: "Validation & Delivery",
                description: "Multi-level quality checks ensure enhanced data meets the highest standards for business use."
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
              Proven Data Cleansing Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering superior data quality and cleansing services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "1B+", 
                label: "Records Cleansed", 
                description: "High-quality data delivered",
                icon: Database 
              },
              { 
                number: "95%", 
                label: "Quality Improvement", 
                description: "Average data quality increase",
                icon: Target 
              },
              { 
                number: "85%", 
                label: "Duplicate Reduction", 
                description: "Average duplicate elimination",
                icon: Filter 
              },
              { 
                number: "72hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery for cleansing projects",
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
                  Transform Your Data Quality Today
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your data cleansing needs and create a custom solution that transforms your raw data into high-quality, reliable datasets for better business decisions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Filter className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Quality Enhancement</h3>
                  </div>
                  <p className="text-sm text-gray-600">95% average quality improvement</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Data Integrity</h3>
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive validation and verification</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Data Cleansing Project
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