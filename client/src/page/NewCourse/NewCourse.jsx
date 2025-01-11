import { useState } from 'react';

const CreateCoursePage = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    sections: [{ sectionTitle: '', videoUrl: '' }], // Initialize with one default section
  });

  // Handle changes in course data fields (title, description, image URL)
  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  // Handle changes in section data fields (section title, video URL)
  const handleSectionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSections = [...courseData.sections];
    updatedSections[index] = { ...updatedSections[index], [name]: value };

    setCourseData({
      ...courseData,
      sections: updatedSections,
    });
  };

  // Add new section (clone the last section and append it to the array)
  const addSection = () => {
    setCourseData({
      ...courseData,
      sections: [
        ...courseData.sections,
        { sectionTitle: '', videoUrl: '' }, // New section with empty fields
      ],
    });
  };

  // Delete section at a given index
  const deleteSection = (index) => {
    const updatedSections = courseData.sections.filter((_, i) => i !== index);
    setCourseData({
      ...courseData,
      sections: updatedSections,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call to create the course)
    console.log('Course created:', courseData);
  };

  return (
    <div className="mt-28 max-w-3xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-6">Create a New Course</h2>

        <form onSubmit={handleSubmit}>
          {/* Course Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">
              Course Title
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleCourseChange}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Course Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">
              Course Description
            </label>
            <textarea
              placeholder='Description'
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleCourseChange}
              required
              rows="2"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Course Image URL */}
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-700">
              Course Image URL
            </label>
            <input
            placeholder='Course Image'
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={courseData.imageUrl}
              onChange={handleCourseChange}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Sections (dynamic) */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Add Sections and Videos</h3>

            {/* Map through sections and render inputs for each */}
            {courseData.sections.map((section, index) => (
              <div key={index} className="my-6 pt-3 border-t ">
                <h4 className="text-lg font-medium text-gray-800">Section {index + 1}</h4>

                {/* Section Title */}
                <div className="mb-4">
                  <label htmlFor={`sectionTitle-${index}`} className="block text-lg font-medium text-gray-700">
                    Section Title
                  </label>
                  <input
                    type="text"
                    id={`sectionTitle-${index}`}
                    name="sectionTitle"
                    value={section.sectionTitle}
                    onChange={(e) => handleSectionChange(index, e)}
                    required
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                {/* Video URL */}
                <div className="mb-4">
                  <label htmlFor={`videoUrl-${index}`} className="block text-lg font-medium text-gray-700">
                    Video URL
                  </label>
                  <input
                    type="url"
                    id={`videoUrl-${index}`}
                    name="videoUrl"
                    value={section.videoUrl}
                    onChange={(e) => handleSectionChange(index, e)}
                    required
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                {/* Delete Section Button */}
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
            
            {/* Add Section Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addSection}
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
              >
                Add Section
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
