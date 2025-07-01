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
    <section id="countries" className="py-24 bg-gray-100 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 dark:via-cyan-600/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Global <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Reach</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Available in 20+ countries and expanding rapidly. Join thousands of freelancers and businesses worldwide.
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
              className="group relative bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 dark:hover:border-cyan-200/50 transition-all duration-300"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {country.flag}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {country.name}
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {country.code}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 dark:from-cyan-600/10 to-violet-500/10 dark:to-violet-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <div className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-violet-400 dark:text-violet-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Expanding Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're actively working to bring Reflo Hub to more countries. 
              Join our waitlist to be notified when we launch in your region.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(138, 43, 226, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 dark:from-cyan-600 to-violet-500 dark:to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
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