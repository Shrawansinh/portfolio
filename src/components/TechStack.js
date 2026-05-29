
// import { TechstackList } from "../utiles/TechStackList"
// const TechStack = () => {
//   return (
//     <>
//       <div className="conatiner">
//         <div className="card-header">
//         <h1 className='text-blue-500 flex justify-center font-bold text-5xl'>Tech Stack & Skills</h1>
//          <p className="text-slate-300 mt-5 justify-center text-wrap ml-5">
// I have knowledge of core web technologies and programming concepts, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Java, Data Structures & Algorithms, REST APIs, JWT Authentication, and basic software engineering principles.
// </p>

//         </div>
//         <div className="card-conatin">
//             <div className="grid grid-cols-3 gap-4 mt-5 text-center ">
//               {TechstackList.map((user)=>{
//                   return (<div key={user._id} className=" text-white transition-all duration-300 ease-in-out cursor-pointer rounded-lg 
// hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 
// hover:scale-95 hover:text-blue-400 p-4">
//   <div className="name flex justify-center">
//  {user.name}
//   </div>
//   <div className="icon">
//     {user.icon}
//   </div>
//  </div>
// )
//               })}

// </div>
// </div>
//         </div>
//     </>
//   )
// }

// export default TechStack
import { TechstackList } from "../utiles/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="conatiner bg-[#020617] min-h-screen" id="tech">
        <div className="card-header">
          
          <h1 className="text-[#38BDF8] flex justify-center font-bold text-5xl">
            Tech Stack & Skills
          </h1>

          <p className="text-[#E5E7EB] mt-5 justify-center text-wrap ml-5">
            I have knowledge of core web technologies and programming concepts,
            including HTML, CSS, JavaScript, React.js, Node.js, Express.js,
            MongoDB, Java, Data Structures & Algorithms, REST APIs, JWT
            Authentication, and basic software engineering principles.
          </p>

        </div>

        <div className="card-conatin mb-12 ml-2">
          <div className="grid grid-cols-3 gap-3 mt-3 text-center">
            {TechstackList.map((user) => {
              return (
                <div
                  key={user._id}
                  className="text-[#E5E7EB] bg-[#0F172A] border border-[#1E293B]
                  transition-all duration-300 ease-in-out cursor-pointer rounded-lg
                  hover:bg-[#1E293B] hover:scale-95 hover:text-[#38BDF8] p-4"
                >
                  <div className="name flex justify-center font-medium">
                    {user.name}
                  </div>
                  <div className="icon text-[#38BDF8]">
                    {user.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
};

export default TechStack;

