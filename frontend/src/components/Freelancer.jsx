import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Star, Zap, Coins, Shield, Globe, BadgeCheck, TrendingUp } from 'lucide-react';
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
              Freelancer <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Membership</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-dark-muted max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our global lead-referral platform and unlock unlimited earning potential. 
              Connect with businesses worldwide and get paid for successful referrals.
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
                <Zap className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Instant Payouts</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Globe className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Global Network</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Shield className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Secure Platform</span>
              </motion.div>
            </motion.div>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-dark-muted text-sm mb-4">Perfect for testing the platform</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$14.99</span>
                  <span className="text-dark-muted ml-1">/month</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>5 Lead Submission Coins</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Freelancer Dashboard Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Basic Support</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* Popular Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 backdrop-blur-sm border border-neon-blue/30 rounded-xl p-8 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full flex items-center">
                <Star className="w-3 h-3 mr-1" />
                <span>POPULAR</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-dark-muted text-sm mb-4">Best for serious freelancers</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="text-dark-muted ml-1">/month</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>15 Lead Submission Coins</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Priority Lead Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Verified Badge</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
              >
                Get Professional
              </motion.a>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-dark-muted text-sm mb-4">For high-volume referrers</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$99.99</span>
                  <span className="text-dark-muted ml-1">/month</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>50 Lead Submission Coins</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Exclusive Lead Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>24/7 VIP Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Verified Badge</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Contact Sales
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { coins: 10, price: "$5.00", perCoin: "$0.50", popular: false },
                { coins: 14, price: "$7.00", perCoin: "$0.50", popular: true },
                { coins: 20, price: "$10.00", perCoin: "$0.50", popular: false },
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

        {/* Stats Section */}
        <section className="py-16">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { value: "10,000+", label: "Active Freelancers", icon: <TrendingUp className="w-6 h-6" /> },
              { value: "$5M+", label: "Paid to Freelancers", icon: <Coins className="w-6 h-6" /> },
              { value: "50+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
              { value: "98%", label: "Satisfaction Rate", icon: <BadgeCheck className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center text-neon-blue mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-dark-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Agreement Sections */}
        <section className="py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Freelancer <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Agreement</span>
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "1. Eligibility and Verification",
                content: [
                  "You must be at least 18 years old or the legal majority age in your jurisdiction to register as a freelancer.",
                  "Complete a live photo verification during registration to activate your account.",
                  "Provide accurate, up-to-date, and complete information, updating it promptly if it changes."
                ]
              },
              {
                title: "2. Access and Subscription",
                content: [
                  "Pay $14.99 CAD/USD monthly for Freelancer Membership, including access to the Freelancer Dashboard and 5 monthly lead submission coins.",
                  "Purchase additional coins: $5.00 (10 coins), $7.00 (14 coins), or $10.00 (20 coins).",
                  "All payments are non-refundable; cancel your subscription at the end of the billing period."
                ]
              },
              {
                title: "3. Platform and Payment Responsibilities",
                content: [
                  "Reflo Hub Ltd is a SaaS provider, not an employer, agent, broker, or payment processor.",
                  "Businesses pay you directly outside the platform for successful leads.",
                  "No guarantees are made for lead acceptance, conversion, or payment."
                ]
              },
              {
                title: "4. Lead Submission and Behaviour",
                content: [
                  "Submit only genuine, approved leads; fraudulent submissions may lead to suspension or termination.",
                  "Prohibited actions include impersonation, spamming, harassment, or bypassing the platform.",
                  "Submit leads from any location, provided they align with platform business listings."
                ]
              },
              {
                title: "5. Platform Integrity and Non-Circumvention",
                content: [
                  "Do not engage in off-platform arrangements to bypass subscription fees.",
                  "Optional commission agreement templates are available but not enforced by Reflo Hub Ltd."
                ]
              },
              {
                title: "6. Dispute Settlement",
                content: [
                  "Use the platform's internal ticketing system for informal dispute resolution.",
                  "Reflo Hub Ltd is not liable for unpaid commissions or disputes arising from freelancer-business interactions."
                ]
              },
              {
                title: "7. Termination and Suspension of Accounts",
                content: [
                  "Accounts may be suspended or terminated for fraudulent leads, rule breaches, unpaid fees, abuse, or multiple complaints.",
                  "Cancel your membership anytime via the dashboard; no refunds for remaining time."
                ]
              },
              {
                title: "8. Property Rights",
                content: [
                  "All platform content, branding, and tools are owned by Reflo Hub Ltd.",
                  "Do not duplicate, reverse-engineer, or resell Reflo Hub Ltd's technology without permission."
                ]
              },
              {
                title: "9. Modifications",
                content: [
                  "Reflo Hub Ltd may update this Agreement, notifying you via email or platform notification.",
                  "Continued use after changes indicates acceptance of updated terms."
                ]
              },
              {
                title: "10. Jurisdiction and Governing Law",
                content: [
                  "This Agreement is governed by the laws of Ontario, Canada.",
                  "All disputes fall under the exclusive jurisdiction of Ontario courts."
                ]
              },
              {
                title: "11. Contact",
                content: [
                  "For inquiries, contact us at legal@reflohubltd.com or visit reflohubltd.com."
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="p-6 cursor-pointer"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                >
                  <h2 className="text-2xl font-semibold text-dark-text mb-4 flex items-center">
                    <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">
                      {section.title.split(' ')[0]}
                    </span>
                    <span className="ml-2">{section.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-dark-muted pl-4">
                    {section.content.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="hover:text-white transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
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
              Join thousands of freelancers who are earning commissions by connecting businesses with their ideal clients.
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
                href="#"
                whileHover={{ y: -3 }}
                className="group relative inline-flex px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Contact Sales
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