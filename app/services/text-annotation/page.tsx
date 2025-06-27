import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, FileText, Target, Zap, Users, Clock, ExternalLink, Bot, Car, Heart, ShoppingCart, Plane, Tractor, Brain, MessageSquare, Tag, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TextAnnotation() {
  const keyFeatures = [
    {
      number: "1",
      title: "Annotating Text for Machine Learning",
      description: "We provide precise text annotations and metadata labeling to train machine learning and artificial intelligence (AI) models. Our multilingual capabilities ensure text becomes understandable to AI-driven systems. Leveraging natural language processing (NLP), we help machines interpret human language accurately and efficiently.",
      icon: Brain,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Accurate Metadata Labeling for NLP",
      description: "Using advanced NLP techniques, we tag keywords and concepts with contextual metadata—without the need for external files. This results in clean, efficient data pipelines that enhance model performance across multiple ML applications.",
      icon: Tag,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "High-Quality Annotations with Visual Clarity", 
      description: "We use industry-leading tools and expert annotators to deliver consistent, high-quality text annotations. Our quality control measures ensure the output is ideal for data visualization and scalable machine learning development—all within your timelines.",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const annotationTechniques = [
    {
      title: "Text Categorization",
      description: "Commonly used in search engines, document classification, and NLP applications. We support both manual and automated text classification to help models detect themes and intent across varied content types.",
      applications: ["Search Engines", "Document Classification", "Content Filtering", "Theme Detection"]
    },
    {
      title: "Semantic Annotation",
      description: "Enhances machine understanding of language by providing context and meaning. Our annotations help models grasp nuanced language patterns, improving prediction accuracy in complex NLP tasks.",
      applications: ["Context Understanding", "Language Patterns", "Sentiment Analysis", "Meaning Extraction"]
    },
    {
      title: "Phrase Chunking",
      description: "We segment sentences into meaningful phrases to aid in syntactic and semantic understanding. This technique is essential for preprocessing and boosts NLP model performance in tasks like translation and sentiment analysis.",
      applications: ["Syntactic Analysis", "Translation", "Sentiment Analysis", "Text Preprocessing"]
    },
    {
      title: "Entity Linking",
      description: "We map entities in the text to structured knowledge bases, enhancing the contextual understanding of content. This process significantly improves performance in tasks like document classification and knowledge graph building.",
      applications: ["Knowledge Graphs", "Document Classification", "Entity Recognition", "Content Mapping"]
    }
  ]

  const useCases = [
    {
      title: "Robotics",
      description: "Text annotations support navigation commands and contextual understanding, allowing robots to interact safely and intelligently with their environment.",
      icon: Bot,
      emoji: "🤖",
      applications: ["Navigation Commands", "Contextual Understanding", "Human-Robot Interaction", "Safety Protocols"],
      image: "/robot3.png"
    },
    {
      title: "Autonomous Driving",
      description: "NLP-enabled annotations power systems that recognize and interpret traffic signs, voice commands, and written instructions across navigation interfaces.",
      icon: Car,
      emoji: "🚘",
      applications: ["Traffic Sign Recognition", "Voice Commands", "Navigation Instructions", "Safety Systems"],
      image: "/Automotive.jpeg"
    },
    {
      title: "Healthcare",
      description: "From medical transcripts to clinical notes, annotated data helps AI understand medical language, enabling genetic research, predictive diagnostics, and surgical automation.",
      icon: Heart,
      emoji: "🧬",
      applications: ["Medical Transcripts", "Clinical Notes", "Genetic Research", "Predictive Diagnostics"],
      image: "/healthcare.jpeg"
    },
    {
      title: "Retail & E-commerce",
      description: "Annotated product descriptions and customer reviews help AI personalize experiences, improve recommendation engines, and enhance customer engagement.",
      icon: ShoppingCart,
      emoji: "🛍️",
      applications: ["Product Descriptions", "Customer Reviews", "Recommendation Engines", "Personalization"],
      image: "/retail.jpeg"
    },
    {
      title: "Autonomous Drones",
      description: "Text annotation supports backend AI training for autonomous aerial systems, improving their ability to read instructions, identify landmarks, and perform intelligent routing.",
      icon: Plane,
      emoji: "🚁",
      applications: ["Instruction Reading", "Landmark Identification", "Intelligent Routing", "Mission Planning"],
      image: "/survilleance.jpeg"
    },
    {
      title: "Agriculture",
      description: "NLP-driven annotations combined with IoT sensor data help monitor crop conditions, forecast yields, and deliver real-time insights for smart farming.",
      icon: Tractor,
      emoji: "🌾",
      applications: ["Crop Monitoring", "Yield Forecasting", "Smart Farming", "IoT Integration"],
      image: "/agriculture.jpeg"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Text Annotation Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced <span className="text-primary">Text Annotation</span> for NLP
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your textual data into AI-ready training datasets with our comprehensive text annotation services. From entity recognition to sentiment analysis, we deliver precision at scale for natural language processing applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Key Features of Our Text Annotation Services</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Powering NLP with Precision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering multilingual capabilities, accurate metadata labeling, and high-quality annotations for machine learning
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

      {/* Core Techniques Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Text Annotation Techniques</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced NLP Annotation Methods
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of text annotation techniques for every natural language processing use case
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {annotationTechniques.map((technique, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {technique.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {technique.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {technique.applications.map((app, idx) => (
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
            <Badge variant="outline" className="mb-4">Use Cases of Text Annotation</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with intelligent text processing and natural language understanding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="text-3xl">{useCase.emoji}</div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <useCase.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-800">Key Applications</h4>
                    <div className="space-y-2">
                      {useCase.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
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
              Our proven methodology ensures consistent quality and timely delivery for every text annotation project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Text Analysis",
                description: "We analyze your textual data and define annotation requirements for optimal NLP model training."
              },
              {
                step: "02", 
                title: "Technique Selection",
                description: "Choose the most appropriate annotation methods based on your specific NLP use case and accuracy requirements."
              },
              {
                step: "03",
                title: "Annotation Execution",
                description: "Our expert linguists apply advanced NLP techniques with rigorous quality control and validation processes."
              },
              {
                step: "04",
                title: "Quality Assurance",
                description: "Multi-level quality checks ensure your annotated text data meets the highest standards for AI training."
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
              Proven Text Annotation Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering high-quality annotated text datasets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "50M+", 
                label: "Text Documents", 
                description: "Annotated across multiple languages",
                icon: FileText 
              },
              { 
                number: "99.7%", 
                label: "NLP Accuracy", 
                description: "Precision in text annotation quality",
                icon: Target 
              },
              { 
                number: "25+", 
                label: "Languages Supported", 
                description: "Multilingual annotation capabilities",
                icon: MessageSquare 
              },
              { 
                number: "72hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery for text projects",
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
                  Transform Your Text into AI Intelligence
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your text annotation needs and create a custom solution that accelerates your natural language processing projects.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Multilingual NLP</h3>
                  </div>
                  <p className="text-sm text-gray-600">25+ languages with expert linguists</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">High Accuracy</h3>
                  </div>
                  <p className="text-sm text-gray-600">99.7% precision in text annotation</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your NLP Project
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