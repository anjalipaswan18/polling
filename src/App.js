import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";

const App = () => {
  return (
    <HashRouter>
      <Home></Home>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="" element={<Navigate to="/Login" />} />
        <Route path="" element={<Navigate to="/Register" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

// import axios from "axios";
// import React from "react";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./component/Home";
// import Login from "./component/Login";
// import Register from "./component/Register";

// const baseURL = "https://pollapi.innotechteam.in/user/register";
// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <>
//       <HashRouter>
//         <Home></Home>
//         <Routes>
//           {/* <Route path="/home" element={<Home />} /> */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="" element={<Navigate to="/Login" />} />
//           <Route path="" element={<Navigate to="/Register" />} />
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }  
