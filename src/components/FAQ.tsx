import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition-smooth"
      >
        <span className="font-semibold text-foreground">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are you currently hiring caregivers in Northern Kentucky or Cincinnati?",
      answer: "Yes! We're actively hiring compassionate and dependable caregivers throughout Northern Kentucky and Greater Cincinnati. If you're interested, we can start a brief screening now. If you meet the requirements, we'll offer to book your interview with our hiring manager right away."
    },
    {
      question: "What are the current pay rates?",
      answer: "Our caregivers typically earn between $13 and $16 per hour depending on experience, certifications (like CNA/STNA), and the types of care provided. Weekend and last-minute shifts may offer additional incentives."
    },
    {
      question: "Where are you located?",
      answer: "Our main office is in Northern Kentucky, and we serve clients across NKY and the Greater Cincinnati area. In-person interviews typically take place at our Hyde Park office in Cincinnati."
    },
    {
      question: "Do I need reliable transportation?",
      answer: "Yes. Reliable transportation is required to travel to client homes. Our clients are located throughout Boone, Kenton, and Campbell counties as well as the east and west sides of Cincinnati."
    },
    {
      question: "Will I need to travel far?",
      answer: "We try to match you with clients near your preferred area. However, most caregivers drive up to 30 minutes depending on the location and client needs."
    },
    {
      question: "How does the AI voice support work?",
      answer: "Simply click on the chat widget and start speaking. Our AI will listen, understand your question, and respond both in text and voice. You can have natural conversations just like talking to a human support agent."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our AI support
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};