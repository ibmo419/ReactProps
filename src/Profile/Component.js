import MedAli from './MedAli.jpg';
import React from 'react';
import PropTypes from "prop-types";
// component props function 
function Component(defaultProps){
    return(
        <>
        <h4>Hello my name is {defaultProps.FullName} and i am a {defaultProps.Profession}</h4>
        {defaultProps.children}
        <button onClick={defaultProps.handleName} style={{backgroundColor:"grey",fontSize:20,marginTop:10,border:"solid"}}>Profile User</button>
        </>
    )
}
export default Component
// function returns the full name of the user once button is clicked
function User(){
    alert("My name is Mohamed Ali Ibn Hadj Amor");
  }
//defaultsprops are set here 
Component.defaultProps={FullName:"Mohamed Ali",
Profession:"FullStack Developer",
handleName:User,
children:<img src={MedAli} style={{width:200,height:200,border:"solid blue"}}/>}
//propTypes is set here
Component.propTypes={
    FullName:PropTypes.string,
    Profession:PropTypes.string,
    handleName:PropTypes.func,
    children:PropTypes.any
}