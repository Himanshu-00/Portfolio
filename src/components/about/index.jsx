import React from 'react'

const AboutMe = () => {
  return (
    <div className="card  bg-base-100 shadow-lg bg-opacity-40">
              <div className="card-body">
                <div className="mx-1 flex justify-between mb-2 py-2">
                  <h5 className="card-title">
                    {
                      <span className="text-base-content opacity-80 lg:mx-2 -mx-3">
                        Bio
                      </span>
                    }
                  </h5>
                  { 
                  <div className="card w-5/6 bg-primary text-primary-content shadow-xl pb-7">
  <div className="card-body lg:text-lg text-xs">
    <p className='font-bold'>Vinchurkar Himanshu is a dedicated and ambitious software engineering student with a passion for technology and problem-solving. He excels in programming languages such as C++, and Python and actively seeks practical experience through internships. Himanshu is driven to develop innovative software solutions that improve user experiences and is committed to continuous learning and staying up to date with industry trends. His strong work ethic and motivation make him an ideal candidate for any organization seeking a talented software engineer.
    </p>
    <p className='hover:underline lg:text-sm font-bold'>DMs are alway's open on 
    <a href='https://www.linkedin.com/in/himanshu-vinchurkar-9b414322b/' target={'_blank'}> Linkedin</a>
    </p>
    </div>
</div>

                  }
                  
                </div>
                </div>
                </div>
  )
}

export default AboutMe