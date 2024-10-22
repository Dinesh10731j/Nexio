"use client"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import dummyImage from "../../../assets/Image.png"

const Login = () => {
 

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <div className="max-w-4xl w-full bg-white  rounded-lg overflow-hidden md:flex">
          {/* Image Section */}
          <div className="hidden md:block md:w-1/2">
            <Image
              src={dummyImage}
              alt="Login Banner"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Login Form Section */}
          <div className="w-full p-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <Input
                  
                  type="email"
                 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <Input
                 
                  type="password"
                
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
                >
                  Login
                </Button>
              </div>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
