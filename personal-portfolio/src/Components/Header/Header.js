import React from "react";
import "../App/App.css"
import logo from "../../img/Logo.png"
import moon from "../../img/Moon.png"
import { Switch } from "@chakra-ui/switch"


function Header() {
const header = ['Home', 'About','Experience', 'Portfolio']

return(
    <div className="header">
    <img src={logo} alt="Logo"/>    
    <h2>Camilla Santos</h2>
    {/* <Switch label="Dark Mode" size="md" marginLeft="1rem" colorScheme="blackAlpha"/> */}
    <div className="bar">
        <ul>
            {header.map((element)=>{
                return (<li>{element}</li>)
            })}
       
        </ul>
    </div>
    <img src={moon} alt='Moon'/>
    </div>
)
    
}

export default Header