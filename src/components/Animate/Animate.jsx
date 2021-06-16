import React from 'react'
import Typical  from "react-typical";

export default function Animate() {
    return (
        <>
           <div className="text-center m-4 main">
           <Typical 
           loop={Infinity}
           wrapper='h1'
           steps={
               [
                   'Hi, I am  Ajay Bisht.',1000,
                   'I am a Full Stack Web developer.', 1000,

               ]
           }
           />
          </div>
           
        </>
    )
}
