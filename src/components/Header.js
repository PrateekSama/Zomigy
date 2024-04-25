import imgi from "./Zom_logo.jpg";
import { useState } from "react";
const Header =()=>{
    
    const  [btnNameReact,setbtnNameReact] = useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                 <img className="logo" src={imgi}>
                 </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button  className="login" onClick={()=>{
                        if(btnNameReact=="Logout"){
                            setbtnNameReact("Login");
                        }
                        else{
                        setbtnNameReact("Logout");
                        }
                    }}
                    >
                        {btnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;