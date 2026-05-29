// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import project1 from "../images/project1.jpeg";
// const Projects = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="card-header">
//           <h1 className="text-slate-900 flex justify-center font-bold text-5xl">
//             My top projects
//           </h1>
//           <p className="font-bold space-x-2 flex justify-center mt-9 mx-auto">
//             Here are some of the projects I have built using modern web
//             technologies. These projects reflect my practical experience in
//             frontend and backend development, problem-solving skills, and my
//             ability to build real-world, responsive, and user-friendly
//             applications.
//           </p>
//         </div>
//         <div className=" flex-row gap-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           <Card
//             sx={{
//               maxWidth: 355,
//               bgcolor: "#0f172a",
//               borderRadius: 3,
//               mt: 5,
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-6px)",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
//               },
//             }}
//           >
//             <CardMedia
//               component="img"
//               image={project1}
//               alt="Frontend Project"
//               sx={{
//                 height: 180,
//                 objectFit: "contain",
//                 backgroundColor: "#020617",
//                 borderTopLeftRadius: 12,
//                 borderTopRightRadius: 12,
//                 p: 1,
//               }}
//             />

//             <CardContent>
//               <Typography variant="overline" color="cyan">
//                 Project 01
//               </Typography>

//               <Typography gutterBottom variant="h5" color="white">
//                 Frontend
//               </Typography>

//               <Typography variant="body2" sx={{ color: "#94a3b8" }}>
//                 Modern responsive frontend project built using React and
//                 Tailwind CSS.
//               </Typography>
//             </CardContent>

//             <CardActions sx={{ px: 2, pb: 2 }}>
//               <Button
//                 size="small"
//                 variant="outlined"
//                 component="a"
//                 href="https://shrawansinh.github.io/ShravHub/"
//                 target="_blank"
//               >
//                 View
//               </Button>

//               <Button
//                 size="small"
//                 variant="contained"
//                 component="a"
//                 href="https://github.com/Shrawansinh/ShravHub"
//                 target="_blank"
//               >
//                 Source Code
//               </Button>
//             </CardActions>
//           </Card>
//           <Card
//             sx={{
//               maxWidth: 355,
//               bgcolor: "#0f172a",
//               borderRadius: 3,
//               mt: 5,
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-6px)",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
//               },
//             }}
//           >
//             <CardMedia
//               component="img"
//               image={project1}
//               alt="Frontend Project"
//               sx={{
//                 height: 180,
//                 objectFit: "contain",
//                 backgroundColor: "#020617",
//                 borderTopLeftRadius: 12,
//                 borderTopRightRadius: 12,
//                 p: 1,
//               }}
//             />

//             <CardContent>
//               <Typography variant="overline" color="cyan">
//                 Project 01
//               </Typography>

//               <Typography gutterBottom variant="h5" color="white">
//                 Frontend
//               </Typography>

//               <Typography variant="body2" sx={{ color: "#94a3b8" }}>
//                 Modern responsive frontend project built using React and
//                 Tailwind CSS.
//               </Typography>
//             </CardContent>

//             <CardActions sx={{ px: 2, pb: 2 }}>
//               <Button
//                 size="small"
//                 variant="outlined"
//                 component="a"
//                 href="https://shrawansinh.github.io/ShravHub/"
//                 target="_blank"
//               >
//                 View
//               </Button>

//               <Button
//                 size="small"
//                 variant="contained"
//                 component="a"
//                 href="https://github.com/Shrawansinh/ShravHub"
//                 target="_blank"
//               >
//                 Source Code
//               </Button>
//             </CardActions>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import project1 from "../images/project1.jpeg";

const Projects = () => {
  return (
    <>
      <div className="container bg-[#020617]" id="projects">
        <div className="card-header">
          <h1 className="text-[#38BDF8] flex justify-center font-bold text-5xl">
            My top projects
          </h1>
          <p className="font-bold flex justify-center mt-9 mx-auto text-[#E5E7EB]">
            Here are some of the projects I have built using modern web
            technologies. These projects reflect my practical experience in
            frontend and backend development, problem-solving skills, and my
            ability to build real-world, responsive, and user-friendly
            applications.
          </p>
        </div>

        <div className="flex-row gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <Card
            sx={{
              maxWidth: 355,
              bgcolor: "#0F172A",
              borderRadius: 5,
              marginBottom:5,
              mt: 5,
              border: "1px solid #1E293B",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={project1}
              alt="Frontend Project"
              sx={{
                height: 180,
                objectFit: "contain",
                backgroundColor: "#020617",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                p: 1,
              }}
            />

            <CardContent>
              <Typography variant="overline" sx={{ color: "#38BDF8" }}>
                Project 01
              </Typography>

              <Typography gutterBottom variant="h5" sx={{ color: "#E5E7EB" }}>
                Frontend
              </Typography>

              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Modern responsive frontend project built using React and
                Tailwind CSS.
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="outlined"
                component="a"
                href="https://shrawansinh.github.io/ShravHub/"
                target="_blank"
                sx={{
                  borderColor: "#38BDF8",
                  color: "#38BDF8",
                  "&:hover": { borderColor: "#7DD3FC", color: "#7DD3FC" },
                }}
              >
                View
              </Button>

              <Button
                size="small"
                variant="contained"
                component="a"
                href="https://github.com/Shrawansinh/ShravHub"
                target="_blank"
                sx={{
                  bgcolor: "#38BDF8",
                  color: "#020617",
                  "&:hover": { bgcolor: "#7DD3FC" },
                }}
              >
                Source Code
              </Button>
            </CardActions>
          </Card>

          {/* Card 2 (same theme) */}
          <Card
            sx={{
              maxWidth: 355,
              bgcolor: "#0F172A",
              borderRadius: 3,
              mt: 5,
              border: "1px solid #1E293B",
              marginBottom:5,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={project1}
              alt="Frontend Project"
              sx={{
                height: 180,
                objectFit: "contain",
                backgroundColor: "#020617",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                p: 1,
              }}
            />

            <CardContent>
              <Typography variant="overline" sx={{ color: "#38BDF8" }}>
                Project 01
              </Typography>

              <Typography gutterBottom variant="h5" sx={{ color: "#E5E7EB" }}>
                Frontend
              </Typography>

              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Modern responsive frontend project built using React and
                Tailwind CSS.
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="outlined"
                component="a"
                href="https://shrawansinh.github.io/ShravHub/"
                target="_blank"
                sx={{
                  borderColor: "#38BDF8",
                  color: "#38BDF8",
                  "&:hover": { borderColor: "#7DD3FC", color: "#7DD3FC" },
                }}
              >
                View
              </Button>

              <Button
                size="small"
                variant="contained"
                component="a"
                href="https://github.com/Shrawansinh/ShravHub"
                target="_blank"
                sx={{
                  bgcolor: "#38BDF8",
                  color: "#020617",
                  "&:hover": { bgcolor: "#7DD3FC" },
                }}
              >
                Source Code
              </Button>
            </CardActions>
          </Card>

        </div>
      </div>
    </>
  );
};

export default Projects;
