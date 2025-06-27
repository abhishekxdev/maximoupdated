import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, BarChart3, Target, Zap, Users, Clock, ExternalLink, Database, TrendingUp, Brain, Layers, Settings, Activity } from 'lucide-react'
import Link from 'next/link'

export default function DataProcessing() {
  const keyFeatures = [
    {
      number: "1",
      title: "Advanced Data Transformation & ETL",
      description: "We provide comprehensive Extract, Transform, Load (ETL) services to convert raw data into structured, analysis-ready formats. Our advanced transformation processes include data mapping, aggregation, and format conversion for seamless integration.",
      icon: Settings,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Statistical Analysis & Pattern Recognition",
      description: "Our data processing includes sophisticated statistical analysis, trend identification, and pattern recognition to extract meaningful insights from your datasets. We apply advanced algorithms to uncover hidden relationships and business intelligence.",
      icon: Brain,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Real-time Processing & Automation", 
      description: "We implement real-time data processing pipelines and automated workflows to handle continuous data streams. Our solutions ensure timely processing, monitoring, and alerting for mission-critical business operations.",
      icon: Activity,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const processingServices = [
    {
      title: "ETL & Data Pipeline Development",
      description: "Design and implement robust Extract, Transform, Load processes and data pipelines for efficient data movement and transformation across systems.",
      applications: ["Data Warehousing", "System Integration", "Migration Projects", "Real-time Streaming"],
      icon: Database
    },
    {
      title: "Statistical Analysis & Modeling",
      description: "Advanced statistical analysis including descriptive statistics, predictive modeling, and machine learning algorithm implementation for data insights.",
      applications: ["Predictive Analytics", "Risk Modeling", "Forecasting", "Business Intelligence"],
      icon: BarChart3
    },
    {
      title: "Data Aggregation & Summarization",
      description: "Aggregate and summarize large datasets to create meaningful reports, dashboards, and key performance indicators for business decision-making.",
      applications: ["Executive Dashboards", "KPI Reporting", "Performance Metrics", "Trend Analysis"],
      icon: TrendingUp
    },
    {
      title: "Performance Optimization",
      description: "Optimize data processing performance through indexing, partitioning, and query optimization to handle large-scale data operations efficiently.",
      applications: ["Database Optimization", "Query Performance", "Scalability", "Resource Management"],
      icon: Zap
    }
  ]

  const useCases = [
    {
      title: "Business Intelligence & Analytics",
      description: "Transform raw business data into actionable insights through comprehensive processing, analysis, and visualization for strategic decision-making.",
      icon: BarChart3,
      applications: ["Executive Dashboards", "Performance Analytics", "Market Intelligence", "Competitive Analysis", "ROI Analysis", "Trend Forecasting"]
    },
    {
      title: "Predictive Analytics & Modeling",
      description: "Develop predictive models and forecasting systems using advanced statistical methods and machine learning algorithms for future planning.",
      icon: Brain,
      applications: ["Demand Forecasting", "Risk Assessment", "Customer Behavior", "Market Prediction", "Financial Modeling", "Operational Planning"]
    },
    {
      title: "Financial Data Processing",
      description: "Process financial data for risk analysis, compliance reporting, fraud detection, and investment decision support with high accuracy and security.",
      icon: Target,
      applications: ["Risk Analysis", "Compliance Reporting", "Fraud Detection", "Investment Analysis", "Portfolio Management", "Regulatory Reporting"]
    },
    {
      title: "Customer Analytics & Segmentation",
      description: "Analyze customer data to create detailed profiles, segments, and behavioral patterns for personalized marketing and improved customer experience.",
      icon: Users,
      applications: ["Customer Segmentation", "Behavioral Analysis", "Churn Prediction", "Lifetime Value", "Personalization", "Campaign Optimization"]
    },
    {
      title: "Operational Analytics",
      description: "Process operational data to optimize workflows, improve efficiency, and identify bottlenecks in business processes and supply chains.",
      icon: Settings,
      applications: ["Process Optimization", "Supply Chain Analytics", "Quality Control", "Resource Planning", "Performance Monitoring", "Efficiency Analysis"]
    },
    {
      title: "Real-time Data Streaming",
      description: "Implement real-time data processing systems for live monitoring, alerting, and immediate response to critical business events and conditions.",
      icon: Activity,
      applications: ["Live Monitoring", "Alert Systems", "Event Processing", "IoT Analytics", "Real-time Dashboards", "Automated Responses"]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Data Processing Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced <span className="text-primary">Data Processing</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your raw data into actionable business insights with our comprehensive data processing services. From ETL pipelines to predictive analytics, we deliver intelligence that drives strategic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Data Processing Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Intelligence Through Processing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering advanced transformation, statistical analysis, and real-time processing for comprehensive data intelligence
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

      {/* Processing Services Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Data Processing Services</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced Processing Techniques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of data processing services for every business intelligence and analytics need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {processingServices.map((service, index) => (
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
              Data Intelligence Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with advanced data processing and comprehensive analytics solutions
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
              Our proven methodology ensures comprehensive data processing with advanced analytics and actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Data Architecture",
                description: "We design optimal data processing architecture and define transformation requirements for your specific use case."
              },
              {
                step: "02", 
                title: "Pipeline Development",
                description: "Build robust ETL pipelines and processing workflows based on your data volume and performance requirements."
              },
              {
                step: "03",
                title: "Advanced Analytics",
                description: "Apply statistical analysis, machine learning, and pattern recognition to extract meaningful business insights."
              },
              {
                step: "04",
                title: "Optimization & Delivery",
                description: "Optimize performance and deliver processed data with comprehensive documentation and ongoing support."
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
              Proven Data Processing Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering superior data processing and analytics solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "10PB+", 
                label: "Data Processed", 
                description: "Petabytes of data transformed",
                icon: Database 
              },
              { 
                number: "99.9%", 
                label: "Processing Accuracy", 
                description: "Precision in data transformation",
                icon: Target 
              },
              { 
                number: "50x", 
                label: "Performance Improvement", 
                description: "Average processing optimization",
                icon: Zap 
              },
              { 
                number: "24/7", 
                label: "Real-time Processing", 
                description: "Continuous data pipeline operation",
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
                  Unlock Your Data's Potential
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your data processing needs and create a custom solution that transforms your raw data into actionable business intelligence and strategic insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Advanced Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-600">Machine learning and statistical modeling</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Activity className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Real-time Processing</h3>
                  </div>
                  <p className="text-sm text-gray-600">24/7 continuous data pipeline operation</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Processing Project
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