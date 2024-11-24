"use client";
import React, { useState } from "react";
import { Camera, Edit } from "lucide-react";
import dummyImage from "../../../../assets/Image.png";
import Image from "next/image";
import { UseUploadToCloudinary } from "@/hooks/useUploadImageToCloudinary";
import { UseUploadProfileImage } from "@/hooks/useUploadProfileImage";
import { UseGetProfileImage } from "@/hooks/usegetProfileImage";
const Profile = () => {
  const [status, setStatus] = useState("Select Mood");
  const [imageUrl, setImageUrl] = useState("");
  const uploadProfileImageMutation = UseUploadProfileImage();
  const profileImage = UseGetProfileImage();

  const handleStatusChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStatus(event.target.value);
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const uploadUrl = await UseUploadToCloudinary(file);

      setImageUrl(uploadUrl);
    }
  };

  const handleProfileChange = () => {
    uploadProfileImageMutation.mutate(imageUrl);
  };

  return (
    <div className="px-4 py-10 ml-16 md:ml-0">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        {/* Header */}
        <div className="flex flex-col items-center px-16 md:px-26 py-16 md:py-4 md:p-28 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">John Doe</h2>
          <p className="text-sm md:text-base">Web Developer & Designer</p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-14">
          <div className="relative">
            {profileImage.data?.profile?.profileUrl ? (
              <Image
                src={profileImage.data?.profile?.profileUrl}
                alt="Profile"
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md"
                width={36}
                height={36}
              />
            ) : (
              <Image
                src={dummyImage}
                alt="Profile"
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md"
              />
            )}

            <label
              htmlFor="profile-upload"
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-200 transition"
            >
              <Camera className="w-5 h-5 text-gray-600" />
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
              <Edit className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Change Profile Button */}
          <button
            onClick={() => handleProfileChange()}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 mb-4"
          >
            Change Profile
          </button>

          {/* Mood Selector */}
          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Mood:
            </label>
            <select
              value={status}
              onChange={handleStatusChange}
              className="p-3 cursor-pointer border rounded-lg w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option disabled>Select Mood</option>
              <option value="Creative">Creative</option>
              <option value="Lazy">Lazy</option>
              <option value="Inspired">Inspired</option>
              <option value="Motivated">Motivated</option>
              <option value="Curious">Curious</option>
            </select>
            <p className="mt-3 text-gray-600 text-center">
              Current Mood: <span className="font-semibold">{status}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
