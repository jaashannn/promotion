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
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-sky-500/10 dark:from-orange-400/10 dark:to-sky-500/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
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
                background: i % 3 === 0 ? 'rgba(255, 165, 0, 0.3)' : 
                           i % 2 === 0 ? 'rgba(14, 165, 233, 0.3)' : 
                           'rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 ${size * 2}px ${size}px ${i % 3 === 0 ? 'rgba(255, 165, 0, 0.1)' : 
                           i % 2 === 0 ? 'rgba(14, 165, 233, 0.1)' : 
                           'rgba(255, 255, 255, 0.05)'}`
              }}
              animate={{
                y: [0, -100, 0],
                x: [(Math.random() - 0.5) * 50, 0, (Math.random() - 0.5) * 50],
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-gray-700 dark:text-gray-100">Last Updated: July 01, 2025</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🚀 Business <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Reflo Hub</span>: Quality Leads, Made Easy
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Utilise Reflo Hub to expand your business more quickly. Access high-quality referral leads from independent contractors around the globe. Only three to four companies per category per city, limited space. Sign up right now!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
              >
                <Check className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm">No Portal Commission</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
              >
                <Globe className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm">Global Leads</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
              >
                <BarChart className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm">High ROI</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Join Reflo Hub */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🌟 Why Join <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Reflo Hub</span>?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Are you fed up with squandering your marketing funds on leads that never become customers? Make direct contact with qualified leads from verified freelancers who actively seek out clients for your services by using Reflo Hub. No commission. Monthly fees that are predictable. Highest return on investment.
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
            📌 Limited Availability: <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Exclusive Business Listings</span>!
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Reflo Hub only permits three to four companies per category in each city in order to guarantee top lead quality.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: BarChart, title: "Better Quality Leads", description: "Exclusive listings ensure high-quality referrals." },
              { icon: Globe, title: "Less Competition", description: "Only 3-4 businesses per category per city." },
              { icon: Star, title: "Improved Conversion Rates", description: "Targeted leads boost your closing success." },
              { icon: Check, title: "Enhanced Visibility", description: "Stand out in your category and location." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <div className="text-2xl font-semibold mb-4">{item.title}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
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
              className="inline-block bg-gradient-to-r from-orange-400 to-sky-500 text-white font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 dark:hover:shadow-orange-300/20"
            >
              ✅ Register Now
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
            💼 Industries We <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Serve</span>
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
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-gray-900 dark:text-gray-300">{industry}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-600 dark:text-gray-300 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your category not listed?{' '}
            <a href="mailto:support@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">
              Reach out to us!
            </a>
          </motion.p>
        </section>

        {/* How Reflo Hub Benefits Your Company */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📊 How Reflo Hub <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Benefits Your Company</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "1️⃣ Easy Registration", description: "Fill out a brief registration. Live photo verification is required to prevent fraud." },
              { title: "2️⃣ Simple Lead Administration", description: "Through the dashboard, freelancers directly submit leads. You may review leads with complete contact information promptly." },
              { title: "3️⃣ Closing Deals and Paying Directly", description: "Reach out to leads and complete transactions on your own. Pay independent contractors directly; there is no platform fee." },
              { title: "4️⃣ Monitor and Scale", description: "Monitor leads and conversions using your dashboard. Use internal communications to have confidential commission negotiations. Increase reach with adaptable marketing initiatives." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-semibold mb-4">{step.title}</div>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
            🎖 Pricing Plans Designed for <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Maximum ROI</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transparent, predictable, and no hidden fees. Choose your plan:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* USA, CAN, AUS, UK Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-400/50 dark:border-orange-300/50 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 dark:bg-orange-300 text-white dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                USA, CAN, AUS, UK
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Premium</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Ideal for high-growth businesses</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-orange-400 dark:text-orange-300 mb-2">50% off (was $149)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">One-time setup: $349 (was $699)</p>
                <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Unlimited Leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>10 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Priority Listing & Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gradient-to-r from-orange-400 to-sky-500 text-white font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 dark:hover:shadow-orange-300/20"
              >
                ✅ Sign Up Now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 dark:bg-orange-300 text-white dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                USA, CAN, AUS, UK
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Standard</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Perfect for growing businesses</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-orange-400 dark:text-orange-300 mb-2">50% off (was $129)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">One-time setup: $249 (was $599)</p>
                <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>15 Leads/Month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>5 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Dashboard Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gray-100/60 dark:bg-white/10 hover:bg-gray-200/60 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                ✅ Sign Up Now
              </motion.a>
            </motion.div>

            {/* India Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-400/50 dark:border-orange-300/50 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 dark:bg-orange-300 text-white dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                India
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Plan 2</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Ideal for high-growth businesses in India</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-orange-400 dark:text-orange-300 mb-2">50% off (was $79)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">One-time setup: $129 (was $269)</p>
                <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Unlimited Leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>10 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Priority Listing & Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gradient-to-r from-orange-400 to-sky-500 text-white font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 dark:hover:shadow-orange-300/20"
              >
                ✅ Sign Up Now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8 flex flex-col relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 dark:bg-orange-300 text-white dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                India
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Plan 1</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Perfect for growing businesses in India</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">$25</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-orange-400 dark:text-orange-300 mb-2">50% off (was $50)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">One-time setup: $99 (was $199)</p>
                <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>15 Leads/Month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>5 Free Monthly Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-400 mr-2" />
                  <span>Dashboard Analytics</span>
                </li>
              </ul>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gray-100/60 dark:bg-white/10 hover:bg-gray-200/60 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                ✅ Sign Up Now
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
            <h3 className="text-2xl font-semibold text-center mb-8">📢 Boost Visibility with Optional Ads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Province/State Ad", price: "$5/week", description: "1-week ad in your registered province/state." },
                { title: "Additional Province/State", price: "$2/week", description: "Add more provinces/states for targeted reach." },
                { title: "Nationwide Ad", price: "$15/week", description: "Reach all states/provinces for maximum exposure." }
              ].map((ad, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-2xl font-bold mb-1">{ad.title}</div>
                  <div className="text-xl font-semibold mb-2">{ad.price}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{ad.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-2 rounded-lg bg-gray-100/60 dark:bg-white/10 hover:bg-gray-200/60 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10"
                  >
                    Purchase
                  </motion.button>
                </motion.div>))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">Basic Plan: 5 free ads/month | Premium Plan: 10 free ads/month</p>
          </motion.div>
        </section>

        {/* Verified Business Badge */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8 flex flex-col max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Verified Business Badge</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Enhance your profile credibility</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$25.00</span>
                <span className="text-gray-600 dark:text-gray-300 ml-1">/month (USD)</span>
              </div>
              <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
            </div>
            <ul className="space-y-3 flex-1">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-orange-400 mr-2" />
                <span>Verified Badge Display</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-orange-400 mr-2" />
                <span>Increased Trust from Businesses</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-orange-400 mr-2" />
                <span>Stand Out on Leaderboard</span>
              </li>
            </ul>
            <motion.a
              href="/get-started"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-block w-full text-center bg-gray-100/60 dark:bg-white/10 hover:bg-gray-200/60 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
            >
              Add Badge
            </motion.a>
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
            🔍 Built-in <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Trust & Security</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Check, title: "Live Photo Verification", description: "Avoid spam and fraudulent accounts." },
              { icon: Star, title: "Clear Ratings & Reviews", description: "Check the caliber of the freelancer." },
              { icon: Shield, title: "Non-Circumvention Agreements", description: "Safeguard your rights." },
              { icon: Globe, title: "Dispute Resolution", description: "Reflo Hub provides open mediation for commission disputes." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <div className="text-2xl font-semibold mb-4">{item.title}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Worldwide Reach, Local Impact */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🌎 Worldwide Reach, <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Local Impact</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            No matter where you decide to conduct business, our independent contractors will provide you leads from all around the world, putting you in direct contact with possible clients. Easily scale across boundaries.
          </motion.p>
        </section>

        {/* Why Reflo Hub is the Best Choice */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🥇 Why Reflo Hub is the <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">Best Choice</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "No Portal Commission", description: "Clear subscription-only business model with no commission ever." },
              { title: "Direct Payments to Freelancers", description: "Complete transparency, no intermediary costs." },
              { title: "Exclusive Listings", description: "Only three to four companies per city or category." },
              { title: "Ensured High-Quality Leads", description: "Motivated, pre-screened recommendations." },
              { title: "Maximum ROI", description: "Lower advertising expenditures and steady monthly expenses." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-semibold mb-4">{item.title}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
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
              📞 Are you ready to get <span className="bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent">High-Quality Referral Leads</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Move quickly! Strict restrictions are placed on each category to ensure superior quality. Get your spot now and begin expanding with Reflo Hub high-quality referrals.
            </p>
            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/get-started"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-orange-400 to-sky-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  👉 Join Reflo Hub Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="mailto:support@reflohub.com"
                whileHover={{ y: -3 }}
                className="group relative inline-flex px-8 py-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-200/60 dark:hover:bg-white/10 transition-all duration-300 overflow-hidden"
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