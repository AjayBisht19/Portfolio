import React from 'react';
import profile  from "../../images/gg1.png";
import logo  from "../../images/logo.png";

export default function Header() {
    return (
        <>
           <div className="container text-center   mt-4 header">
               <div className="bg-primary mx-2 p-5 rounded-6 ">

               <div className="row">
                   <div className="col-md-9 text-start">
                       <div >
                            <img className="mt-4 me-3 logo" data-bs-toggle="tooltip" data-bs-placement="top" title="Ajay Bisht" src={logo} alt="logo"  />
                            <br />
                            <h3 className="m-3 py-2 web text-white">Full Stack Java Developer</h3>
                        </div>
                   </div>
                   <div className="col-md-3">
                        <img className="profile" alt="profile" src={profile}/>
                   </div>
               </div>
                
               </div>
           </div>
        </>
    )
}
