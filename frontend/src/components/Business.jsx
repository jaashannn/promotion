import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Globe, Star, BarChart } from 'lucide-react';
import { useRef } from 'react';

const Business = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-violet/5 animate-gradient-shift bg-[length:400%_400%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const delay = Math.random() * 5;
          const duration = Math.random() * 10 + 10;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: i % 3 === 0 ? 'rgba(0, 212, 255, 0.3)' : 
                           i % 2 === 0 ? 'rgba(170, 0, 255, 0.3)' : 
                           'rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 ${size * 2}px ${size}px ${i % 3 === 0 ? 'rgba(0, 212, 255, 0.1)' : 
                           i % 2 === 0 ? 'rgba(170, 0, 255, 0.1)' : 
                           'rgba(255, 255, 255, 0.05)'}`
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, (Math.random() - 0.5) * 50, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-dark-text py-24">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm text-dark-text">Last Updated: June 26, 2025</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Business <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Reflo Hub Ltd</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-dark-muted max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Access high-quality referral leads from verified freelancers worldwide. Only 3-4 businesses per category per city for maximum ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Check className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">No Commission</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Globe className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Global Leads</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <BarChart className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">High ROI</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Join Reflo Hub Ltd */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Join <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Reflo Hub Ltd</span>
          </motion.h2>

          <motion.p
            className="text-lg text-dark-muted max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tired of wasting marketing budgets on low-quality leads? Connect directly with qualified leads from verified freelancers who actively seek clients for your services. No commission, predictable monthly fees, and maximum ROI.
          </motion.p>
        </section>

        {/* Limited Availability */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Exclusive <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Business Listings</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Better Quality Leads", description: "Exclusive listings ensure high-quality referrals." },
              { title: "Less Competition", description: "Only 3-4 businesses per category per city." },
              { title: "Improved Conversion Rates", description: "Targeted leads boost your closing success." },
              { title: "Enhanced Visibility", description: "Stand out in your category and location." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-semibold mb-4">{item.title}</div>
                <p className="text-dark-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/get-started"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
            >
              Register Now
            </motion.a>
          </motion.div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Industries We <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Serve</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Mortgages and Real Estate",
              "Immigration Advisors",
              "Dentistry and Skincare Clinics",
              "Attorneys and Insurance Representatives",
              "Home Improvements & HVAC",
              "Automobile Parts & Sales",
              "Truck Driving Schools",
              "Education and Language Study",
              "Driveways, Concrete, and Landscaping",
              "Events & Travel Locations",
              "Furniture and Interior Design",
              "Website Development and Digital Marketing"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-dark-text">{industry}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-dark-muted mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your category not listed?{' '}
            <a href="mailto:support@reflohubltd.com" className="text-neon-blue hover:underline">
              Reach out to us!
            </a>
          </motion.p>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How Reflo Hub Ltd <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Works</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Easy Registration", description: "Quick sign-up with live photo verification to prevent fraud." },
              { title: "Simple Lead Management", description: "Receive leads directly via dashboard with full contact details." },
              { title: "Close Deals & Pay Directly", description: "Contact leads, close deals, and pay freelancers directly." },
              { title: "Track & Scale", description: "Monitor leads, negotiate commissions, and scale with analytics." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-semibold mb-4">{step.title}</div>
                <p className="text-dark-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pricing Plans for <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Maximum ROI</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* USA, Canada, Australia, UK Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-neon-blue/50 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                USA, CAN, AUS, UK
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Premium</h3>
                <p className="text-dark-muted text-sm mb-4">Ideal for high-growth businesses</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-dark-muted ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-neon-blue mb-2">50% off (was $149)</p>
                <p className="text-sm text-dark-muted mb-4">One-time setup: $349 (was $699)</p>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Unlimited Leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>10 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Priority Listing & Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
              >
                Sign Up Now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                USA, CAN, AUS, UK
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Standard</h3>
                <p className="text-dark-muted text-sm mb-4">Perfect for growing businesses</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-dark-muted ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-neon-blue mb-2">50% off (was $129)</p>
                <p className="text-sm text-dark-muted mb-4">One-time setup: $249 (was $599)</p>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>15 Leads/Month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>5 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Dashboard Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Sign Up Now
              </motion.a>
            </motion.div>

            {/* India Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-neon-blue/50 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                India
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Plan 2</h3>
                <p className="text-dark-muted text-sm mb-4">Ideal for high-growth businesses in India</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-dark-muted ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-neon-blue mb-2">50% off (was $79)</p>
                <p className="text-sm text-dark-muted mb-4">One-time setup: $129 (was $269)</p>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Unlimited Leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>10 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Priority Listing & Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
              >
                Sign Up Now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                India
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Plan 1</h3>
                <p className="text-dark-muted text-sm mb-4">Perfect for growing businesses in India</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$25</span>
                  <span className="text-dark-muted ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-neon-blue mb-2">50% off (was $50)</p>
                <p className="text-sm text-dark-muted mb-4">One-time setup: $99 (was $199)</p>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>15 Leads/Month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>5 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Dashboard Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Sign Up Now
              </motion.a>
            </motion.div>
          </div>

          {/* Optional Ads */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Boost Visibility with Optional Ads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Province/State Ad", price: "$5/week", description: "1-week ad in your registered province/state." },
                { title: "Additional Province/State", price: "$2/week", description: "Add more provinces/states for targeted reach." },
                { title: "Nationwide Ad", price: "$15/week", description: "Reach all states/provinces for maximum exposure." }
              ].map((ad, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-2xl font-bold mb-1">{ad.title}</div>
                  <div className="text-xl font-semibold mb-2">{ad.price}</div>
                  <p className="text-sm text-dark-muted mb-4">{ad.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20"
                  >
                    Purchase
                  </motion.button>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-dark-muted mt-4">Basic Plan: 5 free ads/month | Premium Plan: 10 free ads/month</p>
          </motion.div>
        </section>

        {/* Trust and Security */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built-in <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Trust & Security</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Live Photo Verification", description: "Prevents spam and fraudulent accounts." },
              { title: "Ratings & Reviews", description: "Check freelancer quality and reliability." },
              { title: "Non-Circumvention Agreements", description: "Protects your business rights." },
              { title: "Dispute Resolution", description: "Transparent mediation for commission disputes." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-semibold mb-4">{item.title}</div>
                <p className="text-dark-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Worldwide Reach */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Worldwide Reach, <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Local Impact</span>
          </motion.h2>

          <motion.p
            className="text-lg text-dark-muted max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Connect with potential clients globally through our verified freelancers. Scale your business effortlessly across borders with high-quality referral leads.
          </motion.p>
        </section>

        

        {/* Why Reflo Hub Ltd */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Reflo Hub Ltd is the <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Best Choice</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "No Commission", description: "Transparent subscription model with no hidden fees." },
              { title: "Direct Payments", description: "Pay freelancers directly with full transparency." },
              { title: "Exclusive Listings", description: "Only 3-4 businesses per city/category for less competition." },
              { title: "High-Quality Leads", description: "Motivated, pre-screened referrals for better conversions." },
              { title: "Maximum ROI", description: "Lower ad spend with predictable monthly costs." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-semibold mb-4">{item.title}</div>
                <p className="text-dark-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Questions</span>
          </motion.h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "How many companies are permitted in each category?",
                answer: "Only 3-4 per category per city to optimize lead quality and conversions."
              },
              {
                question: "How does the lead submission procedure work?",
                answer: "Freelancers submit full contact details via the dashboard. You contact and convert independently."
              },
              {
                question: "How do freelancers get paid?",
                answer: "You pay freelancers directly based on privately agreed commissions. No platform fees."
              },
              {
                question: "What if a dispute arises?",
                answer: "Reflo Hub Ltd offers transparent mediation for commission disputes."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-dark-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Qualified Leads</span>?
            </h2>
            <p className="text-xl text-dark-muted mb-10">
              Secure your spot now and grow with Reflo Hub Ltd’s high-quality referral leads. Limited availability!
            </p>
            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/get-started"
                target=""
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join Reflo Hub Ltd Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="mailto:support@reflohubltd.com"
                whileHover={{ y: -3 }}
                className="group relative inline-flex px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Contact Support
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Business;