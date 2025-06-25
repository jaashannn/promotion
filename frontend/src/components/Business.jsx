import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Star, Zap, Briefcase, Shield, Globe, BadgeCheck, BarChart2, Users, CreditCard, Target, Mail, Handshake } from 'lucide-react';
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
              Business <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Membership</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-dark-muted max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leverage our SaaS platform to connect with verified freelancers, manage lead campaigns, 
              and grow your business with high-quality referrals.
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
                <Briefcase className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Verified Freelancers</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <Target className="w-4 h-4 text-neon-blue mr-2" />
                <span className="text-sm">Targeted Leads</span>
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
            Business <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Pricing</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
                <p className="text-dark-muted text-sm mb-4">For businesses starting with lead referrals</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-dark-muted ml-1">/month</span>
                </div>
                <div className="text-sm text-dark-muted mb-2">+ $399 one-time setup fee</div>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>5 Free Ad Campaigns</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Searchable Freelancer Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Industry/Region-Specific Lead Focus</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Basic Messaging & Tracking Tools</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto inline-block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Choose Basic
              </motion.a>
            </motion.div>

            {/* Premium Plan */}
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
                <span>RECOMMENDED</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
                <p className="text-dark-muted text-sm mb-4">For businesses serious about growth</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$149</span>
                  <span className="text-dark-muted ml-1">/month</span>
                </div>
                <div className="text-sm text-dark-muted mb-2">+ $599 one-time setup fee</div>
                <div className="h-px bg-white/10 my-4"></div>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>10 Free Ad Campaigns</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Priority Freelancer Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Advanced Analytics Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Premium Messaging & Tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Freelancer Review & Rating Tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Performance Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-neon-blue mr-2" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto inline-block w-full text-center bg-gradient-to-r from-neon-blue to-neon-violet text-dark-bg font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
              >
                Choose Premium
              </motion.a>
            </motion.div>
          </div>

          {/* Campaign Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Additional Campaign Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  coverage: "Registered Province/State", 
                  price: "$5", 
                  duration: "per week", 
                  icon: <Briefcase className="w-6 h-6" /> 
                },
                { 
                  coverage: "Extra Province/State", 
                  price: "$2", 
                  duration: "per week", 
                  icon: <Globe className="w-6 h-6" />,
                  popular: false 
                },
                { 
                  coverage: "Full Country", 
                  price: "$15", 
                  duration: "per week", 
                  icon: <Users className="w-6 h-6" />,
                  popular: true 
                },
              ].map((campaign, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 text-center relative ${campaign.popular ? 'border-neon-blue/50' : 'border-white/10'}`}
                >
                  {campaign.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex justify-center text-neon-blue mb-4">
                    {campaign.icon}
                  </div>
                  <div className="text-xl font-bold mb-1">{campaign.coverage}</div>
                  <div className="text-2xl font-bold mb-1">{campaign.price}</div>
                  <div className="text-sm text-dark-muted">{campaign.duration}</div>
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
              { value: "5,000+", label: "Businesses", icon: <Briefcase className="w-6 h-6" /> },
              { value: "$10M+", label: "Paid in Commissions", icon: <CreditCard className="w-6 h-6" /> },
              { value: "85%", label: "Lead Acceptance Rate", icon: <Target className="w-6 h-6" /> },
              { value: "24h", label: "Avg. Response Time", icon: <Mail className="w-6 h-6" /> },
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
            Business <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Agreement</span>
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "1. Purpose",
                content: [
                  "Reflo Hub Ltd provides a SaaS platform for verified businesses to accept lead referrals, manage campaigns, and engage with freelancers.",
                  "This Agreement governs your use of business services, including lead dashboard access, campaign visibility, and promotional tools."
                ],
                icon: <Target className="w-5 h-5" />
              },
              {
                title: "2. Open a Business Account",
                content: [
                  "Complete registration with accurate business information and mandatory live photo verification.",
                  "Ensure legal capacity to sign on behalf of the business and keep login details secure.",
                  "Reflo Hub Ltd may approve, deny, or suspend registrations at its discretion."
                ],
                icon: <Briefcase className="w-5 h-5" />
              },
              {
                title: "3. Subscription and Fees",
                content: [
                  "Pay a one-time, non-refundable setup fee: $399 CAD (Basic Plan) or $599 CAD (Premium Plan).",
                  "Pay monthly fees: $99 CAD (Basic Plan, 5 free ad campaigns) or $149 CAD (Premium Plan, 10 free ad campaigns).",
                  "Additional ad campaigns: $5/week (registered province/state), $2/week (extra province/state), $15/week (full-country exposure).",
                  "All fees are non-refundable and charged via our authorized payment provider."
                ],
                icon: <CreditCard className="w-5 h-5" />
              },
              {
                title: "4. Service Provided",
                content: [
                  "Access a searchable freelancer dashboard, industry/region-specific lead focus, messaging/tracking tools, campaign creation tools, freelancer review/rating tools, and performance analytics.",
                  "Reflo Hub Ltd provides software tools only, with no lead brokering or conversion guarantees."
                ],
                icon: <BarChart2 className="w-5 h-5" />
              },
              {
                title: "5. Commission Payment and Dispute Policy",
                content: [
                  "Arrange and settle commission payments directly with freelancers; Reflo Hub Ltd does not handle or guarantee funds.",
                  "Submit disputes via the Dispute Mediation Team's ticketing system for review of lead data and chat logs, with no payment guarantees.",
                  "Reflo Hub Ltd is not liable for payment or service failures between parties."
                ],
                icon: <Handshake className="w-5 h-5" />
              },
              {
                title: "6. Business Responsibilities",
                content: [
                  "Maintain polite, non-discriminatory interactions with freelancers (see Nondiscrimination Statement).",
                  "Respond promptly to leads, update lead status, honor commission agreements, and avoid off-platform methods to bypass fees.",
                  "Non-compliance may result in account suspension or termination without refund."
                ],
                icon: <Users className="w-5 h-5" />
              },
              {
                title: "7. Limitations on the Platform",
                content: [
                  "Do not harass, spam, scam, circumvent dashboard functions, share dashboard access, post deceptive/illegal content, or replicate/reverse-engineer the platform."
                ],
                icon: <Shield className="w-5 h-5" />
              },
              {
                title: "8. Copyright",
                content: [
                  "Reflo Hub Ltd owns all software, tools, designs, logos, text, and algorithms.",
                  "You receive a limited, non-exclusive, non-transferable license to use the software during your active subscription.",
                  "Do not replicate, sublicense, or alter the platform without explicit consent."
                ],
                icon: <BadgeCheck className="w-5 h-5" />
              },
              {
                title: "9. Membership Termination",
                content: [
                  "Reflo Hub Ltd may suspend or terminate your account for agreement breaches, abusive/dishonest behavior, payment failures, or system circumvention.",
                  "Cancel your subscription via the dashboard; cancellation is effective at the end of the billing cycle with no data access thereafter."
                ],
                icon: <Mail className="w-5 h-5" />
              },
              {
                title: "10. Indemnification",
                content: [
                  "You agree to indemnify Reflo Hub Ltd and its affiliates against claims, liabilities, or damages from platform misuse, freelancer disputes, agreement breaches, or violations of laws/third-party rights."
                ],
                icon: <Shield className="w-5 h-5" />
              },
              {
                title: "11. Jurisdiction and Governing Law",
                content: [
                  "This Agreement is governed by Ontario, Canada laws, with exclusive jurisdiction in Toronto courts."
                ],
                icon: <Globe className="w-5 h-5" />
              },
              {
                title: "12. Modifications",
                content: [
                  "Reflo Hub Ltd may amend this Agreement, notifying you via email or platform notifications.",
                  "Continued use after changes indicates acceptance of the updated terms."
                ],
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                title: "13. Entire Contract",
                content: [
                  "This Agreement, along with the Terms of Use, Privacy Policy, and Nondiscrimination Statement, constitutes the entire contract, superseding prior communications."
                ],
                icon: <Handshake className="w-5 h-5" />
              },
              {
                title: "14. Contact Us",
                content: [
                  "For inquiries, contact the Department of Law at legal@reflohubltd.com or visit www.reflohubltd.com."
                ],
                icon: <Mail className="w-5 h-5" />
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
                    <span className="text-neon-blue mr-3">
                      {section.icon}
                    </span>
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
              Grow Your Business with <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Quality Leads</span>
            </h2>
            <p className="text-xl text-dark-muted mb-10">
              Join hundreds of businesses who are expanding their client base through our verified freelancer network.
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
                  Join as a Business
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
                  Request Demo
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