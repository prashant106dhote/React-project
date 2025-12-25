import React from 'react'

const App = () => {

 const user = {
  username:"prashant",
  age:23,
  city:"bhopal"
 }
 localStorage.setItem("user",JSON.stringify(user))
 const usra = JSON.parse(localStorage.getItem("user",))
 console.log(usra);
 
  return (
    <div>
      
    </div>
  )
}

export default App
