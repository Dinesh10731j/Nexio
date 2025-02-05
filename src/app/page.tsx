"use client"
import React from 'react'
import Home from './(landingpage)/home/page';
import Header from '@/components/header';
import Footer from '@/components/footer';
const Page = () => {
  return (
   <>
   <Header/>
   <section>
    <Home/>
   </section>
   <Footer/>
   </>
  )
}

export default Page