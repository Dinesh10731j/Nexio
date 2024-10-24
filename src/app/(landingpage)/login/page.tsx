'use client';
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dummyImage from "../../../assets/Image.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginType } from "@/types/Types";
import { useSelector } from "react-redux";
import { UseLogin } from "@/hooks/useLogin";

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
  const loginMutation = UseLogin()

  const onLogin: SubmitHandler<loginType> = (data) => {
    loginMutation.mutate(data);
    reset();
  };


  

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <Header />
      <div className={`min-h-screen flex items-center justify-center py-10 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`max-w-4xl w-full rounded-lg overflow-hidden md:flex`}>
          {/* Image Section */}
          <div className="hidden md:block md:w-1/2">
            <Image
              src={dummyImage}
              alt="Login Banner"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Login Form Section */}
          <div className={`w-full p-8 md:w-1/2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
            <h2 className={`text-xl md:text-3xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Login to Your Account
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onLogin)}>
              <div>
                <label
                  className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
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
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500'}`}
                  placeholder="example@mail.com"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-700">{errors.email?.message}</p>
              )}
              <div>
                <label
                  className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500'}`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-700">{errors.password?.message}</p>
              )}
              <div>
                <Button
                  type="submit"
                  className={`w-full py-2 px-4 rounded-md shadow transition duration-150 ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  Login
                </Button>
              </div>
            </form>
            <p className={`text-center mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Don&apos;t have an account?{" "}
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
