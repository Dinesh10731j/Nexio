'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  const userName = Cookies.get("username")

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <>
  
      <div className="mt-32 md:mt-0  dark:bg-gray-900">
     
        <main className="flex-1 p-6 space-y-6 mt-20">
          {/* Welcome Section */}

          {
            userName && (
              <section className=" dark:bg-gray-800 p-6 rounded-lg text-center">
              <h2 className=" text-xl md:text-3xl font-bold text-gray-800 dark:text-white">
                {greeting},<span className='text-blue-500'>{userName}</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Welcome to  Dashboard.</p>
            </section>

            )
          }
        

          {/* Dashboard Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Posts</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">You have 12 published posts</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Comments</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">You have 34 new comments</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg ">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Profile Views</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">You have 150 views this month</p>
            </div>
          </section>

          {/* Recent Activity Section */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg  text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Recent Activity</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-600 dark:text-gray-300">Published a new post on October 15</li>
              <li className="text-gray-600 dark:text-gray-300">Updated profile information</li>
              <li className="text-gray-600 dark:text-gray-300">Responded to a comment</li>
              <li className="text-gray-600 dark:text-gray-300">Joined a new blogging community</li>
            </ul>
          </section>

         
        </main>
      </div>
    </>
  );
};

export default Dashboard;
