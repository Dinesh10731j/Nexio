"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dummyImage from "../../../assets/Image.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginType } from "@/types/Types";
import { useSelector } from "react-redux";
import { UseLogin } from "@/hooks/useLogin";
import { motion } from "framer-motion";
import {DNA} from "react-loader-spinner"

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<loginType>();
  const loginMutation = UseLogin();

  const onLogin: SubmitHandler<loginType> = (data) => {
    loginMutation.mutate(data);
    reset();
  };

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center py-10 px-4 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <motion.div
          className={`max-w-4xl w-full rounded-lg overflow-hidden md:flex`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Section */}
          <motion.div
            className="hidden md:block md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Image
              src={dummyImage}
              alt="Login Banner"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Login Form Section */}
          <motion.div
            className={`w-full p-8 md:w-1/2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2
              className={`text-xl md:text-3xl font-bold text-center mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Login to Your Account
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onLogin)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
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
                {errors.email && (
                  <p className="text-sm text-red-700">
                    {errors.email?.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
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
                  })}
                  type="password"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      : "border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-sm text-red-700">
                    {errors.password?.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                type="submit"
                className={`w-full py-3 rounded-full text-white font-medium shadow-md transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                    : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                }`}
                >
                  {loginMutation.isLoading ? (
                    <DNA
                    
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    />
                  ) : (
                    "Login"
                  )}
                </Button>
              </motion.div>
            </form>
            <p
              className={`text-center mt-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Signup
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
