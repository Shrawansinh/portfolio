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
//       <div className="container bg-[#020617]" id="projects">
//         <div className="card-header">
//           <h1 className="text-[#38BDF8] flex justify-center font-bold text-5xl">
//             My top projects
//           </h1>
//           <p className="font-bold flex justify-center mt-9 mx-auto text-[#E5E7EB]">
//             Here are some of the projects I have built using modern web
//             technologies. These projects reflect my practical experience in
//             frontend and backend development, problem-solving skills, and my
//             ability to build real-world, responsive, and user-friendly
//             applications.
//           </p>
//         </div>

//         <div className="flex-row gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

//           {/* Card 1 */}
//           <Card
//             sx={{
//               maxWidth: 355,
//               bgcolor: "#0F172A",
//               borderRadius: 5,
//               marginBottom:5,
//               mt: 5,
//               border: "1px solid #1E293B",
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-6px)",
//                 boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
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
//               <Typography variant="overline" sx={{ color: "#38BDF8" }}>
//                 Project 01
//               </Typography>

//               <Typography gutterBottom variant="h5" sx={{ color: "#E5E7EB" }}>
//                 Frontend
//               </Typography>

//               <Typography variant="body2" sx={{ color: "#94A3B8" }}>
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
//                 sx={{
//                   borderColor: "#38BDF8",
//                   color: "#38BDF8",
//                   "&:hover": { borderColor: "#7DD3FC", color: "#7DD3FC" },
//                 }}
//               >
//                 View
//               </Button>

//               <Button
//                 size="small"
//                 variant="contained"
//                 component="a"
//                 href="https://github.com/Shrawansinh/ShravHub"
//                 target="_blank"
//                 sx={{
//                   bgcolor: "#38BDF8",
//                   color: "#020617",
//                   "&:hover": { bgcolor: "#7DD3FC" },
//                 }}
//               >
//                 Source Code
//               </Button>
//             </CardActions>
//           </Card>

//           {/* Card 2 (same theme) */}
//           <Card
//             sx={{
//               maxWidth: 355,
//               bgcolor: "#0F172A",
//               borderRadius: 3,
//               mt: 5,
//               border: "1px solid #1E293B",
//               marginBottom:5,
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-6px)",
//                 boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
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
//               <Typography variant="overline" sx={{ color: "#38BDF8" }}>
//                 Project 01
//               </Typography>

//               <Typography gutterBottom variant="h5" sx={{ color: "#E5E7EB" }}>
//                 Frontend
//               </Typography>

//               <Typography variant="body2" sx={{ color: "#94A3B8" }}>
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
//                 sx={{
//                   borderColor: "#38BDF8",
//                   color: "#38BDF8",
//                   "&:hover": { borderColor: "#7DD3FC", color: "#7DD3FC" },
//                 }}
//               >
//                 View
//               </Button>

//               <Button
//                 size="small"
//                 variant="contained"
//                 component="a"
//                 href="https://github.com/Shrawansinh/ShravHub"
//                 target="_blank"
//                 sx={{
//                   bgcolor: "#38BDF8",
//                   color: "#020617",
//                   "&:hover": { bgcolor: "#7DD3FC" },
//                 }}
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

// export default Projects;
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import project1 from "../images/project1.jpeg";

const cardStyle = {
  maxWidth: 355,
  bgcolor: "#0F172A",
  borderRadius: 5,
  mt: 3,
  border: "1px solid #1E293B",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
  },
};

const mediaStyle = {
  height: 180,
  objectFit: "contain",
  backgroundColor: "#020617",
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  p: 1,
};

const Projects = () => {
  return (
    <div className="container bg-[#020617] py-10" id="projects">
      {/* Header */}
      <div className="card-header mb-12">
        <h1 className="text-[#38BDF8] flex justify-center font-bold text-5xl">
          My Top Projects
        </h1>

        <p className="font-bold flex justify-center mt-9 mx-auto text-[#E5E7EB] text-center">
          Here are some of the projects I have built using modern web
          technologies. These projects reflect my practical experience in
          frontend and backend development, problem-solving skills, and my
          ability to build real-world, responsive, and user-friendly
          applications.
        </p>
      </div>

      {/* ================= FRONTEND ================= */}
      <section className="mb-20">
        <h2 className="text-[#38BDF8] text-4xl font-bold mb-8 border-l-4 border-[#38BDF8] pl-4">
          Frontend Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              image={project1}
              alt="Frontend Project"
              sx={mediaStyle}
            />

            <CardContent>
              <Typography variant="overline" sx={{ color: "#38BDF8" }}>
                Project 01
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#E5E7EB" }}
              >
                Portfolio Website
              </Typography>

              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Responsive portfolio website built with React, Tailwind CSS and
                Material UI.
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#38BDF8",
                  color: "#38BDF8",
                }}
              >
                View
              </Button>

              <Button
                size="small"
                variant="contained"
                sx={{
                  bgcolor: "#38BDF8",
                  color: "#020617",
                }}
              >
                Source Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </section>

      {/* ================= BACKEND ================= */}
      <section className="mb-20">
        <h2 className="text-[#38BDF8] text-4xl font-bold mb-8 border-l-4 border-[#38BDF8] pl-4">
          Backend Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              image={project1}
              alt="Backend Project"
              sx={mediaStyle}
            />

            <CardContent>
              <Typography variant="overline" sx={{ color: "#38BDF8" }}>
                Project 02
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#E5E7EB" }}
              >
                REST API System
              </Typography>

              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Backend application with Node.js, Express.js, MongoDB and JWT
                Authentication.
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#38BDF8",
                  color: "#38BDF8",
                }}
              >
                View
              </Button>

              <Button
                size="small"
                variant="contained"
                sx={{
                  bgcolor: "#38BDF8",
                  color: "#020617",
                }}
              >
                Source Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </section>

      {/* ================= FULL STACK ================= */}
      <section>
        <h2 className="text-[#38BDF8] text-4xl font-bold mb-8 border-l-4 border-[#38BDF8] pl-4">
          Full Stack Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              image={project1}
              alt="Full Stack Project"
              sx={mediaStyle}
            />

            <CardContent>
              <Typography variant="overline" sx={{ color: "#38BDF8" }}>
                Project 03
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#E5E7EB" }}
              >
                Tender Management System
              </Typography>

              <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                Complete MERN stack application with authentication, dashboard,
                bidding system and MongoDB integration.
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#38BDF8",
                  color: "#38BDF8",
                }}
              >
                View
              </Button>

              <Button
                size="small"
                variant="contained"
                sx={{
                  bgcolor: "#38BDF8",
                  color: "#020617",
                }}
              >
                Source Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Projects;