import type React from "react";
import { Link } from "react-router-dom";

// Logo.tsx
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <div className="text-xl  md:w-10 md:h-10 h-7 w-7 bg-[#4B0082] rounded-full flex items-center justify-center text-white font-bold md:text-xl">
          N
        </div>
        <span
          className={`${className} md:text-2xl text-xl font-extrabold text-[#4B0082] tracking-tight`}
        >
          Global
        </span>
      </div>
    </Link>
  );
};

export default Logo;

// import type React from "react";
// import { Link } from "react-router-dom";
// import LOGO from "../../../public/images/logo-3.jpeg";

// // Logo.tsx
// interface LogoProps {
//   className?: string;
// }
// const Logo: React.FC<LogoProps> = () => {
//   return (
//     <Link to="/">
//       <img src={LOGO} alt="logo" className="w-[50px] h-[50px] rounded-full" />
//     </Link>
//   );
// };

// export default Logo;
