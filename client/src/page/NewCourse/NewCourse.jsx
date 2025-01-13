import  { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";


const MultiStepCourseForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  // const [selectedOption, setSelectedOption] = useState("");
  const steps = ["Course Content","Course Info", "Add Sections", "Review & Submit"];

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      sections: [{ sectionTitle: "", videoUrl: "" }],
    },
  });

  const courseData = watch();

  const addSection = () => {
    const updatedSections = [
      ...courseData.sections,
      { sectionTitle: "", videoUrl: "" },
    ];
    setValue("sections", updatedSections);
  };

  const deleteSection = (index) => {
    const updatedSections = courseData.sections.filter((_, i) => i !== index);
    setValue("sections", updatedSections);
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    alert("Course created successfully!");
  };

  const progress = ((currentStep ) / steps.length) * 100;

  return (
    
    <div className="flex max-w-screen min-h-screen bg-slate-100 p-8 rounded-lg">
      <form
        className="w-4/5  mt-32 bg-white m-auto p-6 shadow-2xl rounded-lg"
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
        <img width="20" height="20" src="https://img.icons8.com/material-outlined/50/back--v1.png" alt="back--v1"/>
          <p className="text-slate-600 ">
            Step {currentStep+1} of {steps.length}
          </p>
        </div>
        <h2 className="text-xl font-bold">Create a Course</h2>
        <p className="text-gray-500 mb-4">Please fill out all the fields.</p>
      </div>

      <div className="grid-cols-2">
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
        className="mb-3"
      >
        {currentStep === 0 && (
          <div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Course Name</label>
              <Controller
                name="CourseName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                    placeholder="Name"
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Category</label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (    
                  <select
                  id="category"
                  {...field}
                  className="block w-full p-2 bg-gray-100 border-2 rounded  focus:outline-none focus:border-gray-300"
                  defaultValue={"option0"}
                >
                  <option value="option0" disabled >
                    Choose an option
                  </option>
                  <option value="option1">Development</option>
                  <option value="option2">Business</option>
                  <option value="option3">Finance & Accounting</option>
                  <option value="option3">IT & Software</option>
                  <option value="option3">Design and Marketing</option>
                  <option value="option3">LifeStyle & Health</option>
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
                name="Price"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                    placeholder="Price"
                    
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">What skills can be learned</label>
              <Controller
                name="CourseName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                    placeholder="Skills"
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Course Description</label>
              <Controller
                name="CourseDescription"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    type="text"
                    className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                    placeholder="Description"
                  />
                )}
              />
            </div>

          </div>
          
        )}
        {currentStep === 2 && (
          <div>
            
            {courseData.sections.map((section, index) => (
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
                    name={`sections.${index}.sectionTitle`}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                        placeholder="Enter Section Title"
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <label className="block text-lg font-medium text-gray-700 ">
                    Module Description
                  </label>
                  <Controller
                    name={`sections.${index}.moduleDescription`}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                        placeholder="Module Description"
                      />
                    )}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">
                    Video URL
                  </label>
                  <Controller
                    name={`sections.${index}.videoUrl`}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="url"
                        className="w-full px-4 py-2 bg-gray-100 border-2 rounded focus:outline-none focus:border-gray-300"
                        placeholder="Enter Video URL"
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
            <h3 className="text-lg font-semibold mb-4">Review Course Details</h3>
            <p>
              <strong>Title:</strong> {courseData.title}
            </p>
            <p>
              <strong>Description:</strong> {courseData.description}
            </p>
            <p>
              <strong>Image URL:</strong> {courseData.imageUrl}
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Sections:</h4>
              {courseData.sections.map((section, index) => (
                <div key={index} className="mb-2">
                  <p>
                    <strong>Section {index + 1}:</strong> {section.sectionTitle}
                  </p>
                  <p>Video URL: {section.videoUrl}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between ">
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
    
  );
};

export default MultiStepCourseForm;
