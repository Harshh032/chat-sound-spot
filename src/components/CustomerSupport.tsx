import { MessageSquare, Mic, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SupportFeatures } from "./SupportFeature";
import { FAQ } from "./FAQ";
import supportHero from "@/assets/support-hero.jpg";

export const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Get Help with Our
                <span className="block text-secondary-foreground">AI Support Assistant</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Experience next-level customer support with our intelligent AI that understands both text and voice. Get instant answers, speak naturally, and resolve issues faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="chat-pulse text-lg px-8 py-6"
                >
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Start AI Chat
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                >
                  <Mic className="w-6 h-6 mr-3" />
                  Try Voice Support
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={supportHero} 
                alt="AI Customer Support Interface" 
                className="rounded-lg shadow-floating max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Widget Integration */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Try Our AI Assistant Now
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Click the chat widget below to start a conversation. You can type your questions or use voice commands for a natural support experience.
            </p>
            
            {/* ElevenLabs ConvAI Widget */}
            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-feature">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <elevenlabs-convai agent-id="agent_01jz7dkt73f83b4sby1bkrbf4t"></elevenlabs-convai>
                    <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
                  `
                }}
              />
              
              <div className="mt-6 text-sm text-muted-foreground">
                <p className="mb-2">🎤 <strong>Voice Support:</strong> Click the microphone icon to speak naturally</p>
                <p>💬 <strong>Text Chat:</strong> Type your questions for instant written responses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <SupportFeatures />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our support team is here for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-card p-6 rounded-lg shadow-card">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-muted-foreground mb-4">Mon-Fri, 9AM-6PM</p>
              <p className="text-primary font-semibold">1-800-SUPPORT</p>
            </div>
            
            <div className="text-center bg-card p-6 rounded-lg shadow-card">
              <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">Response within 4 hours</p>
              <p className="text-secondary font-semibold">support@company.com</p>
            </div>
            
            <div className="text-center bg-card p-6 rounded-lg shadow-card">
              <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Available 24/7</p>
              <Button variant="outline">Start Chat</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};