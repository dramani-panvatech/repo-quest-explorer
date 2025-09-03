import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import DemoModal from "@/components/DemoModal";
import PricingModal from "@/components/PricingModal";
import { 
  Video, 
  Clock, 
  Shield, 
  Smartphone, 
  Calendar, 
  FileText,
  Users,
  Globe,
  CheckCircle,
  Monitor,
  Headphones,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Video Consultations",
    description: "Crystal clear video quality with secure, HIPAA-compliant video calls that work seamlessly across all devices."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated appointment scheduling with calendar integration, reminders, and flexible rescheduling options."
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Send prescriptions directly to pharmacies with integrated e-prescribing capabilities and medication management."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Bank-level encryption and security protocols ensure patient data is always protected and compliant."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Native mobile apps for iOS and Android, plus responsive web interface for seamless patient access."
  },
  {
    icon: Users,
    title: "Multi-Provider Support",
    description: "Support for group practices with shared calendars, patient handoffs, and collaborative care features."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    stat: "40%",
    description: "Reduce appointment times and administrative overhead"
  },
  {
    icon: Globe,
    title: "Expand Reach",
    stat: "300%",
    description: "Serve patients beyond geographical limitations"
  },
  {
    icon: Heart,
    title: "Patient Satisfaction",
    stat: "95%",
    description: "Higher patient satisfaction with convenient virtual care"
  },
  {
    icon: Monitor,
    title: "Cost Reduction",
    stat: "60%",
    description: "Lower overhead costs compared to traditional visits"
  }
];

const useCases = [
  "Follow-up appointments and routine check-ins",
  "Mental health and counseling sessions",
  "Chronic disease management",
  "Prescription refills and medication reviews",
  "Specialist consultations and referrals",
  "Post-operative care and monitoring"
];

export default function Telemedicine() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Telemedicine Solutions | Remote Healthcare Platform | PatientClick</title>
        <meta 
          name="description" 
          content="Transform healthcare delivery with PatientClick's secure telemedicine platform. HIPAA-compliant video consultations, e-prescribing, and remote patient monitoring." 
        />
        <meta name="keywords" content="telemedicine, telehealth, virtual consultations, remote healthcare, video calls, HIPAA compliant, e-prescribing" />
        <link rel="canonical" href="https://patientclick.com/products/telemedicine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-soft">
        <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                HIPAA-Compliant Telemedicine Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-trust-blue mb-6 leading-tight">
                Healthcare That Comes
                <span className="block text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  To Your Patients
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Deliver exceptional healthcare remotely with our comprehensive telemedicine platform. 
                Secure video consultations, digital prescriptions, and seamless patient engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-3 text-lg"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setIsPricingModalOpen(true)}
                  className="px-8 py-3 text-lg"
                >
                  View Pricing
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-trust-blue">{benefit.stat}</div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                Complete Telemedicine Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to deliver high-quality virtual healthcare, 
                from video consultations to prescription management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-trust-blue group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-24 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-trust-blue mb-6">
                  Perfect for Every
                  <span className="block text-primary">Healthcare Scenario</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our telemedicine platform adapts to your practice needs, 
                  whether you're conducting routine check-ups or specialized consultations.
                </p>
                <div className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <Headphones className="w-16 h-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl text-trust-blue">24/7 Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Our dedicated support team ensures your telemedicine platform 
                      runs smoothly around the clock.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsDemoModalOpen(true)}
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-trust-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join thousands of healthcare providers who have revolutionized 
              their patient care with our telemedicine platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-3 text-lg bg-white text-trust-blue hover:bg-gray-100"
              >
                Schedule Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setIsPricingModalOpen(true)}
                className="px-8 py-3 text-lg border-white text-white hover:bg-white/10"
              >
                Get Pricing
              </Button>
            </div>
          </div>
        </section>

        <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
        
        <DemoModal 
          isOpen={isDemoModalOpen} 
          onClose={() => setIsDemoModalOpen(false)} 
        />
        <PricingModal 
          isOpen={isPricingModalOpen} 
          onClose={() => setIsPricingModalOpen(false)} 
        />
      </div>
    </>
  );
}