import React from 'react';
import PropTypes from 'prop-types'; 

function Profil(props) {
    const handleName = (name)=> {

    alert('the name of the profile user is ,' +name);
  }
  
    return (
        <div>
            <h1 style={{cursor:'pointer'}}onClick={() => handleName(props.fullName)}>{props.fullName}</h1>
            {props.children}
            <p>{props.bio}</p>
           <h3 style={{color: 'red'}}>{props.profession}</h3> 
           
        
        </div>
      
    
      );
  }
  Profil.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
  };
 
  export default Profil;