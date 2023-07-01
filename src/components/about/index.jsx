import React from 'react'

const AboutMe = () => {
  return (
    <div className="card  bg-base-100 shadow-lg bg-opacity-40">
              <div className="card-body">
                <div className="mx-1 flex items-center justify-between mb-2 py-2">
                  <h5 className="card-title">
                    {
                      <span className="text-base-content opacity-80">
                        Bio
                      </span>
                    }
                  </h5>
                  { 
                  <div className="card w-5/6 bg-primary text-primary-content shadow-xl pb-7">
  <div className="card-body items-center text-center lg:text-lg text-xs">
    <p className='font-bold'>Highly skilled and adaptable Software Engineer with years of experience in designing and developing robust software solutions. Proficient in multiple programming languages and frameworks, with a strong foundation in software development methodologies and best practices. Passionate about creating efficient and scalable code, improving user experiences, and solving complex technical challenges. Excellent problem-solving abilities and a collaborative mindset, consistently delivering high-quality results in fast-paced environments. Seeking an opportunity to contribute to cutting-edge projects and drive innovation in software engineering.
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