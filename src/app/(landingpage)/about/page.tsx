'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import dummyImage from "../../../assets/Image.png";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Trophy,Eye,Shield } from 'lucide-react';

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const About = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

 
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            className={`text-2xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            About <span   className={`col-span-full text-center ${theme === "dark" 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500" 
              : "bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text hover:from-blue-600 hover:to-teal-600"}`}>Nexio</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className={` text-md md:text-lg max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Welcome to Nexio, where passionate bloggers share their insights, ideas, and experiences with the world. 
            Our mission is to create a vibrant community where knowledge meets creativity, sparking conversations that matter.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {['Our Mission', 'Our Vision', 'Our Values'].map((title, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{title}</h2>
                <div className={`flex flex-col items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
  {title === 'Our Mission' ? (
    <>
      <Trophy className="w-20 h-20 text-blue-500" />
      At Nexio, we aim to empower voices from all around the globe to share their stories, inspire others, and engage in meaningful discussions.
    </>
  ) : title === 'Our Vision' ? (
    <>
      <Eye className="w-16 h-16 text-blue-500" />
      We envision a world where everyone can express their ideas freely, and we&apos;re here to provide the platform to make that happen.
    </>
  ) : (
    <>
      <Shield className="w-16 h-16 text-blue-500" />
      Integrity, inclusivity, and innovation are at the core of everything we do at Nexio.
    </>
  )}
</div>

              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            Meet the Team
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {['John Doe', 'Jane Smith', 'Emily Johnson'].map((name, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              >
                <Image src={dummyImage} alt={`Team Member ${index + 1}`} className="rounded-full h-72 w-72 mx-auto mb-4" />
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{name}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {index === 0 ? 'Founder & CEO' : index === 1 ? 'Lead Developer' : 'Marketing Specialist'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
