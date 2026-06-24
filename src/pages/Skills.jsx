import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVscodium,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    level: 90,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    level: 85,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 80,
  },
  {
    name: "React.js",
    icon: FaReact,
    level: 80,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 85,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: 75,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    level: 75,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 70,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    level: 80,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: 85,
  },
  {
    name: "VS Code",
    icon: SiVscodium,
    level: 90,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black py-24 px-6 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            My Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            Skills &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Building modern web applications using the MERN stack and
            cutting-edge frontend technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon className="text-4xl text-cyan-400" />
                  </div>

                  <span className="text-cyan-400 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {skill.name}
                </h3>

                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Full Stack Web Developer
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about creating responsive, scalable, and user-friendly
              web applications with modern technologies and clean code
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}