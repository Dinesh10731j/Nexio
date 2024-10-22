"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import dummyImage from "../../../assets/Image.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { contactType } from "@/types/Types";


const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<contactType>();

  const onContactSubmit: SubmitHandler<contactType> = (data) => {
    console.log(data);

    reset();
  };
  return (
    <>
      <Header />
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto  rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out to us via the form below or through our
            contact information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <form
              className="space-y-6 md:col-span-2"
              onSubmit={handleSubmit(onContactSubmit)}
            >
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  {...register("name", {
                    required: "Name is required",
                    validate: {
                      minLength: (value) =>
                        value.length > 3 ||
                        "Name must be more than 3 characters",
                    },
                  })}
                  type="text"
                  placeholder="Enter name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {errors.name && (
                <p className="text-sm text-red-700">{errors.name?.message}</p>
              )}

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter e-mail"
                  {...register("email", {
                    required: "E-mail is required",
                    validate: {
                      isValidEmail: (value) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                        "Please enter a valid email address",
                    },
                  })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-700">{errors.email?.message}</p>
              )}

              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <Textarea
                  placeholder="Your message"
                  {...register("message", {
                    required: "Message is required",
                    validate: {
                      minLength: (value) =>
                        value.length > 10 ||
                        "Message must be more than 10 characters",
                    },
                  })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {errors.message && (
                <p className="text-sm text-red-700">
                  {errors.message?.message}
                </p>
              )}

              <div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </Button>
              </div>
            </form>

            {/* Contact Information & Image */}
            <div className="space-y-6">
              {/* Image */}
              <Image
                src={dummyImage}
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-md"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  123 Main Street, <br /> City, Country 12345
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@company.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
