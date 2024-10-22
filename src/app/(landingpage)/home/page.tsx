import React from 'react';
import Image from 'next/image';
import frontImg from "../../../assets/Image.png"; 
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="relative flex justify-center items-center mb-10 ">
          <Image 
            src={frontImg} 
            alt="Blog Hero Image" 
            height={500} 
            width={1200} 
            className="rounded-lg shadow-lg px-7"
          />
          {/* Overlay Section */}
          <div className="absolute text-white text-center p-7 shadow-md bg-gray-50 md:mt-0 mt-24 ">
            <h1 className=" text-2xl md:text-4xl font-bold text-black">Welcome to <span className='text-blue-500'>Nexio</span></h1>
            <p className=" text-md mt-4 md:text-2xl text-black">
              Discover the latest trends, tips, and deep dives into the world of technology.
            </p>
          </div>
        </div>

        {/* Blog Content Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Example Blog Post */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image 
                src={frontImg}
                alt="Article Thumbnail" 
                height={200} 
                width={400} 
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Understanding AI and Its Impact</h3>
              <p className="text-gray-600 mt-2">
                A deep dive into the advancements of artificial intelligence and its influence on various industries.
              </p>
             <Button variant={'ghost'} className='bg-blue-500 text-white mt-2 rounded-md'><a href="/post/ai-impact" className="block">Read More</a></Button> 
            </div>

            {/* Blog section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image 
                src={frontImg}
                alt="Article Thumbnail" 
                height={200} 
                width={400} 
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">The Future of Web Development</h3>
              <p className="text-gray-600 mt-2">
                Explore the cutting-edge technologies and frameworks shaping the future of web development.
              </p>
             <Button variant={'ghost'} className='bg-blue-500 text-white mt-2 rounded-md'> <a href="/post/web-future" className="block">Read More</a></Button>
            </div>

          </div>
        </section>

       
      </div>
      <Footer/>
    </>
  );
}

export default Home;
