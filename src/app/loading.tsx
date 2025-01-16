"use client"
import React from "react";
import { DNA } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* DNA Loader */}
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
       
      </div>
    </div>
  );
};

export default Loading;
