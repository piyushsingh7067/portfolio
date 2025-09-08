// import pic from '../assets/pic1.jpg';

// export default function Hero() {
//   return (<div>
//     <div className='bg-transparent w-full flex align-center text-white px-2'>

//         <div className="flex flex-col py-10">
//       <img
//         src={pic}
//         alt="Piyush"
//         className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl transition-transform duration-700 hover:scale-110 cursor-pointer"
//       />

//       <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight ">
//         Hi, I'm Piyush Singh
//       </h1>
//       <h1 className="mt-4 text-md sm:text-2xl font-medium tracking-tighter leading-1 text-white/90 ">
//         15, Maidani Rewa | MERN Stack Developer
//       </h1>
//       <br />
//       <p className="leading-tight tracking-tighter mt-4 text-sm sm:text-xl text-justify text-white/70">
//       Computer Science undergraduate with a solid foundation in software development. Proficient in JavaScript, React.js, Express, and MongoDB, with experience in building and deploying responsive, full-stack web applications. Skilled in developing RESTful APIs, managing state with modern libraries, and implementing secure user authentication. Familiar with tools like Git, Postman, and modern UI frameworks such as Tailwind CSS.
//       </p>
//     </div>
//     </div>
//     </div>
//   );
// }




import pic from "../assets/pic1.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-black w-full flex justify-center items-center text-white px-4 py-16">
      <div className="flex flex-col items-center max-w-3xl text-center">
        {/* Profile Image */}
        <motion.img
          src={pic}
          alt="Piyush"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover 
                     shadow-[0_0_25px_rgba(0,255,255,0.5)] 
                     transition-transform duration-700 hover:scale-110 cursor-pointer"
        />

        {/* Name */}
        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Piyush Singh
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-3 text-md sm:text-2xl font-medium tracking-wide text-white/80">
          15, Maidani Rewa | MERN Stack Developer.
        </h2>

        {/* Bio */}
        <p className="mt-6 text-sm sm:text-lg text-white/70 leading-relaxed">
         "Computer Science undergraduate with a strong foundation in software
          development. Skilled in{" "}
          <span className="text-cyan-400">JavaScript</span>,{" "}
          <span className="text-cyan-400">React.js</span>,{" "}
          <span className="text-cyan-400">Express</span>, and{" "}
          <span className="text-cyan-400">MongoDB</span>, with experience in
          building and deploying responsive full-stack web applications.
          Proficient in developing RESTful APIs, managing state with modern
          libraries, and implementing secure user authentication. Familiar with
           Git, Postman, and modern UI frameworks like{" "}
          <span className="text-purple-400">Tailwind CSS</span>."
        </p>
      </div>
    </div>
  );
}
