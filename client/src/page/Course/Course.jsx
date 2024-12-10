import { useState ,useEffect} from "react";
import Footer from "../../components/Footer/footer";

const Course = () => {
  const [openSections, setOpenSections] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] =useState(true);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [videoProgress, setVideoProgress] = useState({}); 

  const toggleSection = (section) => {
    if (!hasPurchased && section !== "Introduction") {
      alert("Please purchase the course to access this content.");
      return;
    }
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const handleVideoTimeUpdate = (section, currentTime, duration) => {
    setVideoProgress((prev) => ({
      ...prev,
      [section]: {
        currentTime,
        duration,
        remainingTime: Math.max(duration - currentTime, 0),
      },
    }));
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition && currentScrollPosition > 50) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);


  const courseContent = [
    { title: "Introduction",
      description:"In this first week, we will look at how to identify a target audience using personas, design active learning opportunities into your course, and write with a clear narrative voice that will appeal to a global audience",
      duration: "10:10", 
      videoUrl: "https://videos.pexels.com/video-files/5474318/5474318-uhd_2732_1440_25fps.mp4" ,

    },
    { title: "FrontEnd Frameworks NextJS & Hooks", 
      description:"In this first week, we will look at how to identify a target audience using personas, design active learning opportunities into your course, and write with a clear narrative voice that will appeal to a global audience",
      duration: "10:10", 
      videoUrl: "https://videos.pexels.com/video-files/5474318/5474318-uhd_2732_1440_25fps.mp4" ,
      
    },
    { title: "DevOPS & Selenium ", 
      description:"In this first week, we will look at how to identify a target audience using personas, design active learning opportunities into your course, and write with a clear narrative voice that will appeal to a global audience",
      duration: "10:10", 
      videoUrl: "https://videos.pexels.com/video-files/5474318/5474318-uhd_2732_1440_25fps.mp4" ,
      
    }
    ];

  // Video by cottonbro studio from Pexels: 
  return (
    <div className="bg-white text-black  h-screen ">
      
      <header className={ `  bg-slate-200 py-9 w-full px-40 fixed duration-300 z-10  ${isVisible ? "translate-y-0 -mt-48" : "-translate-y-full -mt-40"}`}>
        <h1 className=" text-black/80   text-xl md:text-3xl font-bold text-black ">Simple Strategy for Swing Trading</h1>
        <p className="text-gray-400  ">
          Use my favorite Technical Indicator and Trading Strategy for Swing Trading Stocks
        </p>
      </header>
     
      <main className="flex flex-col md:flex-row max-w-6xl mx-36  mt-72 z-0">
       
        
        <div className="md:w-2/3 px-4">
          
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4">What you&apos;ll learn</h2>
            <ul className="list-none gap-4 list-inside flex   text-gray-900">
              <li className="bg-slate-100 px-3 rounded-md">Education</li>
              <li className="bg-slate-100 px-3 rounded-md">Media</li>
              <li className="bg-slate-100 px-3 rounded-md">Online Learning</li>
              <li className="bg-slate-100 px-3 rounded-md">Instrumental Design</li>
              
            </ul>
          </section>

          
          <section className="py-10">
            <h2 className="text-xl font-bold mb-4">Course content</h2>
            <div className="  rounded-lg">
              <h3 className="text-4xl font-semibold my-10 text-black/80 ">There are  modules in this course.</h3>
              <h3 className="text-lg font-thin mb-10 leading-10 text-black/80">Learn how to design and develop online learning materials.<br />

Digital education is expanding faster than ever as part of how we teach.</h3>
              
              <ul className="list-none text-white">
              {courseContent.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`flex flex-col w-full text-left focus:outline-none mb-2 p-10 rounded-md ${
                        !hasPurchased && item.title !== "Introduction"
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed "
                          : "bg-slate-100 text-black"
                      }`}
                      onClick={() => toggleSection(item.title)}
                      disabled={!hasPurchased && item.title !== "Introduction"}
                    >
                      <div className="flex justify-between text-base w-full">
                        <span>{item.title}</span>
                        <span
                          className={`transform duration-300 ${
                            openSections[item.title] ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          ▼
                        </span>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-700 ease-in ${
                          openSections[item.title] ? "max-h-[600px] pl-2" : "max-h-0"
                        }`}
                      >
                       {openSections[item.title] && (
                        <div className="mt-5">
                          <p className="font-thin mr-3 mb-2">{item.description}</p>
                          <p>Duration: {item.duration}</p>
                          {hasPurchased || item.title === "Introduction" ? (
                            <video
                              controls
                              className="mt-4 w-full"
                              onTimeUpdate={(e) =>
                                handleVideoTimeUpdate(
                                  item.title,
                                  e.target.currentTime,
                                  e.target.duration
                                )
                              }
                            >
                              <source src={item.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <p className="text-red-500">Purchase the course to watch this video.</p>
                          )}
                          {videoProgress[item.title] && (
                            <p className="mt-2 text-gray-700">
                              Progress: {Math.floor(videoProgress[item.title].currentTime)}s /{" "}
                              {Math.floor(videoProgress[item.title].duration)}s (
                              {Math.floor(videoProgress[item.title].remainingTime)}s left)
                            </p>
                          )}
                        </div>
                      )}
                      </div>
                    </button>
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
        <aside className="md:w-1/3  px-4">
          <div className="bg-slate-100/80 border border-b-slate-200  p-10 rounded-lg text-center">
            <p className="text-xl font-bold text-black ">₹1,799</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-purple-700">
              Add to Cart
            </button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded mt-4 w-full hover:bg-gray-600"
            onClick={() => setHasPurchased(true)}
            >
              Buy Now
            </button>
            <p className="text-sm text-gray-400 mt-4">
              20-Day Money-Back Guarantee
            </p>
          </div>

          <div className="mt-6 bg-slate-100/80 p-10 rounded-lg text-slate-500">
            <h3 className="font-bold mb-2 text-black">This course includes:</h3>
            <ul className="list-none space-y-2 ">
              <li>10 hours on-demand video</li>
              <li>Access on mobile and TV</li>
              <li>Full lifetime access</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </aside>
         
      </main>
      <Footer/>
    </div>
  );
};

export default Course;
