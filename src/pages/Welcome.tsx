// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Welcome() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/landing"); // Redirect after animation finishes
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <main className="flex flex-col items-center justify-center h-screen bg-[#4B0082] text-white">
//       <span className="loader"></span>
//       <p className="mt-4 text-lg tracking-wide opacity-80">
//         Crafting your experience...
//       </p>
//     </main>
//   );
// }
