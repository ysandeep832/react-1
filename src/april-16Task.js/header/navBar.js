// import { Link } from "react-router-dom"

// const HeaderNav=()=>{
//     return(
//         <>
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <a className="navbar-brand" href="#">
//           WebSiteName
//         </a>
//       </div>
//       <ul className="nav navbar-nav">
//         <li className="active">
//         <Link to={"/"}>HomePage</Link>
//         </li>
//         <li>
//           {/* <a href="#">Page 1</a> */}
//           <Link to={"/AboutScreen"}>About Us</Link>
//         </li>
//         <li>
//           {/* <a href="#">Page 2</a> */}
//           <Link to={"/SignUp"}>SignUp</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
// </>
      
       
//        )
// }
// export default HeaderNav


import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to={"/"}>HomePage</Link>
            </li>
            <li>
              <Link to={"/AboutScreen"}>About Us</Link>
            </li>
            <li>
              <Link to={"/SignUp"}>SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
