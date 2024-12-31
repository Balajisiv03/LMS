/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";




const Certifications=()=> {
    const navigate = useNavigate();
    
    const certifications =[
        {
            
            Certification_Name:"IBM Full Stack Software Developer",
            Certification_Author:"IBM",
            Certification_Image:"https://dcfwfuaf91uza.cloudfront.net/online/wp-content/uploads/Sample-Class-for-Liberty-University-Online-1920x784.jpg",
            Certification_Price:500,
            Certification_Url:"1",
        },
        {
            
            Certification_Name:"Microsoft Backend Software Developer",
            Certification_Author:"Microsoft",
            Certification_Image:"https://media.licdn.com/dms/image/v2/D5612AQEObuutrCKwhA/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1683118613975?e=1738800000&v=beta&t=TKe7hSaJxI8ynw5pGvYREJHk59qrynp1xo0XWfklH0g",
            Certification_Price:700,
            Certification_Url:"2",
            
        },
        {
            
          Certification_Name:"IBM Full Stack Software Developer",
          Certification_Author:"IBM",
          Certification_Image:"https://dcfwfuaf91uza.cloudfront.net/online/wp-content/uploads/Sample-Class-for-Liberty-University-Online-1920x784.jpg",
          Certification_Price:800,
          Certification_Url:"3",
        },
        {
            
          Certification_Name:"IBM Full Stack Software Developer",
          Certification_Author:"IBM",
          Certification_Image:"https://media.licdn.com/dms/image/v2/D5612AQEObuutrCKwhA/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1683118613975?e=1738800000&v=beta&t=TKe7hSaJxI8ynw5pGvYREJHk59qrynp1xo0XWfklH0g",
          Certification_Price:800,
          Certification_Url:"3",
        }
    ]

    const handleRedirect = (certId) => {
      navigate(`/course/${certId}`, { state: { certifications } });
      
    };

  return (
    <div className='flex flex-col items-start text-center mx-20 my-32  '>

      
      <p className='text-lg font-medium'>Specializations and Professional Certificates</p>
      <p className='lg:text-5xl text-4xl lg:my-4 my-2'>Most Popular Certificates</p>
      <p className='lg:text-xl text-lg'>Explore our most popular programs, get job-ready for an in-demand career.</p>
      <div className='mt-10 lg:flex md:flex grid  gap-8'>
        {certifications.map((item)=>(
          <div className='border  border-slate-300 h-80 w-80 flex flex-col items-start rounded-xl cursor-pointer hover:scale-105 hover:shadow-xl duration-500'
          onClick={() => handleRedirect(item.Certification_Url)}
          >
            <img 
              src={item.Certification_Image} 
              alt="image" 
              className='h-40 w-full object-cover mb-4 rounded-t-xl' 
            />
            <p className='text-lg font-bold text-left ml-4  mr-6 leading-5'>{item.Certification_Name}</p>
            <p className='text-slate-500 mx-4 '>{item.Certification_Author}</p>
            <p className='font-semibold mx-4'>&#x20B9; {item.Certification_Price}<span className='ml-3  text-slate-400 line-through'>{item.Certification_Price*7}</span></p>
            <p className='text-slate-400 mx-4 text-base  '>Professional Course</p>
        </div>

        ))}
        
    </div>
    </div>
  )
}

export default Certifications