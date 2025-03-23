// components/ServicesSection.tsx
"use client";
import { useState, useRef, useEffect, JSX } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface Feature {
  icon: string;
  text: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: Feature[];
}

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design and Development",
    description: "Your website is like your digital handshake—it's the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    features: [
      { icon: "desktop", text: "UI UX Design" },
      { icon: "globe", text: "Custom Website Design" },
      { icon: "shopping-cart", text: "E-Commerce Development" },
      { icon: "database", text: "Content Management Systems (CMS)" },
      { icon: "wrench", text: "Website Maintenance and Support" },
      { icon: "search", text: "SEO Integration" },
      { icon: "mobile", text: "UX/UI Optimization" }
    ]
  },
  {
    id: "app-development",
    title: "App Design & Development",
    description: "Create powerful mobile experiences that users love. Our app development team focuses on intuitive design and seamless functionality across all platforms.",
    features: [
      { icon: "mobile", text: "Native App Development" },
      { icon: "code", text: "Cross-Platform Solutions" },
      { icon: "paint-brush", text: "App UI/UX Design" },
      { icon: "cloud", text: "Backend Integration" },
      { icon: "refresh", text: "App Maintenance & Updates" }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "We create beautiful, intuitive interfaces that delight users and keep them coming back. Our UI/UX services balance aesthetics with functionality.",
    features: [
      { icon: "users", text: "User Research" },
      { icon: "sitemap", text: "Information Architecture" },
      { icon: "pencil", text: "Wireframing & Prototyping" },
      { icon: "magic", text: "Visual Design" },
      { icon: "chart-line", text: "Usability Testing" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    description: "Build powerful online stores that drive sales and provide exceptional shopping experiences. Our e-commerce solutions are scalable, secure, and optimized for conversion.",
    features: [
      { icon: "shopping-cart", text: "Custom E-Commerce Platforms" },
      { icon: "credit-card", text: "Secure Payment Integration" },
      { icon: "tags", text: "Product Catalog Management" },
      { icon: "truck", text: "Shipping & Logistics Integration" },
      { icon: "chart-bar", text: "Sales Analytics & Reporting" },
      { icon: "mobile-alt", text: "Mobile Shopping Experiences" }
    ]
  },
  {
    id: "tech-consultations",
    title: "Technical Consultations",
    description: "Get expert guidance on your technical challenges. Our consultants provide strategic advice to help you make informed technology decisions.",
    features: [
      { icon: "lightbulb", text: "Technology Assessment" },
      { icon: "road", text: "Digital Roadmapping" },
      { icon: "shield-alt", text: "Security Audits" },
      { icon: "tachometer-alt", text: "Performance Optimization" },
      { icon: "server", text: "Infrastructure Planning" }
    ]
  }
];

// Scroll Animation Component
interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
}

function AnimateOnScroll({ children}: AnimateOnScrollProps): JSX.Element {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}

// Feature Tag Animation
interface FeatureTagProps {
  icon: string;
  text: string;
  index: number;
}

const FeatureTag = ({ icon, text, index }: FeatureTagProps): JSX.Element => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="inline-flex items-center px-4 py-2 rounded-full bg-red-500 text-white"
    >
      <span className="mr-2">
        <i className={`fas fa-${icon}`}></i>
      </span>
      {text}
    </motion.span>
  );
};

export default function ServicesSection(): JSX.Element {
  const [activeService, setActiveService] = useState<string>("web-design");
  const [scrollY, setScrollY] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-select service based on scroll position
  useEffect(() => {
    if (!containerRef.current) return;
    
    const serviceElements = document.querySelectorAll('.service-content');
    let closestService = activeService;
    let closestDistance = Infinity;

    serviceElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestService = el.getAttribute('data-service-id') || activeService;
      }
    });

    if (closestService) {
      setActiveService(closestService);
    }
  }, [scrollY, activeService]);

  return (
    <section className="py-16" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black text-white mb-4"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
              Our services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
            >
              Services designed to help <br />your brand shine brighter.
            </motion.h2>
          </div>
        </AnimateOnScroll>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Fixed Side Column */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start hidden md:flex">
            <motion.nav 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-1"
            >
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.id);
                    // Scroll to service section when clicked
                    const element = document.querySelector(`[data-service-id="${service.id}"]`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`block w-full text-left px-3 py-4 rounded-md transition-colors duration-200 ease-in-out ${
                    activeService === service.id
                      ? 'bg-gray-100 border-l-4 border-red-500 font-medium text-gray-900'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {service.title}
                </motion.button>
              ))}
            </motion.nav>
          </div>

          {/* Scrollable Content Area */}
          <div className="lg:w-2/3 md:px-4 px-2">
            {services.map((service, serviceIndex) => (
              <motion.div
                key={service.id}
                data-service-id={service.id}
                className={`service-content bg-red-50 rounded-xl p-8 shadow-sm mb-8 transition-opacity duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + serviceIndex * 0.1 }}
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-8"
                >
                  {service.description}
                </motion.p>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-3"
                >
                  {service.features.map((feature, index) => (
                    <FeatureTag 
                      key={index} 
                      icon={feature.icon} 
                      text={feature.text} 
                      index={index} 
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}