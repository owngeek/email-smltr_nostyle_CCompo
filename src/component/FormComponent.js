import React, { Component } from 'react'
let currentStyle=null
const demoStyle = {borderColor:"red"}   
export default class FormComponent extends Component {

constructor(){
  super()
  this.state={
    valueEmail:"",
    valueSubject:"",
    valueMessage:"",
    errorEmail:currentStyle,
    errorSubject:currentStyle,
    errorMessage:currentStyle,
  }
 
}

 

render(){
const handleChange1 =(e)=>{this.setState({valueEmail:e.target.value,})}
const handleChange2 =(e)=>{this.setState({valueSubject:e.target.value,})}
const handleChange3 =(e)=>{this.setState({valueMessage:e.target.value})}

const validateEmail = (email) => {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}
  

const handleLoad = (e) =>{
 e.preventDefault()
    
}



const handleBlur1 = (e)=>{

    if(e.target.value.length === 0 || !validateEmail(this.state.valueEmail)){
      currentStyle = demoStyle
    }
else{
 currentStyle = null
   }
this.setState({
  errorEmail:currentStyle,

})

}



const handleBlur2 = (e)=>{
  if(e.target.value.length === 0){
    currentStyle = demoStyle
   }else{
    currentStyle = null
   }
this.setState({
  errorSubject:currentStyle,
})

}




const handleBlur3 = (e)=>{
 if(e.target.value.length === 0){
  currentStyle = demoStyle
 }else{
  currentStyle = null
 }
this.setState({
  errorMessage:currentStyle,
})

}


const resetForm = ()=>{
  this.setState({
    valueEmail:"",
    valueSubject:"",
    valueMessage:"",
    errorEmail:null,
    errorSubject:null,
    errorMessage:null,
  })
}







  return (
    <form autoComplete="off" onSubmit = {handleLoad}>
    <input type ="text" label="email"  placeholder="email" name="email" value={this.state.valueEmail} onChange={handleChange1} style={this.state.errorEmail} onBlur={handleBlur1}/> 
    <input type ="text" label="subject"  placeholder="subject" name="subject" value={this.state.valueSubject} onChange={handleChange2} style={this.state.errorSubject} onBlur={handleBlur2}/> 
    <input type ="text" label="message" placeholder="message" name="message" value={this.state.valueMessage} onChange={handleChange3} style={this.state.errorMessage} onBlur={handleBlur3}/> 
  
    <button type="submit">Submit</button>
    <button type="reset" onClick={resetForm}>Rest</button>
  </form>
  )
}
}
