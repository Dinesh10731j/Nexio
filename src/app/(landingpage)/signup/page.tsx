"use client";
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import dummyImage from "../../../assets/Image.png";
import {useForm,SubmitHandler} from "react-hook-form";
import { signupType } from '@/types/Types';

const Signup = () => {
  
const {handleSubmit,formState:{errors},reset,register} = useForm<signupType>();


const onSignup:SubmitHandler<signupType>=(data)=>{
    console.log(data);
    reset();
}
  return (
    <>
      <Header />
      <div className="min-h-screen  flex items-center justify-center py-10 px-4">
        <div className="max-w-md w-full bg-white  rounded-lg p-8">
          <div className="mb-6">
            <Image
              src={dummyImage}
              alt="Signup Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSignup)}>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <Input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"

                {...register('name',{required:'Name is rqeuired',validate:{
                    minLength:value=>value.length > 3 || 'Name must be more than 3 characters"'
                }})}
              />
            </div>

            {errors.name && <p className='text-sm text-red-700'>{errors.name?.message}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <Input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@mail.com"
                {...register('email', {
                    required: 'E-mail is required',
                    validate: {
                      isValidEmail: (value) => {
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please enter a valid email address';
                      }
                    }
                  })}
                  
              />
            </div>
            {errors.email && <p className='text-sm text-red-700'>{errors.email?.message}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <Input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"

                {...register('password', {
                    required: 'Password is required',
                    validate: {
                      isValidLength: (value) => value.length >= 7 || 'Password must be at least 7 characters long.',
                      hasUppercase: (value) => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter.',
                      hasNumber: (value) => /[0-9]/.test(value) || 'Password must contain at least one number.',
                      hasSpecialChar: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character.',
                    },
                  })}
                  
              />
            </div>
            {errors.name && <p className='text-sm text-red-700'>{errors.password?.message}</p>}
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
              >
                Signup
              </Button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
