import { useState ,useEffect} from "react";

const Course = () => {
  const [openSections, setOpenSections] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] =useState(true);
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
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
  return (
    <div className="bg-white text-black  h-screen ">
      
      <header className={ `  bg-slate-200 py-9 w-full px-40 fixed duration-300   ${isVisible ? "translate-y-0 -mt-48" : "-translate-y-full -mt-40"}`}>
        <h1 className=" text-black/80   text-xl md:text-3xl font-bold text-black ">Simple Strategy for Swing Trading</h1>
        <p className="text-gray-400  ">
          Use my favorite Technical Indicator and Trading Strategy for Swing Trading Stocks
        </p>
      </header>
     
      <main className="flex flex-col md:flex-row max-w-6xl mx-36  mt-72">
       
        
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
              <h3 className="text-4xl font-semibold my-10 text-black/80 ">There are 5 modules in the course.</h3>
              <h3 className="text-lg font-thin mb-10 leading-10 text-black/80">Learn how to design and develop online learning materials.<br />

Digital education is expanding faster than ever as part of how we teach.</h3>
              
              <ul className="list-none text-white">
                {[
                  { title: "Introduction", duration: "10:10" },
                  { title: "Components of the CCI", duration: "03:25" },
                  { title: "The Primary Buy Signal", duration: "29:07" },
                  { title: "The Uptrend Buy Signal", duration: "05:22" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      className="flex flex-col w-full text-left text-black focus:outline-none mb-2 p-10 bg-slate-100 rounded-md"
                      onClick={() => toggleSection(item.title)}
                    >
                      <div className="flex justify-between w-full">
                        <span>{item.title}</span>
                        <span>{openSections[item.title] ? "▲" : "▼"}</span>
                      </div>

                      {openSections[item.title] && (
                        <div className="mt-2 pl-4 text-gray-500">
                          <p>Duration: {item.duration}</p>
                          {/* Add more details about the section if needed */}
                        </div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </section>
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
