import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

const Countries = () => {
  const countries = [
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'United States', flag: '🇺🇸', code: 'US' },
    { name: 'India', flag: '🇮🇳', code: 'IN' },
    { name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE' },
    { name: 'Spain', flag: '🇪🇸', code: 'ES' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
  ];

  return (
    <section id="countries" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-neon-blue mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text">
              Global <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Reach</span>
            </h2>
          </div>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto">
            Available in 6 countries and expanding rapidly. Join thousands of freelancers and businesses worldwide.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
              }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {country.flag}
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">
                {country.name}
              </h3>
              <div className="text-sm text-dark-muted">
                {country.code}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-violet/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div> */}

        {/* Expansion Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-violet/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-neon-violet mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              Expanding Soon
            </h3>
            <p className="text-dark-muted mb-6">
              We're actively working to bring ReflowHub to more countries. 
              Join our waitlist to be notified when we launch in your region.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(138, 43, 226, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-violet to-neon-blue text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;