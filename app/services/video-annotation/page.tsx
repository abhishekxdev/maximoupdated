import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Video, Target, Zap, Users, Clock, ExternalLink, Play, Activity, Eye, Navigation, Layers, MapPin, Camera } from 'lucide-react'
import Link from 'next/link'

export default function VideoAnnotation() {
  const keyFeatures = [
    {
      number: "1",
      title: "Frame-by-Frame Object Tracking",
      description: "Our video annotation services provide precise object tracking across video sequences, enabling AI models to understand motion patterns, object behavior, and temporal relationships. We annotate every frame with consistent object identification and tracking for seamless video analysis.",
      icon: Activity,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "Activity Recognition & Behavior Analysis",
      description: "We specialize in annotating human activities, gestures, and behaviors in video content. Our expert annotators identify complex actions, interactions, and behavioral patterns that enable AI systems to understand and predict human behavior in various contexts.",
      icon: Eye,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Temporal Segmentation & Event Detection", 
      description: "Our advanced video annotation includes temporal segmentation, keyframe extraction, and event detection. We identify significant moments, scene changes, and critical events within video sequences to create comprehensive training datasets for video understanding AI.",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const annotationTechniques = [
    {
      title: "Object Tracking & Motion Analysis",
      description: "Track objects across video frames with consistent identification, motion vectors, and trajectory analysis. Essential for autonomous vehicles, surveillance systems, and sports analytics.",
      applications: ["Autonomous Vehicles", "Surveillance", "Sports Analytics", "Traffic Monitoring"],
      icon: Navigation
    },
    {
      title: "Action Recognition & Classification",
      description: "Annotate human actions, gestures, and activities with temporal boundaries and classification labels. Critical for security systems, healthcare monitoring, and human-computer interaction.",
      applications: ["Security Systems", "Healthcare Monitoring", "HCI", "Fitness Applications"],
      icon: Users
    },
    {
      title: "Scene Understanding & Segmentation",
      description: "Segment video scenes, identify environmental contexts, and annotate spatial relationships between objects. Vital for robotics, augmented reality, and content analysis.",
      applications: ["Robotics", "Augmented Reality", "Content Analysis", "Environmental Monitoring"],
      icon: Layers
    },
    {
      title: "Keyframe Extraction & Event Detection",
      description: "Identify and annotate significant frames, scene transitions, and critical events within video sequences. Important for video summarization, content indexing, and automated editing.",
      applications: ["Video Summarization", "Content Indexing", "Automated Editing", "Media Analysis"],
      icon: Camera
    }
  ]

  const useCases = [
    {
      title: "Autonomous Vehicles",
      description: "Video annotation for self-driving cars includes pedestrian tracking, vehicle detection, traffic sign recognition, and lane detection across various driving conditions and environments.",
      icon: Navigation,
      applications: ["Pedestrian Tracking", "Vehicle Detection", "Traffic Sign Recognition", "Lane Detection", "Obstacle Avoidance", "Path Planning"]
    },
    {
      title: "Surveillance & Security",
      description: "Advanced video analytics for security applications including intrusion detection, crowd monitoring, suspicious behavior identification, and real-time threat assessment.",
      icon: Eye,
      applications: ["Intrusion Detection", "Crowd Monitoring", "Behavior Analysis", "Threat Assessment", "Facial Recognition", "Access Control"]
    },
    {
      title: "Sports Analytics",
      description: "Comprehensive sports video analysis including player tracking, performance metrics, tactical analysis, and automated highlight generation for various sports disciplines.",
      icon: Activity,
      applications: ["Player Tracking", "Performance Metrics", "Tactical Analysis", "Highlight Generation", "Injury Prevention", "Training Optimization"]
    },
    {
      title: "Healthcare & Medical",
      description: "Medical video annotation for surgical procedures, patient monitoring, rehabilitation tracking, and diagnostic imaging to support AI-driven healthcare solutions.",
      icon: Target,
      applications: ["Surgical Procedures", "Patient Monitoring", "Rehabilitation Tracking", "Diagnostic Imaging", "Telemedicine", "Medical Training"]
    },
    {
      title: "Entertainment & Media",
      description: "Video content analysis for automated editing, content moderation, audience engagement tracking, and personalized content recommendation systems.",
      icon: Play,
      applications: ["Automated Editing", "Content Moderation", "Engagement Tracking", "Recommendation Systems", "Subtitle Generation", "Content Classification"]
    },
    {
      title: "Industrial & Manufacturing",
      description: "Quality control video analysis, process monitoring, safety compliance tracking, and automated inspection systems for manufacturing and industrial environments.",
      icon: Zap,
      applications: ["Quality Control", "Process Monitoring", "Safety Compliance", "Automated Inspection", "Predictive Maintenance", "Workflow Optimization"]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Video Annotation Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced <span className="text-primary">Video Annotation</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your video data into AI-ready training datasets with our comprehensive video annotation services. From object tracking to activity recognition, we deliver temporal precision at scale for computer vision applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Video Annotation Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Temporal Intelligence for AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering frame-accurate annotations, motion tracking, and behavioral analysis for video understanding AI
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
            <Badge variant="outline" className="mb-4">Video Annotation Techniques</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced Video Analysis Methods
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of video annotation techniques for every computer vision and temporal analysis use case
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
              Video AI Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with intelligent video analysis and temporal understanding
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
              Our proven methodology ensures consistent quality and temporal accuracy for every video annotation project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Video Analysis",
                description: "We analyze your video content and define annotation requirements for optimal temporal understanding and object tracking."
              },
              {
                step: "02", 
                title: "Technique Selection",
                description: "Choose the most appropriate video annotation methods based on your specific use case and accuracy requirements."
              },
              {
                step: "03",
                title: "Frame-by-Frame Annotation",
                description: "Our expert annotators apply temporal tracking and analysis with rigorous quality control across all video frames."
              },
              {
                step: "04",
                title: "Temporal Validation",
                description: "Multi-level quality checks ensure temporal consistency and accuracy for AI training and video understanding."
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
              Proven Video Annotation Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering high-quality annotated video datasets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "1M+", 
                label: "Video Hours", 
                description: "Annotated with frame accuracy",
                icon: Video 
              },
              { 
                number: "99.5%", 
                label: "Temporal Accuracy", 
                description: "Precision in frame tracking",
                icon: Target 
              },
              { 
                number: "30fps", 
                label: "Frame Rate Support", 
                description: "High-resolution video processing",
                icon: Activity 
              },
              { 
                number: "96hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery for video projects",
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
                  Transform Your Videos into AI Intelligence
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your video annotation needs and create a custom solution that accelerates your computer vision and temporal analysis projects.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Activity className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Temporal Precision</h3>
                  </div>
                  <p className="text-sm text-gray-600">Frame-accurate tracking and analysis</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Eye className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Advanced Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-600">Behavior and activity recognition</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Video Project
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