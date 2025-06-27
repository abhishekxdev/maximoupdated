import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Headphones, Target, Zap, Users, Clock, ExternalLink, Mic, Volume2, MessageSquare, Music, Phone, Radio } from 'lucide-react'
import Link from 'next/link'

export default function AudioAnnotation() {
  const keyFeatures = [
    {
      number: "1",
      title: "Speech-to-Text Transcription & Analysis",
      description: "Our audio annotation services provide accurate speech-to-text transcription with speaker identification, emotion detection, and linguistic analysis. We handle multiple languages, accents, and audio qualities to create comprehensive training datasets for speech recognition AI.",
      icon: MessageSquare,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Sound Event Detection & Classification",
      description: "We specialize in identifying and classifying various sound events, environmental audio, and acoustic patterns. Our expert annotators label sound sources, intensity levels, and temporal boundaries for advanced audio understanding applications.",
      icon: Volume2,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Audio Quality Enhancement & Metadata Tagging", 
      description: "Our comprehensive audio annotation includes quality assessment, noise level analysis, and detailed metadata tagging. We provide structured annotations that enable AI systems to understand audio context, quality, and content characteristics.",
      icon: Music,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const annotationTechniques = [
    {
      title: "Speech Recognition & Transcription",
      description: "Accurate transcription of spoken content with speaker identification, timestamps, and linguistic markers. Essential for voice assistants, call center analytics, and accessibility applications.",
      applications: ["Voice Assistants", "Call Centers", "Accessibility", "Meeting Transcription"],
      icon: Mic
    },
    {
      title: "Audio Event Classification",
      description: "Identification and classification of environmental sounds, music genres, and acoustic events with temporal boundaries and intensity levels for comprehensive audio understanding.",
      applications: ["Environmental Monitoring", "Music Analysis", "Security Systems", "Smart Home"],
      icon: Volume2
    },
    {
      title: "Emotion & Sentiment Analysis",
      description: "Analysis of emotional content in speech including tone, sentiment, and psychological markers for applications in customer service, healthcare, and human-computer interaction.",
      applications: ["Customer Service", "Healthcare", "HCI", "Market Research"],
      icon: MessageSquare
    },
    {
      title: "Audio Quality Assessment",
      description: "Evaluation of audio quality parameters including noise levels, clarity, distortion, and technical specifications for audio processing and enhancement applications.",
      applications: ["Audio Processing", "Quality Control", "Broadcasting", "Telecommunications"],
      icon: Headphones
    }
  ]

  const useCases = [
    {
      title: "Voice Assistants & Smart Devices",
      description: "Audio annotation for voice-controlled devices including wake word detection, command recognition, natural language understanding, and multi-speaker environments.",
      icon: Mic,
      applications: ["Wake Word Detection", "Command Recognition", "NLU", "Multi-speaker", "Voice Control", "Smart Home Integration"]
    },
    {
      title: "Call Centers & Customer Service",
      description: "Comprehensive call analytics including sentiment analysis, quality monitoring, compliance checking, and automated customer service optimization.",
      icon: Phone,
      applications: ["Sentiment Analysis", "Quality Monitoring", "Compliance", "Automation", "Performance Analytics", "Training Optimization"]
    },
    {
      title: "Healthcare & Medical Applications",
      description: "Medical audio analysis for patient monitoring, diagnostic support, therapy assessment, and accessibility solutions for hearing-impaired patients.",
      icon: Target,
      applications: ["Patient Monitoring", "Diagnostic Support", "Therapy Assessment", "Accessibility", "Medical Transcription", "Clinical Research"]
    },
    {
      title: "Media & Entertainment",
      description: "Audio content analysis for music recommendation, content moderation, automated subtitling, and personalized audio experiences in streaming platforms.",
      icon: Music,
      applications: ["Music Recommendation", "Content Moderation", "Subtitling", "Personalization", "Audio Search", "Content Classification"]
    },
    {
      title: "Security & Surveillance",
      description: "Audio surveillance systems for threat detection, gunshot recognition, crowd monitoring, and automated alert systems for public safety applications.",
      icon: Radio,
      applications: ["Threat Detection", "Gunshot Recognition", "Crowd Monitoring", "Alert Systems", "Perimeter Security", "Emergency Response"]
    },
    {
      title: "Automotive & Transportation",
      description: "In-vehicle audio systems for voice commands, driver monitoring, passenger communication, and integration with autonomous vehicle systems.",
      icon: Zap,
      applications: ["Voice Commands", "Driver Monitoring", "Passenger Communication", "Autonomous Integration", "Safety Alerts", "Navigation"]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Audio Annotation Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Professional <span className="text-primary">Audio Annotation</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your audio data into AI-ready training datasets with our comprehensive audio annotation services. From speech recognition to sound event detection, we deliver acoustic precision at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Audio Annotation Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Acoustic Intelligence for AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering precise transcription, sound classification, and audio analysis for speech and audio understanding AI
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

      {/* Annotation Techniques Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Audio Annotation Techniques</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced Audio Analysis Methods
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of audio annotation techniques for every speech recognition and audio understanding use case
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {annotationTechniques.map((technique, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <technique.icon className="h-6 w-6 text-white" />
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
            <Badge variant="outline" className="mb-4">Industry Applications</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Audio AI Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with intelligent audio analysis and speech understanding
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
              Our proven methodology ensures consistent quality and acoustic accuracy for every audio annotation project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Audio Analysis",
                description: "We analyze your audio content and define annotation requirements for optimal speech recognition and sound understanding."
              },
              {
                step: "02", 
                title: "Technique Selection",
                description: "Choose the most appropriate audio annotation methods based on your specific use case and accuracy requirements."
              },
              {
                step: "03",
                title: "Transcription & Labeling",
                description: "Our expert linguists and audio specialists apply precise annotation with rigorous quality control processes."
              },
              {
                step: "04",
                title: "Quality Validation",
                description: "Multi-level quality checks ensure acoustic accuracy and consistency for AI training and audio understanding."
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
              Proven Audio Annotation Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering high-quality annotated audio datasets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "100K+", 
                label: "Audio Hours", 
                description: "Transcribed with high accuracy",
                icon: Headphones 
              },
              { 
                number: "98.5%", 
                label: "Transcription Accuracy", 
                description: "Precision in speech recognition",
                icon: Target 
              },
              { 
                number: "40+", 
                label: "Languages Supported", 
                description: "Multilingual audio capabilities",
                icon: MessageSquare 
              },
              { 
                number: "24hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery for audio projects",
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
                  Transform Your Audio into AI Intelligence
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your audio annotation needs and create a custom solution that accelerates your speech recognition and audio understanding projects.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Mic className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Speech Recognition</h3>
                  </div>
                  <p className="text-sm text-gray-600">98.5% accuracy across 40+ languages</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Volume2 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Sound Classification</h3>
                  </div>
                  <p className="text-sm text-gray-600">Advanced audio event detection</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Audio Project
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