"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import { Quote as QuoteIcon } from "lucide-react";

export function TestimonialsGridWithCenteredCarousel() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-white">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-primary text-lg md:text-2xl">
          Trusted by Global Businesses
        </h1>
        <p className="text-base text-neutral-600">
          Leading trade finance companies worldwide trust TCB for secure, efficient transactions and exceptional client service.
        </p>
      </div>

      <div className=" relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-white opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <div className="relative">
                <QuoteIcon className="absolute top-0 left-0 w-6 h-6 text-highlight" />
                <Quote>{testimonial.quote}</Quote>
              </div>
              <div className="flex gap-2 items-center mt-8">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription>{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-accent bg-white shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold text-primary py-2 pl-8",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    quote:
      "TCB's trade finance solutions have revolutionized our import operations. Their compliance support is exceptional, and we've reduced processing time by 60%.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "CEO, Pacific Import Co.",
  },
  {
    name: "Sarah Williams",
    quote:
      "The expertise and reliability of TCB's team is unmatched. They've facilitated over $50M in transactions for us with zero compliance issues.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "CFO, Global Manufacturing Ltd.",
  },
  {
    name: "Roberto Martinez",
    quote:
      "TCB's relationship management and deep understanding of international trade regulations have been invaluable for our Latin American operations.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Trade Manager, Americas Distribution",
  },
  {
    name: "David Thompson",
    quote:
      "Their documentary credit services are seamless. TCB has been our trusted partner for 8 years, handling complex multi-country transactions effortlessly.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "CEO, Thompson Export Solutions",
  },
  {
    name: "Lisa Zhang",
    quote:
      "TCB's digital platform and personal service create the perfect balance. Our letter of credit processing is now 3x faster than with our previous provider.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "CFO, Asian Trade Networks",
  },
  {
    name: "James Foster",
    quote:
      "The compliance expertise TCB provides is exceptional. They've helped us navigate complex regulations across 15 countries without a single delay.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Trade Finance Director, Foster Industries",
  },
  {
    name: "Maria Rodriguez",
    quote:
      "TCB's supply chain financing has transformed our cash flow management. Their innovative solutions have improved our working capital by 40%.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "CEO, Rodriguez Import Group",
  },
  {
    name: "Thomas Anderson",
    quote:
      "Professional, reliable, and incredibly knowledgeable. TCB has been instrumental in expanding our European trade operations successfully.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Managing Director, Anderson Trading",
  },
  {
    name: "Elena Petrov",
    quote:
      "TCB's risk management capabilities are outstanding. They've helped us secure favorable terms on complex transactions worth over $100M.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "CFO, Eastern European Exports",
  },
  {
    name: "John Mitchell",
    quote:
      "The quality of service and attention to detail from TCB is remarkable. They treat our business like their own, ensuring every transaction is perfect.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "CEO, Mitchell Global Trade",
  },
  {
    name: "Sophie Laurent",
    quote:
      "TCB's team understands the nuances of international trade like no other. Their expertise has been crucial for our African market expansion.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Trade Manager, Laurent Distribution",
  },
  {
    name: "Ahmed Hassan",
    quote:
      "Working with TCB has been transformative. Their Islamic finance solutions and Middle East expertise have opened new markets for our business.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "CEO, Hassan Trading House",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-3xl mx-auto  relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}

          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-white after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <Image
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="text-base text-primary md:text-xl font-bold">
                      "{item.quote}"
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border transition duration-150 ease-in-out ${
                      active === index
                        ? "border-highlight bg-highlight text-white"
                        : "border-accent text-primary opacity-70"
                    }`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="font-bold">
                      {item.name}
                    </span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};