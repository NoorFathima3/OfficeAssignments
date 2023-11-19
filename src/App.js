// import React, { useState } from 'react';
// import './App.css';

// function App() {

// const [textColor, setTextColor] = useState('black');

// const colorChange = () => {
//   const userColor = window.prompt('Click the below button to change the text color');
//   if (userColor !== null)
//   {
//     setTextColor(userColor);
//   }
// };

// const [textColor, setTextColor] = useState('black');

//   const changeColor = () => {
//     const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     setTextColor(randomColor);
//   };

//   return (
//     <div className="App">

//     <h1 style={{color: textColor}}>Change my Color</h1>
//     <button onClick={changeColor}>Click me</button>

//     </div>
//   );
// }

// export default App;
import "./styles/tailwind.css";
// import React, { useEffect, useState } from "react";

function App() {
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((resp) => setUsers(resp))
  //   }, []);
  // console.log("got the data", users);

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      {/* <div className="m-[30px] border-red-700	">Noor Fathima</div> */}
      <div className="w-[30%] p-8 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold mb-5">Login</h1>
        <hr className="mt-4" />
        <div className="mt-8">
          <label for="username" className="block text-base mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border w-full text-base px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Username.."
          ></input>
        </div>

        <div className="mt-6">
          <label for="Password" className="block text-base mb-1">
            Password
          </label>
          <input
            type="password"
            id="Password"
            className="border w-full text-base px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Password.."
          ></input>
        </div>
        <div className="mt-7 flex justify-between items-center">
          <div className="ml-auto">
            <p className="text-indigo-500 font-semibold text-right">Fogot Password?</p>
          </div>
          {/* <div>
            <input type="checkbox"></input>
            <label>Remember me</label>
          </div> */}
        </div>
        <div className="mt-7 mb-8">
          <button type="submit" className="border-2 border-indigo-600 bg-indigo-600 text-white py-1 w-full rounded-md hover:bg-indigo-800  font-semibold">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
