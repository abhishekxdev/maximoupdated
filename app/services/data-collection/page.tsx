import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Database, Target, Zap, Users, Clock, ExternalLink, Globe, Search, FileText, BarChart3, Shield, Filter } from 'lucide-react'
import Link from 'next/link'

export default function DataCollection() {
  const keyFeatures = [
    {
      number: "1",
      title: "Multi-Source Data Aggregation",
      description: "We collect data from diverse sources including web scraping, APIs, databases, surveys, and IoT devices. Our comprehensive approach ensures you get complete datasets that represent your target domain accurately and comprehensively.",
      icon: Globe,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Quality Validation & Verification",
      description: "Every data point undergoes rigorous quality checks including accuracy validation, completeness assessment, and relevance scoring. We ensure your collected data meets the highest standards for AI training and business intelligence applications.",
      icon: Shield,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Structured Data Formatting & Organization", 
      description: "We transform raw collected data into structured, analysis-ready formats. Our data organization includes proper labeling, categorization, and metadata tagging to ensure seamless integration with your existing systems and workflows.",
      icon: Filter,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const collectionMethods = [
    {
      title: "Web Scraping & Crawling",
      description: "Automated extraction of data from websites, social media platforms, and online databases with respect to robots.txt and legal compliance requirements.",
      applications: ["E-commerce Data", "Social Media Analytics", "Market Research", "Competitive Intelligence"],
      icon: Search
    },
    {
      title: "API Data Integration",
      description: "Systematic collection from REST APIs, GraphQL endpoints, and third-party services with proper authentication and rate limiting management.",
      applications: ["Social Media APIs", "Financial Data", "Weather Services", "Government Databases"],
      icon: Database
    },
    {
      title: "Survey & Form Data",
      description: "Design and deployment of surveys, questionnaires, and forms to collect primary data directly from target audiences and stakeholders.",
      applications: ["Market Research", "Customer Feedback", "Academic Research", "User Experience Studies"],
      icon: FileText
    },
    {
      title: "IoT & Sensor Data",
      description: "Collection from Internet of Things devices, sensors, and monitoring systems for real-time and historical data aggregation.",
      applications: ["Smart Cities", "Industrial Monitoring", "Environmental Data", "Healthcare Devices"],
      icon: BarChart3
    }
  ]

  const useCases = [
    {
      title: "Market Research & Intelligence",
      description: "Comprehensive market data collection including competitor analysis, pricing intelligence, customer sentiment, and industry trends for strategic business decisions.",
      icon: BarChart3,
      applications: ["Competitor Analysis", "Pricing Intelligence", "Customer Sentiment", "Industry Trends", "Market Sizing", "Consumer Behavior"]
    },
    {
      title: "AI Training Datasets",
      description: "Curated data collection for machine learning model training including labeled datasets, diverse samples, and domain-specific content for various AI applications.",
      icon: Target,
      applications: ["Computer Vision", "Natural Language Processing", "Recommendation Systems", "Predictive Analytics", "Classification Models", "Deep Learning"]
    },
    {
      title: "Business Intelligence",
      description: "Strategic data collection for business analytics including sales data, customer information, operational metrics, and performance indicators.",
      icon: Database,
      applications: ["Sales Analytics", "Customer Insights", "Operational Metrics", "Performance KPIs", "Financial Analysis", "Risk Assessment"]
    },
    {
      title: "Academic & Scientific Research",
      description: "Systematic data collection for research projects including experimental data, survey responses, literature reviews, and statistical analysis datasets.",
      icon: FileText,
      applications: ["Experimental Data", "Survey Research", "Literature Reviews", "Statistical Analysis", "Longitudinal Studies", "Meta-Analysis"]
    },
    {
      title: "Compliance & Regulatory",
      description: "Data collection for regulatory compliance including audit trails, compliance monitoring, risk assessment data, and regulatory reporting requirements.",
      icon: Shield,
      applications: ["Audit Trails", "Compliance Monitoring", "Risk Assessment", "Regulatory Reporting", "Quality Assurance", "Documentation"]
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous data collection for monitoring systems including performance metrics, system health, user activity, and operational status tracking.",
      icon: Clock,
      applications: ["Performance Monitoring", "System Health", "User Activity", "Operational Status", "Alert Systems", "Trend Analysis"]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Data Collection Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive <span className="text-primary">Data Collection</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build robust datasets with our comprehensive data collection services. From web scraping to API integration, we gather high-quality data from multiple sources to power your AI and business intelligence initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Data Collection Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Building Quality Datasets
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering multi-source aggregation, quality validation, and structured formatting for comprehensive data collection
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

      {/* Collection Methods Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Data Collection Methods</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced Collection Techniques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of data collection methods for every business intelligence and AI training use case
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {collectionMethods.map((method, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {method.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {method.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.applications.map((app, idx) => (
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
              Data Collection Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with strategic data collection and comprehensive dataset building
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
              Our proven methodology ensures comprehensive data collection with quality validation and structured delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We analyze your data needs and define collection requirements for optimal dataset building and business intelligence."
              },
              {
                step: "02", 
                title: "Source Identification",
                description: "Identify and evaluate the most appropriate data sources based on your specific use case and quality requirements."
              },
              {
                step: "03",
                title: "Data Collection",
                description: "Execute systematic data collection using appropriate methods with continuous monitoring and quality control."
              },
              {
                step: "04",
                title: "Quality Assurance",
                description: "Multi-level validation ensures data accuracy, completeness, and consistency for your specific applications."
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
              Proven Data Collection Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering high-quality collected datasets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "500TB+", 
                label: "Data Collected", 
                description: "High-quality datasets delivered",
                icon: Database 
              },
              { 
                number: "99.2%", 
                label: "Data Accuracy", 
                description: "Precision in collection quality",
                icon: Target 
              },
              { 
                number: "1000+", 
                label: "Data Sources", 
                description: "Diverse collection capabilities",
                icon: Globe 
              },
              { 
                number: "48hrs", 
                label: "Average Setup", 
                description: "Fast collection deployment",
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
                  Build Your Perfect Dataset
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your data collection needs and create a custom solution that delivers comprehensive, high-quality datasets for your business intelligence and AI projects.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Multi-Source Collection</h3>
                  </div>
                  <p className="text-sm text-gray-600">1000+ data sources and growing</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Quality Guaranteed</h3>
                  </div>
                  <p className="text-sm text-gray-600">99.2% accuracy with validation</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Data Collection
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