import React from 'react'

const Features = () => {
  return (
    
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center text-3xl font-bold lg:text-center animate-color-change transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-red-700 text-blue-700 '>
          Toobas_Dynamic_Blog: Navigating the secret of Web Development...
        </h2>

        <p className='text-center m-4 mt-4 text-md text-black leading-loose sm:text-base md:text-mb-12 lg:mb-16 animate-fade-in-up delay-100'>
        Welcome to our dynamic blog, where the world of web development comes alive! Stay ahead of the curve with the latest trends, insights, and expert tips on programming, design, and innovation. Join Toobas_Dynamic_Blog as she dives into the dynamic world of web development.From foundational concepts to advance techniques, this blog is packed with insights, tutorials and tips to empower aspiring developers in crafting stunning and functional websites.Explore, learn and elevate your web development journey!
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-blue-700 animate-color-change transition-all duration-500 ease-in-out transform hover:translate-y-[-5px]'>Exploring Our Categories</h1>
          <p className='text-center m-4 mt-4 text-md text-black leading-loose sm:text-base md:text-mb-12 lg:mb-16 animate-fade-in-up delay-100'>
          Explore Our Categories, is your gateway to discovering a wealth of knowledge on web development. Browse through our carefully curated categories, including programming languages, web design, development frameworks, and more. Whether you are a beginner looking to learn the basics or an experienced developer seeking to expand your skillset, our categories section has something for everyone. Dive in and start exploring today!
          </p>
          <div className='grid grid-cols-3 gap-6 sm:grid-col-2 lg:grid-col-4 animate-fade-in-up delay-100'>
            {[
              "Web Development",
              "Artificial Inteligence",
              "Hyper Text Mark-up Language",
              "Cascading Style Sheets",
              "Visual Studio Code",
              "React and Bootstrap",
              "Next.js",
              "Web Security",
              "Figma UI/UX Design",
              "Responsive Web Designs",
              "Version Control",
              "SQL/NoSQL Databases",
            ].map((category,index)=>(
              <div key={index}
              className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-start text-black'>
                <p className='text-center text-lg font-medium'>{category}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    
  )
}

export default Features