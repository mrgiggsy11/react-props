import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBehance,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import PropTypes from "prop-types";


export const profileDetails ={
    fullName: "Ahmed Chaabane", 
    bio: "I am a graphic designer who's heart beats for the creative aesthetic. Feel free to contact me.", 
    profession: "Graphic Designer",
}


const Profile = ({fullName, bio, profession,children})=>{
    return(
        <div className="card mb-3 rounded-lg" style={{width: "600px"}} >
            <div className="row no-gutters" >
                <div className="col-md-4 d-flex justify-content-center align-items-center" style={{backgroundColor: "lightGrey"}} >
                    {children}
                </div>
                <div className="col-md-8" >
                    <div className="card-body">
                        <h5 className="card-title text-primary h3 font-weight-bold">{fullName.toUpperCase()}</h5>
                        <p className="card-text text-primary h5 mb-4">{profession.toUpperCase()}</p>
                        <p className="card-text"><small className="text-muted">About me: {bio}</small></p>
                        <FontAwesomeIcon style={{color: "#053eff"}} icon={faBehance} size="2x"/>&thinsp;&thinsp;&thinsp;&thinsp;
                        <FontAwesomeIcon style={{color: "#0e76a8"}} icon={faLinkedinIn} size="2x"/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
Profile.prototype={
    fullName: PropTypes.string, 
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.any,
}

Profile.defaultProps = {
    fullName: "Your Name",
    bio:"Describe yourself",
    profession:"Your Domaine"
};
export default Profile
