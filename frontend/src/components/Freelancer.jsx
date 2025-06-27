import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Coins, Shield, Globe, Star } from 'lucide-react';
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
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-violet/5 animate-gradient-shift bg-[length:400%_400%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </motion.div>

      {/* Enhanced Floating Particles */}
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
              Reflo Hub Ltd <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Freelancer</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-dark-muted max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A platform for independent contractors to earn passive income by referring leads from your network. Connect with businesses worldwide, no selling required.
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
                <Coins className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Recurring Commissions</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Globe className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Global Opportunities</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Shield className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Secure & Transparent</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Works</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Sign Up", description: "Fast registration with live photo verification for secure profiles." },
              { title: "Submit Leads", description: "Choose from 50+ business sectors and submit leads using monthly coins." },
              { title: "Track Leads", description: "Monitor lead status and communicate directly with businesses via chat." },
              { title: "Get Paid", description: "Receive direct payments from businesses for successful conversions." }
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

        {/* Pricing Section */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Simple, <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Transparent</span> Pricing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Freelancer Subscription</h3>
                <p className="text-dark-muted text-sm mb-4">Perfect for independent contractors</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-dark-muted ml-1">/month (USD)</span>
                </div>
                <p className="text-sm text-neon-blue mb-4">33% off (was $14.99) + extra 30% off with Student ID</p>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>5 Lead Submission Coins Monthly</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Freelancer Dashboard Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Access to Premium Enterprises</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
              >
                Get Started
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Verified Business Badge</h3>
                <p className="text-dark-muted text-sm mb-4">Enhance your profile credibility</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$25.00</span>
                  <span className="text-dark-muted ml-1">/month (USD)</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Verified Badge Display</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Increased Trust from Businesses</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Stand Out on Leaderboard</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Add Badge
              </motion.a>
            </motion.div>
          </div>

          {/* Coin Packages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Need More Coins?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { coins: 10, price: "$5.00", perCoin: "$0.50", popular: false },
                { coins: 20, price: "$10.00", perCoin: "$0.50", popular: true },
              ].map((pkg, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 text-center relative ${pkg.popular ? 'border-neon-blue/50' : 'border-white/10'}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                      BEST VALUE
                    </div>
                  )}
                  <div className="flex justify-center items-center mb-4">
                    <Coins className="w-6 h-6 text-neon-blue mr-2" />
                    <span className="text-2xl font-bold">{pkg.coins}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{pkg.price}</div>
                  <div className="text-sm text-dark-muted mb-4">{pkg.perCoin} per coin</div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-2 rounded-lg ${pkg.popular ? 'bg-neon-blue text-dark-bg' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    Purchase
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            Special Earning <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Opportunities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Virtual Tech Masters (VTM)</h3>
              <p className="text-dark-muted mb-4">Earn a 10% monthly recurring commission for clients signing up for web development, app development, or digital marketing packages.</p>
              <p className="text-dark-muted">Ideal for freelancers with connections to startups, small businesses, or entrepreneurs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Overseas Travels Ltd.</h3>
              <p className="text-dark-muted mb-4">Earn ongoing commissions for referrals using travel services like airfare, lodging, cruises, and more.</p>
              <p className="text-dark-muted">Perfect for freelancers with corporate clients, families, or frequent travelers.</p>
            </motion.div>
          </div>
        </section>

        {/* Freelancer Dashboard Features */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Freelancer <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Dashboard</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { feature: "Coin Balance", description: "View your available coins for submitting leads." },
              { feature: "Lead Submission", description: "Easy-to-use form for entering client details." },
              { feature: "Lead Tracker", description: "Real-time updates on submitted leads." },
              { feature: "Earnings Overview", description: "Track earnings history and pending payments." },
              { feature: "Chat Interface", description: "Communicate directly with businesses." },
              { feature: "Support & Resources", description: "Access FAQs, guide videos, and support tickets." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{item.feature}</h3>
                <p className="text-dark-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Niches Section */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Top Niches for <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Higher Income</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { niche: "Real Estate", description: "Higher commissions from high-value sales." },
              { niche: "Immigration & Legal", description: "High demand in international communities." },
              { niche: "Education & Tuition", description: "Ongoing demand from parents and students." },
              { niche: "VTM (Digital Marketing)", description: "Recurring monthly revenue." },
              { niche: "Travel Services", description: "Consistent repeat business." }
            ].map((niche, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{niche.niche}</h3>
                <p className="text-dark-muted">{niche.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Freelancers <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Say</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "I never imagined network referrals could be so lucrative. It was easy and risk-free thanks to Reflo Hub Ltd. By just submitting leads, I've established a consistent monthly income.",
                author: "Priya S., Toronto Freelancer",
                rating: 4
              },
              {
                quote: "The monthly recurring commission from VTM is the best feature of Reflo Hub Ltd. With just one successful referral, I make a consistent monthly income.",
                author: "Jake M., New York-based Digital Marketer",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-neon-blue fill-current" />
                  ))}
                </div>
                <p className="text-dark-muted mb-4">{testimonial.quote}</p>
                <p className="text-sm font-semibold">{testimonial.author}</p>
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
              Ready to Start <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Earning</span>?
            </h2>
            <p className="text-xl text-dark-muted mb-10">
              Join Reflo Hub Ltd and turn your network into passive income with no selling required.
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

export default Freelancer;