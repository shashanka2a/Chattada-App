\"use client\";

import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-[#F5F3F0] flex items-center justify-center overflow-hidden">
      {/* Subtle Decorative Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] border border-[#D4AF37] rounded-full"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] border border-[#D4AF37] rounded-full"
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-md">
        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            {/* Pulsing Glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#D4AF37] rounded-3xl blur-2xl"
            ></motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-24 h-24 bg-[#1A1A1A] rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="text-[#D4AF37]" size={40} fill="#D4AF37" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.h1 
            className="text-[#1A1A1A] tracking-[0.4em] mb-6"
            animate={{ 
              letterSpacing: ['0.4em', '0.45em', '0.4em']
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            CHATTADA
          </motion.h1>

          {/* Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            className="h-[1px] bg-[#D4AF37] mx-auto mb-6"
            style={{ width: '120px' }}
          ></motion.div>

          {/* Tagline */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-[#1A1A1A]"
          >
            Lineage <span className="text-[#D4AF37] italic">Meets</span> Love.
          </motion.h2>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex gap-2 justify-center"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
            ></motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="flex items-center gap-3 text-[#6B6B6B] text-xs"
          animate={{ 
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          <span className="tracking-[0.3em] uppercase">Sangham</span>
          <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
