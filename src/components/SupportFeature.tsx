import { MessageCircle, Headphones, Clock, Shield } from "lucide-react";

interface SupportFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportFeature = ({ icon, title, description }: SupportFeatureProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-feature transition-smooth hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-primary-light text-primary p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const SupportFeatures = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "AI Chat Support",
      description: "Get instant answers with our intelligent AI assistant that understands your questions and provides accurate solutions."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Voice Support",
      description: "Talk naturally to our AI - ask questions using your voice and get spoken responses for a more personal experience."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Our AI support never sleeps. Get help whenever you need it, day or night, with instant response times."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your conversations are protected with enterprise-grade security. We respect your privacy and data."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Our AI Support?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of customer support with our advanced AI assistant
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <SupportFeature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};