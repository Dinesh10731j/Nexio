"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dummyImage from "../../../assets/Image.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupType } from "@/types/Types";
import { useSelector } from "react-redux";
import { UseSignup } from "@/hooks/useSignup";
import {motion} from "framer-motion";
import {DNA} from "react-loader-spinner"

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<signupType>();

  const signupMutation = UseSignup();
  const onSignUp: SubmitHandler<signupType> = (data) => {
    signupMutation.mutate(data);
    reset();
  };

  const theme = useSelector((state: RootState) => state.theme.theme);


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };
  
  const inputVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };
  
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 200 } },
    tap: { scale: 0.95 },
  };
  
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
       initial="hidden"
       animate="visible"
       variants={containerVariants}
        className={`min-h-screen flex items-center justify-center py-10 px-4 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div
          className={`max-w-4xl w-full rounded-lg overflow-hidden md:flex shadow-md `}
        >
          {/* Image Section */}
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="hidden md:block md:w-1/2">
            <Image
              src={dummyImage}
              alt="Signup Banner"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Signup Form Section */}
          <motion.div
           variants={inputVariants}
           initial="rest"
           whileHover="hover"
          
            className={`w-full p-8 md:w-1/2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <h2
              className={` text-xl md:text-3xl font-bold text-center mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Create an Account
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSignUp)}>
              <motion.div
              variants={inputVariants}
               initial="rest"
           whileHover="hover"
              >
                <label
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long",
                    },
                  })}
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="John Doe"
                />
              </motion.div>
              {errors.name && (
                <p className="text-sm text-red-700">{errors.name?.message}</p>
              )}
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  {...register("email", {
                    required: "E-mail is required",
                    validate: {
                      isValidEmail: (value) => {
                        return (
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                          "Please enter a valid email address"
                        );
                      },
                    },
                  })}
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="example@mail.com"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-700">{errors.email?.message}</p>
              )}
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 7,
                      message: "Password must be at least 7 characters",
                    },
                    validate: {
                      hasSpecialChar: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                        "Must contain 1 special character",
                      hasUpperCase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Must contain 1 uppercase letter",
                      hasNumber: (value) =>
                        /\d/.test(value) || "Must contain 1 number",
                    },
                  })}
                  type="password"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-700">
                  {errors.password?.message}
                </p>
              )}
              <motion.div
              variants={buttonVariants}
              >
                <Button
                  type="submit"
                  className={`w-full py-3 rounded-full text-white font-medium shadow-md transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                      : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                  }`}
                >
                  {
                    signupMutation.isLoading?(
                      <DNA
                       
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                      />
                    ):(
                      " Sign Up"
                    )
                  }
                 
                </Button>
              </motion.div>
            </form>
            <p
              className={`text-center mt-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>

    </>
  );
};

export default Signup;
