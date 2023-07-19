import React from 'react'

const AboutMe = () => {
  return (
    <div className="card  bg-base-100 shadow-lg bg-opacity-40">
              <div className="card-body">
                <div className="lg:flex justify-between mb-2 py-2">
                  <h5 className="card-title font-bold">
                    {
                      <span className="text-base-content opacity-80">
                        Bio
                      </span>
                    }
                  </h5>
                  {
                 
                  <div className="card lg:w-5/6 h-96  lg:mt-0 mt-7 bg-primary text-primary-content shadow-xl">
                    
  <div className="card-body text-lg lg:overflow-hidden overflow-auto">
    <p className='font-bold'>Vinchurkar Himanshu is a dedicated and ambitious software engineering student with a passion for technology and problem-solving. He excels in programming languages such as C++, and Python and actively seeks practical experience through internships. Himanshu is driven to develop innovative software solutions that improve user experiences and is committed to continuous learning and staying up to date with industry trends. His strong work ethic and motivation make him an ideal candidate for any organization seeking a talented software engineer.
    </p>
    <a href='https://www.linkedin.com/in/himanshu-vinchurkar-9b414322b/' target={'_blank'}>
    <p className='hover:underline text-sm font-bold cursor-pointer'>DMs are alway's open on Linkedin
    
    </p></a>
    </div>
</div>



                  }
                  
                </div>
                </div>
                </div>
  )
}

export default AboutMe