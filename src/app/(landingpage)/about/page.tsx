import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import dummyImage from "../../../assets/Image.png";


const About = () => {
  return (
    <>
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About <span className='text-blue-500'>Nexio</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Welcome to Nexio, where passionate bloggers share their insights, ideas, and experiences with the world. 
            Our mission is to create a vibrant community where knowledge meets creativity, sparking conversations that matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                At Nexio, we aim to empower voices from all around the globe to share their stories, inspire others, and engage in meaningful discussions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where everyone can express their ideas freely, and we&apos;re here to provide the platform to make that happen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Values</h2>
              <p className="text-gray-600">
                Integrity, inclusivity, and innovation are at the core of everything we do at Nexio.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={dummyImage} alt="Team Member 1" className="rounded-full h-72 w-72 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={dummyImage} alt="Team Member 2" className="rounded-full h-72 w-72 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Jane Smith</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={dummyImage} alt="Team Member 3" className="rounded-full h-72 w-72 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Emily Johnson</h3>
              <p className="text-gray-600">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
