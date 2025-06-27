import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Image as ImageIcon, Target, Zap, Users, Clock, ExternalLink, Box, MapPin, Activity, Layers, Navigation, Palette, Minus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ImageAnnotation() {
  const keyFeatures = [
    {
      number: "1",
      title: "Precision Annotation for Machine Learning",
      description: "We specialize in annotating diverse image types and sizes to make them understandable for AI systems. Our team delivers high-quality training data tailored for machine learning applications across industries like healthcare, automotive, e-commerce, agriculture, and more.",
      icon: Target,
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2", 
      title: "High-Accuracy Tagging & Labeling",
      description: "Our advanced annotation workflows include techniques like bounding boxes, segmentation, and keypoint detection. These help machines recognize and categorize objects with precision. With the power of deep learning, we ensure the data fed to your models is consistent, accurate, and production-ready.",
      icon: CheckCircle,
      color: "from-green-500 to-blue-500"
    },
    {
      number: "3",
      title: "Scalable & Cost-Efficient Annotation Solutions", 
      description: "Our annotation services are flexible and affordable—perfect for startups and enterprises alike. We offer scalable solutions using tools like bounding boxes, polygons, and 3D annotations, ensuring results that match both your technical requirements and your budget.",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const annotationTools = [
    {
      title: "2D Bounding Boxes",
      description: "Used to define and localize objects in 2D space. Ideal for object detection in static images or video frames across industries like retail, security, and autonomous driving.",
      icon: Box,
      emoji: "🟦",
      applications: ["Object Detection", "Retail Analysis", "Security Systems", "Autonomous Driving"],
      image: "/imagean.jpeg"
    },
    {
      title: "3D Cuboid Annotation",
      description: "Adds depth to object detection by capturing the full 3D structure of an object. Useful in automotive, robotics, and AR/VR applications where understanding object volume and spatial orientation is crucial.",
      icon: Box,
      emoji: "📦",
      applications: ["Automotive", "Robotics", "AR/VR", "Spatial Analysis"],
      image: "/3Dcuboid.jpg"
    },
    {
      title: "Landmark Annotation",
      description: "Involves plotting key points to detect facial expressions, body parts, or object shapes. Often used in facial recognition, emotion detection, and biometrics.",
      icon: MapPin,
      emoji: "📍",
      applications: ["Facial Recognition", "Emotion Detection", "Biometrics", "Medical Imaging"],
      image: "/landmark.jpg"
    },
    {
      title: "Skeletal Annotation",
      description: "Tracks human posture and movement by annotating joints and limbs. Critical for health-tech applications, motion analysis, and AI-based fitness or rehabilitation platforms.",
      icon: Activity,
      emoji: "🦴",
      applications: ["Health-tech", "Motion Analysis", "Fitness AI", "Rehabilitation"],
      image: "/skeletal.jpg"
    },
    {
      title: "Polygon Annotation",
      description: "Allows precise object outlining, even for irregular shapes. Ideal for image segmentation tasks like labeling street signs, animals, products, and complex items in cluttered environments.",
      icon: Layers,
      emoji: "🔺",
      applications: ["Image Segmentation", "Product Labeling", "Environmental Analysis", "Complex Objects"],
      image: "/polygon.jpg"
    },
    {
      title: "Semantic Segmentation",
      description: "Segments every pixel in an image by class, offering pixel-level precision. Perfect for autonomous vehicles, agricultural insights, and medical imaging datasets.",
      icon: Palette,
      emoji: "🌈",
      applications: ["Autonomous Vehicles", "Agricultural AI", "Medical Imaging", "Pixel-level Analysis"],
      image: "/semantic.jpg"
    },
    {
      title: "Polyline Annotation",
      description: "Used for lane detection in autonomous vehicles and road feature recognition. Polylines guide path planning and navigation by identifying roads, powerlines, or boundaries in images.",
      icon: Minus,
      emoji: "➖",
      applications: ["Lane Detection", "Path Planning", "Navigation", "Infrastructure Mapping"],
      image: "/polyline.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Image Annotation Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Professional <span className="text-primary">Image Annotation</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your visual data into AI-ready training datasets with our comprehensive image annotation services. From simple bounding boxes to complex semantic segmentation, we deliver precision at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">🔑 Three Key Features of Our Image Annotation Services</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Our Image Annotation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering precision, accuracy, and scalability for your machine learning projects
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

      {/* Tools & Techniques Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">🛠️ Image Annotation Tools & Techniques</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Advanced Annotation Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of annotation tools and techniques for every computer vision use case
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {annotationTools.map((tool, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl">{tool.emoji}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-800">Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.applications.map((app, idx) => (
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

      {/* Process Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">How We Deliver Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures consistent quality and timely delivery for every image annotation project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "We analyze your image datasets and annotation requirements to design the optimal annotation strategy."
              },
              {
                step: "02", 
                title: "Tool Selection",
                description: "Choose the most appropriate annotation techniques and tools based on your specific use case and accuracy requirements."
              },
              {
                step: "03",
                title: "Annotation Execution",
                description: "Our expert annotators apply the selected techniques with rigorous quality control and validation processes."
              },
              {
                step: "04",
                title: "Quality Assurance",
                description: "Multi-level quality checks and validation ensure your annotated data meets the highest standards for AI training."
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
              Proven Image Annotation Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering high-quality annotated datasets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "10M+", 
                label: "Images Annotated", 
                description: "High-quality annotations delivered",
                icon: ImageIcon 
              },
              { 
                number: "99.8%", 
                label: "Accuracy Rate", 
                description: "Precision in annotation quality",
                icon: Target 
              },
              { 
                number: "7", 
                label: "Annotation Types", 
                description: "Comprehensive technique coverage",
                icon: Layers 
              },
              { 
                number: "48hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery without compromise",
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
                  Transform Your Images into AI-Ready Data
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your image annotation needs and create a custom solution that accelerates your computer vision projects.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Precision Guaranteed</h3>
                  </div>
                  <p className="text-sm text-gray-600">99.8% accuracy with rigorous quality control</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Scalable Solutions</h3>
                  </div>
                  <p className="text-sm text-gray-600">From startup to enterprise scale</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Project
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