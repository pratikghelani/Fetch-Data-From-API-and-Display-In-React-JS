import React from "react";
import { ReactDOM } from "react";
import UserList from "./Component/UserList";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <UserList/>
      {
        
        // fetch("https://jsonplaceholder.typicode.com/users")
        //   .then((response)=>{
        //    return response.json()
        //   })
        //   .then((data)=>{
        //     console.log(data);
        //   })
      }
    </>
  );
}
export default App;
