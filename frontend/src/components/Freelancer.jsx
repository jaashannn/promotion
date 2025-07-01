import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Globe, Star, BarChart, Coins, UserCheck, MessageSquare, CreditCard, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const Freelancer = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
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
                           i % 2 === 0 ? 'rgba(138, 43, 226, 0.3)' : 
                           'rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 ${size * 2}px ${size}px ${i % 3 === 0 ? 'rgba(0, 212, 255, 0.1)' : 
                           i % 2 === 0 ? 'rgba(138, 43, 226, 0.1)' : 
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
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-700 dark:text-gray-100">Last Updated: July 01, 2025</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🚀 <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Earn Passive Income</span> with Reflo Hub
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Simply refer leads from your network to earn money! No selling, no cold calling, no closing deals. Choose from 50+ categories like real estate, education, finance, healthcare, and more. Get paid directly by businesses for successful referrals.
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
                <Check className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-sm">No Selling Required</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
              >
                <Globe className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-sm">Global Opportunities</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
              >
                <TrendingUp className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-sm">Recurring Commissions</span>
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
            🌟 Why Freelancers Choose <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Reflo Hub</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "✅ Simple, Stress-Free Income", 
                description: "No cold calling, no selling, no closing. Choose from 50+ income categories—businesses take care of the rest; you just supply the leads."
              },
              { 
                title: "🌎 Local Simplicity, Global Opportunity", 
                description: "Refer leads from your city or somewhere else in the world to earn money. There are no geographical restrictions on your profits." 
              },
              { 
                title: "💸 Recurring Monthly Commissions", 
                description: "Through exclusive alliances with our esteemed partners, Fly Fares. VTM (Virtual Tech Masters) and Tech Diamonds, you can earn monthly recurring commissions." 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            💡 How <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">It Works</span> in 4 Simple Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: UserCheck, 
                title: "1. Sign Up & Verify", 
                description: "Fast registration with live photo verification for secure profiles." 
              },
              { 
                icon: Coins, 
                title: "2. Submit Leads", 
                description: "Select from 50+ business sectors and submit confirmed leads using your monthly coins." 
              },
              { 
                icon: MessageSquare, 
                title: "3. Track & Communicate", 
                description: "Monitor lead status and discuss commissions directly with businesses." 
              },
              { 
                icon: CreditCard, 
                title: "4. Get Paid Directly", 
                description: "Receive payments via PayPal, Wise, or bank transfer for successful conversions." 
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <step.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Earning Opportunities */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💼 Special <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Earning Opportunities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-cyan-500/50 dark:border-cyan-200/50 rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 dark:bg-cyan-900/50 p-2 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold">🚀 Virtual Tech Masters (VTM)</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Web development and digital marketing services</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                  <span>10% recurring monthly commission for ongoing service packages</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Ideal for freelancers with startup, small business, or entrepreneur connections</span>
                </li>
              </ul>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-violet-500/50 dark:border-violet-200/50 rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                <div className="bg-violet-100 dark:bg-violet-900/50 p-2 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-violet-600 dark:text-violet-300" />
                </div>
                <h3 className="text-xl font-semibold">Tech Diamonds.</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Web development and digital marketing services in India</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                  <span>10% recurring monthly commission for ongoing service packages</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Ideal for freelancers with startup, small business, or entrepreneur connections in India.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-violet-500/50 dark:border-violet-200/50 rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                <div className="bg-violet-100 dark:bg-violet-900/50 p-2 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-violet-600 dark:text-violet-300" />
                </div>
                <h3 className="text-xl font-semibold">🌍 Fly Fares.</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Comprehensive travel services</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Ongoing commissions for every travel service booked</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Perfect for freelancers with corporate clients, families, or frequent travelers in their network</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📋 Freelancer <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Dashboard Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Coins, title: "Coin Balance", description: "View available coins for submitting leads" },
              { icon: MessageSquare, title: "Lead Submission", description: "Easy-to-use form for entering client details" },
              { icon: BarChart, title: "Lead Tracker", description: "Real-time updates on your submitted leads" },
              { icon: TrendingUp, title: "Earnings Overview", description: "Track earnings history and pending payments" },
              { icon: UserCheck, title: "Chat Interface", description: "Communicate directly with businesses" },
              { icon: Star, title: "Leaderboard & Ratings", description: "Showcase reliability to attract more business" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📦 <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Pricing</span> and Subscription
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-cyan-500/50 dark:border-cyan-200/50 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-2">🌟 Freelancer Subscription</h3>
              <div className="flex justify-center items-end mb-4">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-lg text-gray-600 dark:text-gray-300 ml-1">/month</span>
              </div>
              <p className="text-sm text-cyan-400 mb-6">33% OFF (was $14.99)</p>
              
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Full dashboard access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>5 submission coins each month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Access to premium businesses</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Special partner opportunities</span>
                </li>
              </ul>
              
              <motion.a
                href="/signup"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full bg-gradient-to-r from-cyan-500 dark:from-cyan-600 to-violet-500 dark:to-violet-600 text-white font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-200/20"
              >
                Get Started
              </motion.a>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Additional 30% discount for students with valid ID
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">💰 Buy Extra Coins</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-200/50 dark:bg-white/10 rounded-lg p-4">
                  <div className="text-xl font-bold">$5</div>
                  <div className="text-gray-600 dark:text-gray-300">for 10 coins</div>
                </div>
                <div className="bg-gray-200/50 dark:bg-white/10 rounded-lg p-4">
                  <div className="text-xl font-bold">$10</div>
                  <div className="text-gray-600 dark:text-gray-300">for 20 coins</div>
                </div>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full bg-gray-200/60 dark:bg-white/10 hover:bg-gray-300/60 dark:hover:bg-white/20 border border-gray-300 dark:border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Purchase Coins
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Top Niches */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🏅 50+ Top <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Niches</span> for Higher Income
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Real Estate", description: "Higher commissions with high-value sales" },
              { title: "Immigration Services", description: "High demand in international communities" },
              { title: "Mortgage-Loan", description: "Get easy and fast mortgage or loan approvals with flexible terms to meet your financial needs." },
              { title: "Digital Marketing", description: "Recurring monthly revenue opportunities" },
              { title: "Travel Services", description: "Consistent repeat business potential" },
              { title: "Legal Services", description: "High-value professional referrals" },
              {title: "Many more" , description: "Explore 50+ categories for diverse income streams"}
            ].map((niche, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{niche.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{niche.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💬 Freelancer <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                "I never imagined that network referrals could be that lucrative. It was easy and risk-free thanks to Reflo Hub. By just submitting leads, I've established a consistent monthly income."
              </blockquote>
              <div className="font-semibold">— Priya S., Toronto freelancer</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                "The monthly recurring commission from VTM is the best feature of Reflo Hub. With just one successful referral, I make a consistent monthly income."
              </blockquote>
              <div className="font-semibold">— Jake M., New York-based digital marketer</div>
            </motion.div>
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
              📈 Ready to <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Start Earning</span> Today?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Create an account, get verified, and turn your network into steady passive income. No hidden fees, no selling required.
            </p>
            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 dark:from-cyan-600 to-violet-500 dark:to-violet-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  👉 Sign Up as a Freelancer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 dark:from-violet-600 to-cyan-500 dark:to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="mailto:support@reflohubltd.com"
                whileHover={{ y: -3 }}
                className="group relative inline-flex px-8 py-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-200/60 dark:hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Need Help Getting Started?
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Freelancer;