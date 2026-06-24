import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineModeStandby } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";


const About = () => {
  return (
    <div className=' bg-black text-white min-h-screen p-4 '>
      <div>
        <div className=' md:grid grid-cols-2 items-center gap-4'>
          <div>
          <div className=' max-w-2xl mx-auto'>
            <h1 className=' text-purple-800'>About Me</h1>
            <p className="mt-3 text-gray-300 text-sm md:text-lg leading-relaxed ">
              I'm a passionate Full Stack Developer who enjoys building
              modern, scalable and visually appealing web applications.
              I love turning ideas into interactive digital experiences
              using React, Tailwind CSS, Node.js and MongoDB.
            </p>
          </div>

          <div className=' grid md:grid-cols-2 sm:gap-x-25 items-center mt-4'>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><CiUser /></span>
              <div>
                <h5 className=' text-lg'>Name</h5>
                <p className="text-gray-300 text-sm">Yuvraj Kumar</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><MdOutlineDateRange /></span>
              <div>
                <h5 className=' text-lg'>Age</h5>
                <p className="text-gray-300 text-sm">20 years</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><CiLocationOn /></span>
              <div>
                <h5 className=' text-lg'>Location</h5>
                <p className="text-gray-300 text-sm">Bihar,Saran</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><MdCastForEducation /></span>
              <div>
                <h5 className=' text-lg'>Education</h5>
                <p className="text-gray-300 text-sm">BCA</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><AiOutlineMail /></span>
              <div>
                <h5 className=' text-lg'>Email</h5>
                <p className="text-gray-300 text-sm">yurajshingh70@gmail.com</p>
              </div>
            </div>
            <div className=' flex items-center gap-1 mt-4'>
              <span className=' text-5xl bg-gray-800 rounded-lg text-purple-800 hover:text-purple-400'><MdOutlineLanguage /></span>
              <div>
                <h5 className=' text-lg'>Languages</h5>
                <p className="text-gray-300 text-sm">English, Hindi</p>
              </div>
            </div>
          </div>
          </div>

          <div className=" hidden md:flex justify-center">
            <div className=" bg-yellow-300 w-60 h-60 rounded-full flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600" alt="Profile" className="w-56 h-56 rounded-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className=" md:grid md:grid-cols-3 justify-between gap-4 items-center">
          <div className=' sm:h-50 md:h-40 flex flex-col justify-center  md:border rounded-lg bg-gray-900 hover:bg-gray-800 hover: px-4 pt-1 pb-3 mt-4'>
            <div className=' flex items-center gap-2 mt-4'>
              <span className=' text-purple-800'><MdCastForEducation /></span>
              <span className=' text-lg'>Education</span>
            </div>
            <p className="text-gray-300 text-sm">Bachelor of Computer Applications (BCA)</p>
            <p className="text-gray-300 text-sm">Shri Ram Group of College</p>
            <p className="text-gray-300 text-sm">2024-2027</p>
          </div>
          <div className=' sm:h-50 md:h-40 flex flex-col justify-center  md:border rounded-lg bg-gray-900 hover:bg-gray-800 hover: px-4 pt-1 pb-3 mt-4'>
            <div className=' flex items-center gap-2 mt-4'>
              <span className=' text-purple-800'><MdOutlineModeStandby /></span>
              <span className=' text-lg'>Career Objective</span>
            </div>
            {/* <p className="text-gray-300 text-sm">Bachelor of Computer Applications (BCA)</p> */}
            <p className="text-gray-300 text-sm">Passionate Full Stack Developer with a strong interest in building modern, scalable, and user-friendly web applications.</p>
            <p className="text-gray-300 text-sm">2024-2027</p>
          </div>
          <div className=' sm:h-50 md:h-40 flex flex-col justify-center  md:border rounded-lg bg-gray-900 hover:bg-gray-800 hover: px-4 pt-1 pb-3 mt-4'>
            <div className=' flex items-center gap-2 mt-4'>
              <span className=' text-purple-800'><IoBagAddOutline /></span>
              <span className=' text-lg'>Experience</span>
            </div>
            <p className="text-gray-300 text-sm">Fresher</p>
            <p className="text-gray-300 text-sm">I have developed personal projects using modern web technologies to gain hands-on experience in full stack development.</p>
            <p className="text-gray-300 text-sm">2024-2027</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About



// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#0F172A] text-white py-24 px-6"
//     >
//       {/* Background Blur */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px]" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <span className="text-cyan-400 font-medium tracking-widest uppercase">
//             About Me
//           </span>

//           <h2 className="text-4xl md:text-6xl font-bold mt-4">
//             Crafting Modern
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               {" "}
//               Web Experiences
//             </span>
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side */}
//           <div className="flex justify-center">
//             <div className="relative">
//               {/* Glow */}
//               <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-50"></div>

//               <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
//                 <img
//                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43b"
//                   alt="Yuvraj"
//                   className="w-full max-w-md rounded-2xl object-cover"
//                 />

//                 <div className="absolute -bottom-5 -right-5 bg-cyan-500 text-black font-bold px-5 py-3 rounded-2xl">
//                   Web Developer 🚀
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div>
//             <h3 className="text-3xl md:text-5xl font-bold leading-tight">
//               Hi, I'm{" "}
//               <span className="text-cyan-400">Yuvraj Kumar</span>
//             </h3>

//             <p className="mt-6 text-gray-300 text-lg leading-relaxed">
//               I'm a passionate Full Stack Developer who enjoys building
//               modern, scalable and visually appealing web applications.
//               I love turning ideas into interactive digital experiences
//               using React, Tailwind CSS, Node.js and MongoDB.
//             </p>

//             <p className="mt-4 text-gray-400 leading-relaxed">
//               My focus is creating clean user interfaces, optimized
//               performance and responsive designs that work perfectly
//               across all devices.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-4 mt-10">
//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-105 duration-300">
//                 <h4 className="text-3xl font-bold text-cyan-400">20+</h4>
//                 <p className="text-gray-400">Projects Completed</p>
//               </div>

//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-105 duration-300">
//                 <h4 className="text-3xl font-bold text-cyan-400">1+</h4>
//                 <p className="text-gray-400">Years Learning</p>
//               </div>

//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-105 duration-300">
//                 <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
//                 <p className="text-gray-400">Technologies</p>
//               </div>

//               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-105 duration-300">
//                 <h4 className="text-3xl font-bold text-cyan-400">100%</h4>
//                 <p className="text-gray-400">Dedication</p>
//               </div>
//             </div>

//             {/* Skills */}
//             <div className="flex flex-wrap gap-3 mt-10">
//               {[
//                 "React",
//                 "JavaScript",
//                 "Tailwind",
//                 "Node.js",
//                 "Express",
//                 "MongoDB",
//                 "Git",
//                 "GitHub",
//               ].map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 mt-10">
//               <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 duration-300">
//                 Download CV
//               </button>

//               <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 duration-300">
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;