
import { GlobeDemo } from './global'
import Certifications from './Certifications/Certifications'
import Footer from '../../components/Footer/footer'

function Home() {
  return (
    <div className=" mt-10 w-full  items-center justify-center relative">
        <div className='flex flex-col'>
            <div className="absolute top-0 left-0 flex gap-2 z-10 p-6 lg:mt-28 mt-96">
                <button className="text-xl border-2 border-sky-800 px-8 py-5 hover:bg-slate-200 duration-300">
                Join for Free
                </button>
            </div>
            <div className="absolute top-0 right-0 flex gap-2 z-10 p-6 lg:mt-28 mt-96">
                <button className="text-xl bg-sky-800 border-2 border-sky-800 px-8 py-5 text-white hover:bg-sky-900 duration-300">
                Try EduNext now
                </button>
            </div>

            <GlobeDemo className="cursor-pointer -z-50 " />

        </div>
        
        <div className="flex flex-col items-center text-center bg-gray-100 h-80 my-10">
            <h2 className="text-3xl font-semibold my-14">
                We collaborate with <span className="text-blue-500">350+ leading universities and companies</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-10 mb-20">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/77hmeEJo3ZPlURCU02fD52/aa37b7f7b52285ba350acac62d8af5c1/illinois-3.png?auto=format%2Ccompress&dpr=1&h=32" alt="Logo 1" className="h-16 max-h-8 " />
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=1&h=32" alt="Logo 2" className="h-16 max-h-8" />
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=1&h=37https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=1&h=37" alt="Logo 3" className="h-16 max-h-8" />
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=1&h=37" alt="Logo 4" className="h-16 max-h-8" />
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=1&h=27" alt="Logo 4" className="h-16 max-h-8" />
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=1&h=37" alt="Logo 4" className="h-16 max-h-8" />
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FHOd44z40jTFsSSao84AM/d1e357f5650a23bf2936114112d44445/imperial.png?auto=format%2Ccompress&dpr=1&h=35" alt="Logo 4" className="h-16 max-h-8" />
            </div>
        </div>
        <Certifications/>
        <Footer/>
        
    </div>
  )
}

export default Home