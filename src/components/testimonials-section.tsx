"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "The TCB team is always transparent and responsive. Their quick turnaround times help us keep our deals on track.",
  },
  {
    id: 2,
    quote: "We've found TCB to be a trusted partner, providing flexible solutions that adapt perfectly to our business needs.",
  },
  {
    id: 3,
    quote: "With TCB, we get more than just financing—we get a partner committed to our success.",
  },
  {
    id: 4,
    quote: "We appreciate Trade Credit Bancorp's personalised approach. Their expertise made navigating trade finance much easier for our business.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full border-2 border-accent hover:border-highlight transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div className="flex-1">
                    <Quote className="w-8 h-8 text-highlight mb-4 opacity-60" />
                    <blockquote className="text-lg text-foreground leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="mt-6 pt-6 border-t border-accent">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-highlight rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground font-medium">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Trade Credit Bancorp 
            for their trade finance needs. Experience the difference of working 
            with a dedicated partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
};