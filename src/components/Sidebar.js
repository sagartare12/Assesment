import React from 'react'
import { Fa500Px} from "react-icons/fa";
import { AiOutlineUser,AiOutlineSetting,AiOutlineException } from "react-icons/ai";

const Sidebar = () => {

    const Menus = [
        {
            name : 'Students',
            icon: <AiOutlineUser />
        },
         {
            name : 'Lesson Plan',
            icon: <AiOutlineException />
        },
         {
            name : 'Settings',
            icon: <AiOutlineSetting />
        }
    ]
    return (         
        <div className="sidebar">
           <div className="nav_brand">
               <Fa500Px />
           </div>
           <div className="nav_icons">
                {
                    Menus.map((element) =>(                    
                        <div className="icons_container">
                        <span className="icon">{element.icon}</span>
                        <span className="name">{element.name}</span>
                        </div>                     
                    ))
                }
           </div>
        </div>
        
    )
}

export default Sidebar
