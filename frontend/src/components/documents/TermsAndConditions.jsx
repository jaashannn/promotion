import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const termsSections = [
    {
      title: 'Definitions',
      content: `
        <ul class="space-y-2">
          <li><strong>Platform:</strong> Reflo Hub Ltd. is a software-as-a-service platform that helps enterprises and independent contractors connect worldwide.</li>
          <li><strong>Freelancer:</strong> A registered user who uses the platform to submit leads.</li>
          <li><strong>Business:</strong> A registered user who subscribes to get leads and pay independent contractors directly when a conversion occurs.</li>
          <li><strong>Leads:</strong> Data that independent contractors send to companies for possible client services.</li>
          <li><strong>Coins:</strong> Virtual credits that independent contractors buy in order to submit leads.</li>
        </ul>
      `,
    },
    {
      title: 'Account Verification & Creation',
      content: `
        <h4 class="font-semibold">2.1. Signing up:</h4>
        <p>To use Reflo Hub Ltd services, users must first create an account.</p>
        <h4 class="font-semibold mt-4">2.2. KYC Verification:</h4>
        <p>Businesses and independent contractors must confirm their identity by:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Government-issued identification</li>
          <li>At registration, a live photo verification</li>
          <li>If necessary, our staff may ask for further verification.</li>
        </ul>
        <h4 class="font-semibold mt-4">2.3. Accuracy:</h4>
        <p>During registration, you promise to give true, comprehensive, and up-to-date information and to promptly update your information if it changes.</p>
      `,
    },
    {
      title: 'Terms of Subscription and Payment',
      content: `
        <h4 class="font-semibold">3.1. Subscription for Freelancers:</h4>
        <p>For platform access, freelancers pay $14.99 a month, and in exchange, they receive a monthly allotment of coins for submitting leads.</p>
        <h4 class="font-semibold mt-4">3.2. Subscription for Business:</h4>
        <p>Companies can get freelancer leads and other capabilities by paying a one-time setup charge ($399–$599) and recurring monthly subscription fees ($99–$149).</p>
        <h4 class="font-semibold mt-4">3.3. Buying Coins:</h4>
        <p>As needed, freelancers can buy more coins. Coins purchased are not refundable.</p>
        <h4 class="font-semibold mt-4">3.4. Gateway for Payment:</h4>
        <p>PayPal, Stripe, or other integrated payment providers securely handle all subscription payments. Payment information is not stored by us.</p>
      `,
    },
    {
      title: "Platform's Role and Liability Limitations",
      content: `
        <h4 class="font-semibold">4.1. The function of Reflo Hub Ltd:</h4>
        <p>The sole mode of operation for Reflo Hub Ltd is Software-as-a-Service (SaaS). Although we make it easier for leads to be submitted and exchanged, we have no control over any direct agreements or transactions between corporations and freelancers.</p>
        <h4 class="font-semibold mt-4">4.2. No Handling Commission:</h4>
        <p>We don't manage money distribution or commissions. Businesses and freelancers manage payment and negotiation on their own.</p>
        <h4 class="font-semibold mt-4">4.3. Disputes:</h4>
        <p>Reflo Hub Ltd only steps in when a formal dispute is brought up by one of the parties. Our involvement is solely for mediation purposes and does not ensure that a resolution will be reached.</p>
        <h4 class="font-semibold mt-4">4.4. No Guarantees:</h4>
        <p>The veracity, accuracy, or conversion of any lead are not guaranteed by us. Businesses and freelancers engage in all transactions and exchanges at their own risk and discretion.</p>
      `,
    },
    {
      title: "Businesses' and Freelancers' Obligations",
      content: `
        <h4 class="font-semibold">5.1. Freelancers:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li>You can only submit real leads.</li>
          <li>Prior to submission, prospective leads' express consent must be obtained.</li>
          <li>Agree to deal directly with businesses regarding commission payments and issues.</li>
        </ul>
        <h4 class="font-semibold mt-4">5.2. Businesses:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li>Agree to pay freelancers their agreed-upon commissions in a timely and equitable manner after successful conversions.</li>
          <li>Before accepting leads, Reflo Hub Ltd's internal communications must properly explain the commission terms.</li>
          <li>In charge of lead conversions and follow-ups.</li>
        </ul>
      `,
    },
    {
      title: 'Prohibited Conduct',
      content: `
        <p>Users consent not to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Access to accounts can be sold or shared.</li>
          <li>Send in unauthorised, phoney, or fraudulent leads.</li>
          <li>Try directly evading the platform's procedures.</li>
          <li>Threaten, harass, or intimidate other users.</li>
          <li>Distribute viruses or other harmful software.</li>
          <li>Take part in immoral or unlawful actions.</li>
        </ul>
      `,
    },
    {
      title: 'Termination and Suspension',
      content: `
        <p>We reserve the right to instantly suspend or terminate your account if:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>These terms and conditions are broken by you.</li>
          <li>There is a suspicion of fraudulent activity.</li>
          <li>There is non-adherence to the platform's anti-circumvention policy.</li>
        </ul>
      `,
    },
    {
      title: 'Non-Circumvention Policy',
      content: `
        <p>To preserve Reflo Hub Ltd.'s worth and integrity:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Users consent to not directly participate in off-platform transactions or circumvent the platform's procedures.</li>
          <li>Immediate termination and potential legal action may follow a violation of this policy.</li>
        </ul>
      `,
    },
    {
      title: 'Rights to Intellectual Property',
      content: `
        <p>Copyright and intellectual property laws safeguard all of Reflo Hub Ltd's software, trademarks, logos, graphics, and content. Without our express written consent, you are not permitted to distribute, sell, lease, copy, alter, or otherwise use our content.</p>
      `,
    },
    {
      title: 'Compliance & International Use',
      content: `
        <p>Reflo Hub Ltd is accessible worldwide and is run out of Canada. Users are required to abide by local laws that are relevant to their regions.</p>
      `,
    },
    {
      title: 'Updates and Communication',
      content: `
        <p>If there are significant upgrades, policy changes, or service-related problems, we might get in touch with you by phone, email, or in-app notifications.</p>
      `,
    },
    {
      title: 'Disclaimers',
      content: `
        <p>REFLO HUB LTD IS GIVEN "AS IS" WITHOUT ANY KIND OF WARRANTY. ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES CAUSED BY USE OF THE PLATFORM ARE NOT OUR LIABILITY.</p>
      `,
    },
    {
      title: 'Changes to Terms',
      content: `
        <p>We might revise our terms and conditions from time to time. Any modifications will be prominently shown on this page along with the revision date. Your continued use signifies that you agree to the updated terms.</p>
      `,
    },
    {
      title: 'Contact Information',
      content: `
        <p>For questions about these terms and conditions, get in touch with:</p>
        <p><strong>Email:</strong> <a href="mailto:support@reflohubltd.com" class="text-cyan-400 hover:underline">support@reflohubltd.com</a></p>
        <p><strong>Address:</strong> [Enter Your Business Address in Canada]</p>
      `,
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <section className="relative min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,212,255,0.2),_transparent,_rgba(138,43,226,0.2))] animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,212,255,0.1),_transparent,_rgba(138,43,226,0.1))] animate-[gradient-shift_30s_ease_infinite_reverse] bg-[length:200%_200%]"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400/70 dark:bg-cyan-200/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: true, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-cyan-200/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Terms & Conditions</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-600 dark:from-cyan-200 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(0,212,255,0.7)] animate-[pulse_3s_ease_infinite]">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Reflo Hub Ltd. By using our platform, you agree to these terms and conditions governing our SaaS-based referral network.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-cyan-200/40 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-cyan-500/10 dark:hover:bg-cyan-200/10 transition-all duration-300"
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 py-4 text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-200 mb-4">Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact our support team for any inquiries about our terms and conditions.
          </p>
          <motion.a
            href="mailto:support@reflohubltd.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-cyan-500 dark:from-cyan-600 to-violet-500 dark:to-violet-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub Ltd – Global SaaS Lead Referral Platform Terms & Conditions" />
          <meta
            name="description"
            content="Go over the terms and conditions for using Reflo Hub Ltd, the SaaS platform that connects businesses and freelancers worldwide with no commission."
          />
          <meta
            name="keywords"
            content="freelancer terms and conditions, SaaS referral terms, platform usage agreement, global lead generation SaaS, zero-commission platform, Reflo Hub Ltd terms"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;