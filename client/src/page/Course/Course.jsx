// import React from "react";
import { useState } from "react";

const Course = () => {
    const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="bg-white text-black font-sans">
      {/* Header Section */}
      <header className="bg-black py-4 px-6">
        <h1 className="text-2xl font-bold">Simple Strategy for Swing Trading</h1>
        <p className="text-gray-400">
          Use my favorite Technical Indicator and Trading Strategy for Swing Trading Stocks
        </p>
      </header>
      
      {/* Main Content */}
      <main className="flex flex-col md:flex-row max-w-6xl mx-auto my-8">
        {/* Left Section */}
        
        <div className="md:w-2/3 px-4">
          {/* What you'll learn Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4">What you&apos;ll learn</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-900">
              <li>Become a successful trader</li>
              <li>Keep your losses to an absolute minimum</li>
              <li>Trade stocks using one technical indicator</li>
              <li>Know exactly when to lock in profits</li>
              <li>Have a plan for entry and exit</li>
            </ul>
          </section>

          {/* Course Content */}
          {/* <section className="mb-6">
            <h2 className="text-xl font-bold mb-4">Course content</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">My Swing Trading Strategy</h3>
              <ul className="list-none space-y-2">
                <li className="flex justify-between">
                  <span>Introduction</span>
                  <span>10:10</span>
                </li>
                <li className="flex justify-between">
                  <span>Components of the CCI</span>
                  <span>03:25</span>
                </li>
                <li className="flex justify-between">
                  <span>The Primary Buy Signal</span>
                  <span>29:07</span>
                </li>
                <li className="flex justify-between">
                  <span>The Uptrend Buy Signal</span>
                  <span>05:22</span>
                </li>
              </ul>
            </div>
          </section> */}
          <section className="mb-6">
      <h2 className="text-xl font-bold mb-4">Course content</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-white">My Swing Trading Strategy</h3>
        <ul className="list-none space-y-2 text-white">
          {[
            { title: "Introduction", duration: "10:10" },
            { title: "Components of the CCI", duration: "03:25" },
            { title: "The Primary Buy Signal", duration: "29:07" },
            { title: "The Uptrend Buy Signal", duration: "05:22" },
          ].map((item, index) => (
            <li key={index}>
              <button
                className="flex justify-between w-full text-left focus:outline-none mb-2 p-2 bg-gray-700 rounded-md"
                onClick={() => toggleSection(item.title)}
              >
                <span>{item.title}</span>
                <span>{openSections[item.title] ? "▲" : "▼"}</span>
              </button>
              {openSections[item.title] && (
                <div className="pl-4 text-gray-300">
                  <p>Duration: {item.duration}</p>
                  {/* Add more details about the section if needed */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>

          {/* Description */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-black">
              I’ve been a Swing Trader for the Stock Market for twenty years, and I have developed
              a very simple and effective strategy for Swing Trading Stocks, ETFs, and more.
            </p>
          </section>
        </div>

        {/* Right Section */}
        <aside className="md:w-1/3 px-4">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-xl font-bold text-white">₹1,799</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-purple-700">
              Add to Cart
            </button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded mt-4 w-full hover:bg-gray-600">
              Buy Now
            </button>
            <p className="text-sm text-gray-400 mt-4">
              20-Day Money-Back Guarantee
            </p>
          </div>

          {/* Course Highlights */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-white">This course includes:</h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li>10 hours on-demand video</li>
              <li>Access on mobile and TV</li>
              <li>Full lifetime access</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Course;
