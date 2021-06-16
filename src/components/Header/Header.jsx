import React from 'react';
import profile  from "../../images/gg1.png";
import logo  from "../../images/logo.png";

export default function Header() {
    return (
        <>
           <div className="container text-center bg-primary p-5 mt-4 rounded-6 header">
               <div className="row">
                   <div className="col-md-9 text-start">
                       <div >
                            <img className="mt-4 me-4 logo" src={logo} alt="logo"  />
                            <br />
                            <h3 className="m-4 web text-white">Full Stack Web Developer</h3>
                        </div>
                   </div>
                   <div className="col-md-3">
                        <img className="profile" alt="profile" src={profile}/>
                   </div>
               </div>
                
           </div>
        </>
    )
}
