import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Home = () => {
  return (
    <div className=' bg-black text-white min-h-screen p-4 md:flex justify-center items-center '>
      <div className=" text-center md:text-left md:w-1/2 flex flex-col justify-center">
        <div className=''>
        <p className='text-purple-600 text-lg'>👋 Hello, I'm</p>
        <h1 className='text-4xl font-bold'>Yuvraj <span className=''>Kumar</span></h1>
        <h2 className=' text-purple-600 text-lg'>MERN Stack Developer</h2>
        <p className='text-gray-400 mt-6 text-lg'>
          I build modern, fast and responsive websites using React, Express.js, Node.js and MongoDB.
        </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 mt-8 flex-wrap bg-black'>
       <button className='bg-purple-600 hover:bg-purple-700 text-lg text-white px-2 py-1  rounded'>
         Hire Me <span>→</span>
       </button>
       <button className='bg-gray-600 hover:bg-gray-700 text-lg text-white px-2 py-1 rounded'>
         View Projects <span>→</span>
       </button>
       </div>
       <p className="text-gray-400 mt-6 text-lg">
         Contact with me
       </p>
       <div className='flex justify-center gap-4 mt-8 flex-wrap bg-black'>
          <a href="https://github.com/Yuvrajcode1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yuvraj-kumar-326272320?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaLinkedin />
          </a>
           <a href="https://www.instagram.com/yuvrazrazputt?igsh=b2Q2bGNlbjYxc283" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
       </div>
      </div>
      <div className=" flex justify-center pt-15">
        <div className=" bg-yellow-300 w-60 h-60 rounded-full flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600" alt="Profile" className="w-56 h-56 rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Home



// export default function Home() {
//   const skills = [
//     "React",
//     "JavaScript",
//     "Tailwind CSS",
//     "Node.js",
//     "MongoDB",
//     "Express.js",
//   ];

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
//           <div>
//             <p className="text-cyan-400 text-lg mb-3">
//               👋 Hello, I'm
//             </p>

//             <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//               Yuvraj
//               <span className="text-cyan-400"> Kumar</span>
//             </h1>

//             <h2 className="text-2xl md:text-4xl text-gray-300 mt-4">
//               Full Stack Web Developer
//             </h2>

//             <p className="text-gray-400 mt-6 text-lg">
//               I build modern, fast and responsive websites using React,
//               Tailwind CSS, Node.js and MongoDB.
//             </p>

//             <div className="flex gap-4 mt-8 flex-wrap">
//               <button className="bg-cyan-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
//                 Hire Me
//               </button>

//               <button className="border border-cyan-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:text-black transition">
//                 View Projects
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

//               <img
//                 src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600"
//                 alt="profile"
//                 className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-500"
//               />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Skills */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           My Skills
//         </h2>

//         <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-zinc-900 border border-cyan-500 px-6 py-3 rounded-full"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Projects */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Featured Projects
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 transition"
//             >
//               <div className="h-48 bg-zinc-800 rounded-xl mb-4"></div>

//               <h3 className="text-2xl font-bold">
//                 Project {item}
//               </h3>

//               <p className="text-gray-400 mt-3">
//                 Modern responsive web application built with React and Tailwind CSS.
//               </p>

//               <button className="mt-4 text-cyan-400">
//                 View Project →
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6">
//         <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-center">
//           <h2 className="text-4xl font-bold">
//             Let's Build Something Amazing
//           </h2>

//           <p className="mt-4 text-lg">
//             Need a website or web application? Let's work together.
//           </p>

//           <button className="mt-8 bg-black px-8 py-3 rounded-xl font-semibold">
//             Contact Me
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }