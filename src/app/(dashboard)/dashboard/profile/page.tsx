"use client";
import React, { useState } from "react";
import { Camera, Edit } from "lucide-react";
import dummyImage from "../../../../assets/Image.png";
import Image from "next/image";
const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [status, setStatus] = useState("Select Mood");

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleStatusChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStatus(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageURL = URL.createObjectURL(event.target.files[0]);
      console.log(imageURL);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="mx-auto max-w-md h-[200px] w-[300px] md:h-[700px] md:[700px] mt-16 p-5 rounded-lg  bg-white">
          <div className="profile-header flex items-center justify-between mb-4">
            <h2 className=" text-xl md:text-2xl font-bold">John Doe</h2>
            <button
              onClick={handleFollow}
              className={`py-2 px-4 rounded-lg text-white ${
                isFollowing ? "bg-gray-500" : "bg-blue-500"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="relative">
              <Image
                src={dummyImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <label
                htmlFor="profile-upload"
                className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer"
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
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                <Edit className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="profile-body mt-4">
            <button className="bg-green-500 py-2 px-4 rounded-lg text-white mb-4">
              Change Profile
            </button>

            <div className="status-selector mt-4">
              <label className="block text-gray-600 font-semibold mb-2">
                Mood:
              </label>
              <select
                value={status}
                onChange={handleStatusChange}
                className="p-2 border rounded-lg w-full"
              >
                <option disabled>Select Mood</option>
                <option value="Creative">Creative</option>
                <option value="Lazy">Lazy</option>
                <option value="Inspired">Inspired</option>
                <option value="Motivated">Motivated</option>
                <option value="Curious">Curious</option>
              </select>
              <p className="mt-2 text-gray-600">Current Mood: {status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
