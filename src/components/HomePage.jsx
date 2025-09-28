// src/pages/Home.jsx
import React from "react";
import StudentModel from "/image.png"; // Adjust the path as needed
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import ChoosePath from "./ChoosePath";
import{useNavigate} from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
const HomePage = () => {
  const navigate = useNavigate()
  return (
  <div className="bg-purple-50 w-screen  min-h-screen font-inter">
    <div className="  py-8 ">
      {/* Header */}
      <header className="flex w-screen justify-between items-center mb-6 lg:px-16 md:px-12 sm:px-8 px-4">
        <div className="text-2xl font-black tracking-wider flex items-center space-x-2">
          <span className=" text-white px-3 py-1 rounded-md font-bold"><img src="/logo.png" alt="" className="w-30" /></span>
        </div>
        <nav className="hidden sm:flex items-center space-x-10">
          <span className="text-sm font-medium cursor-pointer">Our Courses</span>
          <span className="text-sm font-medium cursor-pointer">Our Mentors</span>
          <span className="text-sm font-medium cursor-pointer">Blogs</span>
          <button className="!bg-black text-white rounded-full px-6 py-2 font-semibold text-sm ml-1">Signup/Login</button>
        </nav>
        <div className="sm:hidden"><RxHamburgerMenu size={25} /></div>
      </header>
      {/* Content */}
      <main className="flex flex-col w-screen lg:flex-row gap-10 sm:mt-12  sm:px-16 px-8 items-center ">
        <section className="flex-1 ">
          <div className="flex items-center gap-2 mb-3">
          </div>
          <div className="font-black text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-2">
Personalized Learning. Smarter Roadmaps. Better Results.
          </div>
          <p className="text-gray-500 mt-4 max-w-lg mb-7 text-base sm:text-lg">
            From beginner basics to advanced topics, find everything you need to start learning something new today
          </p>
          <div className="flex space-x-4">
            <button className="!bg-violet-600 hover:!bg-violet-700 text-white px-7 py-3 rounded-full text-lg font-bold transition" onClick={()=>navigate("/choose-path")}>
              Get Started
            </button>
            <button className="bg-white shadow text-black font-bold px-7 py-3 rounded-full text-lg border border-gray-200">
              Learn More
            </button>
          </div>
          
        </section>
        {/* Hero Visual */}
        <section className="flex-1 flex justify-center relative">
          <div className="bg-gradient-to-br bg-white border-gray-400 rounded-3xl shadow-lg sm:w-[400px] sm:h-[520px] h-[430px] w-[360px] flex items-end relative">
            <img
              src={StudentModel}
              alt="Student Model"
              className="h-[380px] absolute bottom-4 left-1/2 -translate-x-1/2 z-0  select-none"
              draggable="false"
            />
            {/* Floating Cards */}
            <div className="absolute top-6 left-8 bg-white px-5 py-2 rounded-2xl shadow flex flex-col items-center">
              <span className="text-xs font-bold text-orange-500">Happy Students</span>
              <span className="text-xs font-semibold ml-1 text-black">2k+</span>
            </div>
            <div className="absolute top-14 right-2 bg-white px-5 py-2 rounded-2xl shadow">
              <span className="text-xs font-bold text-gray-800">Personalized Roadmap</span>

            </div>
            <div className="absolute bottom-35 left-2 bg-white px-5 py-2 rounded-2xl shadow">
              <span className="text-xs font-bold text-blue-600">24/7 Availability</span>
            </div>
            <div className="absolute bottom-24 sm:left-12 left-8 bg-white px-5 py-2 rounded-2xl shadow">
              <span className="text-xs font-bold text-pink-600">AI Monitoring</span>
            </div>
            <div className="absolute bottom-16 right-16 bg-white px-5 py-2 rounded-2xl shadow">
              <span className="text-xs font-bold text-green-600">Progress Tracking</span>
            </div>
            <div className="absolute bottom-5 right-6 bg-orange-400 text-white px-5 py-2 rounded-2xl shadow">
              <span className="text-xs font-bold">Smart Learning</span>
            </div>
          </div>
        </section>
      </main>
     
    </div>
    <div className="w-screen">
        <FeaturesSection/>
    </div>
   
    <Footer/>
  </div>
)
};

export default HomePage;
