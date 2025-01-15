
const CourseManage = () => {
  // Example course data
  const course = {
    title: "Introduction to React",
    description:
      "Learn the fundamentals of React, including components, state, and props, to build dynamic web applications.",
    price: "$49.99",
    createdAt: "January 10, 2025",
    creator: {
      name: "John Doe",
      email: "johndoe@example.com",
      profilePicture:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4394.jpg?w=740",
    },
  };

  return (
    <div className="mt-5 min-h-screen  flex items-start justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-4xl w-full">
        {/* Course Title */}
        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>

        {/* Course Description */}
        <p className="text-gray-600 mt-4">{course.description}</p>

        

        <div className="flex border-t my-5 py-5">
          {/* Course Price */}
          

          <div className="flex-col">
          <div className="mt-4">
            <span className="text-xl font-semibold text-gray-800">
              Price: {course.price}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Created on: {course.createdAt}
          </div>

          </div>
          

          <button
                  className="ml-auto bg-blue-600 hover:bg-blue-700 text-white my-2 px-7 rounded-lg shadow-lg transition-colors"
                  onClick={() => alert("Enrolled successfully!")}
                >
                  Manage
          </button>
          {/* Creator Details */}
          {/* <div className="  flex items-center">
            <img
              src={course.creator.profilePicture}
              alt={course.creator.name}
              className="w-16 h-16 rounded-full"
            />
            
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.creator.name}
                </h3>
                <p className="text-sm text-gray-500">{course.creator.email}</p>
              </div>
              

            
            
          </div> */}

          {/* Manage Button */}
          
          
        </div>
        
        
      </div>
    </div>
  );
};

export default CourseManage;