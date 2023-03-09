import React from 'react';
import "./css/home.css"
import { useEffect,useState } from "react";

const Home = () => {
    const [name, setName] = useState();
    const callAboutPage = async () => {
      try {
        const response = await fetch("https://userbackend.sonarpratik.repl.co/about", {
          mode: 'no-cors',
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = response;
        const data1 = await response.json();
      
      
       
        setName(data1.name);
        
     
  
        if (data.status !== 200) {
          const error = new Error(response.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
  useEffect(() => {
    callAboutPage();
  });
    
    return (<>
            <div className="h-left"></div>
            <div className="h-right"></div>
        <div className='home'>
            <h4>Welcome</h4>
         

            {name?<h2 className='t-color'>{name}</h2>:   <h1>We are Web Developers</h1>}
        </div>
    </>
    );
}

export default Home;



