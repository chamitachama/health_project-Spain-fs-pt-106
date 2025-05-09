import ButtonBase from "./ButtonBase"
import {
    Search,
  } from "lucide-react";
  

function HeaderButtons (){
    return (
        <>
            <div className="col d-flex gap-3 align-items-center">
            <ButtonBase icon={Search} onClick={() => { 
                alert ("HOLA"); }} />
                <div className="p-1 d-flex gap-5 border-start border-secondary" >
                    <div  className="ms-3">
                        <a href="#">Dashboard</a>               

                    </div>
                    <a href="#">Analitics</a>               
                    <a href="#">Reports</a>               
                </div>
             </div>
        
        </>
    )
};

export default HeaderButtons
