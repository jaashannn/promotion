import { motion } from 'framer-motion';
import { Users, Target, DollarSign, TrendingUp, Search, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const freelancerSteps = [
    {
      icon: Search,
      title: 'Find Opportunities',
      description: 'Browse available lead opportunities in your target markets.',
    },
    {
      icon: Target,
      title: 'Submit Quality Leads',
      description: 'Share high-quality leads with detailed contact information.',
    },
    {
      icon: DollarSign,
      title: 'Earn Commissions',
      description: 'Get paid when businesses successfully convert your leads.',
    },
  ];

  const businessSteps = [
    {
      icon: Users,
      title: 'Choose Your Plan',
      description: 'Select a plan that fits your lead generation needs.',
    },
    {
      icon: Handshake,
      title: 'Access Quality Leads',
      description: 'Browse and connect with pre-qualified leads in your industry.',
    },
    {
      icon: TrendingUp,
      title: 'Scale Your Business',
      description: 'Convert leads into customers and grow your revenue.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            How It <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto">
            Our platform bridges the gap between talented freelancers and growing businesses,
            creating a win-win ecosystem for lead generation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Freelancer Flow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-dark-text mb-4">For Freelancers</h3>
              <p className="text-dark-muted">Turn your network into a revenue stream</p>
            </div>

            <div className="space-y-8">
              {freelancerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 rounded-xl flex items-center justify-center group-hover:from-neon-blue/30 group-hover:to-neon-violet/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-neon-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-dark-text mb-2">{step.title}</h4>
                      <p className="text-dark-muted">{step.description}</p>
                    </div>
                  </div>
                  {index < freelancerSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-neon-blue/50 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Flow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-dark-text mb-4">For Businesses</h3>
              <p className="text-dark-muted">Access premium leads to scale faster</p>
            </div>

            <div className="space-y-8">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-neon-violet/20 to-neon-blue/20 rounded-xl flex items-center justify-center group-hover:from-neon-violet/30 group-hover:to-neon-blue/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-neon-violet" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-dark-text mb-2">{step.title}</h4>
                      <p className="text-dark-muted">{step.description}</p>
                    </div>
                  </div>
                  {index < businessSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-neon-violet/50 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        >
          {/* <div className="w-24 h-24 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full flex items-center justify-center animate-pulse">
            <Handshake className="w-12 h-12 text-white" />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;