import { Link } from "react-router-dom";
import "./Home.css";

// import React from "react";
// const Home = () => {
//   return (
//     <div className="home">
//       <div class="container">
//         <div className="right-1">
//           <h1>Enter a file</h1>
//           <h1>and discover the truth</h1>
//           <button id="btn-start">
//             <Link to="/UploadFile" id="btn-txt">
//               let's start
//             </Link>
//           </button>
//         </div>
//       </div>
//       <div class="col">
//         <div className="left-1">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/1797/1797500.png"
//             alt="photo1"
//             id="image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
const Home = () => {
  return (
    <div className="home">
      <div class="container">
          <h1>Enter a file</h1>
          <h1>and discover the truth</h1>
          <a href="/UploadFile" id="button">Upload a file</a>

      </div>

    </div>
  );
};

export default Home;
