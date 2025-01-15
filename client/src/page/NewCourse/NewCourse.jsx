/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import axios from 'axios';
import { useClerk } from "@clerk/clerk-react";


const MultiStepCourseForm = () => {
  
  //User Details
  const { user  } = useClerk();
  
  const date = new Date();

  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Course Content","Course Info", "Add Sections", "Review & Submit"];

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      Course_name: "",
      Course_category: "",
      Course_price: "",
      Course_skills:"",
      Course_description: "",
      Course_sections: [{ module_Title : "", module_Desc : "" , module_VideoUrl : "" }],
      AuthorName : user.fullName || user.username || "UnKnownUser",
      PublishedDate : date.toLocaleDateString()
      
    },
  });

  
  const courseData = watch();

  const addSection = () => {
    const updatedSections = [
      ...courseData.Course_sections,
      { module_Title: "",module_Desc:"",module_VideoUrl: ""  },
    ];
    setValue("Course_sections", updatedSections);
  };

  const deleteSection = (index) => {
    const updatedSections = courseData.Course_sections.filter((_, i) => i !== index);
    setValue("Course_sections", updatedSections);
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit =async(data) => {
   
    console.log("Form Data Submitted: ", data);
    alert("Course created successfully!");
    data.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/Courses', { data}, {
          headers: {
              'Content-Type': 'application/json'
          }
      });  
    } catch (error) {
      console.error('Signup Error:', error.response || error);
      alert("Error: " + (error.response?.data?.message || error.message));
    }
};

  const progress = ((currentStep ) / steps.length) * 100;

  return (
    <div className="flex max-w-screen min-h-screen bg-slate-100 p-8 rounded-lg">
      <form
        className="w-3/3 md:w-4/5  h-[500px] mt-32  bg-white m-auto p-6 shadow-2xl rounded-lg"
      >
      <div className="w-full bg-gray-300 rounded-full h-2 mb-4 ">
      <motion.div
        className="bg-blue-500 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="grid-cols-1">
        <div className="flex">
          <div onClick={handlePrevious} className="cursor-pointer">
            <img width="20" height="20" className="hover:opacity-75 transition duration-200" src="https://img.icons8.com/material-outlined/50/back--v1.png" alt="back--v1"/>
          </div>
        
          <p className="text-slate-600 ">
            Step {currentStep+1} of {steps.length}
          </p>
        </div>
        <h2 className="text-xl font-bold">Create a Course</h2>
        <p className="text-gray-500 mb-4">Please fill out all the fields.</p>
      </div>
      <div className="grid-cols-2 ">
        <div className="max-w-full overflow-y-auto overflow-x-hidden break-words max-h-[400px] relative " style={{ minHeight: "350px" }}>
          <div className="text-center text-gray-600 mb-2">
            <span>{steps[currentStep]}</span>
          </div>
        {/* Multi-Step Form Sections */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className=" relative mb-6"
        >
          {currentStep === 0 && (
            <div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">Course Name</label>
                <Controller
                  name="Course_name"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      id="Course_name"
                      {...field}
                      className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                      placeholder="Course Name"
                      required
                    />
                  )}
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">Category</label>
                <Controller
                  name="Course_category"
                  control={control}
                  render={({ field }) => (    
                    <select
                    id="Course_category"
                    {...field}
                    className="block w-full p-2 bg-gray-100 border-2 rounded  focus:outline-none focus:border-gray-300"
                    required
                    onBlur={(e) => {
                      if (e.target.value === "Choose an option") {
                        alert("Please select a valid category!");
                      }
                    }}
                  >
                    <option value="Choose an option" disabled >Choose an option</option>
                    <option value="Development">Development</option>
                    <option value="Business">Business</option>
                    <option value="Finance & Accounting">Finance & Accounting</option>
                    <option value="IT & Software">IT & Software</option>
                    <option value="Design and Marketing">Design and Marketing</option>
                    <option value="LifeStyle & Health">LifeStyle & Health</option>
                  </select>
                  )}
                />
              </div>
            </div>
          )}
          {currentStep ===1 && (
            <div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">Price</label>
                <Controller
                  name="Course_price"
                  control={control}
                  render={({ field }) => (
                    <input
                      id="Course_price"
                      {...field}
                      type="number"
                      className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                      placeholder="Course Price"
                      required
                    />
                  )}
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">What skills can be learned</label>
                <Controller
                  name="Course_skills"
                  control={control}
                  render={({ field }) => (
                    <input
                      id="Course_skills"
                      {...field}
                      type="text"
                      className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                      placeholder="Course Skills"
                      required
                    />
                  )}
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">Course Description</label>
                <Controller
                  name="Course_description"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      id="Course_description"
                      {...field}
                      type="text"
                      className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                      placeholder="Course Description"
                      required
                    />
                  )}
                />
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>  
              {courseData.Course_sections.map((section, index) => (
                <div 
                key={index} 
                className="mb-1 border-t pt-4"
                
                >
                  <h4 className="text-lg font-medium mb-2">Module {index + 1}</h4>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700">
                      Module Title
                    </label>
                    <Controller
                      name={`Course_sections.${index}.module_Title`}
                      control={control}
                      render={({ field }) => (
                        <input
                          id="module_Title"
                          {...field}
                          type="text"
                          className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                          placeholder="Module Title"
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-lg font-medium text-gray-700 ">
                      Module Description
                    </label>
                    <Controller
                      name={`Course_sections.${index}.module_Desc`}
                      control={control}
                      render={({ field }) => (
                        <input
                          id="module_Desc"
                          {...field}
                          type="text"
                          className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                          placeholder="Module Description"
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">
                      Video URL
                    </label>
                    <Controller
                      name={`Course_sections.${index}.module_VideoUrl`}
                      control={control}
                      render={({ field }) => (
                        <input
                          id="module_VideoUrl"
                          {...field}
                          type="url"
                          className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                          placeholder="Module VideoURL (http/https)"
                          required
                        />
                      )}
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deleteSection(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete Section
                    </button>
                  )}
                </div>
              ))}  
              <button
                type="button"
                onClick={addSection}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Add Section
              </button>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Review Course Details</h3>
              <p>
                <strong>Course Name:</strong> {courseData.Course_name}
              </p>
              <p>
                <strong>Category:</strong> {courseData.Course_category}
              </p>
              <p>
                <strong>Price:</strong> {courseData.Course_price}
              </p>
              <p>
                <strong>Skills Used:</strong> {courseData.Course_skills}
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">Sections:</h4>
                {courseData.Course_sections.map((section, index) => (
                  <div key={index} className="mb-2  overflow-auto break-words ">
                    <p>
                      <strong>Section {index + 1}:</strong> 
                    </p>
                    <p>Module Title: {section.module_Title}</p>
                    <p>Module Desc: {section.module_Desc}</p>
                    <p>Video URL: {section.module_VideoUrl}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        </div>

        {/* Navigation Buttons */}
        <div className="mt-3 flex justify-between ">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2  bg-gray-300 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 ml-auto bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  </form>
</div>
    
)};

export default MultiStepCourseForm;
