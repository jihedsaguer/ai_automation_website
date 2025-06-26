import { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const partnersData = [
  {
    name: "Smart Groupe Tunisia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", // Remplacer par le vrai logo
    review: "NLS Consulting helped us automate our processes and improve efficiency. Their AI expertise is outstanding!",
    reviewer: "M. Ben Ali, CEO",
  },
  {
    name: "VBET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", // Remplacer par le vrai logo
    review: "A responsive team, tailor-made solutions, and quality support. Highly recommended!",
    reviewer: "Mme. Ferjani, CTO",
  },
  // Add more partners here
];

const Partners = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-muted/50 py-16">
      <section className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-10">Our Partners & Clients</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {partnersData.map((partner, idx) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(idx)}
            >
              <Card className={`transition-all duration-300 cursor-pointer border-2 ${selected === idx ? 'border-accent shadow-2xl' : 'border-primary/20 shadow-md'}`}>
                <CardHeader className="flex flex-col items-center">
                  <img src={partner.logo} alt={partner.name} className="h-16 mb-4 rounded-full bg-white p-2 border" />
                  <h2 className="text-xl font-semibold mb-1 text-center">{partner.name}</h2>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="italic text-muted-foreground text-center mb-3">"{partner.review}"</p>
                  <span className="text-sm text-accent font-medium">{partner.reviewer}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;

