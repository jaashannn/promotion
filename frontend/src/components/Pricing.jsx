import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const freelancerPlan = {
    title: 'Freelancer',
    price: 29,
    period: 'month',
    description: 'Perfect for individual freelancers',
    features: [
      '5 lead tokens included',
      'Commission tracking',
      'Basic analytics',
      'Email support',
      'Mobile app access',
    ],
    highlighted: false,
  };

  const businessPlans = [
    {
      title: 'Starter',
      setupFee: 279,
      monthlyFee: 79,
      description: 'Great for small businesses',
      features: [
        '50 leads per month',
        'Basic lead filtering',
        'Email integration',
        'Monthly reports',
        'Standard support',
      ],
      highlighted: false,
      icon: Star,
    },
    {
      title: 'Premium',
      setupFee: 300,
      monthlyFee: 99,
      description: 'Best for growing companies',
      features: [
        '100 leads per month',
        'Advanced filtering',
        'CRM integration',
        'Real-time analytics',
        'Priority support',
        'Custom reporting',
      ],
      highlighted: true,
      icon: Crown,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-bg to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-violet/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            Simple, <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Freelancer Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-dark-text">{freelancerPlan.title}</h3>
                <Zap className="w-8 h-8 text-neon-blue" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-dark-text">${freelancerPlan.price}</span>
                  <span className="text-dark-muted ml-2">/{freelancerPlan.period}</span>
                </div>
                <p className="text-dark-muted mt-2">{freelancerPlan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {freelancerPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-neon-blue mr-3 flex-shrink-0" />
                    <span className="text-dark-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Business Plans */}
          {businessPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-violet text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-neon-violet/50 shadow-lg shadow-neon-violet/20' 
                  : 'border-white/10 hover:border-neon-blue/50'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-dark-text">{plan.title}</h3>
                  <plan.icon className={`w-8 h-8 ${plan.highlighted ? 'text-neon-violet' : 'text-neon-blue'}`} />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-dark-text">${plan.monthlyFee}</span>
                    <span className="text-dark-muted ml-2">/month</span>
                  </div>
                  <div className="text-sm text-dark-muted">
                    + ${plan.setupFee} setup fee
                  </div>
                  <p className="text-dark-muted mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-neon-violet' : 'text-neon-blue'
                      }`} />
                      <span className="text-dark-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-neon-violet to-neon-blue text-white hover:shadow-lg'
                      : 'bg-white/10 text-dark-text hover:bg-white/20'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Tokens Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-text mb-4">Need More Tokens?</h3>
            <p className="text-dark-muted mb-6">
              Purchase additional lead tokens for your freelancer account
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-3xl font-bold text-dark-text">$5</div>
              <div className="text-dark-muted">per token</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Buy Tokens
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;