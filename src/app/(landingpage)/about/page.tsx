'use client'
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import dummyImage from "../../../assets/Image.png";
import { useSelector } from 'react-redux';

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const About = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <Header />
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            About <span className='text-blue-500'>Nexio</span>
          </h1>
          <p className={`text-lg max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Welcome to Nexio, where passionate bloggers share their insights, ideas, and experiences with the world. 
            Our mission is to create a vibrant community where knowledge meets creativity, sparking conversations that matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Our Mission</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                At Nexio, we aim to empower voices from all around the globe to share their stories, inspire others, and engage in meaningful discussions.
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Our Vision</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We envision a world where everyone can express their ideas freely, and we&apos;re here to provide the platform to make that happen.
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Our Values</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Integrity, inclusivity, and innovation are at the core of everything we do at Nexio.
              </p>
            </div>
          </div>

          <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <Image src={dummyImage} alt="Team Member 1" className="rounded-full h-72 w-72 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>John Doe</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Founder & CEO</p>
            </div>
            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <Image src={dummyImage} alt="Team Member 2" className="rounded-full h-72 w-72 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Jane Smith</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Lead Developer</p>
            </div>
            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <Image src={dummyImage} alt="Team Member 3" className="rounded-full h-72 w-72 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Emily Johnson</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
