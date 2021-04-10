import React from "react";
import {FaFacebookSquare} from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import { DiHeroku } from "react-icons/di";
import { MdPets } from "react-icons/md";
import './footer.css';

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <b>Demo By Me.  Demo web on pets  <MdPets size="20px" color="#404040"/> <MdPets size="30px" color="#202020"/><MdPets size="40px" color="#101010"/></b><hr/>
                <b>Email Address   :  nhly123123456789@gmail.com</b>
                <div className="row justify-content-center" style={{paddingTop:"15px"}} >
                    <div className="col-sm-2 ">
                        <a href="https://www.facebook.com/" style={{position: "center"}}> <FaFacebookSquare size="40px" color="black"/></a>
                        <p>facebook</p>
                    </div>
                    <div className="col-sm-2">
                        <a href="https://www.facebook.com/"> <GoMarkGithub size="40px" color="black"/></a>
                        <p>GitHub</p>
                    </div>
                    <div className="col-sm-2">
                        <a href="https://www.facebook.com/"> <DiHeroku size="40px" color="black"/></a>
                        <p>Heroku</p>
                    </div>
                    <div className="col-sm-2">
                        <a href="https://www.facebook.com/"> <DiHeroku size="40px" color="black"/></a>
                        <p>Heroku</p>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default Footer;