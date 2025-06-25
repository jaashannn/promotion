import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react';

const JoinCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-violet/10 to-neon-blue/10 animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-neon-blue" />
            <span className="text-sm font-semibold text-dark-text">Limited Early Access</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-dark-text mb-6">
            Ready to <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Transform</span>
            <br />
            Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto mb-12">
            Join thousands of freelancers and businesses already earning more with RefloHub.
            Start your journey today with exclusive early access.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 50px rgba(0, 212, 255, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-xl font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Join as Freelancer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 50px rgba(138, 43, 226, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-dark-text rounded-xl font-semibold text-lg hover:border-neon-violet/50 transition-all duration-300"
            >
              <span className="flex items-center">
                Join as Business
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>
          </div> */}

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Join 10K+ Users',
                description: 'Growing community of successful freelancers and businesses',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Average 60% increase in lead conversion rates',
              },
              {
                icon: Sparkles,
                title: 'Early Access',
                description: 'Be among the first to access premium features',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-neon-blue/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-neon-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-dark-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-muted text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;