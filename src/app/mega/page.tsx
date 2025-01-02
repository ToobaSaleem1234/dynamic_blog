import React from 'react'
import Blogcard from '../../components/blogcard'

const Mega = () => {
  const post = [
    {
      id: '01',
      title: "Mastering HTML",
      description: "Essential for building websites and web applications, provides the foundation for other web technologies like CSS and JavaScript",
      date: "2025-01-01",
      imageUrl: "/mega/slide1.jpg"
    },
    {
      id: '02',
      title: "Custom CSS and Tailwind CSS",
      description: "These allow developers to write unique styles of code to control the appearance of web applications along with responsiveness. ",
      date: "2025-01-01",
      imageUrl: "/mega/slide2.jpg"
    },
    {
      id: '03',
      title: "Responsive Web Design",
      description: "IT is an approach to building websites that ensures a seamless user experience across various devices and screen sizes by adapting layout, content, and visual elements.",
      date: "2025-01-01",
      imageUrl: "/mega/slide3.jpeg"
    },
    {
      id: '04',
      title: "Version Control",
      description: "This is a system that tracks changes to code or documents over time, enabling collaboration, change tracking, and backup capabilities.",
      date: "2025-01-01",
      imageUrl: "/mega/slide4.png"
    },
    {
      id: '05',
      title: "React and Bootstrap",
      description: "React is library for building reusable UI components,Bootstrap is framework providing pre-designed UI components to build responsive and consistent web applications quickly.",
      date: "2025-01-01",
      imageUrl: "/mega/slide5.png"
    },
    {
      id: '06',
      title: "Visual Studio Code",
      description: "VS Code is a lightweight code editor that provides a comprehensive development environment with features like syntax etc for various programming languages.",
      date: "2025-01-01",
      imageUrl: "/mega/slide6.jpg"
    },
    {
      id: '07',
      title: "Node.js and API's",
      description: "This is environment that enables developers to create scalable non-blocking I/O model while API is a set of defined rules  that enables different software systems to communicate seamlessly.",
      date: "2025-01-01",
      imageUrl: "/mega/slide7.png"
    },
    {
      id: '08',
      title: "SQL/NoSQL Databases",
      description: "SQL databases store structured data in tables with defined schemas, while NoSQL databases store unstructured or semi-structured data in flexible formats like key-value, document, or graph databases.",
      date: "2025-01-01",
      imageUrl: "/mega/slide8.png"
    },
    {
      id: '09',
      title: "Web Security",
      description: "Web security refers to the practices and technologies designed to protect websites and their users from various types of cyber threats, such as hacking, phishing, and data breaches.",
      date: "2025-01-01",
      imageUrl: "/mega/slide9.jpeg"
    },
    {
      id: '10',
      title: "Redux and jQuery",
      description: "Redux is a state management library that helps manage global state, jQuery is a library that simplifies HTML document  making it easier to write efficient and cross-browser compatible code.",
      date: "2025-01-01",
      imageUrl: "/mega/slide10.jpeg"
    },
    {
      id: '11',
      title: "Tools and Softwares",
      description: "Tools and software refer to programs, applications, and platforms that enable developers, designers, and users to create, manage, and interact with digital products, services, and systems.",
      date: "2025-01-01",
      imageUrl: "/mega/slide11.png"
    },
    {
      id: '12',
      title: "Figma Templates",
      description: "Figma templates are pre-designed layouts and UI components that can help you kickstart your design projects.",
      date: "2025-01-01",
      imageUrl: "/mega/slide12.jpeg"
    },

  ]
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-blue-700 animate-color-change '>Exploring the World Of Web Development </h1>
      <div className='m-10 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {post.map((post,index)=>(
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <Blogcard post={post} isDarkBackground ={true} />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Mega