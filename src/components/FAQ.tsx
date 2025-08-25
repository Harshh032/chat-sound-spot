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
      question: "How does the AI voice support work?",
      answer: "Simply click on the chat widget and start speaking. Our AI will listen, understand your question, and respond both in text and voice. You can have natural conversations just like talking to a human support agent."
    },
    {
      question: "Is my conversation data secure?",
      answer: "Absolutely! All conversations are encrypted and stored securely. We follow industry-standard security practices and never share your personal information with third parties."
    },
    {
      question: "What languages does the AI support?",
      answer: "Our AI assistant supports multiple languages including English, Spanish, French, German, and many more. It automatically detects your language and responds accordingly."
    },
    {
      question: "Can the AI handle complex technical issues?",
      answer: "Yes! Our AI is trained on extensive technical documentation and can handle a wide range of issues. For complex problems that require human expertise, it will seamlessly connect you to our human support team."
    },
    {
      question: "Is there a limit to how many questions I can ask?",
      answer: "No limits! Ask as many questions as you need. Our AI is available 24/7 to help you resolve any issues or answer questions about our services."
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