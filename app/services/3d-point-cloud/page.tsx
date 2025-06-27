import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Box, Car, Shield, Tractor, Target, Zap, Users, Clock, ExternalLink, Eye, MapPin, Activity, Layers, Navigation } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PointCloudAnnotation() {
  const keyCapabilities = [
    {
      title: "Comprehensive 3D Point Annotation for All LiDAR Systems",
      description: "Our 3D Point Cloud Annotation services provide highly detailed labeling using 3D bounding boxes, capable of detecting objects as small as 1 cm. These annotations include class-specific labels and are essential for autonomous systems operating in both indoor and outdoor environments. Motion detection across video frames is also supported for dynamic object tracking.",
      icon: Box,
      color: "from-blue-500 to-purple-500",
      features: [
        "Objects as small as 1 cm detection",
        "Class-specific labeling",
        "Indoor & outdoor environments",
        "Motion detection across frames"
      ]
    },
    {
      title: "Lane Detection and Object Classification in 3D",
      description: "We help annotate various lane types within point cloud maps—critical for ensuring safe navigation of autonomous vehicles. Our annotations are precise, object-oriented, and include class labels for each lane and object, enabling high-level accuracy in 3D space.",
      icon: Navigation,
      color: "from-green-500 to-blue-500",
      features: [
        "Various lane type annotation",
        "Precise object-oriented labeling",
        "Class labels for lanes & objects",
        "High-level 3D accuracy"
      ]
    },
    {
      title: "3D Box-Based Object Detection and Tracking",
      description: "Our team uses advanced tools to create 3D bounding boxes that capture object characteristics such as size, location, orientation, pitch, and velocity. This allows for robust detection and tracking of diverse objects, including pedestrians, cyclists, and designated drivable zones, across varied terrains.",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      features: [
        "Size, location & orientation capture",
        "Pitch and velocity tracking",
        "Pedestrian & cyclist detection",
        "Drivable zone identification"
      ]
    }
  ]

  const useCases = [
    {
      title: "Self-Driving Vehicles",
      description: "Train your autonomous systems using expertly annotated LiDAR data to detect road obstacles, vehicles, signals, and pedestrians for safe navigation.",
      icon: Car,
      emoji: "🚗",
      applications: ["Road Obstacle Detection", "Vehicle Recognition", "Traffic Signal Analysis", "Pedestrian Safety"],
      image: "/Automotive.jpeg"
    },
    {
      title: "Security & Surveillance",
      description: "Integrate annotated 3D data with AI in security drones and surveillance cameras to detect depth and recognize humans, vehicles, animals, and potential threats in real time.",
      icon: Shield,
      emoji: "🔐",
      applications: ["Threat Detection", "Human Recognition", "Vehicle Tracking", "Perimeter Security"],
      image: "/survilleance.jpeg"
    },
    {
      title: "Smart Agriculture",
      description: "Use 3D point cloud annotation to generate topographical insights, enabling AI-driven decisions for crop planning, resource optimization, and land management.",
      icon: Tractor,
      emoji: "🌾",
      applications: ["Topographical Analysis", "Crop Planning", "Resource Optimization", "Land Management"],
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
            <Badge variant="outline" className="mb-4">3D Point Cloud Annotation Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced <span className="text-primary">3D Point Cloud</span> Annotation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enhance object detection and classification accuracy through precise 3D visualization using LiDAR data. Our comprehensive annotation services power the next generation of autonomous systems and spatial intelligence applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive 3D Annotation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced LiDAR data annotation services for autonomous systems and spatial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
            {keyCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${capability.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {capability.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {capability.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {capability.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
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
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming industries with precise 3D point cloud annotation for autonomous systems and intelligent applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

      {/* Technical Specifications */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Technical Excellence</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Precision & Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading accuracy and capabilities in 3D point cloud annotation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Detection Precision",
                value: "1cm",
                description: "Minimum object size detection",
                icon: Target,
                color: "text-blue-600"
              },
              {
                title: "3D Accuracy",
                value: "99.9%",
                description: "Spatial annotation precision",
                icon: Box,
                color: "text-green-600"
              },
              {
                title: "Object Tracking",
                value: "Real-time",
                description: "Dynamic motion detection",
                icon: Activity,
                color: "text-purple-600"
              },
              {
                title: "Environment Coverage",
                value: "Indoor/Outdoor",
                description: "Comprehensive scene support",
                icon: MapPin,
                color: "text-orange-600"
              }
            ].map((spec, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <spec.icon className={`h-10 w-10 ${spec.color} mx-auto mb-6`} />
                <div className="text-3xl font-bold text-primary mb-3">{spec.value}</div>
                <div className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{spec.title}</div>
                <div className="text-muted-foreground text-sm">{spec.description}</div>
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
              Our proven methodology ensures precise 3D annotations for your LiDAR data and autonomous systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "LiDAR Data Analysis",
                description: "We analyze your point cloud data and define annotation requirements for optimal 3D object detection."
              },
              {
                step: "02", 
                title: "3D Bounding Setup",
                description: "Configure 3D bounding boxes with precise size, location, orientation, and velocity parameters."
              },
              {
                step: "03",
                title: "Object Classification",
                description: "Apply class-specific labels to lanes, vehicles, pedestrians, and environmental objects."
              },
              {
                step: "04",
                title: "Quality Validation",
                description: "Multi-level validation ensures accuracy in 3D space with motion tracking verification."
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

      {/* CTA Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-0 bg-white/60 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Ready to Get Started?</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Transform Your LiDAR Data into Intelligence
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your 3D point cloud annotation needs and create a custom solution that powers your autonomous systems and spatial intelligence applications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Box className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Precision 3D Annotation</h3>
                  </div>
                  <p className="text-sm text-gray-600">1cm accuracy with comprehensive object tracking</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Real-time Processing</h3>
                  </div>
                  <p className="text-sm text-gray-600">Dynamic motion detection and tracking</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your 3D Project
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