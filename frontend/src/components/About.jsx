import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Shield, Users, Zap } from 'lucide-react';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' },
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: true,
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-gray-100">Connecting the World</span>
          </motion.div>
          <h1 className ="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-violet-400 bg-clip-text text-transparent mb-4">
            About Reflo Hub Ltd
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connecting Freelancers and Operators Worldwide—Fair and Transparently
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🚀 Our Story</h2>
          <div className ="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <p className="text-lg text-gray-300 mb-4">
              Reflo Hub Ltd was founded on a single, potent principle: referrals have to be straightforward, universal, and equitable. We were founded in Canada with the goal of transforming the lead generation sector by providing a transparent, commission-free SaaS platform that equitably enables enterprises and independent contractors.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              We created Reflo Hub Ltd as a software solution since we were fed up with commission-heavy models and limited global reach. This technology enables businesses to expand without risk and freelancers to make money without selling.
            </p>
            <p className="text-lg text-gray-300">
              Today, we are pleased to assist customers across a variety of industries, offering businesses a consistent flow of validated, high-quality leads and assisting freelancers in making money off of their networks.
            </p>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-xl p-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-cyan-400" /> Our Mission
              </h3>
              <p className="text-gray-300">
                To provide the most transparent, globally scalable referral lead exchange platform that creates genuine value for freelancers and businesses—without commission or geographic limits. We assist companies in expanding their clientele and independent contractors in converting relationships into steady sources of revenue.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-violet-400" /> Our Vision
              </h3>
              <p className="text-gray-300">
                Become the world's leading SaaS referral ecosystem—where everyone benefits, everyone earns, and everyone trusts. Our goal is to make Reflo Hub Ltd the go-to worldwide platform for freelancing referrals, establishing new benchmarks for openness, safety, and cooperation.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🔑 Why Choose Reflo Hub Ltd?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Zero Commission', desc: 'A straightforward subscription fee ensures consistent and equitable pricing.' },
              { icon: Globe, title: 'Global Reach', desc: 'Submit leads across cities, states, and nations for global impact.' },
              { icon: Shield, title: 'Transparent Payments', desc: 'Direct payments to freelancers with no middleman or hidden costs.' },
              { icon: Users, title: 'Verified Trust', desc: 'Live-photo KYC verification ensures a safe and reliable platform.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">💡 How Does Reflo Hub Ltd. Work?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">For Freelancers</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Select your niche and submit leads via your dashboard.</li>
                <li>• Get paid directly from businesses without platform deductions.</li>
                <li>• Earn monthly recurring commissions from premium partners like VTM & Overseas Travels Ltd.</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">For Businesses</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Receive leads from vetted freelancers worldwide.</li>
                <li>• Pay freelancers directly after successful conversions.</li>
                <li>• Scale with fixed monthly payments and no commissions.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Partners */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🏆 Our Valued Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Virtual Tech Masters (VTM)', desc: 'Your partner for software solutions, web development, and digital marketing, offering freelancers monthly recurring commissions.' },
              { name: 'Overseas Travels Ltd.', desc: 'International travel specialists helping freelancers earn on hotels, flights, vacation packages, and visas.' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-xl p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                <p className="text-gray-400">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🌟 Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Real-time Analytics', desc: 'Monitor activity logs, leads, and earnings.' },
              { title: 'Internal Chat', desc: 'Direct communication between businesses and freelancers.' },
              { title: 'Anti-fraud Tools', desc: 'Dispute resolution, IP logging, and live photo verification.' },
              { title: 'Coin-based Submission', desc: 'Simplifies lead management for freelancers.' },
              { title: 'Campaign Promotion', desc: 'Targeted ads to boost business visibility.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🤝 Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', desc: 'Open communication and transparent policies.' },
              { title: 'Innovation', desc: 'Advancing our SaaS platform globally.' },
              { title: 'Inclusivity', desc: 'Equal opportunities for all.' },
              { title: 'Reliability', desc: 'Stable and secure platform functionality.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-xl p-6 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🌟 Meet the Team</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <p className="text-lg text-gray-300 mb-4">
              Passionate specialists in digital technology, SaaS software, international company growth, and customer experience make up our diversified workforce. Every team member shares our goal of building a reliable, international referral community.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <span className="font-semibold">Tech & Innovation Team:</span> Dedicated to secure and seamless applications.</li>
              <li>• <span className="font-semibold">Business Development & Partnership Team:</span> Ensuring quality partnerships and worldwide reach.</li>
              <li>• <span className="font-semibold">Support & Success Team:</span> Committed to user success.</li>
            </ul>
          </div>
        </motion.section>

        {/* Global Presence */}
        <motion.section class="mb-20 variants" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">📍 Serving the World from Canada</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-300">
              Reflo Hub Ltd operates under open, business-friendly policies and is truly Canadian. Our SaaS architecture permits hassle-free operation in more than 100 countries by guaranteeing compliance worldwide.
            </p>
          </div>
        </motion.section>

        {/* Development Commitment */}
      <motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-center mb-8">📈 Our Dedication to Development</h2>
  <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-xl p-8 text-center">
    <p className="text-lg text-gray-300">
      We're dedicated to continuously developing and expanding, informed by input from companies and independent contractors. Upcoming features include AI matching, CRM connectivity, improved analytics, and sophisticated ad targeting.
    </p>
  </div>
</motion.section>

      </div>
    </section>
  );
};

export default About;